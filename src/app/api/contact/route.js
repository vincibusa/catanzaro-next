import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const formData = await request.json();
    
    // Validazione dei campi obbligatori
    if (!formData.name || !formData.email || !formData.message) {
      return new Response(JSON.stringify({ error: 'Name, email and message are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Configurazione del transporter per nodemailer
    // Nota: Serve comunque un account SMTP valido per l'invio
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true per 465, false per altri port
      auth: {
        user: 'catanzaroepartners@gmail.com', // Account SMTP
        pass: 'mban ebhv kjyq qvnn' // Password SMTP
      }
    });

    // Preparazione del messaggio email
    const mailOptions = {
      from: `"${formData.name}" <${formData.email}>`,
      to: 'catanzaroepartners@gmail.com',
      subject: `Nuovo messaggio da ${formData.name}`,
      text: `
        Nome: ${formData.name}
        Email: ${formData.email}
        Telefono: ${formData.phone || 'Non fornito'}
        Azienda: ${formData.company || 'Non fornita'}
        
        Servizi interessati: ${formData.services ? formData.services.join(', ') : 'Nessuno'}
        
        Messaggio:
        ${formData.message}
      `,
      html: `
        <h1>Nuovo messaggio da ${formData.name}</h1>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Telefono:</strong> ${formData.phone || 'Non fornito'}</p>
        <p><strong>Azienda:</strong> ${formData.company || 'Non fornita'}</p>
        <p><strong>Servizi interessati:</strong> ${formData.services ? formData.services.join(', ') : 'Nessuno'}</p>
        <h3>Messaggio:</h3>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `
    };

    // Invio dell'email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
