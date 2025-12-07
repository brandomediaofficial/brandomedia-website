import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, services, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, Email, and Phone are required." },
        { status: 400 }
      );
    }

    // Configure Nodemailer Transporter
    // NOTE: For Gmail, use an App Password if 2FA is enabled.
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
      },
    });

    // Email Options
    const mailOptions = {
      from: `"Brandomedia Website" <${process.env.GMAIL_USER}>`, // Sender address (must be authenticated user)
      to: "brandomedia.in@gmail.com, contact@brandomedia.in", // Receivers
      replyTo: email, // Valid user email for replying
      subject: `New Inquiry: ${name}`, // Simplified subject
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nServices: ${
        services && services.length > 0 ? services.join(", ") : "None"
      }\nMessage: ${message || "No message provided."}`, // Plain text fallback
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; padding: 20px; border-radius: 8px;">
          <h2 style="color: #333; border-bottom: 2px solid #333; padding-bottom: 10px;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Reply-To Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Services Interested:</strong> ${
            services && services.length > 0 ? services.join(", ") : "None"
          }</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin-top: 20px;">
            <h3 style="color: #555; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; color: #333;">${
              message || "No message provided."
            }</p>
          </div>
          <p style="font-size: 12px; color: #888; margin-top: 30px; text-align: center;">Sent from Brandomedia Website Contact Form</p>
        </div>
      `,
    };

    // Send Email
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
