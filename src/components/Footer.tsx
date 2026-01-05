function Footer() {
  return (
    <footer
      aria-labelledby="footer-title"
      style={{
        borderTop: "1px solid rgba(15, 23, 42, 0.08)",
        background: "#f9fafb",
        padding: "2rem 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.875rem",
              color: "#6b7280",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            © {new Date().getFullYear()} Anjan AI, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
