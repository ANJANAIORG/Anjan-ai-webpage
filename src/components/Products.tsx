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
        padding: "60px 16px", // Reduced padding
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
          maxWidth: 1000,
          margin: "0 auto 24px auto", // Decreased gap to cards
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontSize: "clamp(22px, 3vw, 32px)",
            fontWeight: 700,
            color: "#1e3a8a",
            marginBottom: 6,
          }}
        >
          Products and Services
        </h2>
        <h3
          style={{
            fontSize: "clamp(14px, 2vw, 18px)",
            color: "#2563eb",
            fontWeight: 600,
            marginBottom: 12, // Decreased gap
          }}
        >
          Empowering Businesses with Scalable AI & ERP Solutions
        </h3>
      </div>

      {/* Horizontal Scroll Cards */}
      <div
        style={{
          display: "flex",
          gap: "16px", // Reduced gap between cards
          overflowX: "auto",
          scrollBehavior: "smooth",
          padding: "8px 0",
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
                flex: "0 0 300px", // Smaller width
                minHeight: 300,     // Smaller height
                background: backgroundStyle,
                color,
                borderRadius: 18,
                boxShadow: "0 0 18px rgba(37,99,235,0.15), 0 5px 14px rgba(37,99,235,0.1)",
                padding: 20,
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
                  marginBottom: 10,
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color,
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  lineHeight: 1.5,
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
