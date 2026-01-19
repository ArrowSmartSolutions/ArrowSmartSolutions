import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();

    // Create FormData for Web3Forms
    const formData = new FormData();
    formData.append('access_key', process.env.WEB3FORMS_ACCESS_KEY);
    formData.append('firstname', body.firstname || '');
    formData.append('lastname', body.lastname || '');
    formData.append('email', body.email || '');
    formData.append('enquiry', body.enquiry || '');

    const response = await fetch(process.env.WEB3FORMS_API_URL, {
      method: 'POST',
      body: formData,
    });

    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    let data;
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      // If not JSON, get text response (likely HTML error page)
      const textResponse = await response.text();
      console.error('Web3Forms returned non-JSON response:', textResponse);
      
      return NextResponse.json(
        { success: false, message: 'Form submission service is currently unavailable. Please try again later.' },
        { status: 500 }
      );
    }

    if (data.success) {
      return NextResponse.json({ success: true, message: 'Form Submitted Successfully' });
    } else {
      return NextResponse.json(
        { success: false, message: typeof data.message === 'string' ? data.message : 'Error submitting form' },
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
