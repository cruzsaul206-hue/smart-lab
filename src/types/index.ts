export type SmartCriterionKey = 'S' | 'M' | 'A' | 'R' | 'T';

export interface SmartCriterionDetail {
  key: SmartCriterionKey;
  letter: string;
  title: string;
  englishTitle: string;
  badge: string;
  accentColor: string; // Neon hex
  definition: string;
  fullExplanation: string;
  guidingQuestions: string[];
  deficientExample: string;
  deficientReason: string;
  improvedExample: string;
  improvedAdvice: string;
  caveat?: string;
  quickCheck: {
    question: string;
    options: { id: string; text: string; isCorrect: boolean }[];
    explanation: string;
  };
}

export interface GoalBuilderData {
  step: number;
  initialIntent: string;
  specificArea: string;
  metricEvidence: string;
  achievablePlan: string;
  relevancePurpose: string;
  timeboundDeadline: string;
  targetDate: string;
}

export interface DiagnosticItem {
  criterion: SmartCriterionKey;
  label: string;
  status: 'optimal' | 'acceptable' | 'insufficient';
  score: number; // 0 to 100
  feedback: string;
  tip: string;
}

export interface QuizQuestion {
  id: number;
  category: SmartCriterionKey | 'GENERAL' | 'HISTORIA';
  question: string;
  codeSnippet?: string;
  options: {
    id: string;
    text: string;
  }[];
  correctOptionId: string;
  explanation: string;
}

export interface SimulatorChallenge {
  id: string;
  title: string;
  category: 'Estudios Universitarios' | 'Programación' | 'Gestión del Tiempo' | 'Desarrollo Profesional' | 'Trabajo en Equipo';
  categoryKey: 'universidad' | 'programacion' | 'tiempo' | 'carrera' | 'equipo';
  scenario: string;
  analyzedGoal: string;
  diagnosticQuestion: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    feedback: string;
  }[];
  failingCriterion: SmartCriterionKey;
  exemplaryResolution: string;
  academicRationale: string;
}

export interface AcademicReference {
  id: string;
  author: string;
  year: string;
  title: string;
  publication: string;
  url: string;
  secondaryUrl?: string;
  verifiedLabel: string;
  verificationNote: string;
  abstractSummary: string;
  apaCitation: string;
}

export interface UserSessionProgress {
  exploredCriteria: SmartCriterionKey[];
  builderCompleted: boolean;
  builtGoalText: string | null;
  quizScore: number | null;
  quizTotal: number;
  completedChallenges: string[];
  lastUpdated: string;
}
