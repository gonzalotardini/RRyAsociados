// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import type { ContactFormData } from "@/types/contact";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body: ContactFormData = await req.json();

    if (!body.name || !body.email || !body.number || !body.message) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    // === 1. Enviar email ===
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
    });

    await transporter.sendMail({
      from: `"Web Contacto" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO!,
      subject: `Nuevo mensaje de ${body.name}`,
      html: `
        <p><strong>Nombre:</strong> ${body.name}</p>
        <p><strong>Teléfono:</strong> ${body.number || "-"}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Mensaje:</strong><br>${body.message}</p>
      `,
    });

    // === 2. Crear contacto en HubSpot ===
    const contactRes = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
      },
      body: JSON.stringify({
        properties: {
          firstname: body.name,
          email: body.email,
          phone: body.number,
        },
      }),
    });

    const contactData = await contactRes.json();
    const contactId = contactData.id;

    console.log("CONTACTID:  " + contactId);

    if (!contactId) {
      console.warn("❌ HubSpot no devolvió ID de contacto:", contactData);
    }

    // === 3. Crear nota ===
    const noteRes = await fetch("https://api.hubapi.com/crm/v3/objects/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
      },
      body: JSON.stringify({
        properties: {
          hs_note_body: `
            <p><strong>Mensaje desde formulario web:</strong></p>
            <p>${body.message}</p>
            <p><em>Nombre:</em> ${body.name}<br/>
            <em>Teléfono:</em> ${body.number || "-"}<br/>
            <em>Email:</em> ${body.email}</p>
          `,
          hs_timestamp: Date.now(),
        },
      }),
    });

    const noteData = await noteRes.json();
    const noteId = noteData.id;

    console.log("NOTE ID:  " + noteId);

    if (!noteId) {
      console.warn("❌ HubSpot no devolvió ID de nota:", noteData);
    }

    // === 4. Asociar nota al contacto ===
    if (contactId && noteId) {
      const associationRes = await fetch(
        `https://api.hubapi.com/crm/v3/objects/notes/${noteId}/associations/contacts/${contactId}/202`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
          },
        }
      );

      if (!associationRes.ok) {
        const errorText = await associationRes.text();
        console.warn("⚠️ Error al asociar nota al contacto:", errorText);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Error en el endpoint de contacto:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
