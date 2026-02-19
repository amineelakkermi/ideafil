import nodemailer from 'nodemailer';

// Configuration du transporteur d'email
const transporter = nodemailer.createTransporter({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true pour 465, false pour les autres ports
  auth: {
    user: process.env.GMAIL_USER, // Votre adresse Gmail
    pass: process.env.GMAIL_PASS, // Votre mot de passe d'application
  },
});

// Fonction pour envoyer un email
export const sendContactEmail = async (formData) => {
  const { name, email, phone, message } = formData;

  try {
    // Options de l'email
    const mailOptions = {
      from: `"${name}" <${email}>`, // Expéditeur
      to: 'amineelakkermi37@gmail.com', // Votre adresse de réception
      subject: `Nouveau message de contact - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5; border-radius: 8px;">
          <div style="background-color: #1a0046; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="margin: 0; font-size: 24px;">Nouveau message de contact</h2>
          </div>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px;">
            <div style="margin-bottom: 15px;">
              <strong style="color: #333;">Nom:</strong> ${name}
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #333;">Email:</strong> ${email}
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #333;">Téléphone:</strong> ${phone || 'Non spécifié'}
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #333;">Message:</strong>
            </div>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 4px; border-left: 4px solid #1a0046;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>Cet email a été envoyé depuis le formulaire de contact du site أيدفل</p>
          </div>
        </div>
      `,
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);
    
    return { success: true, message: 'Email envoyé avec succès' };
    
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return { success: false, message: 'Erreur lors de l\'envoi de l\'email' };
  }
};
