import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, company, email, phone, message } = await req.json();
  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.yourmailserver.com",
      port: 465,
      secure: true,
      auth: {
        user: "your@email.com",
        pass: "yourpassword",
      },
    });

    await transporter.sendMail({
      from: '"Space Manthan" <your@email.com>',
      to: "your@email.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
