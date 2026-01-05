import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaArrowLeft, 
  FaDatabase, 
  FaChartBar, 
  FaFileAlt, 
  FaChartLine, 
  FaBrain,
  FaChartPie,
  FaComments,
  FaShieldAlt,
  FaCheckCircle,
  FaSearch,
  FaShoppingCart,
  FaCalculator,
  FaBox,
  FaExclamationTriangle
} from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import type { ProductCard } from "./Products";

export default function ProductDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product as ProductCard | undefined;

  // Redirect to home if no product is found
  useEffect(() => {
    if (!product) {
      navigate("/");
    }
  }, [product, navigate]);

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [product?.title]);

  // If no product, return null (will redirect)
  if (!product) {
    return null;
  }

  const handleBack = () => {
    navigate("/");
    // Small delay to ensure navigation completes, then scroll to products
    setTimeout(() => {
      const productsSection = document.getElementById("products");
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  // Function to get appropriate icon based on capability title
  const getCapabilityIcon = (title: string) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes("data integration") || titleLower.includes("modeling")) {
      return <FaDatabase size={20} />;
    }
    if (titleLower.includes("dashboard")) {
      return <FaChartBar size={20} />;
    }
    if (titleLower.includes("reporting") || titleLower.includes("report")) {
      return <FaFileAlt size={20} />;
    }
    if (titleLower.includes("predictive") || titleLower.includes("forecast")) {
      return <FaChartLine size={20} />;
    }
    if (titleLower.includes("ai") || titleLower.includes("enhanced")) {
      return <FaBrain size={20} />;
    }
    if (titleLower.includes("kpi") || titleLower.includes("metrics")) {
      return <FaChartPie size={20} />;
    }
    if (titleLower.includes("language") || titleLower.includes("query")) {
      return <FaComments size={20} />;
    }
    if (titleLower.includes("explainable") || titleLower.includes("transparent")) {
      return <FaShieldAlt size={20} />;
    }
    if (titleLower.includes("verifiable") || titleLower.includes("reproducible")) {
      return <FaCheckCircle size={20} />;
    }
    if (titleLower.includes("self-service") || titleLower.includes("intelligence")) {
      return <FaSearch size={20} />;
    }
    if (titleLower.includes("demand") || titleLower.includes("sales")) {
      return <FaShoppingCart size={20} />;
    }
    if (titleLower.includes("procurement") || titleLower.includes("supply")) {
      return <FaBox size={20} />;
    }
    if (titleLower.includes("scenario") || titleLower.includes("what-if")) {
      return <FaCalculator size={20} />;
    }
    if (titleLower.includes("inventory")) {
      return <FaBox size={20} />;
    }
    if (titleLower.includes("risk")) {
      return <FaExclamationTriangle size={20} />;
    }
    return <FaChartBar size={20} />;
  };

  return (
    <div className="wrapper">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="grow"
        style={{
          background: "linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <div 
          className="container" 
          style={{ 
            position: "relative",
            padding: "1.5rem 1.5rem 3rem 1.5rem",
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          {/* Back Button */}
          <button
            onClick={handleBack}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1.5rem",
              padding: "0.625rem 1rem",
              background: "white",
              border: "1px solid rgba(15, 23, 42, 0.1)",
              borderRadius: "0.5rem",
              color: "#1e3a8a",
              fontSize: "0.875rem",
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.06)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f9fafb";
              e.currentTarget.style.borderColor = "#1e3a8a";
              e.currentTarget.style.transform = "translateX(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.borderColor = "rgba(15, 23, 42, 0.1)";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            <FaArrowLeft size={14} />
            <span>Back to Products</span>
          </button>

          {/* Title Section */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
                fontWeight: 700,
                color: "#1e3a8a",
                marginBottom: "1rem",
                lineHeight: 1.3,
                textRendering: "optimizeLegibility",
                letterSpacing: "-0.02em",
              }}
            >
              {product.title}
            </h1>
            <p
              style={{
                fontSize: "clamp(0.9375rem, 1.75vw, 1rem)",
                color: "#4b5563",
                fontWeight: 500,
                lineHeight: 1.5,
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              {product.tagline}
            </p>
          </div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              display: "block",
              visibility: "visible",
              width: "100%",
            }}
          >
            {/* Description */}
            <div
              style={{
                maxWidth: "900px",
                margin: "0 auto 3rem auto",
              }}
            >
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: "#374151",
                  margin: "0 0 1.25rem 0",
                  textAlign: "left",
                }}
              >
                {product.description}
              </p>
              {product.additionalDescription && (
                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                    color: "#6b7280",
                    margin: 0,
                    textAlign: "left",
                  }}
                >
                  {product.additionalDescription}
                </p>
              )}
            </div>

            {/* Core Capabilities */}
            <div
              style={{
                marginBottom: "2rem",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(1.25rem, 2.25vw, 1.5rem)",
                  fontWeight: 700,
                  color: "#1e3a8a",
                  marginBottom: "1.5rem",
                  textRendering: "optimizeLegibility",
                  textAlign: "center",
                }}
              >
                Core Capabilities
              </h2>

              <div
                style={{
                  display: "flex",
                  overflowX: "auto",
                  gap: "1.5rem",
                  paddingBottom: "1rem",
                  scrollBehavior: "smooth",
                  WebkitOverflowScrolling: "touch",
                  scrollbarWidth: "thin",
                  scrollbarColor: "#cbd5e1 #f1f5f9",
                }}
                onWheel={(e) => {
                  e.currentTarget.scrollLeft += e.deltaY;
                }}
              >
                {product.capabilities.map((capability, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    style={{
                      minWidth: "320px",
                      maxWidth: "320px",
                      padding: "1.75rem",
                      background: "white",
                      borderRadius: "0.75rem",
                      border: "1px solid rgba(15, 23, 42, 0.08)",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                      transition: "all 0.2s ease",
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
                      e.currentTarget.style.borderColor = "rgba(30, 58, 138, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
                      e.currentTarget.style.borderColor = "rgba(15, 23, 42, 0.08)";
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "0.75rem",
                        background: "linear-gradient(135deg, #2563eb, #1e40af)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1.25rem",
                        color: "white",
                      }}
                    >
                      {getCapabilityIcon(capability.title)}
                    </div>
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#111827",
                        marginBottom: "0.75rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {capability.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "#6b7280",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {capability.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Custom scrollbar styling */}
              <style>
                {`
                  div[style*="overflowX"]::-webkit-scrollbar {
                    height: 8px;
                  }
                  div[style*="overflowX"]::-webkit-scrollbar-track {
                    background: #f1f5f9;
                    borderRadius: 4px;
                  }
                  div[style*="overflowX"]::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    borderRadius: 4px;
                  }
                  div[style*="overflowX"]::-webkit-scrollbar-thumb:hover {
                    background: #94a3b8;
                  }
                `}
              </style>
            </div>

            {/* Business Impact */}
            <div
              style={{
                background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)",
                borderRadius: "1rem",
                padding: "2.5rem 2rem",
                color: "white",
                marginBottom: "2rem",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(1.25rem, 2.25vw, 1.5rem)",
                  fontWeight: 700,
                  color: "white",
                  marginBottom: "2rem",
                  textRendering: "optimizeLegibility",
                  textAlign: "center",
                }}
              >
                Business Impact
              </h2>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "1.25rem",
                  }}
                >
                  {product.impact.map((impact, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.875rem",
                        padding: "1rem",
                        background: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "0.625rem",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          background: "#10b981",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "0.125rem",
                        }}
                      >
                        <span style={{ color: "white", fontWeight: 700, fontSize: "0.875rem" }}>✓</span>
                      </div>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          lineHeight: 1.6,
                          color: "rgba(255,255,255,0.95)",
                          margin: 0,
                          fontWeight: 500,
                        }}
                      >
                        {impact}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

            {/* CTA Section */}
            <div
              style={{
                textAlign: "center",
                padding: "3rem 1.5rem",
                background: "white",
                borderRadius: "1rem",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                border: "1px solid rgba(15, 23, 42, 0.08)",
              }}
            >
              <p
                style={{
                  fontSize: "1rem",
                  color: "#374151",
                  marginBottom: "1.5rem",
                  lineHeight: 1.6,
                  fontWeight: 500,
                }}
              >
                Ready to transform your business with {product.title}?
              </p>
              <button
                onClick={() => {
                  handleBack();
                  // Small delay to ensure state update, then scroll to contact
                  setTimeout(() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }, 100);
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.875rem 2rem",
                  background: "#1e3a8a",
                  color: "white",
                  borderRadius: "0.5rem",
                  fontWeight: 600,
                  fontSize: "1rem",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#2563eb";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#1e3a8a";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
                }}
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
}

