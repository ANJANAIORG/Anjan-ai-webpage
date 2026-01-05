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
        zIndex: 1000,
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        background: scrolled
          ? 'rgba(255, 255, 255, 0.9)'
          : 'rgba(255, 255, 255, 0.8)',
        boxShadow: scrolled
          ? '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
          : 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        borderBottom: '1px solid rgba(15, 23, 42, 0.08)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: scrolled ? 64 : 72,
          transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <img
            src={logo}
            alt="Anjan AI Logo"
            style={{
              height: scrolled ? 48 : 52,
              width: 'auto',
              transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.5rem',
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
                gap: '0.5rem',
                color: '#1e3a8a',
                fontSize: '0.9375rem',
                fontWeight: 500,
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(30, 58, 138, 0.08)'
                e.currentTarget.style.color = '#1e40af'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#1e3a8a'
              }}
            >
              <span style={{ fontSize: '0.875rem' }}>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '2.5rem',
            height: '2.5rem',
            fontSize: '1.5rem',
            border: 'none',
            background: 'transparent',
            color: '#1e3a8a',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            borderRadius: '0.5rem',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(30, 58, 138, 0.08)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
          }}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        style={{
          maxHeight: open ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(15, 23, 42, 0.08)',
        }}
      >
        <div
          className="container"
          style={{
            padding: '1rem 0',
            display: 'grid',
            gap: '0.25rem',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.9375rem',
                color: '#1e3a8a',
                textDecoration: 'none',
                fontWeight: 500,
                padding: '0.75rem 1rem',
                borderRadius: '0.5rem',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(30, 58, 138, 0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <span style={{ fontSize: '1rem' }}>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .nav-desktop { display: flex !important; }
          button[aria-label="Toggle menu"] { display: none !important; }
        }
      `}</style>
    </header>
  )
}

export default Navbar
