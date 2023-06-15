import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../Button";
import { Input } from "../Input";
import { Textarea } from "../Textarea";

const formSchema = z.object({
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

type FormSchema = z.infer<typeof formSchema>;

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchema>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: FormSchema) {
    console.log("DADOS =>", data);
    reset();
  }

  return (
    <form className="pt-16 lg:p-16" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="mb-10 text-center text-2xl font-bold text-black md:text-4xl lg:mb-7 lg:text-start">
        Envie uma mensagem
      </h1>
      <div className="space-y-5">
        <div className="flex flex-col">
          <Input
            id="name"
            label="NOME"
            error={errors.name}
            register={register("name")}
            placeholder="Eduardo"
            autoFocus
          />
        </div>
        <div className="flex flex-col">
          <Input
            id="email"
            label="EMAIL"
            error={errors.email}
            placeholder="eduardo@email.com"
            register={register("email")}
          />
        </div>
        <div className="flex flex-col">
          <Input
            id="phone"
            label="TELEFONE"
            error={errors.phone}
            placeholder="(41) 99999-9999"
            register={register("phone")}
            isMasked
            mask="(99) 99999-9999"
          />
        </div>
        <div className="flex flex-col">
          <Textarea
            id="message"
            label="MENSAGEM"
            placeholder="Olá, gostaria de saber mais sobre..."
            register={register("message")}
            error={errors.message}
          />
        </div>
      </div>
      <div className="mt-10 px-16">
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
}

export default ContactForm;
