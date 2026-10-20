import React from 'react';
import { Target, ArrowUp } from 'lucide-react';
import { soundManager } from '../../utils/sound';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      role="contentinfo"
      style={{
        background: '#050508',
        borderTop: '1px solid #2E1C4A',
        padding: '3.5rem 1.5rem 2rem 1.5rem',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2.5rem',
          marginBottom: '2.5rem'
        }}
      >
        {/* Brand Col */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                background: 'linear-gradient(135deg, #FF00E5, #8A2BFF)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Target size={18} color="#FFFFFF" />
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 900, color: '#F5F2FF' }}>
              SMART<span style={{ color: '#00F5FF' }}>//</span>LAB
            </div>
          </div>
          <p style={{ fontFamily: 'var(--font-tech)', fontSize: '1.05rem', color: '#00F5FF', letterSpacing: '0.06em', marginBottom: '0.8rem' }}>
            "TUS METAS. TU FUTURO. TU SISTEMA."
          </p>
          <p style={{ color: '#B7B0C8', fontSize: '0.9rem', lineHeight: 1.5 }}>
            Laboratorio digital educativo de alta fidelidad para la formulación, auditoría y ejecución de objetivos bajo el marco metodológico SMART.
          </p>
        </div>

        {/* Quick Module Navigation */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#00F5FF', marginBottom: '1rem', letterSpacing: '0.1em' }}>
            MÓDULOS DEL SISTEMA
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.92rem' }}>
            <li>
              <a href="#overview" onClick={() => soundManager.playClick()} style={{ color: '#B7B0C8', textDecoration: 'none' }}>
                &gt; Visión y Comparativa
              </a>
            </li>
            <li>
              <a href="#criteria" onClick={() => soundManager.playClick()} style={{ color: '#B7B0C8', textDecoration: 'none' }}>
                &gt; Criterios SMART (S-M-A-R-T)
              </a>
            </li>
            <li>
              <a href="#historical" onClick={() => soundManager.playClick()} style={{ color: '#B7B0C8', textDecoration: 'none' }}>
                &gt; Archivo Histórico Doran (1981)
              </a>
            </li>
            <li>
              <a href="#builder" onClick={() => soundManager.playClick()} style={{ color: '#B7B0C8', textDecoration: 'none' }}>
                &gt; Goal Hacker (Constructor)
              </a>
            </li>
            <li>
              <a href="#quiz" onClick={() => soundManager.playClick()} style={{ color: '#B7B0C8', textDecoration: 'none' }}>
                &gt; Neural Test (Cuestionario)
              </a>
            </li>
            <li>
              <a href="#simulator" onClick={() => soundManager.playClick()} style={{ color: '#B7B0C8', textDecoration: 'none' }}>
                &gt; Training Simulator
              </a>
            </li>
            <li>
              <a href="#references" onClick={() => soundManager.playClick()} style={{ color: '#B7B0C8', textDecoration: 'none' }}>
                &gt; Archivo Bibliográfico
              </a>
            </li>
          </ul>
        </div>

        {/* Accessibility & Tech info */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#00FFA3', marginBottom: '1rem', letterSpacing: '0.1em' }}>
            ARQUITECTURA & ACCESIBILIDAD
          </h4>
          <div style={{ color: '#B7B0C8', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div>• Compatible con <code>prefers-reduced-motion</code></div>
            <div>• Navegación por teclado completa & focos visibles</div>
            <div>• React 19 + TypeScript + Vite 8</div>
            <div>• Despliegue estático optimizado para Netlify</div>
            <div>• Sin rastreadores de terceros ni telemetría invasiva</div>
          </div>

          <div style={{ marginTop: '1.2rem' }}>
            <button
              onClick={scrollToTop}
              className="btn-cyber-outline"
              style={{ fontSize: '0.78rem', padding: '0.4rem 0.8rem' }}
              aria-label="Volver arriba"
            >
              <ArrowUp size={13} />
              <span>VOLVER AL INICIO</span>
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          borderTop: '1px solid #1C132B',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: '#7D7594'
        }}
      >
        <div>
          SMART//LAB © {CURRENT_YEAR} — CYBERPUNK EDUCATIONAL PLATFORM.
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span>CYBERPUNK POR FUERA // EXCELENCIA ACADÉMICA POR DENTRO</span>
        </div>
      </div>
    </footer>
  );
};
