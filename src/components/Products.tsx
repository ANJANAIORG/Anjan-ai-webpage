import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import biBg from "../assets/bi_reporting.jpg";
import convAiBg from "../assets/conversational-ai.jpg";
import forecastingBg from "../assets/forecasting.jpg";

export type Capability = {
  title: string;
  description: string;
};

export type ProductCard = {
  title: string;
  tagline: string;
  description: string;
  additionalDescription?: string;
  capabilities: Capability[];
  impact: string[];
  image: string;
};

export const PRODUCTS: ProductCard[] = [
  {
    title: "Business Intelligence & Dashboarding",
    tagline: "From fragmented data to a single source of truth",
    description:
      "Most organizations struggle with disconnected data, inconsistent metrics, and dashboards that report outcomes without context. Our Business Intelligence vertical is designed to solve these challenges by creating a robust, scalable analytics foundation that supports both strategic and operational decision-making.",
    additionalDescription:
      "We go beyond traditional reporting by focusing on decision-oriented analytics—ensuring every metric, visualization, and report is tied to a real business question.",
    capabilities: [
      {
        title: "Data Integration & Modeling",
        description:
          "We integrate data from ERP systems, supply chain platforms, finance, sales, procurement, and external sources into a harmonized analytics layer. Data models are designed to ensure consistency, accuracy, and scalability across teams and use cases.",
      },
      {
        title: "Executive & Operational Dashboards",
        description:
          "We design role-based dashboards that surface north-star metrics, KPIs, trends, and exceptions. Executives get high-level visibility, while operators and analysts can drill into root causes without switching tools.",
      },
      {
        title: "Insight-Driven Reporting",
        description:
          "Our reports are built to explain performance—not just display numbers. We highlight drivers, variances, risks, and opportunities so users understand why results changed and what actions to consider next.",
      },
      {
        title: "Advanced & Predictive Analytics",
        description:
          "Using historical and real-time data, we enable trend analysis, early-warning indicators, and predictive signals that help organizations anticipate outcomes rather than react to them.",
      },
      {
        title: "AI-Enhanced Analytics",
        description:
          "Automation and machine learning are applied where they create real value—such as anomaly detection, pattern recognition, and proactive alerts—reducing manual effort and accelerating insight delivery.",
      },
    ],
    impact: [
      "Faster, more confident decision-making",
      "Alignment across leadership and operations",
      "Reduced reporting effort and dependency on IT",
      "Improved visibility into performance drivers",
    ],
    image: biBg,
  },
  {
    title: "Conversational AI for Supply Chain Intelligence",
    tagline: "Talk to your data. Understand it. Trust it.",
    description:
      "Our conversational AI product redefines how teams interact with enterprise data. Built specifically for supply chain-driven organizations, it allows users to ask questions in natural language and receive accurate, explainable, and verifiable answers—instantly.",
    additionalDescription:
      "This is not a black-box chatbot. It is a decision-grade AI analyst that combines analytics, reasoning, and transparency.",
    capabilities: [
      {
        title: "North-Star Metrics & KPI Monitoring",
        description:
          "The system continuously tracks critical supply chain metrics—such as service levels, lead times, inventory health, supplier performance, and cost drivers—providing immediate visibility into business health.",
      },
      {
        title: "Natural Language Querying",
        description:
          'Users can ask questions like: "Why did inventory increase last quarter?", "Which suppliers are causing service delays?", "What changed in procurement costs this month?" The AI interprets intent, identifies relevant datasets, and generates precise, data-backed responses.',
      },
      {
        title: "Explainable & Transparent Responses",
        description:
          "Every answer includes a clear explanation of: data sources used, filters and calculations applied, and logical steps taken to arrive at the conclusion. This ensures trust, auditability, and confidence in every insight delivered.",
      },
      {
        title: "Verifiable & Reproducible Analysis",
        description:
          "All analyses can be validated and reproduced by users. Calculations are visible, assumptions are explicit, and outputs align directly with underlying data—making the system suitable for enterprise governance and compliance needs.",
      },
      {
        title: "Self-Service Intelligence at Scale",
        description:
          "Business users gain immediate access to insights without relying on analysts or technical teams, dramatically reducing bottlenecks and improving decision velocity.",
      },
    ],
    impact: [
      "Faster insight discovery across the organization",
      "Reduced dependency on data and analytics teams",
      "Higher trust in AI-driven decisions",
      "Democratized access to complex analytics",
    ],
    image: convAiBg,
  },
  {
    title: "Sales Forecasting & Procurement Planning",
    tagline: "Predict demand. Plan supply. Reduce risk.",
    description:
      "In volatile markets, reactive planning leads to excess inventory, missed sales, and cost overruns. Our Sales Forecasting & Procurement Planning vertical enables organizations to shift from reactive decisions to predictive, scenario-driven planning.",
    additionalDescription:
      "We combine statistical methods, AI-driven forecasting, and domain-specific logic to create plans that are realistic, transparent, and actionable.",
    capabilities: [
      {
        title: "Sales & Demand Forecasting",
        description:
          "We generate forecasts across products, regions, customers, and time horizons using historical trends, seasonality, external drivers, and business inputs. Forecasts are explainable and continuously refined as new data becomes available.",
      },
      {
        title: "Procurement & Supply Planning",
        description:
          "Forecast outputs are translated into procurement plans that consider lead times, supplier constraints, cost variability, and service level targets—ensuring supply aligns with demand.",
      },
      {
        title: "Scenario & What-If Planning",
        description:
          "Teams can simulate scenarios such as demand spikes, supplier delays, price changes, or policy impacts—allowing leaders to understand trade-offs and choose optimal strategies.",
      },
      {
        title: "Inventory Optimization",
        description:
          "We help balance inventory levels to minimize stockouts, reduce excess working capital, and improve cash flow—without compromising service levels.",
      },
      {
        title: "Risk Identification & Mitigation",
        description:
          "The system highlights vulnerabilities in supply chains, such as supplier concentration risk or long lead-time exposure, enabling proactive mitigation.",
      },
    ],
    impact: [
      "Improved forecast accuracy",
      "Lower inventory carrying costs",
      "Reduced procurement risk",
      "Better alignment between sales, operations, and finance",
    ],
    image: forecastingBg,
  },
];

