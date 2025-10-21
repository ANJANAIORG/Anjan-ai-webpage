function CTA() {
  return (
    <section id="start" className="section" aria-labelledby="cta-title">
      <div className="container">
        <div className="surface" style={{ padding: 28, textAlign: 'center' }}>
          <h2 id="cta-title" style={{ fontSize: 'clamp(24px, 4.2vw, 40px)', margin: 0 }}>Start building with Anjan AI</h2>
          <p className="muted" style={{ marginTop: 8, marginBottom: 16 }}>Spin up your first workflow in minutes, no credit card required.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="btn" href="#start">Start building for free →</a>
            <a className="btn secondary" href="#demo">Get a demo</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA


