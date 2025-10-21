import { motion } from "framer-motion";

type Product = { title: string; desc: string };

const PRODUCTS: Product[] = [
  {
    title: "Prospect AI",
    desc: "Find and prioritize accounts using live intent and fit signals.",
  },
  {
    title: "Enrich AI",
    desc: "Continuously enrich contacts and companies with verified data.",
  },
  {
    title: "Engage AI",
    desc: "Trigger personalized, compliant outreach across channels.",
  },
];

function Products() {
  return (
    <section
      id="products"
      style={{
        background: "linear-gradient(180deg, #f9fafb 0%, #eef2ff 100%)",
        minHeight: "100vh", // makes section full screen
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 24px",
      }}
    >
      <div
        className="container"
        style={{
          textAlign: "center",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 700,
            color: "#1e293b",
            marginBottom: 12,
          }}
        >
          Products & Solutions
        </h2>
        <p
          style={{
            color: "#475569",
            fontSize: 18,
            marginBottom: 48,
          }}
        >
          AI modules you can adopt separately or as a unified platform.
        </p>

        <div
          style={{
            display: "grid",
            gap: 36,
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{
                background: "white",
                borderRadius: 20,
                boxShadow:
                  "0 8px 24px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.03)",
                padding: "32px 28px",
                textAlign: "left",
                transition: "all 0.3s ease",
                border: "1px solid rgba(226,232,240,0.6)",
              }}
            >
              <h3
                style={{
                  marginTop: 20,
                  marginBottom: 10,
                  fontSize: 20,
                  color: "#1e293b",
                }}
              >
                {p.title}
              </h3>
              <p style={{ color: "#475569", lineHeight: 1.6 }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
