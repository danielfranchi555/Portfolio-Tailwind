import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import EmailTemplate from "@/components/emailTemplate/EmailTemplate";

export async function POST(request) {

  // const date = new date();

  // const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

  const { message, email, name } = await request.json();

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const emailHtml = render(
      <EmailTemplate name={name} />
    );

    const info = await transporter.sendMail({
      from: `Daniel Franchi <danielfranchi3@gmail.com>`, // sender address,
      to: email, // list of receivers
      subject: `Hola ${name}`, // Subject line
      html: emailHtml,
    });

    const infoParaTi = await transporter.sendMail({
      from: `Daniel Franchi <danielfranchi3@gmail.com>`,
      to: "danielfranchi3@gmail.com",
      subject: `Has recibido un mensaje de ${email}`,
      html: `Mensaje:${message}`,
    });

    return NextResponse.json({ message: "correo enviado" });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
