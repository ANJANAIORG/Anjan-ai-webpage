import { motion } from "framer-motion";

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
        background: "linear-gradient(180deg, #e0f2fe 0%, #f0f9ff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Soft Background Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0.5))",
          backdropFilter: "blur(8px)",
          zIndex: 0,
        }}
      />

      {/* ===================== Main Content ===================== */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "60px",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {/* ===================== Left Side: About Text ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            flex: "1 1 550px",
            textAlign: "left",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: "800",
              color: "#1e3a8a",
              marginBottom: "16px",
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
                  boxShadow: "0 6px 20px rgba(37,99,235,0.15)",
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

        {/* ===================== Right Side: Mission & Vision ===================== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            flex: "1 1 420px",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            marginTop: "30px",
          }}
        >
          {[
            {
              title: "Our Mission",
              text: "To revolutionize business operations through intelligent automation, enabling organizations to make data-driven decisions with confidence and efficiency.",
            },
            {
              title: "Our Vision",
              text: "To become a global leader in AI-driven innovation, creating scalable, ethical, and accessible solutions that transform the way businesses grow and operate.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              animate={{
                boxShadow: [
                  "0 0 25px rgba(37,99,235,0.4)",
                  "0 0 40px rgba(37,99,235,0.6)",
                  "0 0 25px rgba(37,99,235,0.4)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 45px rgba(37,99,235,0.8), 0 0 80px rgba(37,99,235,0.4)",
              }}
              style={{
                background: "linear-gradient(145deg, #ffffff, #f0f9ff)",
                padding: "40px 30px",
                borderRadius: "20px",
                textAlign: "center",
                color: "#1f2937",
                border: "1px solid rgba(37,99,235,0.2)",
                transition: "all 0.4s ease-in-out",
              }}
            >
              <h3
                style={{
                  color: "#1e3a8a",
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                }}
              >
                {card.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
