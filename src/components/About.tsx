import { motion } from "framer-motion";
import aiImage from "../assets/ai_image.png"; // Adjust the path if needed

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const pointVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

function About() {
  const points = [
    "Smart AI Agents for Business Automation and Customer Engagement",
    "Predictive Analytics and Real-Time Insights for Better Decisions",
    "Computer Vision & IoT Solutions for Seamless Digital Transformation",
  ];

  return (
    <section
      id="about"
      style={{
        padding: "100px 0",
        backgroundColor: "#e0f2fe", // Light sky blue background
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.5))",
          backdropFilter: "blur(8px)",
          zIndex: 0,
        }}
      />

      {/* Main Content */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "row", // Ensures text left, image right
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {/* ===================== Left Side: Text ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            flex: "1 1 500px",
            textAlign: "left",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: "800",
              color: "#1e3a8a",
              marginBottom: "16px",
              letterSpacing: "-0.5px",
            }}
          >
            About Us
          </h2>

          <h3
            style={{
              fontSize: "clamp(22px, 4vw, 30px)",
              color: "#2563eb",
              marginBottom: "24px",
              fontWeight: "600",
            }}
          >
            Accelerate Your Growth With Intelligent AI Solutions
          </h3>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#111827",
              marginBottom: "48px",
              maxWidth: "85%",
            }}
          >
            Anjan AI specializes in crafting custom AI agents and ERP+AI systems
            that think, learn, and adapt to your business. Through data,
            algorithms, and automation, we empower organizations to streamline
            operations and unlock new opportunities in the digital era.
          </p>

          {/* Bullet Points */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              marginTop: "24px",
            }}
          >
            {points.map((point, index) => (
              <motion.div
                key={index}
                variants={pointVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                }}
                transition={{ type: "spring", stiffness: 150 }}
                style={{
                  backgroundColor: "#fff",
                  padding: "16px 20px",
                  borderRadius: "16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  color: "#111827",
                  fontSize: "1rem",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  maxWidth: "750px",
                }}
              >
                <span
                  style={{
                    fontSize: "1.4rem",
                    color: "#1e3a8a",
                  }}
                >
                  ✔️
                </span>
                {point}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ===================== Right Side: Image ===================== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            flex: "1 1 400px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={aiImage}
            alt="AI Illustration"
            style={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: "20px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