export default function Products() {
  const navigate = useNavigate();

  const handleViewMore = (product: ProductCard) => {
    navigate("/product", { state: { product } });
  };

  return (
    <section
      id="products"
      className="section"
      style={{
        background: "linear-gradient(180deg, #f9fafb 0%, #f0f9ff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto 3rem auto",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
              fontWeight: 700,
              color: "#1e3a8a",
              marginBottom: "0.5rem",
              lineHeight: 1.2,
            }}
          >
            Products and Services
          </h2>
        </div>

        {/* Products Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "0 auto 3rem auto",
          }}
        >
          {PRODUCTS.map((product, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "1.5rem",
                overflow: "hidden",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                border: "1px solid rgba(15, 23, 42, 0.08)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
              }}
            >
              {/* Image Header */}
              <div
                style={{
                  height: "280px",
                  background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${product.image}) center/cover no-repeat`,
                  position: "relative",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                      fontWeight: 700,
                      color: "white",
                      marginBottom: "0.5rem",
                      lineHeight: 1.2,
                      textRendering: "optimizeLegibility",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {product.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.95)",
                      fontWeight: 500,
                      lineHeight: 1.4,
                      marginBottom: "1rem",
                    }}
                  >
                    {product.tagline}
                  </p>
                  
                  {/* View More Button - Small */}
                  <button
                    onClick={() => handleViewMore(product)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "0.5rem 1rem",
                      background: "white",
                      color: "#1e3a8a",
                      borderRadius: "0.375rem",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#1e3a8a";
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 15px 30px -5px rgba(0, 0, 0, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "white";
                      e.currentTarget.style.color = "#1e3a8a";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 10px 25px -5px rgba(0, 0, 0, 0.3)";
                    }}
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Text */}
        <div
          style={{
            textAlign: "center",
            padding: "2rem",
            background: "white",
            borderRadius: "1rem",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            border: "1px solid rgba(15, 23, 42, 0.08)",
          }}
        >
          <p
            style={{
              fontSize: "1.125rem",
              color: "#111827",
              lineHeight: 1.7,
              margin: 0,
              fontWeight: 500,
              textRendering: "optimizeLegibility",
            }}
          >
            From dashboards to conversations to forecasts, we help organizations see clearly, act decisively, and plan confidently.
          </p>
        </div>
      </div>
    </section>
  );
}
