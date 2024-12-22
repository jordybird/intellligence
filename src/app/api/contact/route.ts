import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    // 1. Parse the JSON body from the request
    const { name, email, message } = await req.json();

    // 2. Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // 3. Create Nodemailer transporter using SES SMTP creds from env
    const transporter = nodemailer.createTransport({
      host: process.env.AWS_SES_HOST,
      port: Number(process.env.AWS_SES_PORT) || 587,
      secure: false, // use TLS (false for STARTTLS on port 587, or true for 465)
      auth: {
        user: process.env.AWS_SES_USER,
        pass: process.env.AWS_SES_PASS,
      },
    });

    // 4. Send mail
    await transporter.sendMail({
      from: process.env.AWS_SES_FROM, // Verified SES sender
      to: process.env.AWS_SES_TO,     // Recipient(s)
      replyTo: email,                 // So you can reply to the visitor’s email
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      // Optionally, an HTML version:
      // html: `<p><strong>Name:</strong> ${name}</p>
      //       <p><strong>Email:</strong> ${email}</p>
      //       <p><strong>Message:</strong> ${message}</p>`
    });

    // 5. Return success as JSON
    return NextResponse.json({ message: "Email sent successfully." }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Internal Server Error." },
      { status: 500 }
    );
  }
}
