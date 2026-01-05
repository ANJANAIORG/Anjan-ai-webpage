function Contact() {
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
            maxWidth: "700px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            id="contact-title"
            style={{
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "#1e3a8a",
              marginBottom: "0.75rem",
              lineHeight: 1.2,
            }}
          >
            Contact Us
          </h2>
          <p
            style={{
              marginBottom: "3rem",
              color: "#4b5563",
              fontSize: "1.125rem",
              lineHeight: 1.6,
            }}
          >
            Reach out for partnerships, demos, or support.
          </p>

          <div
            style={{
              background: "white",
              padding: "2.5rem",
              borderRadius: "1rem",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              border: "1px solid rgba(15, 23, 42, 0.08)",
              display: "inline-block",
              textAlign: "left",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "#6b7280",
                    marginBottom: "0.5rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  General Information
                </p>
                <a
                  href="mailto:info@anjan.ai"
                  style={{
                    color: "#2563eb",
                    fontSize: "1.125rem",
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
                    fontSize: "0.875rem",
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
                    fontSize: "1rem",
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
                    fontSize: "1.125rem",
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
    </section>
  );
}

export default Contact;
