"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as Form from "@radix-ui/react-form";
import * as Toast from "@radix-ui/react-toast";
import axios from "axios";
import { X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Typography } from "../typography/Typography";
import { Button } from "../ui/button";

const BOT_TOKEN = "7696035742:AAF_MFrMvHLe1c5ByabCQ56XYPieygE7qxQ"; // Bot tokeningizni kiriting
const CHAT_ID = "-1002467607734"; // Foydalanuvchi yoki guruh chat ID'si

const ApplyCard = ({ data }: Record<string, any>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      phone: "+998", // Har doim boshlang‘ich qiymat sifatida +998 bo‘ladi
    },
  });

  const onSubmit = async (formData: { name: string; phone: string }) => {
    setLoading(true);
    const URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    try {
      const message = `
        📌 **Yangi buyurtma!**\n
        🔹 **Mahsulot:** ${data?.name}\n
        👤 **Ism:** ${formData.name}\n
        📞 **Telefon:** ${formData.phone}
      `;

      await axios.post(URL, {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      });

      setToastMessage("✅ Buyurtma muvaffaqiyatli yuborildi !");
      setToastOpen(true);
      reset(); // Formani tozalaydi
      setIsOpen(false);
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      setToastMessage("❌ Xatolik yuz berdi. Qayta urinib ko'ring.");
      setToastOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-[#F7F7F7] p-4 min-w-[319px] rounded-lg">
        <Typography variant="body" size="md" weight="semi-bold">
          Asosiy ma'lumotlar
        </Typography>
        <div className="bg-white mt-3 p-4 rounded-lg">
          <div dangerouslySetInnerHTML={{ __html: data?.info || "" }} />
          <div className="flex items-center gap-1 mt-3">
            <Typography
              size="md"
              weight="bold"
              variant="body"
              className="text-textPrimary"
            >
              Price:
            </Typography>
            <Typography variant="body" size="md" className="text-dark">
              {data?.price}
            </Typography>
          </div>
        </div>
        <Button
          className="flex gap-2 items-center px-3 !py-1.5 w-full rounded-2xl mt-3"
          onClick={() => setIsOpen(true)}
        >
          <Typography
            variant="body"
            size="sm"
            weight="medium"
            className="text-white"
          >
            Sotib olish
          </Typography>
        </Button>

        {/* Radix UI Modal */}
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <Dialog.Title className="text-lg font-semibold">
                  Buyurtma berish
                </Dialog.Title>
                <Dialog.Close className="text-gray-500 hover:text-gray-700">
                  <X className="w-5 h-5" />
                </Dialog.Close>
              </div>

              {/* Radix Form */}
              <Form.Root
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <Form.Field name="name">
                  <div className="flex flex-col gap-1">
                    <Form.Label className="text-sm font-medium">Ism</Form.Label>
                    <Form.Control asChild>
                      <input
                        type="text"
                        placeholder="Ismingiz"
                        {...register("name", { required: true })}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </Form.Control>
                  </div>
                </Form.Field>

                <Form.Field name="phone">
                  <div className="flex flex-col gap-1">
                    <Form.Label className="text-sm font-medium">
                      Telefon raqam
                    </Form.Label>
                    <Form.Control asChild>
                      <input
                        type="tel"
                        placeholder="+998 90 123 45 67"
                        {...register("phone", { required: true })}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </Form.Control>
                  </div>
                </Form.Field>

                <Form.Submit asChild>
                  <Button
                    type="submit"
                    className="w-full rounded-2xl"
                    disabled={loading}
                  >
                    {loading ? "Yuborilmoqda..." : "Buyurtma berish"}
                  </Button>
                </Form.Submit>
              </Form.Root>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
      {/* Radix Toast Notification - TEPA QISMDA */}
      <Toast.Provider>
        <Toast.Root
          open={toastOpen}
          onOpenChange={setToastOpen}
          className="fixed top-5 right-5 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300"
        >
          {toastMessage}
        </Toast.Root>
        <Toast.Viewport className="fixed top-5 right-5" />
      </Toast.Provider>
    </>
  );
};

export default ApplyCard;
