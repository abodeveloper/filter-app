"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import axiosInstance from "@/lib/axiosInstance";
import BaseInput from "@/components/base-input/BaseInput";
import Button from "@/components/base-button/Button";
import PasswordInput from "@/components/password-input/PasswordInput";

type LoginFormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    const updatedData = {
      identity: data.email,
      password: data.password,
    };
    try {
      const response = await axiosInstance.post(
        "/users/auth-with-password",
        updatedData
      );


      Cookies.set("authToken", response.data.token, {
        expires: 7,
        secure: true,
      });

      router.push("/dashboard/create-account");
    } catch (error: unknown) {
      const apiError = error as { response?: { data?: { message?: string } } };
      console.error(
        "Error:",
        apiError?.response?.data?.message || "Registration failed"
      );
      setError(
        apiError?.response?.data?.message || "Invalid email or password"
      );
    }
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <BaseInput
        label="Email"
        placeholder="Enter your email address..."
        type="email"
        {...register("email", { required: "Email is required" })}
        error={errors.email?.message}
      />
      <PasswordInput
        {...register("password", { required: "Password is required" })}
        error={errors.password?.message}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button className="mt-6" disabled={isSubmitting}>
        {isSubmitting ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
};

export default LoginForm;
