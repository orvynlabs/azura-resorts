import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contact, email, location, message } = body;

    // Validate inputs
    if (!name || !contact || !email || !message) {
      return NextResponse.json(
        { message: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email credentials missing in .env');
      return NextResponse.json(
        { message: 'Server configuration error: Missing email credentials. Please ensure your .env file is set up and the development server has been restarted.' },
        { status: 500 }
      );
    }

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use 'gmail' or your provider, configure in ENV
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Setup email data
    const mailOptions = {
      from: `Azura Resort Contact Form <${process.env.EMAIL_USER}>`,
      to: 'azurawayanad@gmail.com', // Where you will receive the emails
      replyTo: email, // If you click "reply", it goes back to the person who filled out the form
      subject: `New Enquiry from ${name}`,
      text: `
        You have received a new enquiry from the Azura Resort Contact Form.

        Details:
        -----------------------------
        Name: ${name}
        Contact/Phone: ${contact}
        Email: ${email}
        Location/City: ${location || 'N/A'}

        Message:
        -----------------------------
        ${message}
      `,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #4C6454;">New Enquiry via Azura Resort Website</h2>
          <table style="width: 100%; border-collapse: collapse; max-width: 600px; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; width: 150px;"><strong>Name</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Contact / Phone</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${contact}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email Address</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Location / City</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${location || 'N/A'}</td>
            </tr>
          </table>
          
          <h3 style="margin-top: 30px; color: #4C6454;">Message details:</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #4C6454;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Enquiry sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: `Failed to send enquiry: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
}
