
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, company, email, phone, message } = await req.json();

    // 1. Zoho SMTP Transporter Configuration
    const transporter = nodemailer.createTransport({
      host: "smtppro.zoho.in", // Zoho India server
      port: 465,
      secure: true, // Port 465 uses SSL
      auth: {
        user: "hello@manthanarchitects.com", 
        pass: "Manthanarchitects@2026", 
      },
    });

    // 2. Mail Options
    const mailOptions = {
      from: "hello@manthanarchitects.com", // Zoho mein 'from' hamesha login user hi hona chahiye
      to: "hello@manthanarchitects.com",   // Aapko isi par mail milegi
      replyTo: email,                      // Taaki aap seedha user ko reply kar sakein
      subject: `New Inquiry from ${name} - ${company || "No Company"}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p style="margin-top: 20px;"><strong>Message:</strong></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, "<br/>")}
          </div>
        </div>
      `,
    };

    // 3. Send the mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Zoho Email Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}