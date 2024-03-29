import * as SendGridMail from "@sendgrid/mail";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
SendGridMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function POST(request: Request, response: NextApiResponse) {
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

    const sgResponse = await SendGridMail.send(messageToSend);

    if (sgResponse[0].statusCode !== 202) {
      response.status(500).json({ error: sgResponse });
    }

    return NextResponse.json({ message: sgResponse });
  } catch (error) {
    return response.status(500).json({ error: "Erro ao enviar mensagem!" });
  }
}
