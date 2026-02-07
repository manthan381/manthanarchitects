import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, company, email, phone, area } = await req.json();
  if (!name || !email || !phone || !area) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.yourhost.com",
      port: 465,
      secure: true,
      auth: {
        user: "your@email.com",
        pass: "yourpassword",
      },
    });

    await transporter.sendMail({
      from: `"Space Manthan" <your@email.com>`,
      to: "your@email.com",
      subject: "New Consultation Booking",
      html: `
        <h3>New Consultation Booking</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Carpet Area:</strong> ${area}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending consultation email:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
