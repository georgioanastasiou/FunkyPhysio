import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set — contact form email was not sent.');
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      // Sending from Resend's shared address until funkyphysio.com is
      // verified in the Resend dashboard (Domains -> Add Domain -> add the
      // DNS records it gives you). Once verified, switch this to something
      // like 'Funky Physio Website <contact@funkyphysio.com>' so the email
      // truly comes from the site's own domain.
      from: 'Funky Physio Website <onboarding@resend.dev>',
      to: 'george@funkyphysio.com',
      replyTo: email,
      subject: subject ? `New message from ${name}: ${subject}` : `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || '(none)'}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error('Resend failed to send contact email', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Failed to send contact email', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
