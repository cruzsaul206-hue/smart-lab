import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../../data/quizQuestions';
import { recordQuizScore } from '../../utils/progressStorage';
import { soundManager } from '../../utils/sound';
import confetti from 'canvas-confetti';
import {
  BrainCircuit,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  ChevronRight
} from 'lucide-react';

interface NeuralTestSectionProps {
  onScoreUpdated?: (score: number, total: number) => void;
}

export const NeuralTestSection: React.FC<NeuralTestSectionProps> = ({ onScoreUpdated }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answeredMap, setAnsweredMap] = useState<Record<number, { selectedId: string; isCorrect: boolean }>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const totalQuestions = QUIZ_QUESTIONS.length;
  const currentQ = QUIZ_QUESTIONS[currentIndex];

  // Calculate score safely without double scoring
  const correctCount = Object.values(answeredMap).filter((item) => item.isCorrect).length;
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  const handleSelectOption = (optionId: string) => {
    if (answeredMap[currentQ.id]) return; // already answered this question

    const isCorrect = optionId === currentQ.correctOptionId;
    setShowExplanation(true);

    const nextMap = {
      ...answeredMap,
      [currentQ.id]: { selectedId: optionId, isCorrect }
    };
    setAnsweredMap(nextMap);

    if (isCorrect) {
      soundManager.playSuccess();
    } else {
      soundManager.playWarning();
    }
  };

  const handleNextQuestion = () => {
    soundManager.playClick();
    setShowExplanation(false);

    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Finished quiz
      setQuizFinished(true);
      recordQuizScore(correctCount, totalQuestions);
      if (onScoreUpdated) {
        onScoreUpdated(correctCount, totalQuestions);
      }

      if (percentage >= 80) {
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#FF00E5', '#8A2BFF', '#00F5FF', '#00FFA3']
          });
        } catch {
          // ignore if canvas not supported
        }
      }
    }
  };

  const handleRestartQuiz = () => {
    soundManager.playClick();
    setCurrentIndex(0);
    setAnsweredMap({});
    setShowExplanation(false);
    setQuizFinished(false);
  };

  const getInterpretation = (pct: number) => {
    if (pct < 50) {
      return {
        level: '0–49%: NECESITAS REFORZAR LOS CONCEPTOS',
        badgeClass: 'badge-pink',
        desc: 'Identificas algunas nociones generales, pero aún existen confusiones entre intenciones y objetivos auditables, o en los orígenes del acrónimo. Te sugerimos repasar el Protocolo SMART y el Archivo Histórico.'
      };
    }
    if (pct < 80) {
      return {
        level: '50–79%: COMPRENSIÓN EN DESARROLLO',
        badgeClass: 'badge-warning',
        desc: 'Comprendes la estructura básica de los cinco criterios y distingues la mayoría de los fallos de formulación. Con un poco más de práctica en los retos del simulador afianzarás la distinción técnica.'
      };
    }
    return {
      level: '80–100%: BUENA COMPRENSIÓN METODOLÓGICA',
      badgeClass: 'badge-success',
      desc: '¡Excelente desempeño! Demuestras un dominio sólido de los criterios SMART, identificas con agudeza los vicios de redacción y comprendes el origen y alcance pragmático postulado por Doran (1981).'
    };
  };

  const interpretation = getInterpretation(percentage);

  return (
    <section id="quiz" aria-label="Cuestionario evaluativo Neural Test" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <BrainCircuit size={14} />
            <span>MÓDULO 05 // EVALUACIÓN COGNITIVA</span>
          </div>
          <h2 className="section-title">
            NEURAL <span className="text-gradient-cyan">TEST</span>
          </h2>
          <p className="section-subtitle">
            Cuestionario de diez preguntas para evaluar tu comprensión conceptual, capacidad de diagnóstico y rigor en la aplicación de los criterios SMART.
          </p>
        </div>

        {/* Quiz Container */}
        <div
          style={{
            background: 'var(--color-bg-card)',
            border: '1px solid #4B2A7C',
            clipPath: 'var(--corner-cut)',
            padding: '2.5rem',
            position: 'relative',
            boxShadow: '0 12px 40px rgba(5, 5, 8, 0.8)'
          }}
        >
          {!quizFinished ? (
            <div>
              {/* Quiz Header Bar */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: '#B7B0C8'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span className="cyber-badge badge-purple">PREGUNTA {currentIndex + 1} DE {totalQuestions}</span>
                  <span style={{ color: '#00F5FF' }}>CATEGORÍA: [{currentQ.category}]</span>
                </div>
                <div>
                  ACIERTOS: <span style={{ color: '#00FFA3', fontWeight: 700 }}>{correctCount}</span> / {Object.keys(answeredMap).length}
                </div>
              </div>

              {/* Progress bar */}
              <div
                style={{
                  height: '6px',
                  background: 'rgba(16, 8, 23, 0.8)',
                  borderRadius: '3px',
                  overflow: 'hidden',
                  border: '1px solid #2E1C4A',
                  marginBottom: '2rem'
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${((currentIndex + 1) / totalQuestions) * 100}%`,
                    background: 'linear-gradient(90deg, #8A2BFF, #00F5FF)',
                    boxShadow: '0 0 10px #00F5FF',
                    transition: 'width 0.3s ease'
                  }}
                />
              </div>

              {/* Question Text */}
              <div style={{ marginBottom: '1.8rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-tech)',
                    fontSize: '1.35rem',
                    fontWeight: 600,
                    color: '#F5F2FF',
                    lineHeight: 1.5
                  }}
                >
                  {currentQ.question}
                </h3>
              </div>

              {/* Options list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.8rem' }}>
                {currentQ.options.map((opt) => {
                  const hasAnsweredCurrent = !!answeredMap[currentQ.id];
                  const isThisSelected = answeredMap[currentQ.id]?.selectedId === opt.id;
                  const isThisCorrect = opt.id === currentQ.correctOptionId;

                  let optionStyle = {
                    background: 'rgba(16, 8, 23, 0.8)',
                    borderColor: '#2E1C4A',
                    color: '#B7B0C8'
                  };

                  if (hasAnsweredCurrent) {
                    if (isThisCorrect) {
                      optionStyle = {
                        background: 'rgba(0, 255, 163, 0.15)',
                        borderColor: '#00FFA3',
                        color: '#00FFA3'
                      };
                    } else if (isThisSelected && !isThisCorrect) {
                      optionStyle = {
                        background: 'rgba(255, 51, 102, 0.15)',
                        borderColor: '#FF3366',
                        color: '#FF3366'
                      };
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(opt.id)}
                      disabled={hasAnsweredCurrent}
                      style={{
                        background: optionStyle.background,
                        border: `1.5px solid ${optionStyle.borderColor}`,
                        color: optionStyle.color,
                        borderRadius: '6px',
                        padding: '1rem 1.25rem',
                        textAlign: 'left',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.98rem',
                        cursor: hasAnsweredCurrent ? 'default' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        if (!hasAnsweredCurrent) {
                          e.currentTarget.style.borderColor = '#00F5FF';
                          e.currentTarget.style.color = '#F5F2FF';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!hasAnsweredCurrent) {
                          e.currentTarget.style.borderColor = '#2E1C4A';
                          e.currentTarget.style.color = '#B7B0C8';
                        }
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            color: isThisCorrect && hasAnsweredCurrent ? '#00FFA3' : '#FF00E5'
                          }}
                        >
                          [{opt.id.toUpperCase()}]
                        </span>
                        <span>{opt.text}</span>
                      </div>

                      {hasAnsweredCurrent && isThisCorrect && <CheckCircle2 size={18} color="#00FFA3" />}
                      {hasAnsweredCurrent && isThisSelected && !isThisCorrect && <XCircle size={18} color="#FF3366" />}
                    </button>
                  );
                })}
              </div>

              {/* Immediate Feedback Explanation Box */}
              {showExplanation && (
                <div
                  style={{
                    background: 'rgba(23, 16, 34, 0.95)',
                    borderLeft: `4px solid ${answeredMap[currentQ.id]?.isCorrect ? '#00FFA3' : '#FF3366'}`,
                    padding: '1.2rem',
                    borderRadius: '0 6px 6px 0',
                    marginBottom: '1.8rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    {answeredMap[currentQ.id]?.isCorrect ? (
                      <span style={{ color: '#00FFA3', fontFamily: 'var(--font-tech)', fontWeight: 700, fontSize: '1rem' }}>
                        ✓ ¡RESPUESTA CORRECTA!
                      </span>
                    ) : (
                      <span style={{ color: '#FF3366', fontFamily: 'var(--font-tech)', fontWeight: 700, fontSize: '1rem' }}>
                        ✗ RESPUESTA INCORRECTA
                      </span>
                    )}
                  </div>
                  <p style={{ color: '#E0D8F5', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    {currentQ.explanation}
                  </p>
                </div>
              )}

              {/* Next Question Button */}
              {showExplanation && (
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    onClick={handleNextQuestion}
                    className="btn-cyber-primary"
                    id="btn-next-question"
                  >
                    <span>{currentIndex < totalQuestions - 1 ? 'SIGUIENTE PREGUNTA' : 'VER RESULTADOS FINALES'}</span>
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* FINAL QUIZ RESULTS SCREEN */
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  background: 'linear-gradient(135deg, #FF00E5, #8A2BFF)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  boxShadow: '0 0 30px rgba(255, 0, 229, 0.5)'
                }}
              >
                <Award size={36} color="#FFFFFF" />
              </div>

              <span className={`cyber-badge ${interpretation.badgeClass}`} style={{ marginBottom: '1rem' }}>
                {interpretation.level}
              </span>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: '#F5F2FF', marginBottom: '0.4rem' }}>
                PUNTUACIÓN: {correctCount} / {totalQuestions}
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: '#00F5FF', marginBottom: '1.5rem' }}>
                RENDIMIENTO COGNITIVO: {percentage}%
              </p>

              <div
                style={{
                  maxWidth: '650px',
                  margin: '0 auto 2.2rem auto',
                  background: 'rgba(16, 8, 23, 0.85)',
                  border: '1px solid #2E1C4A',
                  padding: '1.4rem',
                  borderRadius: '6px',
                  textAlign: 'left'
                }}
              >
                <h4 style={{ fontFamily: 'var(--font-tech)', fontSize: '1.1rem', color: '#F5F2FF', marginBottom: '0.4rem' }}>
                  DIAGNÓSTICO ACADÉMICO:
                </h4>
                <p style={{ color: '#B7B0C8', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '0.8rem' }}>
                  {interpretation.desc}
                </p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#7D7594' }}>
                  * Aclaración metodológica: Esta puntuación es exclusivamente formativa y de autoevaluación pedagógica. No constituye una calificación académica oficial ni reemplaza la evaluación formal de una institución universitaria.
                </p>
              </div>

              <button
                onClick={handleRestartQuiz}
                className="btn-cyber-primary"
                id="btn-restart-quiz"
              >
                <RotateCcw size={16} />
                <span>REINTENTAR CUESTIONARIO</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
