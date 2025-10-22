function Footer() {
  return (
    <footer
      aria-labelledby="footer-title"
      style={{ borderTop: "1px solid rgba(15,23,42,0.08)" }}
    >
      <div
        className="container"
        style={{
          padding: "20px",
          display: "grid",
          gap: 24,
        }}
      >

        <div className="muted" style={{ fontSize: 14 }}>
          © {new Date().getFullYear()} Anjan AI, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
