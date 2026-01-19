import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      );
    }

    // MailerLite API endpoint for adding subscribers
    const mailerliteResponse = await fetch(
      `https://api.mailerlite.com/api/v1/subscribers`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-MailerLite-ApiKey': process.env.MAILERLITE_API_KEY,
        },
        body: JSON.stringify({
          email: email,
          groups: [process.env.MAILERLITE_FORM_ID],
        }),
      }
    );

    const data = await mailerliteResponse.json();

    if (mailerliteResponse.ok || data.success) {
      return NextResponse.json({
        success: true,
        message: 'Successfully subscribed to newsletter',
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          message: data.message || 'Error subscribing to newsletter',
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { success: false, message: 'Error: Unable to subscribe' },
      { status: 500 }
    );
  }
}
