import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Terminal, Target } from 'lucide-react';
import { soundManager } from '../../utils/sound';

interface NavbarProps {
  onReboot: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReboot }) => {
  const [soundOn, setSoundOn] = useState(soundManager.isEnabled());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !soundOn;
    setSoundOn(nextState);
    soundManager.setEnabled(nextState);
  };

  const navLinks = [
    { label: 'Visión', href: '#overview' },
    { label: 'Criterios', href: '#criteria' },
    { label: 'Historia (Doran)', href: '#historical' },
    { label: 'Goal Hacker', href: '#builder' },
    { label: 'Neural Test', href: '#quiz' },
    { label: 'Simulador', href: '#simulator' },
    { label: 'Misión', href: '#mission-control' },
    { label: 'Fuentes', href: '#references' }
  ];

  const handleLinkClick = () => {
    soundManager.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header
      role="banner"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(5, 5, 8, 0.92)' : 'rgba(16, 8, 23, 0.8)',
        backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${scrolled ? '#4B2A7C' : 'rgba(46, 28, 74, 0.6)'}`,
        transition: 'all 0.3s ease'
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0.75rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}
      >
        {/* Brand / Logo */}
        <a
          href="#"
          onClick={() => soundManager.playClick()}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none',
            color: '#F5F2FF'
          }}
          aria-label="SMART//LAB Inicio"
        >
          <div
            style={{
              width: '34px',
              height: '34px',
              background: 'linear-gradient(135deg, #FF00E5, #8A2BFF)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 12px rgba(255, 0, 229, 0.5)'
            }}
          >
            <Target size={20} color="#FFFFFF" />
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 900,
                letterSpacing: '0.12em',
                lineHeight: 1
              }}
            >
              SMART<span style={{ color: '#00F5FF' }}>//</span>LAB
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                color: '#00F5FF',
                letterSpacing: '0.08em'
              }}
            >
              CYBER_ACADEMIC_SYS
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          aria-label="Navegación principal"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.2rem'
          }}
          className="desktop-nav-container"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '0.98rem',
                fontWeight: 600,
                color: '#B7B0C8',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                transition: 'all 0.2s ease',
                padding: '0.3rem 0.2rem',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00F5FF';
                e.currentTarget.style.textShadow = '0 0 8px rgba(0, 245, 255, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#B7B0C8';
                e.currentTarget.style.textShadow = 'none';
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          {/* Sound FX Toggle */}
          <button
            onClick={toggleSound}
            aria-label={soundOn ? 'Desactivar efectos de sonido' : 'Activar efectos de sonido sintetizados'}
            title={soundOn ? 'Audio Cyberpunk Activado' : 'Audio Cyberpunk Silenciado'}
            className="btn-cyber-outline"
            style={{
              borderColor: soundOn ? '#00F5FF' : '#2E1C4A',
              color: soundOn ? '#00F5FF' : '#7D7594',
              background: soundOn ? 'rgba(0, 245, 255, 0.08)' : 'transparent',
              padding: '0.45rem 0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            {soundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
            <span style={{ fontSize: '0.72rem', display: 'none' }} className="sound-text">
              {soundOn ? 'FX: ON' : 'FX: OFF'}
            </span>
          </button>

          {/* Reboot Button */}
          <button
            onClick={() => {
              soundManager.playClick();
              onReboot();
            }}
            aria-label="Reinicializar terminal de arranque"
            title="Reiniciar Secuencia de Inicio"
            className="btn-cyber-outline"
            style={{ padding: '0.45rem 0.65rem' }}
          >
            <Terminal size={15} />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => {
              soundManager.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
            aria-expanded={mobileMenuOpen}
            className="btn-cyber-outline mobile-menu-toggle"
            style={{ padding: '0.45rem 0.75rem' }}
          >
            {mobileMenuOpen ? <X size={20} color="#FF00E5" /> : <Menu size={20} color="#00F5FF" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-label="Menú móvil"
          style={{
            background: 'rgba(16, 8, 23, 0.98)',
            borderBottom: '2px solid #FF00E5',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.8)'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#F5F2FF',
                textDecoration: 'none',
                padding: '0.5rem 0',
                borderBottom: '1px solid #24143D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{link.label}</span>
              <span style={{ color: '#00F5FF', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>&gt;&gt;</span>
            </a>
          ))}
          <div style={{ paddingTop: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#7D7594' }}>
              SMART PROTOCOL v2.6
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#00FFA3' }}>
              ONLINE // 2026
            </span>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav-container {
            display: flex !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
          .sound-text {
            display: inline !important;
          }
        }
      `}</style>
    </header>
  );
};
