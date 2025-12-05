import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'alhasandhali@gmail.com',
            replyTo: email,
            subject: `New Message from Portfolio: ${name}`,
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        return NextResponse.json(data);
    } catch (error: any) {
        console.error("Resend Error:", error?.message || error);
        return NextResponse.json({ error: error?.message }, { status: 500 });
    }
}
