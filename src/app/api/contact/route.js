import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.json();

    // Add the access key server-side
    const payload = new FormData();
    payload.append('access_key', process.env.WEB3FORMS_ACCESS_KEY);
    payload.append('firstname', formData.firstname);
    payload.append('lastname', formData.lastname);
    payload.append('email', formData.email);
    payload.append('enquiry', formData.enquiry);

    const response = await fetch(process.env.WEB3FORMS_API_URL, {
      method: 'POST',
      body: payload,
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true, message: 'Form Submitted Successfully' });
    } else {
      return NextResponse.json(
        { success: false, message: data.message || 'Error submitting form' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Error: Unable to submit form' },
      { status: 500 }
    );
  }
}
