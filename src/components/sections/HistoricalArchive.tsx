import React from 'react';
import { DORAN_ARCHIVE_DATA, HISTORICAL_COMPARISON } from '../../data/historicalDoran';
import { BookOpen, ExternalLink, History, Award, FileText } from 'lucide-react';
import { soundManager } from '../../utils/sound';

export const HistoricalArchive: React.FC = () => {
  return (
    <section id="historical" aria-label="Archivo histórico de la metodología SMART" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <History size={14} />
            <span>MÓDULO 03 // ARCHIVO HISTÓRICO Y ORIGEN</span>
          </div>
          <h2 className="section-title">
            GEORGE T. DORAN <span className="text-gradient-cyan">(1981)</span>
          </h2>
          <p className="section-subtitle">
            Génesis de la metodología en <em>Management Review</em>, evolución terminológica y desmitificación de falacias comunes sobre el acrónimo.
          </p>
        </div>

        {/* Paper & Archival Details Card */}
        <div
          style={{
            background: 'var(--color-bg-card)',
            border: '1px solid #4B2A7C',
            clipPath: 'var(--corner-cut)',
            padding: '2.5rem',
            marginBottom: '3rem',
            boxShadow: '0 10px 40px rgba(5, 5, 8, 0.8)'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
              alignItems: 'start'
            }}
          >
            {/* Left: Origin Details */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
                <span className="cyber-badge badge-purple">DOCUMENTO HISTÓRICO FUNDACIONAL</span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.45rem',
                  color: '#F5F2FF',
                  marginBottom: '1rem',
                  lineHeight: 1.3
                }}
              >
                "{DORAN_ARCHIVE_DATA.articleTitle}"
              </h3>
              <p style={{ color: '#B7B0C8', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                En noviembre de 1981, <strong>George T. Doran</strong>, consultor y exdirector de planeación corporativa de Washington Water Power Company, publicó en el foro de la <em>American Management Association</em> un ensayo pionero con la intención de proporcionar a los mandos directivos una regla mnemotécnica pragmática para redactar objetivos que no se diluyeran en generalidades burocráticas.
              </p>

              <div
                style={{
                  background: 'rgba(16, 8, 23, 0.9)',
                  border: '1px solid #2E1C4A',
                  padding: '1rem',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: '#B7B0C8',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                  marginBottom: '1.5rem'
                }}
              >
                <div>
                  <span style={{ color: '#00F5FF' }}>PUBLICACIÓN:</span> {DORAN_ARCHIVE_DATA.journal}
                </div>
                <div>
                  <span style={{ color: '#FF00E5' }}>VOLUMEN / PÁGINAS:</span> {DORAN_ARCHIVE_DATA.publicationDate}
                </div>
                <div>
                  <span style={{ color: '#00FFA3' }}>REGISTRO EBSCO:</span> gcd:6043491
                </div>
              </div>

              {/* Verified Links Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                <a
                  href={DORAN_ARCHIVE_DATA.ebscoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playClick()}
                  className="btn-cyber-outline"
                  style={{ color: '#00F5FF', borderColor: '#00F5FF' }}
                >
                  <FileText size={14} />
                  <span>REGISTRO BIBLIOGRÁFICO EBSCO</span>
                  <ExternalLink size={12} />
                </a>

                <a
                  href={DORAN_ARCHIVE_DATA.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playClick()}
                  className="btn-cyber-outline"
                  style={{ color: '#FF00E5', borderColor: '#FF00E5' }}
                >
                  <BookOpen size={14} />
                  <span>PDF DEL ARTÍCULO (DECISIONSKILLS)</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Right: Key Insights of Doran */}
            <div
              style={{
                background: 'rgba(16, 8, 23, 0.85)',
                border: '1px solid #24143D',
                borderRadius: '6px',
                padding: '1.5rem'
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--font-tech)',
                  fontSize: '1.15rem',
                  color: '#00F5FF',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1.2rem'
                }}
              >
                <Award size={18} />
                <span>CLAVES DEL ARTÍCULO DE 1981</span>
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {DORAN_ARCHIVE_DATA.essentialInsights.map((insight, idx) => (
                  <div key={idx} style={{ borderLeft: '2px solid #8A2BFF', paddingLeft: '0.9rem' }}>
                    <div style={{ fontFamily: 'var(--font-tech)', fontWeight: 700, fontSize: '0.95rem', color: '#F5F2FF', marginBottom: '0.2rem' }}>
                      {insight.title}
                    </div>
                    <div style={{ fontSize: '0.88rem', color: '#B7B0C8', lineHeight: 1.5 }}>
                      {insight.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Historical Evolution Matrix Table */}
        <div
          style={{
            background: 'var(--color-bg-card)',
            border: '1px solid #2E1C4A',
            clipPath: 'var(--corner-cut)',
            padding: '2rem',
            overflowX: 'auto'
          }}
        >
          <div style={{ marginBottom: '1.5rem' }}>
            <span className="cyber-badge badge-cyan">MATRIZ EVOLUTIVA</span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#F5F2FF', marginTop: '0.4rem' }}>
              FORMULACIÓN ORIGINAL DORAN (1981) vs. ESTÁNDAR EDUCATIVO ACTUAL
            </h3>
            <p style={{ color: '#B7B0C8', fontSize: '0.9rem', marginTop: '0.3rem' }}>
              Nótese cómo la letra "A" cambió de <em>Assignable</em> a <em>Achievable</em>, y la letra "R" mutó de <em>Realistic</em> a <em>Relevant</em>.
            </p>
          </div>

          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontFamily: 'var(--font-body)',
              fontSize: '0.92rem',
              color: '#B7B0C8',
              minWidth: '650px'
            }}
          >
            <thead>
              <tr style={{ background: 'rgba(16, 8, 23, 0.9)', borderBottom: '2px solid #8A2BFF' }}>
                <th style={{ padding: '0.85rem 1rem', textAlign: 'left', fontFamily: 'var(--font-mono)', color: '#00F5FF' }}>
                  LETRA
                </th>
                <th style={{ padding: '0.85rem 1rem', textAlign: 'left', fontFamily: 'var(--font-mono)', color: '#FF00E5' }}>
                  DORAN 1981 (ORIGINAL)
                </th>
                <th style={{ padding: '0.85rem 1rem', textAlign: 'left', fontFamily: 'var(--font-mono)', color: '#00FFA3' }}>
                  ESTÁNDAR CONTEMPORÁNEO
                </th>
                <th style={{ padding: '0.85rem 1rem', textAlign: 'left', fontFamily: 'var(--font-mono)', color: '#F5F2FF' }}>
                  TRANSICIÓN CONCEPTUAL
                </th>
              </tr>
            </thead>
            <tbody>
              {HISTORICAL_COMPARISON.map((row) => (
                <tr
                  key={row.letter}
                  style={{
                    borderBottom: '1px solid #24143D',
                    transition: 'background 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(138, 43, 255, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <td style={{ padding: '0.85rem 1rem', fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 900, color: '#00F5FF' }}>
                    {row.letter}
                  </td>
                  <td style={{ padding: '0.85rem 1rem' }}>
                    <div style={{ fontWeight: 700, color: '#F5F2FF' }}>{row.originalDoran1981} ({row.originalSpanish})</div>
                    <div style={{ fontSize: '0.8rem', color: '#7D7594' }}>{row.originalConcept}</div>
                  </td>
                  <td style={{ padding: '0.85rem 1rem' }}>
                    <div style={{ fontWeight: 700, color: '#F5F2FF' }}>{row.contemporaryStandard} ({row.contemporarySpanish})</div>
                    <div style={{ fontSize: '0.8rem', color: '#7D7594' }}>{row.contemporaryConcept}</div>
                  </td>
                  <td style={{ padding: '0.85rem 1rem', fontSize: '0.85rem', color: '#B7B0C8' }}>
                    {row.keyEvolutionNote}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
