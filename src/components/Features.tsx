type Feature = {
  title: string
  desc: string
}

const FEATURES: Feature[] = [
  { title: 'AI Agents', desc: 'Automate outreach with agents that personalize at scale.' },
  { title: 'Data Enrichment', desc: 'Unify signals across sources to build a live ICP.' },
  { title: 'Intent Signals', desc: 'Identify high-intent accounts before the competition.' },
]

function Features() {
  return (
    <section id="features" className="section" aria-labelledby="features-title">
      <div className="container">
        <h2 id="features-title" style={{ fontSize: 'clamp(24px, 4.2vw, 40px)', marginBottom: 8 }}>Everything you need to go-to-market with AI</h2>
        <p className="muted" style={{ marginBottom: 24 }}>Modular building blocks to discover, enrich, and engage your best customers.</p>
        <div className="grid cols-3">
          {FEATURES.map((f) => (
            <article key={f.title} className="surface" style={{ padding: 20 }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: 'linear-gradient(135deg, #6f7cff, #8ad8ff)' }} />
              <h3 style={{ marginTop: 14, marginBottom: 8 }}>{f.title}</h3>
              <p className="muted" style={{ margin: 0 }}>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features


