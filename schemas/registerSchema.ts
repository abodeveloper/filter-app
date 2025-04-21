import { z, ZodIssueCode } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    phone: z.string().min(9, "Phone number must be at least 9 digits"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 6 characters"),
    passwordConfirm: z
      .string()
      .min(8, "Password must be at least 6 characters"),
  })
  .superRefine(({ password, passwordConfirm }, ctx) => {
    if (password !== passwordConfirm) {
      ctx.addIssue({
        code: ZodIssueCode.custom,
        path: ["passwordConfirm"],
        message: "Passwords do not match",
      });
    }
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
