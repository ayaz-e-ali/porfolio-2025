'use server';
import nodemailer from "nodemailer";

export async function sendMail(body) {
    const { name, email, message } = body;

    if (!name || !email || !message) {
        return
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: `New Contact Form Submission from ${name}`,
            text: message,
        });

        return { success: true, message: "Email sent successfully!" };
    } catch (err) {
        return { success: false, message: err.message };
    }
}
