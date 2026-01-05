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
      className="section"
      style={{
        background: "linear-gradient(180deg, #f9fafb 0%, #f0f9ff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Main Content */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "4rem",
          alignItems: "flex-start",
        }}
      >
        {/* Left Side: About Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "#1e3a8a",
              marginBottom: "0.75rem",
              lineHeight: 1.2,
            }}
          >
            About Us
          </h2>

          <h3
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
              color: "#2563eb",
              marginBottom: "1.5rem",
              fontWeight: 600,
              lineHeight: 1.3,
              textRendering: "optimizeLegibility",
              letterSpacing: "-0.01em",
            }}
          >
            Accelerate Your Growth With Intelligent AI Solutions
          </h3>

          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "#4b5563",
              marginBottom: "2rem",
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
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {points.map((point, index) => (
              <motion.div
                key={index}
                variants={pointVariants}
                whileHover={{
                  x: 4,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  padding: "0.75rem",
                  borderRadius: "0.5rem",
                  background: "white",
                  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                  transition: "all 0.2s ease",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#2563eb",
                    display: "inline-block",
                    marginTop: "0.5rem",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    color: "#111827",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    lineHeight: 1.6,
                  }}
                >
                  {point}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side: Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -4,
              }}
              transition={{ duration: 0.2 }}
              style={{
                background: "white",
                padding: "2rem",
                borderRadius: "1rem",
                textAlign: "left",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                border: "1px solid rgba(15, 23, 42, 0.08)",
                transition: "all 0.2s ease",
              }}
            >
              <h3
                style={{
                  color: "#1e3a8a",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  marginBottom: "0.75rem",
                  lineHeight: 1.2,
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "#4b5563",
                  margin: 0,
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
