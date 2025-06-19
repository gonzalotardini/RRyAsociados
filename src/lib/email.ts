import { NextResponse } from 'next/server';
import type { ContactFormData } from '@/types/contact';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data: ContactFormData = await req.json();

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.tuservidor.com', // ej: smtp.gmail.com
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    await transporter.sendMail({
      from: `"Formulario Web" <${process.env.SMTP_USER}>`,
      to: 'asesoria@rr.mx',
      subject: 'Nuevo contacto desde la web',
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Teléfono:</strong> ${data.number}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Mensaje:</strong><br/>${data.message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al enviar email:', error);
    return NextResponse.json({ error: 'Error al enviar email' }, { status: 500 });
  }
}
