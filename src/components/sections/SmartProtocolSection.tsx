import React, { useState } from 'react';
import { SMART_CRITERIA_DATA } from '../../data/smartCriteria';
import type { SmartCriterionKey } from '../../types';
import { markCriterionExplored } from '../../utils/progressStorage';
import { soundManager } from '../../utils/sound';
import { Cpu, CheckCircle2, XCircle, HelpCircle, Sparkles } from 'lucide-react';

interface SmartProtocolSectionProps {
  onCriterionViewed?: (criterion: SmartCriterionKey) => void;
}

export const SmartProtocolSection: React.FC<SmartProtocolSectionProps> = ({ onCriterionViewed }) => {
  const [selectedLetter, setSelectedLetter] = useState<SmartCriterionKey>('S');
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});

  const activeCriterion = SMART_CRITERIA_DATA[selectedLetter];

  const handleSelectCriterion = (letter: SmartCriterionKey) => {
    soundManager.playClick();
    setSelectedLetter(letter);
    markCriterionExplored(letter);
    if (onCriterionViewed) {
      onCriterionViewed(letter);
    }
  };

  const handleAnswerQuickCheck = (criterionKey: string, optionId: string) => {
    soundManager.playBeep(900, 0.05);
    setQuizAnswers((prev) => ({ ...prev, [criterionKey]: optionId }));
    setShowExplanation((prev) => ({ ...prev, [criterionKey]: true }));
  };

  const letters: SmartCriterionKey[] = ['S', 'M', 'A', 'R', 'T'];

  return (
    <section id="criteria" aria-label="Protocolo de criterios SMART" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>MÓDULO 02 // NÚCLEO METODOLÓGICO</span>
          </div>
          <h2 className="section-title">
            SMART <span className="text-gradient-neon">PROTOCOL</span>
          </h2>
          <p className="section-subtitle">
            Explora a fondo los cinco pilares metodológicos esenciales con preguntas directrices, contraejemplos, análisis de fallos y validación interactiva.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div
          role="tablist"
          aria-label="Criterios SMART"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.8rem',
            marginBottom: '2.5rem'
          }}
        >
          {letters.map((letter) => {
            const data = SMART_CRITERIA_DATA[letter];
            const isSelected = selectedLetter === letter;
            return (
              <button
                key={letter}
                role="tab"
                id={`tab-${letter}`}
                aria-selected={isSelected}
                aria-controls={`panel-${letter}`}
                onClick={() => handleSelectCriterion(letter)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.7rem',
                  background: isSelected ? 'rgba(23, 16, 34, 0.95)' : 'rgba(16, 8, 23, 0.7)',
                  border: `1.5px solid ${isSelected ? data.accentColor : '#2E1C4A'}`,
                  borderRadius: '6px',
                  padding: '0.8rem 1.4rem',
                  cursor: 'pointer',
                  color: isSelected ? '#FFFFFF' : '#B7B0C8',
                  boxShadow: isSelected ? `0 0 20px ${data.accentColor}55` : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.4rem',
                    fontWeight: 900,
                    color: data.accentColor
                  }}
                >
                  {letter}
                </span>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontFamily: 'var(--font-tech)', fontSize: '1rem', fontWeight: 700, lineHeight: 1.1 }}>
                    {data.title}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#7D7594' }}>
                    {data.englishTitle.toUpperCase()}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Criterion Interactive Panel */}
        <div
          id={`panel-${selectedLetter}`}
          role="tabpanel"
          aria-labelledby={`tab-${selectedLetter}`}
          style={{
            background: 'var(--color-bg-card)',
            border: `1px solid ${activeCriterion.accentColor}66`,
            clipPath: 'var(--corner-cut)',
            padding: '2.5rem',
            boxShadow: `0 12px 40px rgba(5, 5, 8, 0.8), 0 0 25px ${activeCriterion.accentColor}22`
          }}
        >
          {/* Top Banner */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              borderBottom: '1px solid #2E1C4A',
              paddingBottom: '1.5rem',
              marginBottom: '2rem'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.4rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    color: activeCriterion.accentColor,
                    lineHeight: 1
                  }}
                >
                  {activeCriterion.letter}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.8rem',
                      color: '#F5F2FF',
                      lineHeight: 1.1
                    }}
                  >
                    {activeCriterion.title} // {activeCriterion.englishTitle}
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: activeCriterion.accentColor,
                      letterSpacing: '0.1em'
                    }}
                  >
                    {activeCriterion.badge}
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: '#7D7594',
                background: 'rgba(16, 8, 23, 0.8)',
                padding: '0.4rem 0.8rem',
                border: '1px solid #2E1C4A',
                borderRadius: '4px'
              }}
            >
              CRITERIO {selectedLetter} // 0{letters.indexOf(selectedLetter) + 1} DE 05
            </div>
          </div>

          {/* Definition & Full Academic Explanation */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div
              style={{
                background: 'rgba(16, 8, 23, 0.85)',
                borderLeft: `4px solid ${activeCriterion.accentColor}`,
                padding: '1.2rem 1.5rem',
                borderRadius: '0 6px 6px 0',
                marginBottom: '1.2rem'
              }}
            >
              <h4 style={{ fontFamily: 'var(--font-tech)', fontSize: '1.1rem', color: activeCriterion.accentColor, marginBottom: '0.3rem' }}>
                DEFINICIÓN FORMAL
              </h4>
              <p style={{ fontSize: '1.1rem', color: '#F5F2FF', lineHeight: 1.6 }}>
                {activeCriterion.definition}
              </p>
            </div>

            <p style={{ color: '#B7B0C8', fontSize: '1rem', lineHeight: 1.7 }}>
              {activeCriterion.fullExplanation}
            </p>
          </div>

          {/* Guiding Questions Grid */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h4
              style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '1.15rem',
                color: '#F5F2FF',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem'
              }}
            >
              <HelpCircle size={18} color="#00F5FF" />
              <span>PREGUNTAS ORIENTADORAS PARA LA FORMULACIÓN</span>
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '0.8rem'
              }}
            >
              {activeCriterion.guidingQuestions.map((q, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(16, 8, 23, 0.7)',
                    border: '1px solid #24143D',
                    padding: '0.85rem 1rem',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.6rem',
                    color: '#B7B0C8',
                    fontSize: '0.92rem'
                  }}
                >
                  <span style={{ color: activeCriterion.accentColor, fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                    0{idx + 1}.
                  </span>
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Comparative Case Study: Deficient vs Improved */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2.5rem'
            }}
          >
            {/* Deficient Example */}
            <div
              style={{
                background: 'rgba(255, 51, 102, 0.05)',
                border: '1px solid rgba(255, 51, 102, 0.35)',
                borderRadius: '6px',
                padding: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
                <XCircle size={18} color="#FF3366" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#FF3366', fontWeight: 700 }}>
                  EJEMPLO DEFICIENTE
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  color: '#FF8099',
                  marginBottom: '1rem'
                }}
              >
                "{activeCriterion.deficientExample}"
              </p>
              <div style={{ fontSize: '0.88rem', color: '#B7B0C8', lineHeight: 1.5, borderTop: '1px solid rgba(255, 51, 102, 0.2)', paddingTop: '0.8rem' }}>
                <strong style={{ color: '#FF3366' }}>¿Por qué falla?</strong> {activeCriterion.deficientReason}
              </div>
            </div>

            {/* Improved Example */}
            <div
              style={{
                background: 'rgba(0, 255, 163, 0.05)',
                border: '1px solid rgba(0, 255, 163, 0.35)',
                borderRadius: '6px',
                padding: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
                <CheckCircle2 size={18} color="#00FFA3" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#00FFA3', fontWeight: 700 }}>
                  EJEMPLO ADECUADO Y MEJORADO
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.15rem',
                  color: '#F5F2FF',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}
              >
                "{activeCriterion.improvedExample}"
              </p>
              <div style={{ fontSize: '0.88rem', color: '#B7B0C8', lineHeight: 1.5, borderTop: '1px solid rgba(0, 255, 163, 0.2)', paddingTop: '0.8rem' }}>
                <strong style={{ color: '#00FFA3' }}>Recomendación:</strong> {activeCriterion.improvedAdvice}
              </div>
            </div>
          </div>

          {/* Caveat alert if present */}
          {activeCriterion.caveat && (
            <div
              style={{
                background: 'rgba(138, 43, 255, 0.1)',
                border: '1px solid #8A2BFF',
                padding: '0.9rem 1.2rem',
                borderRadius: '4px',
                marginBottom: '2.5rem',
                fontSize: '0.88rem',
                color: '#E0D8F5',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem'
              }}
            >
              <Sparkles size={18} color="#8A2BFF" />
              <span>{activeCriterion.caveat}</span>
            </div>
          )}

          {/* Quick Check Micro-Quiz */}
          <div
            style={{
              background: 'rgba(16, 8, 23, 0.95)',
              border: '1px solid #2E1C4A',
              borderRadius: '6px',
              padding: '1.6rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
              <span className="cyber-badge badge-cyan">COMPROBACIÓN RÁPIDA // SPRINT COGNITIVO</span>
            </div>
            <p style={{ fontFamily: 'var(--font-tech)', fontSize: '1.1rem', color: '#F5F2FF', marginBottom: '1.2rem' }}>
              {activeCriterion.quickCheck.question}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1rem' }}>
              {activeCriterion.quickCheck.options.map((opt) => {
                const isUserSelected = quizAnswers[selectedLetter] === opt.id;
                const hasAnswered = !!quizAnswers[selectedLetter];
                let btnStyle = {
                  background: 'rgba(23, 16, 34, 0.8)',
                  border: '1px solid #2E1C4A',
                  color: '#B7B0C8'
                };

                if (hasAnswered) {
                  if (opt.isCorrect) {
                    btnStyle = {
                      background: 'rgba(0, 255, 163, 0.15)',
                      border: '1px solid #00FFA3',
                      color: '#00FFA3'
                    };
                  } else if (isUserSelected && !opt.isCorrect) {
                    btnStyle = {
                      background: 'rgba(255, 51, 102, 0.15)',
                      border: '1px solid #FF3366',
                      color: '#FF3366'
                    };
                  }
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleAnswerQuickCheck(selectedLetter, opt.id)}
                    disabled={hasAnswered}
                    style={{
                      ...btnStyle,
                      padding: '0.8rem 1.2rem',
                      borderRadius: '4px',
                      textAlign: 'left',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      cursor: hasAnswered ? 'default' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>{opt.text}</span>
                    {hasAnswered && opt.isCorrect && <CheckCircle2 size={16} color="#00FFA3" />}
                    {hasAnswered && isUserSelected && !opt.isCorrect && <XCircle size={16} color="#FF3366" />}
                  </button>
                );
              })}
            </div>

            {showExplanation[selectedLetter] && (
              <div
                style={{
                  background: 'rgba(0, 245, 255, 0.08)',
                  borderLeft: '3px solid #00F5FF',
                  padding: '0.85rem 1rem',
                  borderRadius: '0 4px 4px 0',
                  fontSize: '0.88rem',
                  color: '#E0F7FA'
                }}
              >
                <strong style={{ color: '#00F5FF' }}>Retroalimentación: </strong>
                {activeCriterion.quickCheck.explanation}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
