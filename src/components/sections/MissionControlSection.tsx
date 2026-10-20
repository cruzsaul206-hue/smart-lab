import React, { useState } from 'react';
import type { UserSessionProgress } from '../../types';
import { loadSessionProgress, purgeSessionProgress } from '../../utils/progressStorage';
import { soundManager } from '../../utils/sound';
import {
  Activity,
  Trash2,
  Award,
  Zap,
  Target,
  FileCheck
} from 'lucide-react';

interface MissionControlSectionProps {
  progressRevision: number;
  onProgressPurged: () => void;
}

export const MissionControlSection: React.FC<MissionControlSectionProps> = ({
  progressRevision,
  onProgressPurged
}) => {
  const [prevRevision, setPrevRevision] = useState(progressRevision);
  const [progress, setProgress] = useState<UserSessionProgress>(loadSessionProgress);
  const [showConfirmPurge, setShowConfirmPurge] = useState(false);

  if (progressRevision !== prevRevision) {
    setPrevRevision(progressRevision);
    setProgress(loadSessionProgress());
  }

  const handlePurge = () => {
    soundManager.playWarning();
    const resetData = purgeSessionProgress();
    setProgress(resetData);
    setShowConfirmPurge(false);
    onProgressPurged();
  };

  const exploredCount = progress.exploredCriteria.length;
  const challengesCount = progress.completedChallenges.length;
  const hasQuiz = progress.quizScore !== null;
  const quizPct = hasQuiz ? Math.round(((progress.quizScore || 0) / progress.quizTotal) * 100) : null;

  // Real overall activity index
  const activitiesCount =
    (exploredCount > 0 ? 1 : 0) +
    (progress.builderCompleted ? 1 : 0) +
    (hasQuiz ? 1 : 0) +
    (challengesCount > 0 ? 1 : 0);
  const sessionEngagementPct = Math.round((activitiesCount / 4) * 100);

  return (
    <section id="mission-control" aria-label="Panel de control de misión" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Activity size={14} />
            <span>MÓDULO 07 // TELEMETRÍA DE SESIÓN</span>
          </div>
          <h2 className="section-title">
            MISSION <span className="text-gradient-cyan">CONTROL</span>
          </h2>
          <p className="section-subtitle">
            Monitoreo en tiempo real de tu avance formativo en esta sesión. Los datos se calculan a partir de tus interacciones reales y se almacenan localmente sin enviar datos a servidores externos.
          </p>
        </div>

        {/* HUD Mission Dashboard Grid */}
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
          {/* Top telemetry bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              borderBottom: '1px solid #2E1C4A',
              paddingBottom: '1.2rem',
              marginBottom: '2rem'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                <span className="cyber-badge badge-cyan">TELEMETRÍA LOCAL // LOCALSTORAGE</span>
                <span className="cyber-badge badge-success">COMPROMISO: {sessionEngagementPct}%</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#F5F2FF', marginTop: '0.3rem' }}>
                ESTADO DE LA ACTIVIDAD FORMATIVA
              </h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <button
                onClick={() => setShowConfirmPurge(true)}
                className="btn-cyber-outline"
                style={{ color: '#FF3366', borderColor: 'rgba(255, 51, 102, 0.4)', fontSize: '0.8rem' }}
                id="btn-purge-session"
              >
                <Trash2 size={13} />
                <span>PURGAR DATOS DE SESIÓN</span>
              </button>
            </div>
          </div>

          {/* 4 Telemetry Metrics Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.2rem',
              marginBottom: '2.5rem'
            }}
          >
            {/* 1. Criteria Explored */}
            <div
              style={{
                background: 'rgba(16, 8, 23, 0.8)',
                border: '1px solid #2E1C4A',
                borderRadius: '6px',
                padding: '1.4rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#FF00E5' }}>CRITERIOS SMART</span>
                <Target size={16} color="#FF00E5" />
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: '#F5F2FF' }}>
                {exploredCount} / 5
              </div>
              <div style={{ fontSize: '0.8rem', color: '#B7B0C8', marginTop: '0.3rem' }}>
                {exploredCount === 5 ? 'Todos los módulos revisados' : `Explorados: ${progress.exploredCriteria.join(', ') || 'Ninguno aún'}`}
              </div>
            </div>

            {/* 2. Goal Hacker Status */}
            <div
              style={{
                background: 'rgba(16, 8, 23, 0.8)',
                border: '1px solid #2E1C4A',
                borderRadius: '6px',
                padding: '1.4rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#00F5FF' }}>GOAL HACKER</span>
                <FileCheck size={16} color="#00F5FF" />
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, color: '#F5F2FF' }}>
                {progress.builderCompleted ? 'CONSOLIDADO' : 'PENDIENTE'}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#B7B0C8', marginTop: '0.3rem' }}>
                {progress.builderCompleted ? 'Objetivo generado con éxito' : 'Aún no has completado los 8 pasos'}
              </div>
            </div>

            {/* 3. Neural Test */}
            <div
              style={{
                background: 'rgba(16, 8, 23, 0.8)',
                border: '1px solid #2E1C4A',
                borderRadius: '6px',
                padding: '1.4rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#00FFA3' }}>NEURAL TEST</span>
                <Award size={16} color="#00FFA3" />
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: '#F5F2FF' }}>
                {hasQuiz ? `${progress.quizScore} / ${progress.quizTotal}` : 'SIN EVALUAR'}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#B7B0C8', marginTop: '0.3rem' }}>
                {hasQuiz ? `Calificación: ${quizPct}% de aciertos` : 'Completa las 10 preguntas'}
              </div>
            </div>

            {/* 4. Training Simulator */}
            <div
              style={{
                background: 'rgba(16, 8, 23, 0.8)',
                border: '1px solid #2E1C4A',
                borderRadius: '6px',
                padding: '1.4rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#8A2BFF' }}>SIMULADOR</span>
                <Zap size={16} color="#8A2BFF" />
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: '#F5F2FF' }}>
                {challengesCount} / 5
              </div>
              <div style={{ fontSize: '0.8rem', color: '#B7B0C8', marginTop: '0.3rem' }}>
                {challengesCount === 5 ? 'Todos los retos resueltos' : 'Retos prácticos completados'}
              </div>
            </div>
          </div>

          {/* Goal preview if one was built */}
          {progress.builtGoalText && (
            <div
              style={{
                background: 'rgba(23, 16, 34, 0.95)',
                border: '1px solid rgba(0, 245, 255, 0.4)',
                borderRadius: '6px',
                padding: '1.4rem',
                marginBottom: '1.8rem'
              }}
            >
              <span className="cyber-badge badge-success" style={{ marginBottom: '0.4rem' }}>
                ÚLTIMO OBJETIVO EN MEMORIA
              </span>
              <p style={{ color: '#F5F2FF', fontStyle: 'italic', marginTop: '0.4rem', fontSize: '1rem', lineHeight: 1.6 }}>
                "{progress.builtGoalText}"
              </p>
            </div>
          )}

          {/* Pedagogy Disclaimer */}
          <div
            style={{
              padding: '1rem',
              background: 'rgba(16, 8, 23, 0.9)',
              borderLeft: '3px solid #FFB800',
              borderRadius: '0 4px 4px 0',
              fontSize: '0.85rem',
              color: '#B7B0C8',
              lineHeight: 1.5
            }}
          >
            <strong style={{ color: '#FFB800' }}>ADVERTENCIA METODOLÓGICA:</strong> El progreso reflejado en esta plataforma registra únicamente tu interacción educativa con los módulos de aprendizaje. No debe confundirse con la ejecución ni el cumplimiento real de tus metas personales, académicas o laborales en el mundo físico.
          </div>
        </div>
      </div>

      {/* Confirmation Modal for Purge */}
      {showConfirmPurge && (
        <div
          role="dialog"
          aria-label="Confirmar purga de datos"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(5, 5, 8, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          <div
            style={{
              background: '#171022',
              border: '1px solid #FF3366',
              borderRadius: '8px',
              maxWidth: '480px',
              width: '100%',
              padding: '2rem',
              boxShadow: '0 0 35px rgba(255, 51, 102, 0.4)'
            }}
          >
            <h4 style={{ fontFamily: 'var(--font-display)', color: '#FF3366', marginBottom: '0.8rem', fontSize: '1.2rem' }}>
              ¿CONFIRMAR PURGA DE TELEMETRÍA?
            </h4>
            <p style={{ color: '#B7B0C8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Se borrarán los registros locales de criterios explorados, objetivos redactados, resultados del cuestionario y retos resueltos en este navegador.
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.8rem' }}>
              <button
                onClick={() => setShowConfirmPurge(false)}
                className="btn-cyber-outline"
                style={{ padding: '0.5rem 1rem' }}
              >
                CANCELAR
              </button>
              <button
                onClick={handlePurge}
                className="btn-cyber-primary"
                style={{
                  background: '#FF3366',
                  borderColor: '#FF3366',
                  padding: '0.5rem 1.2rem',
                  fontSize: '0.88rem'
                }}
              >
                SÍ, PURGAR DATOS
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
