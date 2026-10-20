import React, { useState, useEffect } from 'react';
import { soundManager } from '../../utils/sound';
import { Terminal, ShieldCheck, FastForward } from 'lucide-react';

interface BootSequenceProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  'INITIALIZING SMART PROTOCOL v2.6...',
  'CALIBRATING COGNITIVE CO-PROCESSOR...',
  'LOADING GOAL FRAMEWORK: SPECIFIC, MEASURABLE, ACHIEVABLE, RELEVANT, TIME-BOUND...',
  'SYNCHRONIZING WITH HISTORICAL ARCHIVES (DORAN 1981)...',
  'SYSTEM ONLINE. WELCOME OPERATOR.'
];

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    soundManager.playBoot();

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }
        return prev + 25;
      });
    }, 380);

    const logInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < BOOT_LOGS.length - 1) {
          soundManager.playBeep(700 + prev * 80, 0.03, 'sine');
          return prev + 1;
        }
        clearInterval(logInterval);
        return prev;
      });
    }, 350);

    return () => {
      clearInterval(interval);
      clearInterval(logInterval);
    };
  }, [onComplete]);

  const handleSkip = () => {
    soundManager.playClick();
    onComplete();
  };

  return (
    <div
      role="region"
      aria-label="Secuencia de inicialización del sistema"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#050508',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}
    >
      <div
        style={{
          maxWidth: '580px',
          width: '100%',
          background: 'rgba(16, 8, 23, 0.95)',
          border: '1px solid #4B2A7C',
          borderRadius: '8px',
          padding: '2rem',
          boxShadow: '0 0 40px rgba(138, 43, 255, 0.35)',
          position: 'relative',
          clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'
        }}
      >
        {/* Terminal Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #2E1C4A',
            paddingBottom: '0.8rem',
            marginBottom: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Terminal size={18} color="#00F5FF" />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: '#00F5FF',
                letterSpacing: '0.1em'
              }}
            >
              SMART//LAB_KERNEL_BOOT
            </span>
          </div>
          <button
            onClick={handleSkip}
            className="btn-cyber-outline"
            style={{ fontSize: '0.75rem', padding: '0.3rem 0.7rem' }}
            aria-label="Omitir secuencia de arranque"
          >
            <FastForward size={12} />
            OMITIR INICIO
          </button>
        </div>

        {/* Brand visual */}
        <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2.2rem',
              fontWeight: 900,
              letterSpacing: '0.15em',
              color: '#F5F2FF',
              textShadow: '0 0 15px #FF00E5'
            }}
          >
            SMART<span style={{ color: '#00F5FF' }}>//</span>LAB
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-tech)',
              fontSize: '0.95rem',
              letterSpacing: '0.15em',
              color: '#B7B0C8',
              marginTop: '0.3rem'
            }}
          >
            TUS METAS. TU FUTURO. TU SISTEMA.
          </p>
        </div>

        {/* Boot Terminal Output */}
        <div
          style={{
            background: '#0B0512',
            border: '1px solid #24143D',
            padding: '1rem',
            borderRadius: '4px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: '#B7B0C8',
            minHeight: '120px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
            marginBottom: '1.5rem'
          }}
        >
          {BOOT_LOGS.slice(0, currentStep + 1).map((log, index) => (
            <div
              key={index}
              style={{
                color: index === currentStep ? '#00F5FF' : '#7D7594',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span style={{ color: '#FF00E5' }}>&gt;</span>
              <span>{log}</span>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: '#B7B0C8',
              marginBottom: '0.4rem'
            }}
          >
            <span>STATUS: {progress < 100 ? 'CARGANDO MÓDULOS' : 'OPERATIVO'}</span>
            <span style={{ color: '#00F5FF' }}>{progress}%</span>
          </div>
          <div
            style={{
              height: '6px',
              background: '#1A0E2B',
              borderRadius: '3px',
              overflow: 'hidden',
              border: '1px solid #2E1C4A'
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #FF00E5, #8A2BFF, #00F5FF)',
                boxShadow: '0 0 10px #00F5FF',
                transition: 'width 0.3s ease'
              }}
            />
          </div>
        </div>

        <div
          style={{
            marginTop: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: '#7D7594'
          }}
        >
          <ShieldCheck size={14} color="#00FFA3" />
          <span>ENTORNO ACADÉMICO SEGURO // RECURSOS VERIFICADOS</span>
        </div>
      </div>
    </div>
  );
};
