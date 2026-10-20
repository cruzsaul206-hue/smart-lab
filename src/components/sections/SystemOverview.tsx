import React, { useState } from 'react';
import { soundManager } from '../../utils/sound';
import { Zap, CheckCircle2, AlertOctagon, Layers } from 'lucide-react';

export const SystemOverview: React.FC = () => {
  const [selectedVersion, setSelectedVersion] = useState<'flawed' | 'structured'>('structured');
  const [activeHighlight, setActiveHighlight] = useState<string | null>(null);

  const handleVersionChange = (version: 'flawed' | 'structured') => {
    soundManager.playClick();
    setSelectedVersion(version);
  };

  return (
    <section id="overview" aria-label="Visión general del sistema SMART" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Zap size={14} />
            <span>MÓDULO 01 // ARQUITECTURA METODOLÓGICA</span>
          </div>
          <h2 className="section-title">
            ¿QUÉ ES <span className="text-gradient-neon">SMART</span>?
          </h2>
          <p className="section-subtitle">
            Un marco de ingeniería cognitiva para transformar anhelos abstractos en protocolos de ejecución cuantificables y auditables.
          </p>
        </div>

        {/* 3 Pillars of Problem-Solving Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem'
          }}
        >
          <div className="cyber-card">
            <div
              style={{
                width: '42px',
                height: '42px',
                background: 'rgba(255, 0, 229, 0.15)',
                border: '1px solid #FF00E5',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.2rem'
              }}
            >
              <AlertOctagon size={22} color="#FF00E5" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: '0.6rem', color: '#F5F2FF' }}>
              EL PROBLEMA: LA ILUSIÓN DE ACCIÓN
            </h3>
            <p style={{ color: '#B7B0C8', fontSize: '0.95rem', lineHeight: 1.6 }}>
              La mayoría de los proyectos universitarios y profesionales fracasan no por falta de talento, sino por intenciones gaseosas como <em>"estudiaré más"</em> o <em>"mejoraré mi productividad"</em>, que carecen de coordenadas de inicio, evaluación o finalización.
            </p>
          </div>

          <div className="cyber-card">
            <div
              style={{
                width: '42px',
                height: '42px',
                background: 'rgba(0, 245, 255, 0.15)',
                border: '1px solid #00F5FF',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.2rem'
              }}
            >
              <Layers size={22} color="#00F5FF" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: '0.6rem', color: '#F5F2FF' }}>
              LA SOLUCIÓN: PROTOCOLO ESTRUCTURADO
            </h3>
            <p style={{ color: '#B7B0C8', fontSize: '0.95rem', lineHeight: 1.6 }}>
              SMART descompone la meta en cinco filtros obligatorios: <strong>Específico</strong> (resultado claro), <strong>Medible</strong> (evidencia auditable), <strong>Alcanzable</strong> (recursos reales), <strong>Relevante</strong> (prioridad estratégica) y <strong>Temporal</strong> (fecha y cadencia fija).
            </p>
          </div>

          <div className="cyber-card">
            <div
              style={{
                width: '42px',
                height: '42px',
                background: 'rgba(138, 43, 255, 0.18)',
                border: '1px solid #8A2BFF',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.2rem'
              }}
            >
              <CheckCircle2 size={22} color="#8A2BFF" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: '0.6rem', color: '#F5F2FF' }}>
              CONTEXTOS DE APLICACIÓN
            </h3>
            <p style={{ color: '#B7B0C8', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Aplicado rigurosamente en planes de estudio universitarios, investigación científica, metodologías ágiles de ingeniería de software, salud pública comunitaria y planeación estratégica de carrera.
            </p>
          </div>
        </div>

        {/* Interactive Comparison Console */}
        <div
          style={{
            background: 'var(--color-bg-card)',
            border: '1px solid #4B2A7C',
            clipPath: 'var(--corner-cut)',
            padding: '2rem',
            position: 'relative',
            boxShadow: '0 10px 40px rgba(5, 5, 8, 0.8)'
          }}
        >
          {/* Console Header */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              borderBottom: '1px solid #2E1C4A',
              paddingBottom: '1.2rem',
              marginBottom: '1.8rem'
            }}
          >
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#00F5FF', letterSpacing: '0.1em' }}>
                TELEMETRÍA COMPARATIVA // ANÁLISIS DE CASO
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: '#F5F2FF', marginTop: '0.2rem' }}>
                INTENCIÓN DIFUSA vs. OBJETIVO SMART ESTRUCTURADO
              </h3>
            </div>

            {/* Toggle switch */}
            <div
              style={{
                display: 'flex',
                background: 'rgba(16, 8, 23, 0.9)',
                border: '1px solid #2E1C4A',
                borderRadius: '4px',
                padding: '0.25rem'
              }}
            >
              <button
                onClick={() => handleVersionChange('flawed')}
                style={{
                  background: selectedVersion === 'flawed' ? 'rgba(255, 51, 102, 0.2)' : 'transparent',
                  color: selectedVersion === 'flawed' ? '#FF3366' : '#7D7594',
                  border: selectedVersion === 'flawed' ? '1px solid #FF3366' : 'none',
                  borderRadius: '3px',
                  fontFamily: 'var(--font-tech)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  padding: '0.45rem 1rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                1. INTENCIÓN DIFUSA
              </button>
              <button
                onClick={() => handleVersionChange('structured')}
                style={{
                  background: selectedVersion === 'structured' ? 'linear-gradient(135deg, #FF00E5, #8A2BFF)' : 'transparent',
                  color: selectedVersion === 'structured' ? '#FFFFFF' : '#7D7594',
                  border: selectedVersion === 'structured' ? '1px solid #FF00E5' : 'none',
                  borderRadius: '3px',
                  fontFamily: 'var(--font-tech)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  padding: '0.45rem 1rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                2. OBJETIVO ESTRUCTURADO
              </button>
            </div>
          </div>

          {/* Comparison Content Display */}
          {selectedVersion === 'flawed' ? (
            <div
              style={{
                background: 'rgba(255, 51, 102, 0.05)',
                border: '1px dashed rgba(255, 51, 102, 0.4)',
                borderRadius: '6px',
                padding: '2rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
                <span className="cyber-badge badge-warning">DESESTRUCTURADO // ALTO RIESGO DE ABANDONO</span>
              </div>
              <blockquote
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem',
                  color: '#FF6B8B',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  marginBottom: '1.2rem'
                }}
              >
                "Quiero mejorar en programación."
              </blockquote>
              <div
                style={{
                  background: 'rgba(16, 8, 23, 0.8)',
                  border: '1px solid rgba(255, 51, 102, 0.3)',
                  padding: '1rem',
                  borderRadius: '4px',
                  color: '#B7B0C8',
                  fontSize: '0.92rem',
                  lineHeight: 1.6
                }}
              >
                <strong style={{ color: '#FF3366', display: 'block', marginBottom: '0.3rem' }}>
                  ¿Por qué fracasa este planteamiento?
                </strong>
                No define qué lenguaje o rama de la programación estudiará (falta S), no indica cómo se comprobará si mejoró (falta M), no considera el tiempo real de práctica (falta A), no vincula la acción con un propósito académico o laboral directo (falta R), y al carecer de fecha límite (falta T), se posterga indefinidamente.
              </div>
            </div>
          ) : (
            <div
              style={{
                background: 'rgba(0, 245, 255, 0.04)',
                border: '1px solid rgba(0, 245, 255, 0.4)',
                borderRadius: '6px',
                padding: '2rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
                <span className="cyber-badge badge-success">ESTRUCTURADO // PROTOCOLO SMART VALIDADO</span>
              </div>
              <blockquote
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.25rem',
                  lineHeight: 1.7,
                  color: '#F5F2FF',
                  marginBottom: '1.5rem',
                  paddingLeft: '1rem',
                  borderLeft: '3px solid #00F5FF'
                }}
              >
                <span
                  style={{
                    background: activeHighlight === 'T' ? 'rgba(0, 245, 255, 0.3)' : 'transparent',
                    borderBottom: '2px solid #00F5FF',
                    padding: '0 3px',
                    transition: 'all 0.2s'
                  }}
                >
                  Durante las próximas ocho semanas
                </span>
                ,{' '}
                <span
                  style={{
                    background: activeHighlight === 'A' ? 'rgba(138, 43, 255, 0.35)' : 'transparent',
                    borderBottom: '2px solid #8A2BFF',
                    padding: '0 3px',
                    transition: 'all 0.2s'
                  }}
                >
                  dedicaré 45 minutos de lunes a viernes
                </span>{' '}
                a{' '}
                <span
                  style={{
                    background: activeHighlight === 'S' ? 'rgba(255, 0, 229, 0.35)' : 'transparent',
                    borderBottom: '2px solid #FF00E5',
                    padding: '0 3px',
                    transition: 'all 0.2s'
                  }}
                >
                  practicar programación
                </span>{' '}
                y resolveré{' '}
                <span
                  style={{
                    background: activeHighlight === 'M' ? 'rgba(0, 255, 163, 0.35)' : 'transparent',
                    borderBottom: '2px solid #00FFA3',
                    padding: '0 3px',
                    transition: 'all 0.2s'
                  }}
                >
                  al menos dos ejercicios por sesión. Registraré mis avances cada domingo
                </span>{' '}
                y{' '}
                <span
                  style={{
                    background: activeHighlight === 'R' ? 'rgba(255, 184, 0, 0.35)' : 'transparent',
                    borderBottom: '2px solid #FFB800',
                    padding: '0 3px',
                    transition: 'all 0.2s'
                  }}
                >
                  completaré un pequeño proyecto al finalizar el periodo
                </span>
                .
              </blockquote>

              {/* Criteria Decomposition Chips */}
              <div style={{ marginTop: '1.5rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#B7B0C8', display: 'block', marginBottom: '0.6rem' }}>
                  INTERACTÚA CON LOS COMPONENTES PARA IDENTIFICAR CADA CRITERIO:
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {[
                    { key: 'S', color: '#FF00E5', label: 'S: Práctica focalizada y proyecto' },
                    { key: 'M', color: '#00FFA3', label: 'M: 2 ejercicios/sesión + registro domingos' },
                    { key: 'A', color: '#8A2BFF', label: 'A: 45 min/día lun-vie (dosis realista)' },
                    { key: 'R', color: '#FFB800', label: 'R: Consolidar habilidades en proyecto' },
                    { key: 'T', color: '#00F5FF', label: 'T: 8 semanas de marco temporal' }
                  ].map((chip) => (
                    <button
                      key={chip.key}
                      onClick={() => {
                        soundManager.playBeep(800, 0.04);
                        setActiveHighlight(activeHighlight === chip.key ? null : chip.key);
                      }}
                      style={{
                        background: activeHighlight === chip.key ? chip.color : 'rgba(23, 16, 34, 0.9)',
                        color: activeHighlight === chip.key ? '#050508' : chip.color,
                        border: `1px solid ${chip.color}`,
                        borderRadius: '4px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '0.35rem 0.8rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: activeHighlight === chip.key ? `0 0 12px ${chip.color}` : 'none'
                      }}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pedagogy Note */}
              <div
                style={{
                  marginTop: '1.4rem',
                  padding: '0.8rem 1rem',
                  background: 'rgba(16, 8, 23, 0.9)',
                  borderLeft: '3px solid #8A2BFF',
                  fontSize: '0.82rem',
                  color: '#B7B0C8',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <strong style={{ color: '#F5F2FF' }}>NOTA METODOLÓGICA:</strong> Se trata de un ejemplo ilustrativo. La viabilidad concreta (45 min/día, 2 ejercicios) dependerá siempre de los recursos, responsabilidades y contexto particular de cada estudiante o profesional.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
