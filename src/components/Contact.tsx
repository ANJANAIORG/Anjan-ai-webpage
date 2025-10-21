import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) return alert("Please fill all fields.");
    const validEmail = /[^@\s]+@[^@\s]+\.[^@\s]+/.test(email);
    if (!validEmail) return alert("Enter a valid email address.");
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="section"
      aria-labelledby="contact-title"
      style={{
        background: "linear-gradient(180deg, #f3f4f6 0%, #e0f2fe 100%)",
        padding: "80px 24px",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        <h2
          id="contact-title"
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 700,
            color: "#1e293b",
            marginBottom: 12,
            textAlign: "center",
          }}
        >
          Contact
        </h2>
        <p
          className="muted"
          style={{
            marginBottom: 40,
            textAlign: "center",
            color: "#475569",
            fontSize: 18,
          }}
        >
          Reach out for partnerships, demos, or support.
        </p>

        {/* Contact Form */}
        <form
          className="surface"
          onSubmit={onSubmit}
          style={{
            background: "white",
            borderRadius: 20,
            padding: 32,
            display: "grid",
            gap: 16,
            boxShadow: "0 12px 24px rgba(0,0,0,0.06)",
            transition: "all 0.3s ease",
          }}
        >
          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontWeight: 600, color: "#1e293b" }}>Name</span>
            <input
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Doe"
              required
              style={{
                padding: "12px 16px",
                borderRadius: 12,
                border: "1px solid #cbd5e1",
                outline: "none",
                fontSize: 16,
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#cbd5e1")}
            />
          </label>

          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontWeight: 600, color: "#1e293b" }}>Email</span>
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@company.com"
              required
              style={{
                padding: "12px 16px",
                borderRadius: 12,
                border: "1px solid #cbd5e1",
                outline: "none",
                fontSize: 16,
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#cbd5e1")}
            />
          </label>

          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontWeight: 600, color: "#1e293b" }}>Message</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us a bit about your needs"
              required
              rows={5}
              style={{
                padding: "12px 16px",
                borderRadius: 12,
                border: "1px solid #cbd5e1",
                outline: "none",
                fontSize: 16,
                resize: "vertical",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#cbd5e1")}
            />
          </label>

          <button
            type="submit"
            style={{
              padding: "14px 24px",
              borderRadius: 12,
              border: "none",
              background: "#3b82f6",
              color: "white",
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#2563eb";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#3b82f6";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Send
          </button>

          {submitted && (
            <div
              role="status"
              style={{
                color: "#16a34a",
                fontWeight: 600,
                marginTop: 8,
                fontSize: 16,
              }}
            >
              Thanks! We’ll get back to you shortly.
            </div>
          )}
        </form>

        {/* Social Links */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 32,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            className="btn secondary"
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "10px 20px",
              borderRadius: 12,
              background: "#f1f5f9",
              color: "#1e293b",
              textDecoration: "none",
              fontWeight: 600,
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#e0f2fe")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#f1f5f9")}
          >
            Twitter
          </a>
          <a
            className="btn secondary"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "10px 20px",
              borderRadius: 12,
              background: "#f1f5f9",
              color: "#1e293b",
              textDecoration: "none",
              fontWeight: 600,
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#e0f2fe")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#f1f5f9")}
          >
            LinkedIn
          </a>
          <a
            className="btn secondary"
            href="mailto:hello@anjan.ai"
            style={{
              padding: "10px 20px",
              borderRadius: 12,
              background: "#f1f5f9",
              color: "#1e293b",
              textDecoration: "none",
              fontWeight: 600,
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#e0f2fe")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#f1f5f9")}
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
