import React from 'react';
import { HoloTarget } from '../ui/HoloTarget';
import { soundManager } from '../../utils/sound';
import { ArrowRight, Compass, Cpu } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Portada principal SMART//LAB"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        overflow: 'hidden'
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(255, 0, 229, 0.12) 0%, rgba(138, 43, 255, 0.08) 50%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="section-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '3rem'
          }}
        >
          {/* Left Column: Headlines & CTAs */}
          <div>
            {/* Visual protocol badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'rgba(255, 0, 229, 0.1)',
                border: '1px solid #FF00E5',
                padding: '0.4rem 0.9rem',
                borderRadius: '4px',
                marginBottom: '1.5rem',
                boxShadow: '0 0 15px rgba(255, 0, 229, 0.3)'
              }}
            >
              <Cpu size={14} color="#00F5FF" />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: '#00F5FF'
                }}
              >
                SMART GOAL LAB // EDUCATIONAL PROTOCOL
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: '-0.01em',
                textTransform: 'uppercase',
                color: '#F5F2FF',
                marginBottom: '1.4rem'
              }}
            >
              DEJA DE PERSEGUIR IDEAS.{' '}
              <span
                style={{
                  display: 'block',
                  background: 'linear-gradient(135deg, #FF00E5 0%, #8A2BFF 50%, #00F5FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 25px rgba(255, 0, 229, 0.5))'
                }}
              >
                EMPIEZA A CONSTRUIR OBJETIVOS.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                color: '#B7B0C8',
                lineHeight: 1.6,
                marginBottom: '2.4rem',
                maxWidth: '560px'
              }}
            >
              Descubre la metodología SMART, transforma tus metas y convierte tus intenciones en planes que puedas evaluar con rigor metodológico.
            </p>

            {/* Call to Actions */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center'
              }}
            >
              <a
                href="#builder"
                onClick={() => soundManager.playSuccess()}
                className="btn-cyber-primary"
                id="hero-cta-builder"
              >
                <span>INICIALIZAR EXPERIENCIA</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#criteria"
                onClick={() => soundManager.playClick()}
                className="btn-cyber-secondary"
                id="hero-cta-explore"
              >
                <Compass size={18} />
                <span>EXPLORAR SMART</span>
              </a>
            </div>

            {/* Quick Metrics / Academic Assurance */}
            <div
              style={{
                marginTop: '3rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid #2E1C4A',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.8rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: '#7D7594'
              }}
            >
              <div>
                <span style={{ color: '#00F5FF', fontWeight: 700, display: 'block' }}>5 CRITERIOS</span>
                <span>METODOLOGÍA COMPLETA</span>
              </div>
              <div>
                <span style={{ color: '#FF00E5', fontWeight: 700, display: 'block' }}>DORAN 1981</span>
                <span>ORIGEN HISTÓRICO DOC.</span>
              </div>
              <div>
                <span style={{ color: '#00FFA3', fontWeight: 700, display: 'block' }}>100% AUDITABLE</span>
                <span>SIN ENLACES FALSOS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Holographic Targeting Console */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            {/* Holographic Radar Element */}
            <HoloTarget />

            {/* Floating telemetry panel */}
            <div
              style={{
                marginTop: '-1.5rem',
                background: 'rgba(23, 16, 34, 0.95)',
                border: '1px solid #4B2A7C',
                clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                padding: '0.8rem 1.4rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                zIndex: 2
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#00FFA3',
                    boxShadow: '0 0 8px #00FFA3'
                  }}
                />
                <span style={{ color: '#F5F2FF' }}>SYSTEM: OPERATIVO</span>
              </div>
              <div style={{ color: '#7D7594' }}>|</div>
              <div style={{ color: '#00F5FF' }}>LATENCIA: 0.1ms</div>
              <div style={{ color: '#7D7594' }}>|</div>
              <div style={{ color: '#FF00E5' }}>MODO: ACADÉMICO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
