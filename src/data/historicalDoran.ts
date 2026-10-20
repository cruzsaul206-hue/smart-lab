export interface HistoricalComparisonRow {
  letter: string;
  originalDoran1981: string;
  originalSpanish: string;
  originalConcept: string;
  contemporaryStandard: string;
  contemporarySpanish: string;
  contemporaryConcept: string;
  keyEvolutionNote: string;
}

export const HISTORICAL_COMPARISON: HistoricalComparisonRow[] = [
  {
    letter: 'S',
    originalDoran1981: 'Specific',
    originalSpanish: 'Específico',
    originalConcept: 'Focalizar un área concreta para la mejora.',
    contemporaryStandard: 'Specific',
    contemporarySpanish: 'Específico',
    contemporaryConcept: 'Claridad sin ambigüedades sobre el qué y cómo.',
    keyEvolutionNote: 'Se mantuvo idéntico en el término y fortaleció su énfasis en eliminar la ambigüedad conceptual.'
  },
  {
    letter: 'M',
    originalDoran1981: 'Measurable',
    originalSpanish: 'Medible',
    originalConcept: 'Cuantificar o al menos sugerir un indicador de progreso.',
    contemporaryStandard: 'Measurable',
    contemporarySpanish: 'Medible',
    contemporaryConcept: 'Indicador empírico o evidencia auditable de avance.',
    keyEvolutionNote: 'Doran admitía indicadores cualitativos indirectos; el enfoque contemporáneo amplió el abanico a evidencias verificables.'
  },
  {
    letter: 'A',
    originalDoran1981: 'Assignable',
    originalSpanish: 'Asignable',
    originalConcept: 'Especificar quién realizará el trabajo y asumirá la responsabilidad operativa.',
    contemporaryStandard: 'Achievable / Attainable',
    contemporarySpanish: 'Alcanzable',
    contemporaryConcept: 'Factibilidad y adecuación a los recursos, tiempo y capacidades reales.',
    keyEvolutionNote: 'Mutación clave: en el contexto corporativo de Doran, asignar responsables era vital. En contextos educativos y de autoeficacia individual, mutó hacia la viabilidad cognitiva y de recursos.'
  },
  {
    letter: 'R',
    originalDoran1981: 'Realistic',
    originalSpanish: 'Realista',
    originalConcept: 'Determinar qué resultados pueden alcanzarse realistamente con los recursos disponibles.',
    contemporaryStandard: 'Relevant',
    contemporarySpanish: 'Relevante',
    contemporaryConcept: 'Alineación con prioridades nucleares, propósito y significado a largo plazo.',
    keyEvolutionNote: 'Como "Alcanzable" absorbió el concepto de "Realista", la "R" evolucionó hacia "Relevante" (alineación estratégica con la misión).'
  },
  {
    letter: 'T',
    originalDoran1981: 'Time-related',
    originalSpanish: 'Relacionado con el tiempo',
    originalConcept: 'Especificar cuándo puede alcanzarse el resultado esperado.',
    contemporaryStandard: 'Time-bound',
    contemporarySpanish: 'Delimitado en el tiempo',
    contemporaryConcept: 'Fecha límite estricta, cronograma con hitos y cadencia de rendición de cuentas.',
    keyEvolutionNote: 'Ambos comparten la necesidad de anclar la meta en el calendario, evolucionando hacia plazos definidos y revisiones periódicas.'
  }
];

export const DORAN_ARCHIVE_DATA = {
  articleTitle: "There's a S.M.A.R.T. Way to Write Management's Goals and Objectives",
  author: 'George T. Doran',
  authorRole: 'Consultor y ex Director de Planificación Corporativa de Washington Water Power Company',
  journal: 'Management Review (AMA Forum - American Management Association)',
  publicationDate: 'Noviembre de 1981 (Vol. 70, No. 11, pp. 35-36)',
  ebscoLink: 'https://openurl.ebsco.com/contentitem/gcd%3A6043491',
  pdfLink: 'https://www.decisionskills.com/uploads/5/1/6/0/5160560/doran_1981_s.m.a.r.t-way-management-review.pdf',
  essentialInsights: [
    {
      title: 'No es una fórmula rígida universal',
      content: 'Doran advirtió expresamente en su artículo que no todos los objetivos gerenciales necesitan ni pueden contener los cinco criterios de manera obligatoria: "Sería un error sugerir que cada objetivo debe cuantificarse rígidamente en cada nivel... La combinación del objetivo con su plan de acción es lo fundamental".'
    },
    {
      title: 'Distinción entre Metas (Goals) y Objetivos (Objectives)',
      content: 'Doran planteaba que las metas (goals) representan ideales o filosofías amplias hacia las que la organización se orienta, mientras que los objetivos (objectives) son metas operativas cuantificadas o acotadas con precisión temporal.'
    },
    {
      title: 'El acrónimo no garantiza el éxito por arte de magia',
      content: 'SMART fue propuesto como una guía práctica de redacción y estructuración reflexiva para directivos, no como un amuleto infalible. El éxito de cualquier meta depende de la ejecución real, la adaptabilidad a entornos cambiantes y la consistencia en el seguimiento.'
    }
  ]
};
