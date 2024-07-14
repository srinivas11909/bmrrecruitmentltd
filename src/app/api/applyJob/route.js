/*import { NextResponse } from 'next/server';
import formidable from 'formidable';
import nodemailer from 'nodemailer';

// Disable Next.js's default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

const parseForm = (req) =>
  new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();
    console.log("hello")
    console.log(form);
    //const buffers = [];
    form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve({ fields, files });
      });

    // req.on('data', (chunk) => {
    //   buffers.push(chunk);
    // });

    // req.on('end', () => {
    //   const buffer = Buffer.concat(buffers);
    //   form.parse(buffer, (err, fields, files) => {
    //     if (err) return reject(err);
    //     resolve({ fields, files });
    //   });
    // });

    // req.on('error', (err) => {
    //   reject(err);
    // });
  });

export async function POST(req) {
  try {
    console.log(req)
    const data = await req.formData();
    console.log(data);
    let body = Object.fromEntries(formData);
    console.log(data);
    const { fields, files } = await parseForm(data);
    const { name, email, contact, address, comments } = fields;
    const file = files.file;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'reddygd7@gmail.com',
      subject: 'Job Application',
      text: `Name: ${name}\nEmail: ${email}\nContact: ${contact}\nAddress: ${address}\nComments: ${comments}`,
      attachments: [
        {
          filename: file.originalFilename,
          path: file.filepath,
          contentType: file.mimetype || 'application/octet-stream',
        },
      ],
    };

    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          resolve(NextResponse.json({ error: error.message }, { status: 500 }));
        } else {
          console.log('Email sent:', info.response);
          resolve(NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 }));
        }
      });
    });
  } catch (error) {
    console.error('Error handling request:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}*/

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import multer from 'multer';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};
// Multer setup for file upload
const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: (req, file, cb) => {
        console.log("hello")
        console.log(file);
        if (file.mimetype !== 'application/pdf') {
            return cb(new Error('Only PDF files are allowed'));
        }
        cb(null, true);
    }
}).single('file');

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail', // Update with your email service provider
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// POST function handling the API route
export async function POST(req, res) {
    try {
        //Handle file upload
        await new Promise((resolve, reject) => {
            upload(req, res, (err) => {
                if (err) return reject(err);
                resolve();
            });
        });

        // Destructure form data and uploaded file
        let formData = await req.formData();
        let body = Object.fromEntries(formData);
        console.log(body);       
        console.log("hii.....")
        console.log(body);
        const { name, email, contact, address, comments } = body;
        const file = body.file;
        const f = formData.get('file')

        // Ensure all fields are provided
        if (!name || !email || !contact || !address || !comments || !file) {
            return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
        }

        // Construct email message
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'Job Application Submission',
            text: `
                Name: ${name}
                Email: ${email}
                Contact: ${contact}
                Address: ${address}
                Comments: ${comments}
            `,
            attachments: [
                {
                    filename: file.name,
                    content:  file.size,
                    contentType: file.type || 'application/octet-stream',
                    size: file.size
                }
            ]
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Return success response
        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Failed to send email server!' }, { status: 500 });
    }
}

// import { NextResponse } from 'next/server';
// import formidable from 'formidable';
// import nodemailer from 'nodemailer';
// import multer from 'multer';

// // Multer setup for file upload
// const upload = multer({ storage: multer.memoryStorage() });

// // Nodemailer transporter setup
// const transporter = nodemailer.createTransport({
//     service: 'gmail', // Update with your email service provider
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS
//     }
// });

// // Helper function to parse form data using formidable
// const parseForm = (req) => {
//     return new Promise((resolve, reject) => {
//         const form = new formidable.IncomingForm();
//         console.log(form)
//         form.parse(req, (err, fields, files) => {
//             if (err) return reject(err);
//             resolve({ fields, files });
//         });
//     });
// };

// // API route handler for POST requests
// export async function POST(req, res) {
//     try {
//         // Parse form data using formidable
//         const { fields, files } = await parseForm(req);

//         // Destructure form fields and uploaded file
//         const { name, email, contact, address, comments } = fields;
//         const uploadedFile = files.file;

//         // Ensure all required fields are provided
//         if (!name || !email || !contact || !address || !comments || !uploadedFile) {
//             return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
//         }

//         // Validate file type (example: allow only PDF files)
//         if (uploadedFile.type !== 'application/pdf') {
//             return NextResponse.json({ message: 'Only PDF files are allowed' }, { status: 400 });
//         }

//         // Nodemailer attachments configuration
//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: process.env.EMAIL_USER, // Change recipient email as needed
//             subject: 'Job Application Submission',
//             text: `
//                 Name: ${name}
//                 Email: ${email}
//                 Contact: ${contact}
//                 Address: ${address}
//                 Comments: ${comments}
//             `,
//             attachments: [
//                 {
//                     filename: uploadedFile.name,
//                     content: uploadedFile.data, // Use the file buffer directly
//                     contentType: uploadedFile.type || 'application/octet-stream',
//                 }
//             ]
//         };

//         // Send email using Nodemailer
//         await transporter.sendMail(mailOptions);

//         // Return success response
//         return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });

//     } catch (error) {
//         console.error('Error sending email:', error);
//         return NextResponse.json({ message: 'Failed to send email server!' }, { status: 500 });
//     }
// }
