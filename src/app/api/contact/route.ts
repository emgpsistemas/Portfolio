import * as SendGridMail from "@sendgrid/mail";
import { NextResponse } from "next/server";
SendGridMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function POST(request: Request) {
  const { name, email, phone, message }: Partial<ContactForm> =
    await request.json();

  if (!name || !email || !phone || !message)
    return NextResponse.json({ message: "Missing required data" });
  try {
    const text = `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`;

    const messageToSend = {
      to: process.env.TO_EMAIL || "",
      from: process.env.FROM_EMAIL || "",
      subject: "Formulário de Contato do Portfólio",
      text: text,
    };

    await SendGridMail.send(messageToSend);

    return NextResponse.json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
