"use client";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterFormData } from "@/schemas/registerSchema";
import { useRouter } from "next/navigation";
import axiosInstance from "@/lib/axiosInstance";

import BaseInput from "@/components/base-input/BaseInput";
import Button from "@/components/base-button/Button";
import PasswordInput from "@/components/password-input/PasswordInput";
import PhoneInput from "@/components/phone-input/PhoneInput";

const RegisterForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    const rawPhone = data.phone.replace(/\D/g, ""); // Removes everything except digits
    const formattedPhone = `+998${rawPhone}`;

    const updatedData = {
      ...data,
      phone: formattedPhone,
    };
    try {
      const res = await axiosInstance.post("/users/records", updatedData);
      console.log("Success:", res.data);

      router.push("/registered");
    } catch (error: unknown) {
      const apiError = error as { response?: { data?: { message?: string } } };
      console.error(
        "Error:",
        apiError?.response?.data?.message || "Registration failed"
      );
    }
  };

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <BaseInput
        label="Full Name"
        placeholder="Enter full name"
        type="text"
        {...register("name")}
        error={errors.name?.message}
      />

      <Controller
        name="phone"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <PhoneInput {...field} error={errors.phone?.message} />
        )}
      />

      <BaseInput
        label="Email"
        placeholder="Enter your email"
        type="email"
        {...register("email")}
        error={errors.email?.message}
      />

      <PasswordInput
        {...register("password")}
        error={errors.password?.message}
      />
      <PasswordInput
        {...register("passwordConfirm")}
        error={errors.passwordConfirm?.message}
      />

      <Button type="submit" className="mt-6" disabled={isSubmitting}>
        {isSubmitting ? "Signing up..." : "Sign up"}
      </Button>
    </form>
  );
};

export default RegisterForm;
