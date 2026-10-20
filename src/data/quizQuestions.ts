import type { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    category: 'S',
    question: 'Un estudiante de ingeniería define su meta como: "Voy a estudiar más este semestre para subir mis notas". ¿Cuál es el principal fallo que presenta según la metodología SMART?',
    options: [
      { id: 'a', text: 'Carece de especificidad (S), ya que no define qué asignaturas, qué temas ni qué acciones concretas realizará.' },
      { id: 'b', text: 'Es excesivamente largo y técnico para un objetivo académico.' },
      { id: 'c', text: 'Es inalcanzable porque ningún estudiante puede subir sus notas de forma intencional.' },
      { id: 'd', text: 'Cumple perfectamente con todos los criterios SMART sin requerir modificaciones.' }
    ],
    correctOptionId: 'a',
    explanation: 'El objetivo adolece fundamentalmente de falta de especificidad (S): "estudiar más" es un deseo difuso. Para ser específico, debe indicar qué materias abordará, qué técnicas empleará y qué resultados precisos persigue.'
  },
  {
    id: 2,
    category: 'M',
    question: 'En el criterio Medible (M), ¿por qué una meta como "Practicaré mucho código" resulta deficiente para auditar el progreso?',
    options: [
      { id: 'a', text: 'Porque el término "mucho" es una apreciación subjetiva que no ofrece un indicador auditable ni evidencia comprobable.' },
      { id: 'b', text: 'Porque el código solo puede medirse en líneas de código escritas por minuto.' },
      { id: 'c', text: 'Porque la medición solo es aplicable a objetivos de empresas comerciales con fines de lucro.' },
      { id: 'd', text: 'Porque los objetivos SMART prohíben la práctica deliberada en ciencias de la computación.' }
    ],
    correctOptionId: 'a',
    explanation: 'La medición exige métricas o evidencias objetivas (ej. "resolver 10 problemas de estructuras de datos y registrar los resueltos correctamente"). "Mucho" varía según la percepción de cada persona y no permite evaluar el cumplimiento.'
  },
  {
    id: 3,
    category: 'A',
    question: 'Un desarrollador principiante se propone: "Aprenderé arquitectura de microservicios, Rust, Kubernetes y compiladores en los próximos 3 días desde cero". ¿Qué principio fundamental vulnera este planteamiento?',
    options: [
      { id: 'a', text: 'Alcanzable (A), debido a que la carga cognitiva y temporal rebasa de manera insostenible los límites de asimilación humana.' },
      { id: 'b', text: 'Temporal (T), porque incluye un plazo explícito de 3 días.' },
      { id: 'c', text: 'Específico (S), ya que menciona herramientas técnicas reales de desarrollo.' },
      { id: 'd', text: 'Relevante (R), porque Kubernetes y Rust son tecnologías sin demanda en el sector.' }
    ],
    correctOptionId: 'a',
    explanation: 'Vulnera el criterio Alcanzable (A). Establecer metas que ignoran la viabilidad cognitiva y el tiempo disponible genera frustración inmediata, fatiga y abandono del aprendizaje.'
  },
  {
    id: 4,
    category: 'R',
    question: '¿Cuál de las siguientes preguntas orientadoras evalúa de forma directa la Relevancia (R) de un objetivo?',
    options: [
      { id: 'a', text: '¿Cuántas páginas exactas tendrá el reporte final?' },
      { id: 'b', text: '¿Por qué es importante este objetivo para mis metas académicas o profesionales a largo plazo?' },
      { id: 'c', text: '¿Cuál es la fecha límite exacta en formato ISO-8601?' },
      { id: 'd', text: '¿Quién será el profesor que califique el entregable?' }
    ],
    correctOptionId: 'b',
    explanation: 'La Relevancia indaga sobre el propósito estratégico y el valor intrínseco de la meta: asegura que el esfuerzo invertido aporte genuinamente a los objetivos superiores del individuo o proyecto.'
  },
  {
    id: 5,
    category: 'T',
    question: '¿Por qué la formulación "Algún día publicaré mi portafolio web" bloquea la operatividad del sistema de metas?',
    options: [
      { id: 'a', text: 'Porque "algún día" posterga perpetuamente la acción al no definir una fecha límite ni una cadencia de evaluación (T).' },
      { id: 'b', text: 'Porque los portafolios web ya no se utilizan en la industria tecnológica moderna.' },
      { id: 'c', text: 'Porque un objetivo temporal debe ejecutarse exclusivamente en menos de 24 horas.' },
      { id: 'd', text: 'Porque viola la regla de Doran de tener exactamente tres palabras por meta.' }
    ],
    correctOptionId: 'a',
    explanation: 'Sin delimitación temporal (Time-bound), no existe sentido de compromiso ni fecha en la que se audite el cumplimiento. Las metas sin plazo suelen diluirse frente a las urgencias cotidianas.'
  },
  {
    id: 6,
    category: 'HISTORIA',
    question: 'En el artículo original publicado por George T. Doran en 1981 en Management Review, ¿a qué correspondía originalmente la letra "A" en el acrónimo S.M.A.R.T.?',
    options: [
      { id: 'a', text: 'Assignable (Asignable: especificar quién realizará el trabajo).' },
      { id: 'b', text: 'Achievable (Alcanzable: factibilidad de recursos).' },
      { id: 'c', text: 'Ambitious (Ambicioso: metas de alto riesgo).' },
      { id: 'd', text: 'Automated (Automatizado: procesos sin intervención humana).' }
    ],
    correctOptionId: 'a',
    explanation: 'En la formulación original corporativa de Doran (1981), la letra "A" representaba "Assignable" (especificar quién es el responsable de ejecutar la tarea). Posteriormente, en contextos educativos y personales mutó hacia "Achievable".'
  },
  {
    id: 7,
    category: 'HISTORIA',
    question: '¿Cuál de las siguientes afirmaciones refleja fielmente la postura de George T. Doran en su artículo fundacional de 1981?',
    options: [
      { id: 'a', text: 'Doran advirtió que no todos los objetivos deben contener necesariamente los cinco criterios en todos los niveles.' },
      { id: 'b', text: 'Doran afirmó que seguir el acrónimo SMART garantiza el 100% de éxito en cualquier meta sin excepciones.' },
      { id: 'c', text: 'Doran inventó el método para su aplicación exclusiva en escuelas secundarias.' },
      { id: 'd', text: 'Doran prohibió el uso de metas cualitativas en cualquier circunstancia empresarial.' }
    ],
    correctOptionId: 'a',
    explanation: 'Doran fue muy pragmático: aclaró expresamente que no todos los objetivos gerenciales requieren forzosamente los cinco criterios, y que la combinación del objetivo con su plan de acción es lo determinante.'
  },
  {
    id: 8,
    category: 'GENERAL',
    question: 'Analiza la siguiente meta: "Durante las próximas 6 semanas, dedicaré 45 minutos de lunes a viernes a resolver ejercicios de algoritmos en Python, registrando el progreso en GitHub para entregar el proyecto antes del 15 de diciembre". ¿Qué característica metodológica destaca?',
    options: [
      { id: 'a', text: 'Integra de manera coherente los cinco criterios: específico (algoritmos en Python), medible (GitHub/ejercicios), alcanzable (45 min/día), relevante (entrega proyecto) y delimitado (15 de diciembre).' },
      { id: 'b', text: 'Es un objetivo inválido porque mezcla dos lenguajes de programación simultáneamente.' },
      { id: 'c', text: 'Falla porque supera las 10 horas de estudio ininterrumpido al día.' },
      { id: 'd', text: 'No tiene límite temporal porque no especifica la hora exacta con minutos y segundos.' }
    ],
    correctOptionId: 'a',
    explanation: 'El enunciado constituye un ejemplo canónico bien estructurado: delimita la materia, establece una unidad medible y auditable, plantea una dosis diaria viable, conecta con un propósito relevante y marca una fecha límite clara.'
  },
  {
    id: 9,
    category: 'GENERAL',
    question: '¿Cuál es la diferencia fundamental entre una simple "intención" y un "objetivo estructurado"?',
    options: [
      { id: 'a', text: 'La intención es un anhelo abstracto sin plan operativo; el objetivo estructurado define acciones, métricas, recursos y límites temporales.' },
      { id: 'b', text: 'Las intenciones son siempre imposibles de cumplir, mientras que los objetivos se cumplen de forma instantánea.' },
      { id: 'c', text: 'No existe ninguna diferencia: son términos idénticos en la literatura psicológica.' },
      { id: 'd', text: 'La intención solo se redacta en latín o griego clásico.' }
    ],
    correctOptionId: 'a',
    explanation: 'Una intención describe un estado deseado ("quiero aprender inglés"), mientras que un objetivo estructurado traza la ingeniería de ejecución que transforma la intención en hábitos, mediciones y entregables verificables.'
  },
  {
    id: 10,
    category: 'GENERAL',
    question: 'Al redactar un objetivo académico, ¿por qué es recomendable incluir puntos de control o hitos intermedios además de la fecha límite final?',
    options: [
      { id: 'a', text: 'Porque permiten detectar desviaciones a tiempo y ajustar el plan antes de que sea imposible corregir el resultado en la fecha límite.' },
      { id: 'b', text: 'Porque sustituyen por completo la necesidad de cumplir con el criterio Específico (S).' },
      { id: 'c', text: 'Para que el profesor deba revisar la tarea todos los días sin descanso.' },
      { id: 'd', text: 'Porque Doran estableció que cada objetivo debe tener como mínimo 50 hitos intermedios.' }
    ],
    correctOptionId: 'a',
    explanation: 'Los hitos intermedios actúan como sensores de telemetría: si en la semana 2 se evidencia un retraso, es posible recalibrar el ritmo de trabajo antes de llegar al plazo fatal del hito final.'
  }
];
