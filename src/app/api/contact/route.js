import nodemailer from 'nodemailer';
import { NextResponse } from "next/server";


export async function POST(request, response) {
    try {
        const body = await request.json();        
        console.log(body);
        const {name, email, contact, message} = body
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
          });
          await transporter.sendMail({
            from: `"Contact Form" <${process.env.EMAIL_USER}>`, // sender address
            to: process.env.EMAIL_USER, // list of receivers
            subject: 'New Contact Form Submission', // Subject line
            html: `    <div style="padding: 20px; border-radius: 8px; background-color: #e3f2fd; font-family: Arial, sans-serif; color: #333;">
                <h2 style="color: #007bff; margin-bottom: 20px;">New Contact Form Submission</h2>
                <p style="font-size: 16px; margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
                <p style="font-size: 16px; margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
                <p style="font-size: 16px; margin-bottom: 10px;"><strong>Contact:</strong> ${contact}</p>
                <p style="font-size: 16px; margin-bottom: 10px;"><strong>Message:</strong></p>
                <p style="font-size: 14px; line-height: 1.5; margin-bottom: 0;">${message}</p>
            </div>`, // html body
          });  
        //return response.status(200).json({ message: 'Message sent successfully' });
        return NextResponse.json('Message sent successfully',{ status: 200})
    }catch(err){
        console.log(err);
        return NextResponse.json('Message not sent successfully',{ status: 400})
       // return response.status(500).json({ message: 'Error sending email', err });
    }
}