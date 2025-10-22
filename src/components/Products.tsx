import "bootstrap/dist/css/bootstrap.min.css";
import erpBg from "../assets/ERP.jpg";
import biBg from "../assets/bi_reporting.jpg";
import convAiBg from "../assets/conversational-ai.jpg";
import anomalyBg from "../assets/anamoly.jpg";
import forecastingBg from "../assets/forecasting.jpg";

type CardItem = {
  title: string;
  desc: string;
};

const CARDS: CardItem[] = [
  {
    title: "Open source ERP",
    desc: "Our ERP solutions unify core business processes, enabling efficient resource management, and real-time insights for scalable growth."
  },
  {
    title: "Conversational AI",
    desc: "Enable intelligent chatbots and virtual assistants to enhance customer engagement and automate workflows.",
  },
  {
    title: "BI reporting",
    desc: "Transform your data into actionable insights with interactive dashboards and business intelligence tools.",
  },
  {
    title: "Anomaly detection",
    desc: "Automatically detect unusual patterns and potential issues in your data for faster decision-making.",
  },
  {
    title: "Forecasting",
    desc: "Predict trends and future outcomes using advanced AI-driven forecasting models.",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      style={{
        background: "linear-gradient(180deg, #e0f2fe 0%, #f0f9ff 100%)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.5))",
          backdropFilter: "blur(6px)",
          zIndex: 0,
        }}
      />

      {/* Section Header */}
      <div
        style={{
          textAlign: "center",
          maxWidth: 1200,
          margin: "0 auto 40px auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontSize: "clamp(24px, 3.5vw, 36px)",
            fontWeight: 700,
            color: "#1e3a8a",
            marginBottom: 8,
          }}
        >
          Products and Services
        </h2>
        <h3
          style={{
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "#2563eb",
            fontWeight: 600,
            marginBottom: 16,
          }}
        >
          Empowering Businesses with Scalable AI & ERP Solutions
        </h3>
      </div>

      {/* Horizontal Scroll Cards */}
      <div
        style={{
          display: "flex",
          gap: "24px",
          overflowX: "auto",
          scrollBehavior: "smooth",
          padding: "12px 0",
          position: "relative",
          zIndex: 1,
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
        className="hide-scrollbar"
      >
        {CARDS.map((card, index) => {
          let backgroundStyle = "rgba(255,255,255,0.85)";
          let color = "#1f2937";

          if (index === 0) backgroundStyle = `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${erpBg}) center/cover no-repeat`, color = "white";
          else if (index === 1) backgroundStyle = `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${convAiBg}) center/cover no-repeat`, color = "white";
          else if (index === 2) backgroundStyle = `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${biBg}) center/cover no-repeat`, color = "white";
          else if (index === 3) backgroundStyle = `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${anomalyBg}) center/cover no-repeat`, color = "white";
          else if (index === 4) backgroundStyle = `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${forecastingBg}) center/cover no-repeat`, color = "white";

          return (
            <div
              key={card.title}
              style={{
                flex: "0 0 350px",
                minHeight: 350,
                background: backgroundStyle,
                color,
                borderRadius: 20,
                boxShadow: "0 0 20px rgba(37,99,235,0.15), 0 6px 16px rgba(37,99,235,0.1)",
                padding: 24,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid rgba(37,99,235,0.2)",
                textAlign: "center",
                transition: "all 0.3s ease-in-out",
                cursor: "grab",
              }}
            >
              <h3
                style={{
                  marginBottom: 12,
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color,
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: index < 5 ? "rgba(255,255,255,0.9)" : "#111827",
                }}
              >
                {card.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Inline style for scrollbar hiding */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}
      </style>
    </section>
  );
}
