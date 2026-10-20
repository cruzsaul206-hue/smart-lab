import React, { useState } from 'react';
import { soundManager } from '../../utils/sound';
import {
  ArrowRight,
  BookOpen,
  Award,
  Layers,
  FileCheck
} from 'lucide-react';

export const FinalProtocolSection: React.FC = () => {
  const [studentName, setStudentName] = useState('');
  const [professorName, setProfessorName] = useState('');
  const [institutionName, setInstitutionName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [savedCover, setSavedCover] = useState(false);

  const handleSaveCover = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playSuccess();
    setSavedCover(true);
  };

  return (
    <section id="final-protocol" aria-label="Protocolo de cierre y personalización académica" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>MÓDULO 09 // SÍNTESIS Y ENTREGA ACADÉMICA</span>
          </div>
          <h2 className="section-title">
            FINAL <span className="text-gradient-neon">PROTOCOL</span>
          </h2>
          <p className="section-subtitle">
            Consolidación del sistema metodológico, acceso rápido a los motores operativos y módulo de personalización para entregas universitarias.
          </p>
        </div>

        {/* 5 SMART Pillars Synthesis Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
            marginBottom: '3rem'
          }}
        >
          {[
            { letter: 'S', name: 'ESPECÍFICO', desc: 'Claridad sin ambigüedad', color: '#FF00E5' },
            { letter: 'M', name: 'MEDIBLE', desc: 'Evidencias auditables', color: '#00F5FF' },
            { letter: 'A', name: 'ALCANZABLE', desc: 'Viabilidad de recursos', color: '#8A2BFF' },
            { letter: 'R', name: 'RELEVANTE', desc: 'Alineación estratégica', color: '#FF00E5' },
            { letter: 'T', name: 'TEMPORAL', desc: 'Fecha límite y cadencia', color: '#00FFA3' }
          ].map((pill) => (
            <div
              key={pill.letter}
              style={{
                background: 'rgba(16, 8, 23, 0.85)',
                border: `1px solid ${pill.color}55`,
                borderRadius: '6px',
                padding: '1.2rem',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: pill.color,
                  marginBottom: '0.2rem'
                }}
              >
                {pill.letter}
              </div>
              <div style={{ fontFamily: 'var(--font-tech)', fontSize: '0.95rem', fontWeight: 700, color: '#F5F2FF' }}>
                {pill.name}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#B7B0C8', marginTop: '0.2rem' }}>
                {pill.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Submission Customizer Box */}
        <div
          style={{
            background: 'var(--color-bg-card)',
            border: '1px solid #4B2A7C',
            clipPath: 'var(--corner-cut)',
            padding: '2.5rem',
            marginBottom: '3.5rem',
            boxShadow: '0 10px 40px rgba(5, 5, 8, 0.8)'
          }}
        >
          <div style={{ marginBottom: '1.5rem' }}>
            <span className="cyber-badge badge-cyan">PORTAFOLIO DE EVALUACIÓN</span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#F5F2FF', marginTop: '0.4rem' }}>
              PERSONALIZADOR PARA ENTREGA ESCOLAR O UNIVERSITARIA
            </h3>
            <p style={{ color: '#B7B0C8', fontSize: '0.92rem', marginTop: '0.3rem' }}>
              De acuerdo con las directrices académicas, los datos del estudiante, profesor e institución son configurables para que puedas presentar este laboratorio interactivo en tu asignatura.
            </p>
          </div>

          <form onSubmit={handleSaveCover}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.2rem',
                marginBottom: '1.5rem'
              }}
            >
              <div>
                <label
                  htmlFor="input-student-name"
                  style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#00F5FF', marginBottom: '0.3rem' }}
                >
                  NOMBRE DEL ESTUDIANTE:
                </label>
                <input
                  id="input-student-name"
                  type="text"
                  className="cyber-input"
                  placeholder="Ej. Alex Mercer"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="input-professor-name"
                  style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#00F5FF', marginBottom: '0.3rem' }}
                >
                  DOCENTE / PROFESOR(A):
                </label>
                <input
                  id="input-professor-name"
                  type="text"
                  className="cyber-input"
                  placeholder="Ej. Dr. Roberto Valdés"
                  value={professorName}
                  onChange={(e) => setProfessorName(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="input-institution-name"
                  style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#00F5FF', marginBottom: '0.3rem' }}
                >
                  INSTITUCIÓN / UNIVERSIDAD:
                </label>
                <input
                  id="input-institution-name"
                  type="text"
                  className="cyber-input"
                  placeholder="Ej. Universidad Autónoma..."
                  value={institutionName}
                  onChange={(e) => setInstitutionName(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="input-course-name"
                  style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#00F5FF', marginBottom: '0.3rem' }}
                >
                  ASIGNATURA Y GRUPO:
                </label>
                <input
                  id="input-course-name"
                  type="text"
                  className="cyber-input"
                  placeholder="Ej. Metodología de Inv. // Grupo 402"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.8rem' }}>
              <button type="submit" className="btn-cyber-primary" style={{ fontSize: '0.9rem', padding: '0.6rem 1.4rem' }}>
                <FileCheck size={16} />
                <span>GENERAR FICHA DE ENTREGA</span>
              </button>
            </div>
          </form>

          {/* Generated Cover Display */}
          {savedCover && (
            <div
              style={{
                marginTop: '2rem',
                background: 'rgba(16, 8, 23, 0.95)',
                border: '1px solid #00FFA3',
                borderRadius: '6px',
                padding: '1.5rem',
                boxShadow: '0 0 20px rgba(0, 255, 163, 0.2)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
                <Award size={18} color="#00FFA3" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#00FFA3', fontWeight: 700 }}>
                  FICHA TÉCNICA DE ENTREGA ACADÉMICA // VÁLIDA PARA EVALUACIÓN
                </span>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.88rem'
                }}
              >
                <div>
                  <span style={{ color: '#7D7594', display: 'block', fontSize: '0.75rem' }}>ESTUDIANTE:</span>
                  <span style={{ color: '#F5F2FF', fontWeight: 700 }}>{studentName || '(Sin especificar)'}</span>
                </div>
                <div>
                  <span style={{ color: '#7D7594', display: 'block', fontSize: '0.75rem' }}>PROFESOR(A):</span>
                  <span style={{ color: '#F5F2FF', fontWeight: 700 }}>{professorName || '(Sin especificar)'}</span>
                </div>
                <div>
                  <span style={{ color: '#7D7594', display: 'block', fontSize: '0.75rem' }}>INSTITUCIÓN:</span>
                  <span style={{ color: '#F5F2FF', fontWeight: 700 }}>{institutionName || '(Sin especificar)'}</span>
                </div>
                <div>
                  <span style={{ color: '#7D7594', display: 'block', fontSize: '0.75rem' }}>CURSO / ASIGNATURA:</span>
                  <span style={{ color: '#F5F2FF', fontWeight: 700 }}>{courseName || '(Sin especificar)'}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Global Action Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(255, 0, 229, 0.15), rgba(138, 43, 255, 0.2))',
            border: '1px solid #FF00E5',
            borderRadius: '8px',
            padding: '2.5rem',
            textAlign: 'center',
            boxShadow: '0 0 35px rgba(255, 0, 229, 0.3)'
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
              color: '#F5F2FF',
              marginBottom: '0.8rem'
            }}
          >
            ¿LISTO PARA CONVERTIR TUS INTENCIONES EN RESULTADOS?
          </h3>
          <p style={{ color: '#B7B0C8', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto 1.8rem auto' }}>
            Accede al Goal Hacker para estructurar tu próximo objetivo o repasa las fuentes verificadas para sustentar tu investigación.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <a href="#builder" onClick={() => soundManager.playSuccess()} className="btn-cyber-primary">
              <span>IR AL CONSTRUCTOR DE OBJETIVOS</span>
              <ArrowRight size={18} />
            </a>
            <a href="#references" onClick={() => soundManager.playClick()} className="btn-cyber-secondary">
              <BookOpen size={18} />
              <span>CONSULTAR BIBLIOGRAFÍA</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
