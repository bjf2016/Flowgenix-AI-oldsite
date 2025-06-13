import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  message: string
}

interface ApiResponse {
  success: boolean
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  const { name, email, message }: ContactFormData = req.body

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields are required' 
    })
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Invalid email address' 
    })
  }

  // Simple spam check
  const spamKeywords = ['viagra', 'casino', 'lottery', 'winner', 'congratulations']
  const messageText = message.toLowerCase()
  if (spamKeywords.some(keyword => messageText.includes(keyword))) {
    return res.status(400).json({ 
      success: false, 
      message: 'Message appears to be spam' 
    })
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'info@flowgenixai.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Sent from King K Consulting website contact form</small></p>
      `,
    }

    // Auto-reply to sender
    const autoReplyOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for contacting King K Consulting',
      html: `
        <h2>Thank you for your message!</h2>
        <p>Hi ${name},</p>
        <p>Thank you for reaching out to King K Consulting. We've received your message and will get back to you within 24 hours during business days.</p>
        <p>In the meantime, feel free to explore our <a href="${process.env.NEXT_PUBLIC_SITE_URL}/blog">blog</a> for AI insights and tips.</p>
        <p>Best regards,<br>The King K Consulting Team</p>
        <hr>
        <p><strong>Your message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    }

    // Send both emails
    await transporter.sendMail(mailOptions)
    await transporter.sendMail(autoReplyOptions)

    return res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully' 
    })

  } catch (error) {
    console.error('Email sending error:', error)
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    })
  }
}