type Card = { title: string; points: string[] };

const SOLUTIONS: Card[] = [
  {
    title: "Prospecting",
    points: [
      "Find net-new accounts",
      "Route by ICP fit",
      "Trigger multichannel sequences",
    ],
  },
  {
    title: "Enrichment",
    points: [
      "Unify fragmented data",
      "Resolve identities",
      "Keep records continuously fresh",
    ],
  },
  {
    title: "Activation",
    points: [
      "Ship signals to CRM",
      "Personalize content",
      "Attribute pipeline impact",
    ],
  },
];

function Solutions() {
  return (
    <section
      id="solutions"
      className="section"
      aria-labelledby="solutions-title"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)",
        padding: "80px 0",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <h2
          id="solutions-title"
          style={{
            fontSize: "clamp(28px, 4.2vw, 40px)",
            marginBottom: 12,
            color: "#1e293b",
          }}
        >
          Solutions for every go-to-market team
        </h2>
        <p
          className="muted"
          style={{ marginBottom: 36, color: "#475569", fontSize: 18 }}
        >
          Designed for sales, marketing, and ops to collaborate on shared
          revenue outcomes.
        </p>

        <div
          className="grid cols-3"
          style={{
            display: "grid",
            gap: 28,
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {SOLUTIONS.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="surface"
              style={{
                background: "white",
                borderRadius: 16,
                boxShadow:
                  "0 4px 20px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.05)",
                padding: 24,
                textAlign: "left",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  color: "#1e293b",
                  marginBottom: 12,
                }}
              >
                {s.title}
              </h3>
              <ul style={{ margin: 0, paddingLeft: 18, color: "#475569" }}>
                {s.points.map((p) => (
                  <li key={p} style={{ margin: "8px 0" }}>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Solutions };