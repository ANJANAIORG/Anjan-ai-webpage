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

  const cards = [
    {
      title: "Our Mission",
      text: "To revolutionize business operations through intelligent automation, enabling organizations to make data-driven decisions efficiently.",
    },
    {
      title: "Our Vision",
      text: "To become a global leader in AI-driven innovation, creating scalable, ethical, and accessible solutions that redefine growth.",
    },
  ];

  return (
    <section
      id="about"
      style={{
        padding: "80px 0",
        background: "linear-gradient(180deg, #e0f2fe 0%, #f0f9ff 100%)",
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
            "linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0.5))",
          backdropFilter: "blur(6px)",
          zIndex: 0,
        }}
      />

      {/* Main Content */}
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
          maxWidth: "1150px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Left Side: About Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            flex: "1 1 480px",
            textAlign: "left",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 38px)",
              fontWeight: "700",
              color: "#1e3a8a",
              marginBottom: "12px",
            }}
          >
            About Us
          </h2>

          <h3
            style={{
              fontSize: "clamp(18px, 3vw, 24px)",
              color: "#2563eb",
              marginBottom: "16px",
              fontWeight: "600",
            }}
          >
            Accelerate Your Growth With Intelligent AI Solutions
          </h3>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "#111827",
              marginBottom: "28px",
              maxWidth: "90%",
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
              gap: "12px",
              marginTop: "10px",
            }}
          >
            {points.map((point, index) => (
              <motion.div
                key={index}
                variants={pointVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 3px 10px rgba(37,99,235,0.12)",
                }}
                transition={{ type: "spring", stiffness: 150 }}
                style={{
                  color: "#111827",
                  fontSize: "0.95rem",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  maxWidth: "700px",
                }}
              >
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#2563eb",
                    display: "inline-block",
                  }}
                />
                {point}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side: Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            flex: "1 1 340px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            marginTop: "16px",
          }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              animate={{
                boxShadow: [
                  "0 0 14px rgba(37,99,235,0.4)",
                  "0 0 24px rgba(37,99,235,0.5)",
                  "0 0 14px rgba(37,99,235,0.4)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.04,
                boxShadow:
                  "0 0 28px rgba(37,99,235,0.6), 0 0 50px rgba(37,99,235,0.3)",
              }}
              style={{
                background: "transparent",
                padding: "24px 20px",
                borderRadius: "14px",
                textAlign: "center",
                color: "#1f2937",
                border: "1px solid rgba(37,99,235,0.25)",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <h3
                style={{
                  color: "#1e3a8a",
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  marginBottom: "10px",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.6,
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
