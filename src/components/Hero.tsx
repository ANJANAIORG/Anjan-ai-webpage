import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

function Hero() {
  const vantaRef = useRef<HTMLElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    // Initialize Vanta.js NET background
    if (vantaRef.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x1e3a8a,        // Deep blue lines
      backgroundColor: 0xe0f2fe, // 🔹 Light blue background (#E0F2FE)
      points: 14.0,
      maxDistance: 22.0,
      spacing: 14.0,
      showDots: true,
      });
    }

    // Cleanup on unmount
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <section ref={vantaRef} className="hero-section" aria-labelledby="hero-title">
      {/* Optional overlay to make text stand out */}
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 id="hero-title">
            Transforming Businesses With Intelligent AI Solutions
          </h1>

          <motion.p
            className="muted"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Anjan AI designs custom AI agents and ERP+AI automations that
            streamline operations, improve decisions, and deliver measurable
            growth for modern enterprises.
          </motion.p>
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          color: #111827;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(2px);
          z-index: 0;
        }

        .hero-container {
          z-index: 1;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 5rem 1.25rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: center;
          position: relative;
          z-index: 2;
          max-width: 900px;
        }

        .hero-content h1 {
          font-size: clamp(0.5rem, 3vw, 2.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin: 0;
          letter-spacing: -0.01em;
          background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #1e40af 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .hero-content .muted {
          color: #4b5563;
          font-size: clamp(1rem, 2vw, 1.125rem);
          max-width: 680px;
          line-height: 1.7;
          margin: 0;
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .hero-container {
            padding: 4rem 1rem;
          }

          .hero-content {
            gap: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;

