import React from 'react';
import { ACADEMIC_REFERENCES } from '../../data/referencesData';
import { soundManager } from '../../utils/sound';
import { Database, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

export const DataArchiveSection: React.FC = () => {
  return (
    <section id="references" aria-label="Archivo de investigación y referencias académicas" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Database size={14} />
            <span>MÓDULO 08 // ARCHIVO BIBLIOGRÁFICO Y FUENTES</span>
          </div>
          <h2 className="section-title">
            DATA <span className="text-gradient-neon">ARCHIVE</span>
          </h2>
          <p className="section-subtitle">
            Citas académicas, fuentes primarias verificadas y literatura científica revisada por pares que sustentan el rigor metodológico de SMART//LAB.
          </p>
        </div>

        {/* References List Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {ACADEMIC_REFERENCES.map((ref) => (
            <div
              key={ref.id}
              className="cyber-card"
              style={{
                padding: '2rem'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}
              >
                <div>
                  <span className="cyber-badge badge-purple" style={{ marginBottom: '0.4rem' }}>
                    {ref.verifiedLabel}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.3rem',
                      color: '#F5F2FF',
                      lineHeight: 1.3
                    }}
                  >
                    {ref.title}
                  </h3>
                  <div
                    style={{
                      fontFamily: 'var(--font-tech)',
                      fontSize: '1rem',
                      color: '#00F5FF',
                      marginTop: '0.2rem'
                    }}
                  >
                    {ref.author} ({ref.year})
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClick()}
                    className="btn-cyber-primary"
                    style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
                  >
                    <span>ACCEDER A LA FUENTE</span>
                    <ExternalLink size={13} />
                  </a>

                  {ref.secondaryUrl && (
                    <a
                      href={ref.secondaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundManager.playClick()}
                      className="btn-cyber-outline"
                      style={{ fontSize: '0.8rem', padding: '0.5rem 1rem', color: '#00FFA3', borderColor: '#00FFA3' }}
                    >
                      <FileText size={13} />
                      <span>PDF DISPONIBLE</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>

              {/* Publication details */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: '#7D7594',
                  marginBottom: '1rem'
                }}
              >
                {ref.publication}
              </div>

              {/* Abstract Summary */}
              <p style={{ color: '#B7B0C8', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                {ref.abstractSummary}
              </p>

              {/* APA Citation & Verification Status Box */}
              <div
                style={{
                  background: 'rgba(16, 8, 23, 0.9)',
                  border: '1px solid #24143D',
                  padding: '1rem',
                  borderRadius: '4px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={14} color="#00FFA3" />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#00FFA3' }}>
                    {ref.verificationNote}
                  </span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#7D7594', fontStyle: 'italic' }}>
                  Cita APA: {ref.apaCitation}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
