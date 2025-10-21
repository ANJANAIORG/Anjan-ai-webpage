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
          width: 100vw;
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
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(3px);
          z-index: 0;
        }

        .hero-container {
          z-index: 1;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-content {
          text-align: center;
          display: grid;
          gap: 24px;
          justify-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-content h1 {
          font-size: clamp(42px, 5vw, 72px);
          font-weight: 800;
          line-height: 1.1;
          margin: 0;
          letter-spacing: -0.02em;
          background: linear-gradient(90deg, #111827, #1e3a8a, #2563eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .muted {
          color: #1e3a8a;
          font-size: 18px;
          max-width: 720px;
          line-height: 1.6;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 12px;
          padding: 12px 16px;
          backdrop-filter: blur(8px);
        }

        @media (max-width: 768px) {
          .hero-container {
            padding: 60px 16px;
          }

          .hero-content h1 {
            font-size: 36px;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;

