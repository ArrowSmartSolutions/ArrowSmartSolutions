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

    // Check if API key and Group ID are configured
    if (!process.env.MAILERLITE_API_KEY || !process.env.MAILERLITE_GROUP_ID) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'MailerLite is not properly configured. Please add MAILERLITE_API_KEY and MAILERLITE_GROUP_ID to environment variables.' 
        },
        { status: 500 }
      );
    }

    // MailerLite API v4 endpoint for creating/updating subscriber
    // Documentation: https://developers.mailerlite.com/docs/subscribers#create-upsert-subscriber
    const mailerliteResponse = await fetch(
      process.env.MAILERLITE_API_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`,
        },
        body: JSON.stringify({
          email: email,
          status: 'active',
        }),
      }
    );

    let data;
    try {
      data = await mailerliteResponse.json();
    } catch (parseError) {
      console.error('MailerLite returned non-JSON response:', await mailerliteResponse.text());
      return NextResponse.json(
        { success: false, message: 'Newsletter service is currently unavailable. Please try again later.' },
        { status: 500 }
      );
    }

    // MailerLite returns 200 or 201 on success
    if (mailerliteResponse.ok) {
      return NextResponse.json({
        success: true,
        message: 'Successfully subscribed to newsletter',
      });
    } else {
      // Handle specific MailerLite error responses
      let errorMessage = 'Error subscribing to newsletter';
      if (data?.message) {
        if (typeof data.message === 'string') {
          errorMessage = data.message;
        } else if (data.message?.message) {
          errorMessage = data.message.message;
        } else {
          errorMessage = JSON.stringify(data.message);
        }
      } else if (data?.error) {
        errorMessage = typeof data.error === 'string' ? data.error : JSON.stringify(data.error);
      }
      return NextResponse.json(
        {
          success: false,
          message: errorMessage,
        },
        { status: mailerliteResponse.status }
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
