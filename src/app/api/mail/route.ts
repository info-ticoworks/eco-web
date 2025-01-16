/* eslint-disable @typescript-eslint/restrict-template-expressions */
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const from = process.env.FROM_EMAIL ?? '';
const to = process.env.TO_EMAIL ?? '';
const toCV = process.env.TO_EMAIL_CV ?? '';
const SMTP_HOST = process.env.SMTP_HOST ?? '';
const SMTP_USER = process.env.SMTP_USER ?? '';
const SMTP_PASS = process.env.SMTP_PASS ?? '';

export async function POST(request: Request) {
  // Parse the form data manually
  const formData = await request.formData();
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;
  const file = formData.get('file') as File;
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const filename = file ? file.name : null;

  // Create the transporter for Nodemailer
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
    tls: {
      ciphers: 'SSLv3',
    },
    debug: true,
  });

  let mailOptions = {};

  console.log({
    SMTP_HOST,
    SMTP_USER,
    SMTP_PASS,
  });

  // Configure the mail options based on whether the file was uploaded
  if (filename != null) {
    console.log('sending cv...');

    // Read the file content as a Buffer
    const fileContent = Buffer.from(await file.arrayBuffer());

    mailOptions = {
      from: `Ecokhemia <${from}>`,
      to: toCV,
      subject: `CV ${name}`,
      html: `
      <div>
        <h3>
          <span style="font-weight: bold;">
            ${name}
          </span> se ha comunicado a través del formulario de oferta laboral de la web.
        </h3>
        <h3>Datos de contacto</h3>
        <p>Email: ${email}</p>
      </div>
      `,
      attachments: [
        {
          filename,
          content: fileContent,
        },
      ],
    };
  } else {
    console.log('sending contact form...');
    mailOptions = {
      from: `Ecokhemia <${from}>`,
      to,
      subject: `Contacto | ${name}`,
      html: `
      <div>
        <h3>
          <span style="font-weight: bold;">
            ${name}
          </span> se ha comunicado a través del formulario de contacto de la web.
        </h3>
        <h3>Datos de contacto</h3>
        <p>Teléfono: ${phone}</p>
        <p>Email: ${email}</p>
        <h3>Mensaje:</h3>
        <p>${message}</p>
      </div>
      `,
    };
  }

  try {
    await transporter.sendMail(mailOptions);
    console.log('Correo enviado!');
    return NextResponse.json({ message: 'Mensaje enviado con éxito' }, { status: 200 });
  } catch (error) {
    console.log('Error al enviar mail: ', error);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
