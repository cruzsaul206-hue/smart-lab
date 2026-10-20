import type { SmartCriterionKey, UserSessionProgress } from '../types';

const STORAGE_KEY = 'smart_lab_progress_v1';

const DEFAULT_PROGRESS: UserSessionProgress = {
  exploredCriteria: [],
  builderCompleted: false,
  builtGoalText: null,
  quizScore: null,
  quizTotal: 10,
  completedChallenges: [],
  lastUpdated: new Date().toISOString()
};

export function loadSessionProgress(): UserSessionProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PROGRESS };
    const parsed = JSON.parse(raw) as UserSessionProgress;
    return {
      ...DEFAULT_PROGRESS,
      ...parsed,
      exploredCriteria: Array.isArray(parsed.exploredCriteria) ? parsed.exploredCriteria : [],
      completedChallenges: Array.isArray(parsed.completedChallenges) ? parsed.completedChallenges : []
    };
  } catch {
    return { ...DEFAULT_PROGRESS };
  }
}

export function saveSessionProgress(progress: UserSessionProgress): void {
  try {
    const updated = {
      ...progress,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // quota exceeded or private mode
  }
}

export function markCriterionExplored(criterion: SmartCriterionKey): UserSessionProgress {
  const current = loadSessionProgress();
  if (!current.exploredCriteria.includes(criterion)) {
    current.exploredCriteria.push(criterion);
    saveSessionProgress(current);
  }
  return current;
}

export function markGoalCreated(goalText: string): UserSessionProgress {
  const current = loadSessionProgress();
  current.builderCompleted = true;
  current.builtGoalText = goalText;
  saveSessionProgress(current);
  return current;
}

export function recordQuizScore(score: number, total: number): UserSessionProgress {
  const current = loadSessionProgress();
  current.quizScore = score;
  current.quizTotal = total;
  saveSessionProgress(current);
  return current;
}

export function recordChallengeCompleted(challengeId: string): UserSessionProgress {
  const current = loadSessionProgress();
  if (!current.completedChallenges.includes(challengeId)) {
    current.completedChallenges.push(challengeId);
    saveSessionProgress(current);
  }
  return current;
}

export function purgeSessionProgress(): UserSessionProgress {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
  return { ...DEFAULT_PROGRESS };
}
