import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().nonempty("Campo obrigatório"),
  email: z.string().nonempty("Campo obrigatório").email("Email inválido"),
  phone: z
    .string()
    .nonempty("Campo obrigatório")
    .min(15, "O telefone deve conter 11 dígitos caracteres")
    .max(15, "O telefone deve conter 11 dígitos caracteres")
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Telefone inválido"),
  message: z
    .string()
    .nonempty("Campo obrigatório")
    .min(10, "Mínimo 10 caracteres"),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
