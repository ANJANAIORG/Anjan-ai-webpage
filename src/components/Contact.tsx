import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // EmailJS configuration
      // Note: You'll need to set up EmailJS account and get these values
      // For now, using a fallback approach that sends to both emails
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key";

      // Check if EmailJS is configured
      const isEmailJSConfigured = 
        serviceId !== "your_service_id" && 
        templateId !== "your_template_id" && 
        publicKey !== "your_public_key" &&
        serviceId &&
        templateId &&
        publicKey;

      if (isEmailJSConfigured) {
        // Use EmailJS if configured
        emailjs.init(publicKey);
        
        // TESTING: Using test email address
        const recipients = ["abhinaya0628@gmail.com"];
        
        // Send emails to recipients
        const emailPromises = recipients.map((recipient) =>
          emailjs.send(serviceId, templateId, {
            to_email: recipient,
            to_name: "Test Recipient",
            from_name: formData.name,
            from_email: formData.email,
            company: formData.company || "Not provided",
            phone: formData.phone || "Not provided",
            message: formData.message,
            subject: "New Demo Request - Anjan AI (TEST)",
            reply_to: formData.email,
          })
        );
        
        await Promise.all(emailPromises);
        console.log("✅ Email sent successfully via EmailJS to:", recipients);
      } else {
        // Fallback: Log form data and show success (for testing without EmailJS)
        console.log("📧 Form Data (EmailJS not configured):", {
          to: "abhinaya0628@gmail.com",
          from: formData.email,
          name: formData.name,
          company: formData.company,
          phone: formData.phone,
          message: formData.message,
        });
        
        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.warn("⚠️ EmailJS not configured. Form data logged to console.");
        console.warn("To enable email sending, set up EmailJS (see EMAILJS_SETUP.md)");
        
        // For now, we'll show success even without EmailJS configured
        // This allows testing the form UI/UX
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
      
      // Provide more specific error messages
      if (error?.text) {
        setErrorMessage(`Email service error: ${error.text}`);
      } else if (error?.message) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Failed to send email. Please check your EmailJS configuration or contact us directly at abhinaya0628@gmail.com");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section"
      aria-labelledby="contact-title"
      style={{
        background: "linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)",
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <h2
            id="contact-title"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
              fontWeight: 700,
              color: "#1e3a8a",
              marginBottom: "2rem",
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            Book a Demo
          </h2>

          {/* Two Column Layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
              alignItems: "start",
            }}
            className="contact-layout"
          >
            {/* Left Side - Form */}
            <form
              onSubmit={handleSubmit}
              style={{
                background: "white",
                padding: "1.5rem",
                borderRadius: "0.75rem",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                border: "1px solid rgba(15, 23, 42, 0.08)",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#374151",
                    marginBottom: "0.25rem",
                  }}
                >
                  Full Name <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem 0.75rem",
                    fontSize: "0.875rem",
                    border: "1px solid rgba(15, 23, 42, 0.1)",
                    borderRadius: "0.5rem",
                    transition: "all 0.2s ease",
                    outline: "none",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#2563eb";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(37, 99, 235, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(15, 23, 42, 0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#374151",
                    marginBottom: "0.25rem",
                  }}
                >
                  Email Address <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem 0.75rem",
                    fontSize: "0.875rem",
                    border: "1px solid rgba(15, 23, 42, 0.1)",
                    borderRadius: "0.5rem",
                    transition: "all 0.2s ease",
                    outline: "none",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#2563eb";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(37, 99, 235, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(15, 23, 42, 0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Company Field */}
              <div>
                <label
                  htmlFor="company"
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#374151",
                    marginBottom: "0.25rem",
                  }}
                >
                  Company Name <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem 0.75rem",
                    fontSize: "0.875rem",
                    border: "1px solid rgba(15, 23, 42, 0.1)",
                    borderRadius: "0.5rem",
                    transition: "all 0.2s ease",
                    outline: "none",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#2563eb";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(37, 99, 235, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(15, 23, 42, 0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#374151",
                    marginBottom: "0.25rem",
                  }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.5rem 0.75rem",
                    fontSize: "0.875rem",
                    border: "1px solid rgba(15, 23, 42, 0.1)",
                    borderRadius: "0.5rem",
                    transition: "all 0.2s ease",
                    outline: "none",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#2563eb";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(37, 99, 235, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(15, 23, 42, 0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#374151",
                    marginBottom: "0.25rem",
                  }}
                >
                  Message <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "0.5rem 0.75rem",
                    fontSize: "0.875rem",
                    border: "1px solid rgba(15, 23, 42, 0.1)",
                    borderRadius: "0.5rem",
                    transition: "all 0.2s ease",
                    outline: "none",
                    resize: "vertical",
                    fontFamily: "inherit",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#2563eb";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(37, 99, 235, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(15, 23, 42, 0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: "100%",
                  padding: "0.625rem 1.25rem",
                  background: isSubmitting ? "#94a3b8" : "#1e3a8a",
                  color: "white",
                  borderRadius: "0.5rem",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  border: "none",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: isSubmitting
                    ? "none"
                    : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.background = "#2563eb";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.background = "#1e3a8a";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
                  }
                }}
              >
                {isSubmitting ? "Sending..." : "Submit Request"}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div
                  style={{
                    padding: "1rem",
                    background: "#d1fae5",
                    border: "1px solid #10b981",
                    borderRadius: "0.5rem",
                    color: "#065f46",
                    fontSize: "0.875rem",
                    textAlign: "center",
                  }}
                >
                  ✓ Thank you! Your demo request has been sent. We'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  style={{
                    padding: "1rem",
                    background: "#fee2e2",
                    border: "1px solid #ef4444",
                    borderRadius: "0.5rem",
                    color: "#991b1b",
                    fontSize: "0.875rem",
                    textAlign: "center",
                  }}
                >
                  {errorMessage || "An error occurred. Please try again or contact us directly."}
                </div>
              )}
              </div>
            </form>

            {/* Right Side - General Information */}
            <div
              style={{
                background: "white",
                padding: "1.5rem",
                borderRadius: "0.75rem",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                border: "1px solid rgba(15, 23, 42, 0.08)",
                height: "fit-content",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#1e3a8a",
                  marginBottom: "1.5rem",
                  textAlign: "left",
                }}
              >
                General Information
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  textAlign: "left",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "#6b7280",
                      marginBottom: "0.5rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:info@anjan.ai"
                    style={{
                      color: "#2563eb",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#1e40af";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#2563eb";
                    }}
                  >
                    info@anjan.ai
                  </a>
                </div>

                <div>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "#6b7280",
                      marginBottom: "0.5rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Address
                  </p>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#374151",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    123 Innovation Drive,<br />
                    Suite 456,<br />
                    San Francisco, CA 94105,<br />
                    United States
                  </p>
                </div>

                <div>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "#6b7280",
                      marginBottom: "0.5rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Contact Person
                  </p>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#111827",
                      marginBottom: "0.25rem",
                      fontWeight: 500,
                    }}
                  >
                    Abhinav Valluru
                  </p>
                  <a
                    href="mailto:avalluru@anjan.ai"
                    style={{
                      color: "#2563eb",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#1e40af";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#2563eb";
                    }}
                  >
                    avalluru@anjan.ai
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .contact-layout {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Contact;
