# EmailJS Setup Guide

To enable email functionality for the "Book a Demo" form, you need to set up EmailJS.

## Steps to Configure EmailJS:

1. **Create an EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account (free tier allows 200 emails/month)

2. **Create an Email Service**
   - In EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions
   - Note your **Service ID**

3. **Create an Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template structure:
     ```
     Subject: New Demo Request - Anjan AI
     
     From: {{from_name}} ({{from_email}})
     Company: {{company}}
     Phone: {{phone}}
     
     Message:
     {{message}}
     ```
   - Set "To Email" to: `avalluru@anjan.ai` (you'll need to create a second template for `info@anjan.ai` or use a template variable)
   - Note your **Template ID**

4. **Get Your Public Key**
   - Go to "Account" → "General"
   - Copy your **Public Key**

5. **Configure Environment Variables**
   - Create a `.env` file in the root of your project
   - Add these variables:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id_here
     VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
     VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
     ```
   - Replace the placeholder values with your actual IDs

6. **Restart Your Development Server**
   - Stop your current dev server
   - Run `npm run dev` again to load the new environment variables

## Alternative: Using Two Templates

If you want to send to both `avalluru@anjan.ai` and `info@anjan.ai`, you can:
- Create two separate templates (one for each email)
- Or modify the code to send two separate emails using the same template but different `to_email` values

## Note

The form will work without EmailJS configuration, but it will fall back to opening the user's email client (mailto: link). For a better user experience, configure EmailJS as described above.


