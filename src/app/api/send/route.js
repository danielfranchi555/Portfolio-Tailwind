import { Resend } from 'resend';
import {EmailTemplate} from '@/components/email-template';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json()
    console.log("body",body)
    const {nombre,email,mensaje} = body
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['danielfranchi3@gmail.com'], 
      subject: 'Hello world',
      react: EmailTemplate({ firstName: nombre ,gmail:email, messaje:mensaje})
    });
    if (data.status === 'success'){
      return NextResponse.json({message: 'enviado correctamente'})
    }
    return NextResponse.json(data)
  } catch (error) {
    console.log("error",error)
  }
}