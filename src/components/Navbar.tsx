import { useState, useEffect } from 'react'
import { FaHome, FaInfoCircle, FaBoxOpen, FaEnvelope } from 'react-icons/fa'
import logo from '../assets/image001.png' // <- Import your logo here

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#', label: 'Home', icon: <FaHome /> },
    { href: '#about', label: 'About', icon: <FaInfoCircle /> },
    { href: '#products', label: 'Products', icon: <FaBoxOpen /> },
    { href: '#contact', label: 'Contact', icon: <FaEnvelope /> },
  ]

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(12px) saturate(180%)',
        background: scrolled
          ? 'rgba(255, 255, 255, 0.85)'
          : 'linear-gradient(90deg, #eef2ff 0%, #fdf4ff 100%)',
        boxShadow: scrolled ? '0 4px 12px rgba(0,0,0,0.08)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: '1px solid rgba(99,102,241,0.1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 48px',
          height: scrolled ? 64 : 70,
          transition: 'height 0.3s ease',
        }}
      >
        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={logo}
            alt="Anjan AI Logo"
            style={{
              height: scrolled ? 60 : 60,
              transition: 'height 0.3s ease',
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'none',
            gap: 32,
            fontWeight: 500,
          }}
          className="nav-desktop"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                color: '#1e3a8a',
                fontSize: 15, // 👈 Decreased from 17 to 15
                fontWeight: 600,
                textDecoration: 'none',
                padding: '8px 14px', // slightly smaller padding
                borderRadius: 10,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  'linear-gradient(90deg, #dbeafe, #ede9fe)'
                e.currentTarget.style.color = '#1e40af'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#1e3a8a'
              }}
            >
              {item.icon} {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            fontSize: 26,
            border: 'none',
            background: 'transparent',
            color: '#1e3a8a',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            transform: open ? 'rotate(90deg)' : 'none',
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        style={{
          maxHeight: open ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s ease',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(0,0,0,0.05)',
        }}
      >
        <div style={{ padding: '16px 32px', display: 'grid', gap: 12 }}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontSize: 12, // 👈 Decreased from 18 to 16
                color: '#1e3a8a',
                textDecoration: 'none',
                fontWeight: 600,
                padding: '8px 14px',
                borderRadius: 8,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = '#e0e7ff')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = 'transparent')
              }
            >
              {item.icon} {item.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .nav-desktop { display: flex !important; }
          button { display: none !important; }
        }
      `}</style>
    </header>
  )
}

export default Navbar
