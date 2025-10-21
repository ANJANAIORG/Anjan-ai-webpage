function Footer() {
  return (
    <footer aria-labelledby="footer-title" style={{ borderTop: '1px solid rgba(15,23,42,0.08)' }}>
      <div className="container" style={{ padding: '36px 0', display: 'grid', gap: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 24, height: 24, borderRadius: 6, background: 'linear-gradient(135deg, #6f7cff, #8ad8ff)' }} />
          <strong id="footer-title">Anjan AI</strong>
        </div>
        <div className="muted" style={{ fontSize: 14 }}>© {new Date().getFullYear()} Anjan AI, Inc. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer


