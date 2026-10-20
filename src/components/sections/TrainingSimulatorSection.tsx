import React, { useState } from 'react';
import { SIMULATOR_CHALLENGES } from '../../data/simulatorChallenges';
import { recordChallengeCompleted } from '../../utils/progressStorage';
import { soundManager } from '../../utils/sound';
import {
  Gamepad2,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Sparkles,
  Flame
} from 'lucide-react';

interface TrainingSimulatorSectionProps {
  onChallengeCompleted?: (challengeId: string) => void;
}

export const TrainingSimulatorSection: React.FC<TrainingSimulatorSectionProps> = ({ onChallengeCompleted }) => {
  const [activeChallengeIndex, setActiveChallengeIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasEvaluated, setHasEvaluated] = useState(false);
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);

  const totalChallenges = SIMULATOR_CHALLENGES.length;
  const currentChallenge = SIMULATOR_CHALLENGES[activeChallengeIndex];

  const handleSelectOption = (optionId: string) => {
    if (hasEvaluated) return;
    soundManager.playClick();
    setSelectedOptionId(optionId);
  };

  const handleEvaluate = () => {
    if (!selectedOptionId) return;
    setHasEvaluated(true);
    const chosen = currentChallenge.options.find((o) => o.id === selectedOptionId);

    if (chosen?.isCorrect) {
      soundManager.playSuccess();
      if (!completedChallenges.includes(currentChallenge.id)) {
        const nextCompleted = [...completedChallenges, currentChallenge.id];
        setCompletedChallenges(nextCompleted);
        recordChallengeCompleted(currentChallenge.id);
        if (onChallengeCompleted) {
          onChallengeCompleted(currentChallenge.id);
        }
      }
    } else {
      soundManager.playWarning();
    }
  };

  const handleNextChallenge = () => {
    soundManager.playClick();
    setSelectedOptionId(null);
    setHasEvaluated(false);
    if (activeChallengeIndex < totalChallenges - 1) {
      setActiveChallengeIndex((prev) => prev + 1);
    } else {
      setActiveChallengeIndex(0); // loop or restart
    }
  };

  const chosenOption = currentChallenge.options.find((o) => o.id === selectedOptionId);

  return (
    <section id="simulator" aria-label="Simulador de entrenamiento práctico" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Gamepad2 size={14} />
            <span>MÓDULO 06 // ENTRENAMIENTO PRÁCTICO</span>
          </div>
          <h2 className="section-title">
            TRAINING <span className="text-gradient-neon">SIMULATOR</span>
          </h2>
          <p className="section-subtitle">
            Pon a prueba tu agudeza diagnóstica con cinco situaciones reales de alta fricción: identifica fallos sutiles y aprende a refactorizar metas deficientes.
          </p>
        </div>

        {/* Challenge Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '2rem'
          }}
        >
          {SIMULATOR_CHALLENGES.map((chall, idx) => {
            const isActive = idx === activeChallengeIndex;
            const isCompleted = completedChallenges.includes(chall.id);
            return (
              <button
                key={chall.id}
                onClick={() => {
                  soundManager.playClick();
                  setActiveChallengeIndex(idx);
                  setSelectedOptionId(null);
                  setHasEvaluated(false);
                }}
                className="btn-cyber-outline"
                style={{
                  borderColor: isActive ? '#00F5FF' : isCompleted ? '#00FFA3' : '#2E1C4A',
                  color: isActive ? '#00F5FF' : isCompleted ? '#00FFA3' : '#B7B0C8',
                  background: isActive ? 'rgba(0, 245, 255, 0.12)' : 'transparent',
                  padding: '0.5rem 0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                {isCompleted ? <CheckCircle2 size={14} color="#00FFA3" /> : <Flame size={14} color={isActive ? '#00F5FF' : '#7D7594'} />}
                <span>RETO 0{idx + 1}</span>
              </button>
            );
          })}
        </div>

        {/* Challenge Main Card */}
        <div
          style={{
            background: 'var(--color-bg-card)',
            border: '1px solid #4B2A7C',
            clipPath: 'var(--corner-cut)',
            padding: '2.5rem',
            boxShadow: '0 12px 40px rgba(5, 5, 8, 0.8)'
          }}
        >
          {/* Top Challenge Metadata */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              borderBottom: '1px solid #2E1C4A',
              paddingBottom: '1.2rem',
              marginBottom: '1.8rem'
            }}
          >
            <div>
              <span className="cyber-badge badge-purple" style={{ marginBottom: '0.4rem' }}>
                {currentChallenge.category.toUpperCase()}
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#F5F2FF' }}>
                {currentChallenge.title}
              </h3>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#7D7594' }}>
              SIMULACIÓN {activeChallengeIndex + 1} DE {totalChallenges}
            </div>
          </div>

          {/* Scenario Context */}
          <div style={{ marginBottom: '1.8rem' }}>
            <h4 style={{ fontFamily: 'var(--font-tech)', fontSize: '1.05rem', color: '#00F5FF', marginBottom: '0.5rem' }}>
              CONTEXTO DE LA SITUACIÓN:
            </h4>
            <p style={{ color: '#B7B0C8', fontSize: '1rem', lineHeight: 1.6 }}>
              {currentChallenge.scenario}
            </p>
          </div>

          {/* Analyzed Flawed Goal Box */}
          <div
            style={{
              background: 'rgba(255, 0, 229, 0.05)',
              border: '1px dashed #FF00E5',
              borderRadius: '6px',
              padding: '1.4rem',
              marginBottom: '2rem'
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#FF00E5', marginBottom: '0.4rem' }}>
              OBJETIVO FORMULADO POR EL OPERADOR:
            </div>
            <blockquote
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                color: '#F5F2FF',
                fontStyle: 'normal'
              }}
            >
              {currentChallenge.analyzedGoal}
            </blockquote>
          </div>

          {/* Diagnostic Question */}
          <div style={{ marginBottom: '1.8rem' }}>
            <h4 style={{ fontFamily: 'var(--font-tech)', fontSize: '1.2rem', color: '#F5F2FF', marginBottom: '1rem' }}>
              {currentChallenge.diagnosticQuestion}
            </h4>

            {/* Options list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {currentChallenge.options.map((opt) => {
                const isSelected = selectedOptionId === opt.id;
                let cardStyle = {
                  background: isSelected ? 'rgba(0, 245, 255, 0.12)' : 'rgba(16, 8, 23, 0.8)',
                  borderColor: isSelected ? '#00F5FF' : '#2E1C4A',
                  color: isSelected ? '#FFFFFF' : '#B7B0C8'
                };

                if (hasEvaluated) {
                  if (opt.isCorrect) {
                    cardStyle = {
                      background: 'rgba(0, 255, 163, 0.15)',
                      borderColor: '#00FFA3',
                      color: '#00FFA3'
                    };
                  } else if (isSelected && !opt.isCorrect) {
                    cardStyle = {
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
                    disabled={hasEvaluated}
                    style={{
                      background: cardStyle.background,
                      border: `1.5px solid ${cardStyle.borderColor}`,
                      color: cardStyle.color,
                      padding: '1rem 1.2rem',
                      borderRadius: '6px',
                      textAlign: 'left',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      lineHeight: 1.5,
                      cursor: hasEvaluated ? 'default' : 'pointer',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>{opt.text}</span>
                    {hasEvaluated && opt.isCorrect && <CheckCircle2 size={18} color="#00FFA3" style={{ flexShrink: 0 }} />}
                    {hasEvaluated && isSelected && !opt.isCorrect && <XCircle size={18} color="#FF3366" style={{ flexShrink: 0 }} />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Button: Evaluate or Next */}
          {!hasEvaluated ? (
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={handleEvaluate}
                disabled={!selectedOptionId}
                className="btn-cyber-primary"
                style={{
                  opacity: selectedOptionId ? 1 : 0.5,
                  cursor: selectedOptionId ? 'pointer' : 'not-allowed'
                }}
              >
                <span>EVALUAR DIAGNÓSTICO</span>
                <Sparkles size={16} />
              </button>
            </div>
          ) : (
            /* Detailed Explanation & Exemplary Resolution */
            <div style={{ marginTop: '2rem' }}>
              <div
                style={{
                  background: 'rgba(16, 8, 23, 0.95)',
                  borderLeft: `4px solid ${chosenOption?.isCorrect ? '#00FFA3' : '#FF3366'}`,
                  padding: '1.4rem',
                  borderRadius: '0 6px 6px 0',
                  marginBottom: '1.8rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  {chosenOption?.isCorrect ? (
                    <span style={{ color: '#00FFA3', fontFamily: 'var(--font-tech)', fontWeight: 700, fontSize: '1.1rem' }}>
                      ✓ DIAGNÓSTICO ACERTADO
                    </span>
                  ) : (
                    <span style={{ color: '#FF3366', fontFamily: 'var(--font-tech)', fontWeight: 700, fontSize: '1.1rem' }}>
                      ✗ DIAGNÓSTICO IMPRECISO
                    </span>
                  )}
                </div>
                <p style={{ color: '#E0D8F5', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '0.8rem' }}>
                  {chosenOption?.feedback}
                </p>
                <div style={{ borderTop: '1px solid #2E1C4A', paddingTop: '0.8rem', fontSize: '0.88rem', color: '#B7B0C8' }}>
                  <strong style={{ color: '#00F5FF' }}>Fundamento metodológico: </strong>
                  {currentChallenge.academicRationale}
                </div>
              </div>

              {/* Exemplary Resolution Card */}
              <div
                style={{
                  background: 'rgba(0, 255, 163, 0.05)',
                  border: '1px solid rgba(0, 255, 163, 0.3)',
                  borderRadius: '6px',
                  padding: '1.4rem',
                  marginBottom: '2rem'
                }}
              >
                <span className="cyber-badge badge-success" style={{ marginBottom: '0.4rem' }}>
                  REFACTORIZACIÓN SMART EJEMPLAR
                </span>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: '#F5F2FF', fontWeight: 600, marginTop: '0.4rem' }}>
                  "{currentChallenge.exemplaryResolution}"
                </p>
              </div>

              {/* Next Challenge Button */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={handleNextChallenge} className="btn-cyber-primary">
                  <span>{activeChallengeIndex < totalChallenges - 1 ? 'SIGUIENTE RETO' : 'REINICIAR SIMULADOR'}</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
