import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Support both JSON and multipart/form-data requests from clients
    let body = {};
    const reqContentType = request.headers.get('content-type') || '';

    if (reqContentType.includes('multipart/form-data')) {
      const form = await request.formData();
      form.forEach((value, key) => {
        // formData values can be File objects; convert to string when possible
        body[key] = value && typeof value === 'object' && value.name ? value : String(value);
      });
    } else {
      body = await request.json();
    }

    // Create FormData for Web3Forms
    const formData = new FormData();
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error('Missing WEB3FORMS_ACCESS_KEY in environment');
      return NextResponse.json({ success: false, message: 'Server misconfiguration: missing API key' }, { status: 500 });
    }

    formData.append('access_key', accessKey);
    formData.append('firstname', body.firstname || '');
    formData.append('lastname', body.lastname || '');
    formData.append('email', body.email || '');
    // Accept either `enquiry` or `message` from different clients
    formData.append('enquiry', body.enquiry || body.message || '');

    const apiUrl = process.env.WEB3FORMS_API_URL;
    if (!apiUrl) {
      console.error('Missing WEB3FORMS_API_URL in environment');
      return NextResponse.json({ success: false, message: 'Server misconfiguration: missing API URL' }, { status: 500 });
    }

    const response = await fetch(apiUrl, {
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
      console.error('Web3Forms returned non-JSON response:', response.status, textResponse.substring(0, 200));

      return NextResponse.json(
        { success: false, message: 'Upstream service returned non-JSON response; check server logs for details.' },
        { status: 502 }
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
