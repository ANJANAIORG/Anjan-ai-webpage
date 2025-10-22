function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      style={{
        background: "linear-gradient(180deg, #f3f4f6 0%, #e0f2fe 100%)",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <h2
          id="contact-title"
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 700,
            color: "#1e3a8a",
            marginBottom: 12,
          }}
        >
          Contact
        </h2>
        <p
          style={{
            marginBottom: 32,
            color: "#2563EB",
            fontSize: 16,
          }}
        >
          Reach out for partnerships, demos, or support.
        </p>

        <div
          style={{
            lineHeight: 1.8,
            background: "white",
            padding: "32px",
            borderRadius: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
            display: "inline-block",
          }}
        >
          <p>
            <strong>General Information:</strong>{" "}
            <a href="mailto:info@anjan.ai" style={{ color: "#3b82f6" }}>
              info@anjan.ai
            </a>
          </p>
          <p>
            <strong>Abhinav Valluru:</strong>{" "}
            <a href="mailto:avalluru@anjan.ai" style={{ color: "#3b82f6" }}>
              avalluru@anjan.ai
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
