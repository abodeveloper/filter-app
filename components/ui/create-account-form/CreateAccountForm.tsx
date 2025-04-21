"use client";
import React, { useEffect, useState } from "react";
import { Typography } from "../../typography/Typography";
import BaseInput from "../../base-input/BaseInput";
import Button from "../../base-button/Button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import DateInput from "@/components/date-input/DateInput";
import axiosInstance from "@/lib/axiosInstance";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAccountSchema } from "@/schemas/createAccountSchema";
import CustomSelect from "@/components/custom-select/CustomSelect";
import { z } from "zod";

export const getLanguages = async () => {
  try {
    const response = await axiosInstance.get(`/languages/records`);
    return response.data;
  } catch (error) {
    console.error("Error fetching languages:", error);
    throw error;
  }
};

export const getCountries = async () => {
  try {
    const response = await axiosInstance.get(`/countries/records`);
    return response.data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};

export const getRegions = async () => {
  try {
    const response = await axiosInstance.get(`/regions/records`);
    return response.data;
  } catch (error) {
    console.error("Error fetching regions:", error);
    throw error;
  }
};

const CreateAccountForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createAccountSchema),
  });

  const [languages, setLanguages] = useState<
    { label: string; value: string }[]
  >([]);
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    getLanguages()
      .then((res) =>
        setLanguages(
          res.items.map((item: { id: string; name: string }) => ({
            label: item.name,
            value: item.id,
          }))
        )
      )
      .catch((error) => console.error(error));

    getCountries()
      .then((res) =>
        setCountries(
          res.items.map((item: { id: string; name: string }) => ({
            label: item.name,
            value: item.id,
          }))
        )
      )
      .catch((error) => console.error(error));

    getRegions()
      .then((res) =>
        setRegions(
          res.items.map((item: { id: string; name: string }) => ({
            label: item.name,
            value: item.id,
          }))
        )
      )
      .catch((error) => console.error(error));
  }, []);

  const onSubmit = (data: z.infer<typeof createAccountSchema>) => {
    console.log("submitted", data);
    router.push("/dashboard/personal-information");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-10">
      <Typography
        variant="body"
        size="md"
        weight="medium"
        className="text-textPrimary"
      >
        Personal informations <span className="text-red-500">*</span>
      </Typography>
      <Typography
        variant="body"
        size="sm"
        className="text-checkedRadio opacity-70"
      >
        Fill in your personal information.
      </Typography>
      <div className="mt-6">
        <div className="grid sm:grid-cols-2 gap-4 border-b border-b-borderColor pb-6">
          <BaseInput
            {...register("name")}
            label="Full name"
            placeholder="Enter your name..."
            error={errors?.name?.message}
          />
          <Controller
            name="birthDate"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <DateInput
                value={field.value}
                onChange={field.onChange}
                placeholder="dd/mm/yyyy"
                label="Date of birth"
                error={errors?.birthDate?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="country"
            render={({ field: { onChange, value } }) => (
              <CustomSelect
                label="Country"
                options={countries}
                onChange={onChange}
                value={value}
                error={errors?.country?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="countryOfCitizenship"
            render={({ field: { onChange, value } }) => (
              <CustomSelect
                label="Country of citizenship"
                options={countries}
                onChange={onChange}
                value={value}
                error={errors?.countryOfCitizenship?.message}
              />
            )}
          />
        </div>
      </div>
      <div className="mt-6">
        <Typography
          variant="body"
          size="md"
          weight="medium"
          className="text-textPrimary"
        >
          Address <span className="text-red-500">*</span>
        </Typography>
        <Typography
          variant="body"
          size="sm"
          className="text-checkedRadio opacity-70"
        >
          Required by law to comply with the CAN-SPAM act and international
          anti-spam laws
        </Typography>
        <BaseInput
          {...register("address")}
          // label="Address"
          placeholder="Enter address..."
          className="w-1/2"
          error={errors.address?.message}
        />
        <div className="mt-6">
          <div className="border-b border-b-borderColor pb-6">
            {/* <BaseInput label="City" placeholder="Enter your city..." /> */}

            <div className="flex gap-6 mt-6">
              <div className="w-full">
                <Controller
                  control={control}
                  name="nativeLanguage"
                  render={({ field: { onChange, value } }) => (
                    <CustomSelect
                      label="Native language"
                      options={languages}
                      onChange={onChange}
                      value={value}
                      error={errors?.nativeLanguage?.message}
                    />
                  )}
                />
              </div>
              <div className="w-full">
                <Controller
                  control={control}
                  name="region"
                  render={({ field: { onChange, value } }) => (
                    <CustomSelect
                      label="Region"
                      options={regions}
                      onChange={onChange}
                      value={value}
                      error={errors?.region?.message}
                    />
                  )}
                />
              </div>
              {/* <BaseInput label="Street" placeholder="Enter street..." /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <button className="bg-inputBg py-1.5 px-3 rounded-md hover:bg-inputBg/10">
          <Typography
            variant="body"
            size="sm"
            weight="medium"
            className="text-primary"
          >
            Cancel
          </Typography>
        </button>
        <Button
          className="flex gap-2 items-center px-3 !py-1.5 !w-fit"
          type="submit"
          // onClick={() => {
          //   router.push("/dashboard/personal-information");
          // }}
        >
          <Typography
            variant="body"
            size="sm"
            weight="medium"
            className="text-white"
          >
            Save changes & next
          </Typography>
          <ArrowRight width={18} height={18} />
        </Button>
      </div>
    </form>
  );
};

export default CreateAccountForm;
