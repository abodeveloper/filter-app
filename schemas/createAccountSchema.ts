import { z } from "zod";

export const createAccountSchema = z.object({
  name: z.string().min(1, "Name is required"),
  avatar: z.string().optional(),
  birthDate: z.string(),
  countryOfCitizenship: z.object({
    label: z.string(),
    value: z.string(),
  }),
  nativeLanguage: z.object({
    label: z.string(),
    value: z.string(),
  }),
  country: z.object({
    label: z.string(),
    value: z.string(),
  }),
  region: z.object({
    label: z.string(),
    value: z.string(),
  }),
  address: z.string().min(1, "Address is required"),
});

// export const userSchema = z.object({
//   collectionId: z.string(),
//   collectionName: z.string(),
//   id: z.string(),
//   email: z.string().email("Invalid email"),
//   emailVisibility: z.boolean(),
//   verified: z.boolean(),
//   name: z.string().min(1, "Name is required"),
//   avatar: z.string().optional(),
//   phone: z.string().min(3, "Phone is required"),
//   birthDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
//     message: "Invalid birth date",
//   }),
//   countryOfCitizenship: z.string(), // Relation record ID
//   nativeLanguage: z.string(), // Relation record ID
//   country: z.string(), // Relation record ID
//   region: z.string(), // Relation record ID
//   address: z.string().min(1, "Address is required"),
//   passport: z.string().min(1, "Passport is required"),
//   passportExpiryDate: z.string(),
//   passportFile: z.string().optional(),
//   maritialStatus: z.enum(["single", "married", "divorced", "widowed"]),
//   gender: z.enum(["male", "female", "other"]),
//   graduations: z.array(z.string()), // Array of relation record IDs
//   type: z.enum(["visa", "resident", "citizen"]),
// });
