import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

function Hero() {
  const vantaRef = useRef<HTMLElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
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
        color: 0x1e3a8a,
        backgroundColor: 0xe0f2fe,
        points: 14.0,
        maxDistance: 22.0,
        spacing: 14.0,
        showDots: true,
      });
    }

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <section ref={vantaRef} className="hero-section" aria-labelledby="hero-title">
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 id="hero-title">
            Transforming Businesses With <br /> Intelligent AI Solutions
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
          padding: 60px 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-content {
          text-align: center;
          display: grid;
          gap: 20px;
          justify-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-content h1 {
          font-size: clamp(40px, 4vw, 65px); /* 🔹 Reduced size */
          font-weight: 800;
          line-height: 1.15;
          margin: 0;
          letter-spacing: -0.01em;
          background: linear-gradient(90deg, #111827, #1e3a8a, #2563eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 3px 8px rgba(0,0,0,0.1);
        }

        .muted {
          color: #1e3a8a;
          font-size: 16px; /* 🔹 Slightly smaller text */
          max-width: 680px;
          line-height: 1.55;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.45);
          border-radius: 10px;
          padding: 10px 14px;
          backdrop-filter: blur(6px);
        }

        @media (max-width: 768px) {
          .hero-container {
            padding: 50px 16px;
          }

          .hero-content h1 {
            font-size: 28px;
          }

          .muted {
            font-size: 14.5px;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
