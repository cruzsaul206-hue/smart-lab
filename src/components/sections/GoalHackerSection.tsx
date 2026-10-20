import React, { useState, useMemo } from 'react';
import { soundManager } from '../../utils/sound';
import { markGoalCreated } from '../../utils/progressStorage';
import type { DiagnosticItem } from '../../types';
import {
  Wand2,
  ArrowRight,
  ArrowLeft,
  Copy,
  Check,
  Download,
  RotateCcw,
  AlertTriangle,
  Sparkles,
  Edit3
} from 'lucide-react';

interface GoalHackerForm {
  initialIntent: string;
  specificArea: string;
  metricEvidence: string;
  achievablePlan: string;
  relevancePurpose: string;
  timeboundDeadline: string;
  targetDate: string;
}

const INITIAL_FORM: GoalHackerForm = {
  initialIntent: '',
  specificArea: '',
  metricEvidence: '',
  achievablePlan: '',
  relevancePurpose: '',
  timeboundDeadline: '',
  targetDate: ''
};

const TODAY_START_TIMESTAMP = new Date().setHours(0, 0, 0, 0);
const REPORT_DATE_STRING = new Date().toLocaleDateString();

export const GoalHackerSection: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<GoalHackerForm>(INITIAL_FORM);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [showManualCopyModal, setShowManualCopyModal] = useState(false);

  // Validate past dates if targetDate is selected
  const isDateInPast = useMemo(() => {
    if (!formData.targetDate) return false;
    const selected = new Date(formData.targetDate).getTime();
    return selected < TODAY_START_TIMESTAMP;
  }, [formData.targetDate]);

  const handleInputChange = (field: keyof GoalHackerForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrorMsg(null);
  };

  // Validation logic per step
  const validateCurrentStep = (): boolean => {
    switch (step) {
      case 1:
        if (!formData.initialIntent.trim()) {
          setErrorMsg('Por favor introduce tu intención general para comenzar el proceso.');
          soundManager.playWarning();
          return false;
        }
        break;
      case 2:
        if (!formData.specificArea.trim()) {
          setErrorMsg('Especifica el área o resultado concreto que deseas lograr.');
          soundManager.playWarning();
          return false;
        }
        break;
      case 3:
        if (!formData.metricEvidence.trim()) {
          setErrorMsg('Indica al menos un indicador o evidencia con la que auditarás el avance.');
          soundManager.playWarning();
          return false;
        }
        break;
      case 4:
        if (!formData.achievablePlan.trim()) {
          setErrorMsg('Describe los recursos, tiempo disponible o acciones viables para conseguirlo.');
          soundManager.playWarning();
          return false;
        }
        break;
      case 5:
        if (!formData.relevancePurpose.trim()) {
          setErrorMsg('Explica por qué este objetivo es relevante para tus prioridades.');
          soundManager.playWarning();
          return false;
        }
        break;
      case 6:
        if (!formData.timeboundDeadline.trim() && !formData.targetDate) {
          setErrorMsg('Define un plazo o una fecha límite para organizar el cumplimiento.');
          soundManager.playWarning();
          return false;
        }
        if (isDateInPast) {
          setErrorMsg('La fecha seleccionada se encuentra en el pasado. Por favor elige una fecha futura válida.');
          soundManager.playWarning();
          return false;
        }
        break;
      default:
        break;
    }
    return true;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      soundManager.playClick();
      setErrorMsg(null);
      const nextStep = step + 1;
      setStep(nextStep);
      if (nextStep === 8) {
        soundManager.playSuccess();
        markGoalCreated(consolidatedGoalText);
      }
    }
  };

  const handleBack = () => {
    soundManager.playClick();
    setErrorMsg(null);
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleReset = () => {
    soundManager.playClick();
    setFormData(INITIAL_FORM);
    setStep(1);
    setErrorMsg(null);
    setCopySuccess(false);
  };

  // Build the consolidated goal synthesis strictly from user input (no fake facts added)
  const timePhrase = formData.targetDate
    ? `antes del ${formData.targetDate}`
    : formData.timeboundDeadline
    ? `en el plazo de: ${formData.timeboundDeadline}`
    : 'en el plazo definido';

  const intent = formData.initialIntent.trim();
  const area = formData.specificArea.trim();
  const metric = formData.metricEvidence.trim();
  const plan = formData.achievablePlan.trim();
  const relevance = formData.relevancePurpose.trim();

  const consolidatedGoalText = `Para avanzar en mi propósito de "${intent}", voy a ${area}. Para lograrlo, ${plan}, evaluando mi progreso mediante ${metric}, con el fin de ${relevance}, cumpliendo este objetivo ${timePhrase}.`;

  // Quality diagnostic evaluation
  const diagnostics = useMemo((): DiagnosticItem[] => {
    const list: DiagnosticItem[] = [];

    // Specificity
    const sLen = formData.specificArea.trim().length;
    list.push({
      criterion: 'S',
      label: 'Especificidad',
      status: sLen > 30 ? 'optimal' : sLen > 10 ? 'acceptable' : 'insufficient',
      score: Math.min(100, Math.max(20, sLen * 2)),
      feedback: sLen > 30 ? 'Descripción detallada del área de acción.' : 'Podrías acotar con mayor precisión la tarea concreta.',
      tip: 'Verifica que un colega comprenda el entregable exacto sin requerir explicaciones verbales adicionales.'
    });

    // Measurable
    const mLen = formData.metricEvidence.trim().length;
    list.push({
      criterion: 'M',
      label: 'Medición',
      status: mLen > 25 ? 'optimal' : mLen > 10 ? 'acceptable' : 'insufficient',
      score: Math.min(100, Math.max(20, mLen * 2.5)),
      feedback: mLen > 25 ? 'Contiene evidencias o indicadores verificables.' : 'Falta definir la periodicidad o umbral de éxito.',
      tip: 'Asegúrate de que la evidencia pueda revisarse objetivamente cada semana.'
    });

    // Achievable
    const aLen = formData.achievablePlan.trim().length;
    list.push({
      criterion: 'A',
      label: 'Viabilidad (Alcanzable)',
      status: aLen > 30 ? 'optimal' : aLen > 10 ? 'acceptable' : 'insufficient',
      score: Math.min(100, Math.max(20, aLen * 2)),
      feedback: aLen > 30 ? 'Plantea recursos y acciones operativas identificadas.' : 'Revisa si el tiempo asignado compite con otras obligaciones.',
      tip: 'Si el ritmo resulta abrumador, descompón la meta en fases o ciclos menores.'
    });

    // Relevant
    const rLen = formData.relevancePurpose.trim().length;
    list.push({
      criterion: 'R',
      label: 'Relevancia',
      status: rLen > 25 ? 'optimal' : rLen > 10 ? 'acceptable' : 'insufficient',
      score: Math.min(100, Math.max(20, rLen * 2.5)),
      feedback: rLen > 25 ? 'Conexión fundamentada con tus prioridades.' : 'Expande cómo influye este objetivo en tu visión a largo plazo.',
      tip: 'Si la meta no te motiva a superar la fricción inicial, revisa su relevancia real.'
    });

    // Time-bound
    const hasValidDate = !!formData.targetDate && !isDateInPast;
    const hasDeadline = formData.timeboundDeadline.trim().length > 5;
    list.push({
      criterion: 'T',
      label: 'Límite Temporal',
      status: hasValidDate ? 'optimal' : hasDeadline ? 'acceptable' : 'insufficient',
      score: hasValidDate ? 100 : hasDeadline ? 75 : 30,
      feedback: hasValidDate ? 'Fecha límite concreta identificada en el calendario.' : 'Se recomienda fijar un día específico en el calendario.',
      tip: 'Anota la fecha en tu calendario digital con recordatorios intermedios.'
    });

    return list;
  }, [formData, isDateInPast]);

  // Copy to clipboard
  const handleCopy = async () => {
    soundManager.playClick();
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(consolidatedGoalText);
        setCopySuccess(true);
        soundManager.playSuccess();
        setTimeout(() => setCopySuccess(false), 2500);
      } catch {
        setShowManualCopyModal(true);
      }
    } else {
      setShowManualCopyModal(true);
    }
  };

  // Download as text file
  const handleDownload = () => {
    soundManager.playClick();
    const content = `=====================================================
SMART//LAB — REPORTE DE OBJETIVO ESTRUCTURADO
Fecha de generación: ${new Date().toLocaleString()}
Plataforma: SMART//LAB (Cyberpunk Academic System)
=====================================================

[1] INTENCIÓN INICIAL:
${formData.initialIntent || 'N/A'}

[2] OBJETIVO CONSOLIDADO SMART:
"${consolidatedGoalText}"

-----------------------------------------------------
DESGLOSE POR CRITERIOS SMART:
-----------------------------------------------------
[S] ESPECÍFICO (Área concreta):
${formData.specificArea || 'N/A'}

[M] MEDIBLE (Indicador o evidencia):
${formData.metricEvidence || 'N/A'}

[A] ALCANZABLE (Recursos y plan):
${formData.achievablePlan || 'N/A'}

[R] RELEVANTE (Propósito e impacto):
${formData.relevancePurpose || 'N/A'}

[T] TEMPORAL (Fecha límite o plazo):
${formData.targetDate ? `Fecha objetivo: ${formData.targetDate}` : formData.timeboundDeadline || 'N/A'}

-----------------------------------------------------
NOTA METODOLÓGICA:
Este objetivo fue consolidado a partir de la ingeniería de formulación SMART.
El cumplimiento dependerá de la disciplina, el seguimiento continuo y la adaptación.
=====================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Objetivo_SMART_${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    soundManager.playSuccess();
  };

  return (
    <section id="builder" aria-label="Constructor de objetivos Goal Hacker" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Wand2 size={14} />
            <span>MÓDULO 04 // CONSTRUCTOR INTERACTIVO</span>
          </div>
          <h2 className="section-title">
            GOAL <span className="text-gradient-neon">HACKER</span>
          </h2>
          <p className="section-subtitle">
            Transmutador guiado paso a paso: introduce tu intención general y responde a las preguntas orientadoras para consolidar un objetivo SMART operativo.
          </p>
        </div>

        {/* Wizard Main Container */}
        <div
          style={{
            background: 'var(--color-bg-card)',
            border: '1px solid #4B2A7C',
            clipPath: 'var(--corner-cut-lg)',
            padding: '2.5rem',
            position: 'relative',
            boxShadow: '0 12px 40px rgba(5, 5, 8, 0.8)'
          }}
        >
          {/* Wizard Header Progress Bar */}
          <div style={{ marginBottom: '2rem' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: '#B7B0C8',
                marginBottom: '0.5rem'
              }}
            >
              <span>PASO {step} DE 8: {step < 7 ? 'FORMULACIÓN GUIADA' : step === 7 ? 'REVISIÓN PREVIA' : 'OBJETIVO CONSOLIDADO'}</span>
              <span style={{ color: '#00F5FF', fontWeight: 700 }}>{Math.round((step / 8) * 100)}%</span>
            </div>
            <div
              style={{
                height: '6px',
                background: 'rgba(16, 8, 23, 0.8)',
                borderRadius: '3px',
                overflow: 'hidden',
                border: '1px solid #2E1C4A'
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${(step / 8) * 100}%`,
                  background: 'linear-gradient(90deg, #FF00E5, #8A2BFF, #00F5FF)',
                  boxShadow: '0 0 10px #00F5FF',
                  transition: 'width 0.3s ease'
                }}
              />
            </div>
          </div>

          {/* Error Message Alert */}
          {errorMsg && (
            <div
              role="alert"
              style={{
                background: 'rgba(255, 51, 102, 0.12)',
                border: '1px solid #FF3366',
                borderRadius: '4px',
                padding: '0.8rem 1rem',
                color: '#FF6B8B',
                fontFamily: 'var(--font-body)',
                fontSize: '0.92rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '1.5rem'
              }}
            >
              <AlertTriangle size={18} color="#FF3366" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* STEP 1: INITIAL GOAL */}
          {step === 1 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                <span className="cyber-badge badge-pink">PASO 01 // ANCLAJE INICIAL</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#F5F2FF', marginBottom: '0.6rem' }}>
                ¿QUÉ QUIERES CONSEGUIR?
              </h3>
              <p style={{ color: '#B7B0C8', fontSize: '0.95rem', marginBottom: '1.4rem' }}>
                Escribe tu intención general tal como te viene a la mente. No te preocupes si suena vaga o ambiciosa; la refinaremos juntos en los siguientes pasos.
              </p>
              <div style={{ marginBottom: '1.5rem' }}>
                <label
                  htmlFor="input-initial-intent"
                  style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#00F5FF', marginBottom: '0.4rem' }}
                >
                  INTENCIÓN GENERAL O IDEA:
                </label>
                <input
                  id="input-initial-intent"
                  type="text"
                  className="cyber-input"
                  placeholder="Ejemplo: Quiero mejorar en programación, aprobar cálculo o aprender machine learning..."
                  value={formData.initialIntent}
                  onChange={(e) => handleInputChange('initialIntent', e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                  autoFocus
                />
              </div>
            </div>
          )}

          {/* STEP 2: SPECIFICITY */}
          {step === 2 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                <span className="cyber-badge badge-pink">PASO 02 // CRITERIO S: ESPECÍFICO</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#F5F2FF', marginBottom: '0.6rem' }}>
                DESCRIBE EXACTAMENTE QUÉ RESULTADO QUIERES CONSEGUIR
              </h3>
              <p style={{ color: '#B7B0C8', fontSize: '0.95rem', marginBottom: '1.4rem' }}>
                Acota el área, la materia o la habilidad concreta. Sustituye términos vagos ("ser mejor") por tareas tangibles ("resolver algoritmos en Java", "redactar la tesis").
              </p>
              <div style={{ marginBottom: '1.5rem' }}>
                <label
                  htmlFor="input-specific-area"
                  style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#00F5FF', marginBottom: '0.4rem' }}
                >
                  ÁREA O RESULTADO ESPECÍFICO:
                </label>
                <textarea
                  id="input-specific-area"
                  className="cyber-textarea"
                  placeholder="Ejemplo: Dominar la resolución de problemas de árboles binarios y grafos en Java..."
                  value={formData.specificArea}
                  onChange={(e) => handleInputChange('specificArea', e.target.value)}
                  autoFocus
                />
              </div>
            </div>
          )}

          {/* STEP 3: MEASUREMENT */}
          {step === 3 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                <span className="cyber-badge badge-cyan">PASO 03 // CRITERIO M: MEDIBLE</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#F5F2FF', marginBottom: '0.6rem' }}>
                ¿CÓMO COMPROBARÁS TU PROGRESO?
              </h3>
              <p style={{ color: '#B7B0C8', fontSize: '0.95rem', marginBottom: '1.4rem' }}>
                Define evidencias verificables, entregables o indicadores (número de ejercicios, porcentaje de aciertos, bitácora semanal o código en GitHub). No se limita solo a cifras monetarias.
              </p>
              <div style={{ marginBottom: '1.5rem' }}>
                <label
                  htmlFor="input-metric-evidence"
                  style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#00F5FF', marginBottom: '0.4rem' }}
                >
                  INDICADORES O EVIDENCIAS DE CUMPLIMIENTO:
                </label>
                <textarea
                  id="input-metric-evidence"
                  className="cyber-textarea"
                  placeholder="Ejemplo: Resolver 2 ejercicios diarios de LeetCode y registrar cuántos logro sin ver la solución..."
                  value={formData.metricEvidence}
                  onChange={(e) => handleInputChange('metricEvidence', e.target.value)}
                  autoFocus
                />
              </div>
            </div>
          )}

          {/* STEP 4: ACHIEVABLE */}
          {step === 4 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                <span className="cyber-badge badge-purple">PASO 04 // CRITERIO A: ALCANZABLE</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#F5F2FF', marginBottom: '0.6rem' }}>
                ¿QUÉ RECURSOS Y TIEMPO TIENES DISPONIBLES?
              </h3>
              <p style={{ color: '#B7B0C8', fontSize: '0.95rem', marginBottom: '1.4rem' }}>
                Considera tu tiempo real a la semana, conocimientos previos y herramientas. ¿Qué acciones concretas y viables realizarás?
              </p>
              <div style={{ marginBottom: '1.5rem' }}>
                <label
                  htmlFor="input-achievable-plan"
                  style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#00F5FF', marginBottom: '0.4rem' }}
                >
                  TIEMPO DISPONIBLE Y ACCIONES VIABLES:
                </label>
                <textarea
                  id="input-achievable-plan"
                  className="cyber-textarea"
                  placeholder="Ejemplo: Dedicaré 45 minutos de lunes a viernes a las 19:00 utilizando la plataforma de estudio de la facultad..."
                  value={formData.achievablePlan}
                  onChange={(e) => handleInputChange('achievablePlan', e.target.value)}
                  autoFocus
                />
              </div>
            </div>
          )}

          {/* STEP 5: RELEVANCE */}
          {step === 5 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                <span className="cyber-badge badge-pink">PASO 05 // CRITERIO R: RELEVANTE</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#F5F2FF', marginBottom: '0.6rem' }}>
                ¿POR QUÉ ES IMPORTANTE PARA TI ESTE OBJETIVO?
              </h3>
              <p style={{ color: '#B7B0C8', fontSize: '0.95rem', marginBottom: '1.4rem' }}>
                Conecta esta meta con tus prioridades inmediatas, tu plan de titulación, tu desarrollo profesional o tu propósito significativo.
              </p>
              <div style={{ marginBottom: '1.5rem' }}>
                <label
                  htmlFor="input-relevance-purpose"
                  style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#00F5FF', marginBottom: '0.4rem' }}
                >
                  MOTIVO ESTRATÉGICO / IMPACTO:
                </label>
                <textarea
                  id="input-relevance-purpose"
                  className="cyber-textarea"
                  placeholder="Ejemplo: Para aprobar con soltura la materia de Estructuras de Datos y estar preparado para entrevistas técnicas..."
                  value={formData.relevancePurpose}
                  onChange={(e) => handleInputChange('relevancePurpose', e.target.value)}
                  autoFocus
                />
              </div>
            </div>
          )}

          {/* STEP 6: TIME-BOUND */}
          {step === 6 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                <span className="cyber-badge badge-cyan">PASO 06 // CRITERIO T: TEMPORALMENTE DEFINIDO</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#F5F2FF', marginBottom: '0.6rem' }}>
                FECHA LÍMITE O PLAZO CONCRETO
              </h3>
              <p style={{ color: '#B7B0C8', fontSize: '0.95rem', marginBottom: '1.4rem' }}>
                Fija una fecha límite en el calendario o un marco temporal estricto para estructurar el cumplimiento y auditar los resultados.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem', marginBottom: '1.5rem' }}>
                <div>
                  <label
                    htmlFor="input-target-date"
                    style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#00F5FF', marginBottom: '0.4rem' }}
                  >
                    SELECCIONAR FECHA OBJETIVO (CALENDARIO):
                  </label>
                  <input
                    id="input-target-date"
                    type="date"
                    className="cyber-input"
                    value={formData.targetDate}
                    onChange={(e) => handleInputChange('targetDate', e.target.value)}
                  />
                  {isDateInPast && (
                    <div style={{ color: '#FF3366', fontSize: '0.78rem', marginTop: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <AlertTriangle size={12} />
                      <span>Alerta: Has seleccionado una fecha pasada. Corrige para continuar.</span>
                    </div>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="input-timebound-deadline"
                    style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#00F5FF', marginBottom: '0.4rem' }}
                  >
                    O DESCRIBE EL PLAZO Y CADENCIA:
                  </label>
                  <input
                    id="input-timebound-deadline"
                    type="text"
                    className="cyber-input"
                    placeholder="Ejemplo: Durante las próximas 6 semanas, revisando cada viernes..."
                    value={formData.timeboundDeadline}
                    onChange={(e) => handleInputChange('timeboundDeadline', e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 7: REVIEW */}
          {step === 7 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                <span className="cyber-badge badge-success">PASO 07 // AUDITORÍA PREVIA</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#F5F2FF', marginBottom: '0.6rem' }}>
                REVISIÓN DE CRITERIOS ANTES DE CONSOLIDAR
              </h3>
              <p style={{ color: '#B7B0C8', fontSize: '0.95rem', marginBottom: '1.4rem' }}>
                Verifica tus respuestas a los cinco criterios SMART. Puedes regresar o editar cualquier campo antes de generar el resultado.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.8rem' }}>
                {[
                  { label: 'Intención Inicial', value: formData.initialIntent, stepTarget: 1 },
                  { label: '[S] Específico', value: formData.specificArea, stepTarget: 2 },
                  { label: '[M] Medible', value: formData.metricEvidence, stepTarget: 3 },
                  { label: '[A] Alcanzable', value: formData.achievablePlan, stepTarget: 4 },
                  { label: '[R] Relevante', value: formData.relevancePurpose, stepTarget: 5 },
                  {
                    label: '[T] Temporal',
                    value: formData.targetDate ? `Fecha: ${formData.targetDate}` : formData.timeboundDeadline,
                    stepTarget: 6
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(16, 8, 23, 0.8)',
                      border: '1px solid #24143D',
                      padding: '0.9rem 1.2rem',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem'
                    }}
                  >
                    <div style={{ overflow: 'hidden' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#00F5FF', display: 'block' }}>
                        {item.label}
                      </span>
                      <p style={{ color: '#F5F2FF', fontSize: '0.95rem', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                        {item.value || '(Pendiente de completar)'}
                      </p>
                    </div>
                    <button
                      onClick={() => setStep(item.stepTarget)}
                      className="btn-cyber-outline"
                      style={{ fontSize: '0.75rem', padding: '0.3rem 0.6rem' }}
                      title="Editar este criterio"
                    >
                      <Edit3 size={13} />
                      <span>EDITAR</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 8: FINAL GENERATION & DIAGNOSTIC */}
          {step === 8 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                <span className="cyber-badge badge-success">PASO 08 // OBJETIVO SMART CONSOLIDADO</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#F5F2FF', marginBottom: '0.4rem' }}>
                MISIÓN CONSOLIDADA // PROTOCOLO LISTO
              </h3>
              <p style={{ color: '#B7B0C8', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                A continuación se presenta la redacción estructurada a partir de tus respuestas, acompañada de un diagnóstico orientativo de calidad metodológica.
              </p>

              {/* Main Result Card */}
              <div
                style={{
                  background: 'rgba(23, 16, 34, 0.95)',
                  border: '1px solid #00F5FF',
                  boxShadow: '0 0 25px rgba(0, 245, 255, 0.25)',
                  borderRadius: '6px',
                  padding: '1.8rem',
                  marginBottom: '1.8rem',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#00FFA3', letterSpacing: '0.1em' }}>
                    REPORTE GENERADO // SIN ALUCINACIONES
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#7D7594' }}>
                    {REPORT_DATE_STRING}
                  </span>
                </div>

                <blockquote
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.25rem',
                    lineHeight: 1.7,
                    color: '#F5F2FF',
                    fontStyle: 'normal',
                    padding: '1rem',
                    background: 'rgba(5, 5, 8, 0.6)',
                    borderLeft: '4px solid #FF00E5',
                    borderRadius: '0 4px 4px 0',
                    marginBottom: '1.5rem'
                  }}
                >
                  "{consolidatedGoalText}"
                </blockquote>

                {/* Action Buttons */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  <button
                    onClick={handleCopy}
                    className="btn-cyber-primary"
                    style={{ fontSize: '0.9rem', padding: '0.65rem 1.4rem' }}
                    id="btn-copy-goal"
                  >
                    {copySuccess ? <Check size={16} /> : <Copy size={16} />}
                    <span>{copySuccess ? '¡COPIADO AL PORTAPAPELES!' : 'COPIAR OBJETIVO'}</span>
                  </button>

                  <button
                    onClick={handleDownload}
                    className="btn-cyber-secondary"
                    style={{ fontSize: '0.9rem', padding: '0.65rem 1.4rem' }}
                    id="btn-download-goal"
                  >
                    <Download size={16} />
                    <span>DESCARGAR .TXT</span>
                  </button>

                  <button
                    onClick={() => setStep(7)}
                    className="btn-cyber-outline"
                    style={{ fontSize: '0.9rem', padding: '0.65rem 1.2rem' }}
                  >
                    <Edit3 size={15} />
                    <span>EDITAR CAMPOS</span>
                  </button>

                  <button
                    onClick={handleReset}
                    className="btn-cyber-outline"
                    style={{ fontSize: '0.9rem', padding: '0.65rem 1.2rem' }}
                  >
                    <RotateCcw size={15} />
                    <span>REINICIAR</span>
                  </button>
                </div>
              </div>

              {/* Quality Diagnostic Grid */}
              <div
                style={{
                  background: 'rgba(16, 8, 23, 0.9)',
                  border: '1px solid #2E1C4A',
                  borderRadius: '6px',
                  padding: '1.6rem',
                  marginBottom: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
                  <Sparkles size={18} color="#00F5FF" />
                  <h4 style={{ fontFamily: 'var(--font-tech)', fontSize: '1.15rem', color: '#F5F2FF' }}>
                    EVALUACIÓN ORIENTATIVA DE CALIDAD METODOLÓGICA
                  </h4>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#7D7594', marginBottom: '1.2rem' }}>
                  * Nota: Esta evaluación es un análisis orientativo sobre el grado de detalle proporcionado en cada campo. No constituye una calificación científica infalible; la ejecución real depende de tu disciplina.
                </p>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '1rem'
                  }}
                >
                  {diagnostics.map((diag) => (
                    <div
                      key={diag.criterion}
                      style={{
                        background: 'rgba(23, 16, 34, 0.8)',
                        border: `1px solid ${
                          diag.status === 'optimal'
                            ? '#00FFA3'
                            : diag.status === 'acceptable'
                            ? '#FFB800'
                            : '#FF3366'
                        }44`,
                        padding: '1rem',
                        borderRadius: '4px'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: '#F5F2FF' }}>
                          [{diag.criterion}] {diag.label}
                        </span>
                        <span
                          className={`cyber-badge ${
                            diag.status === 'optimal'
                              ? 'badge-success'
                              : diag.status === 'acceptable'
                              ? 'badge-warning'
                              : 'badge-pink'
                          }`}
                        >
                          {diag.status.toUpperCase()}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.82rem', color: '#B7B0C8', lineHeight: 1.4, marginBottom: '0.4rem' }}>
                        {diag.feedback}
                      </p>
                      <p style={{ fontSize: '0.75rem', color: '#7D7594', fontStyle: 'italic' }}>
                        💡 {diag.tip}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Wizard Navigation Footer */}
          {step < 8 && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid #24143D'
              }}
            >
              <button
                onClick={handleBack}
                disabled={step === 1}
                className="btn-cyber-outline"
                style={{
                  opacity: step === 1 ? 0.3 : 1,
                  cursor: step === 1 ? 'not-allowed' : 'pointer'
                }}
              >
                <ArrowLeft size={16} />
                <span>ANTERIOR</span>
              </button>

              <button
                onClick={handleNext}
                className="btn-cyber-primary"
                id={`btn-next-step-${step}`}
              >
                <span>{step === 7 ? 'CONSOLIDAR OBJETIVO' : 'CONTINUAR'}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Manual Copy Fallback Modal */}
      {showManualCopyModal && (
        <div
          role="dialog"
          aria-label="Copiado manual"
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
              border: '1px solid #00F5FF',
              borderRadius: '8px',
              maxWidth: '540px',
              width: '100%',
              padding: '1.8rem',
              boxShadow: '0 0 35px rgba(0, 245, 255, 0.4)'
            }}
          >
            <h4 style={{ fontFamily: 'var(--font-display)', color: '#00F5FF', marginBottom: '0.8rem' }}>
              COPIADO MANUAL DEL OBJETIVO
            </h4>
            <p style={{ color: '#B7B0C8', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Tu navegador restringió el acceso directo al portapapeles. Puedes seleccionar y copiar el texto directamente desde el recuadro inferior:
            </p>
            <textarea
              readOnly
              value={consolidatedGoalText}
              className="cyber-textarea"
              style={{ height: '140px', marginBottom: '1.2rem', selectEvents: 'all' } as React.CSSProperties}
              onClick={(e) => (e.target as HTMLTextAreaElement).select()}
            />
            <div style={{ textAlign: 'right' }}>
              <button
                onClick={() => setShowManualCopyModal(false)}
                className="btn-cyber-secondary"
                style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}
              >
                CERRAR VENTANA
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
