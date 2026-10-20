import type { SmartCriterionDetail } from '../types';

export const SMART_CRITERIA_DATA: Record<'S' | 'M' | 'A' | 'R' | 'T', SmartCriterionDetail> = {
  S: {
    key: 'S',
    letter: 'S',
    title: 'Específico',
    englishTitle: 'Specific',
    badge: 'DELIMITACIÓN PRECISA',
    accentColor: '#FF00E5',
    definition: 'Un objetivo debe describir con total claridad, precisión y sin ambigüedades qué se quiere conseguir, eliminando interpretaciones vagas.',
    fullExplanation: 'La especificidad es el anclaje inicial de cualquier meta. Cuando un objetivo es difuso o excesivamente amplio ("ser mejor estudiante", "aprender a programar"), el cerebro no puede identificar las acciones operativas inmediatas. Especificar implica acotar el alcance, determinar el resultado exacto, delimitar el contexto de aplicación y definir quiénes intervienen.',
    guidingQuestions: [
      '¿Qué quiero conseguir exactamente?',
      '¿Cuál es el resultado concreto y tangible que busco?',
      '¿En qué área o disciplina concreta trabajaré?',
      '¿Quién o quiénes están involucrados?',
      '¿Qué limitaciones, herramientas o entornos forman parte del objetivo?'
    ],
    deficientExample: 'Quiero mejorar.',
    deficientReason: 'Falla porque no define qué significa "mejorar", en qué disciplina o habilidad ocurrirá, ni cuál es el resultado concreto esperado. Es una mera aspiración emocional sin dirección operativa.',
    improvedExample: 'Quiero mejorar mi capacidad para resolver ejercicios de programación en Java.',
    improvedAdvice: 'Sustituye verbos genéricos ("crecer", "optimizar", "mejorar") por acciones focalizadas y delimita el tema o habilidad técnica exacta.',
    quickCheck: {
      question: '¿Cuál de las siguientes metas cumple con el criterio de Especificidad (S)?',
      options: [
        { id: 's1', text: 'Estudiar más para que me vaya bien en la carrera.', isCorrect: false },
        { id: 's2', text: 'Redactar el marco teórico de mi tesis sobre algoritmos de optimización.', isCorrect: true },
        { id: 's3', text: 'Volverme un experto en tecnología moderna.', isCorrect: false }
      ],
      explanation: 'La opción sobre el marco teórico delimita con exactitud la tarea concreta (redacción del marco teórico) y el objeto de estudio específico (algoritmos de optimización).'
    }
  },
  M: {
    key: 'M',
    letter: 'M',
    title: 'Medible',
    englishTitle: 'Measurable',
    badge: 'MÉTRICA Y EVIDENCIA',
    accentColor: '#00F5FF',
    definition: 'Debe existir una forma razonable, objetiva y verificable de evaluar el avance continuo o el grado de cumplimiento final de la meta.',
    fullExplanation: 'Sin medición, no es posible saber si nos estamos acercando o alejando del propósito. La medición no se restringe a cifras matemáticas abstractas; puede constituirse mediante entregables discretos (ej. "completar 5 módulos"), unidades de tiempo registradas, porcentajes de acierto o evidencias documentales. Lo crucial es que un observador externo pueda corroborar sin ambigüedad si el hito fue alcanzado.',
    guidingQuestions: [
      '¿Qué indicador cuantitativo o cualitativo utilizaré?',
      '¿Cómo comprobaré el progreso a lo largo de las semanas?',
      '¿Qué evidencia tangible demostrará que alcancé el resultado?',
      '¿Cuánto o cuántos serán necesarios para declarar éxito?'
    ],
    deficientExample: 'Practicaré mucho.',
    deficientReason: 'Falla porque "mucho" es un juicio subjetivo imposible de auditar. Lo que para una persona son 10 minutos, para otra son 5 horas. No permite saber cuándo se ha cumplido la sesión.',
    improvedExample: 'Resolveré diez ejercicios de programación y registraré cuántos puedo completar correctamente sin consultar la solución.',
    improvedAdvice: 'Establece unidades tangibles (número de ejercicios, porcentaje de precisión, bitácora de registro, entregable verificado) que sirvan como evidencia fehaciente.',
    quickCheck: {
      question: '¿Qué elemento hace que un objetivo sea verdaderamente Medible (M)?',
      options: [
        { id: 'm1', text: 'Que suene ambicioso y motivador para quien lo lee.', isCorrect: false },
        { id: 'm2', text: 'Disponer de un indicador verificable o evidencia empírica que demuestre el avance.', isCorrect: true },
        { id: 'm3', text: 'Que únicamente contenga números monetarios o de porcentaje.', isCorrect: false }
      ],
      explanation: 'Medible implica contar con indicadores o evidencias comprobables que permitan verificar objetivamente el grado de cumplimiento, sin limitarse únicamente a cifras financieras.'
    }
  },
  A: {
    key: 'A',
    letter: 'A',
    title: 'Alcanzable',
    englishTitle: 'Achievable',
    badge: 'VIABILIDAD Y RECURSOS',
    accentColor: '#8A2BFF',
    definition: 'El objetivo debe ser realista considerando las capacidades, conocimientos previos, recursos materiales y el tiempo real disponible.',
    fullExplanation: 'Un objetivo debe plantear un reto estimulante pero dentro de las leyes de la física, la cognición y las obligaciones cotidianas del individuo. Si la meta es desmesurada respecto a los recursos disponibles, engendra frustración, agotamiento (burnout) y deserción. Analizar la viabilidad implica identificar la brecha entre el estado actual y el deseado, y trazar un puente practicable.',
    guidingQuestions: [
      '¿Es viable con mis recursos, presupuesto y herramientas actuales?',
      '¿Cuánto tiempo real a la semana puedo dedicarle sin colapsar otras obligaciones?',
      '¿Qué conocimientos o habilidades previas necesito adquirir primero?',
      '¿Qué obstáculos previsibles existen y qué plan de contingencia tengo?'
    ],
    deficientExample: 'Aprenderé todo Java en dos días desde cero.',
    deficientReason: 'Falla por inviabilidad cognitiva y temporal. La asimilación de la sintaxis, concurrencia y buenas prácticas de un lenguaje exige tiempo de maduración y práctica deliberada.',
    improvedExample: 'Durante cuatro semanas estudiaré los fundamentos de Java y practicaré con ejercicios adecuados a mi nivel.',
    improvedAdvice: 'Descompón retos titánicos en ciclos incrementales. Nota pedagógica: este ejemplo es potencialmente más viable, pero su viabilidad concreta dependerá siempre de los recursos y circunstancias individuales.',
    caveat: 'Aclaración importante: La viabilidad de cualquier meta depende de los recursos personales, conocimientos previos y disponibilidad real de cada persona.',
    quickCheck: {
      question: '¿Por qué la viabilidad (A) es crucial en la psicología del logro?',
      options: [
        { id: 'a1', text: 'Porque evita el establecimiento de metas que superen nuestras capacidades inmediatas, previniendo la frustración.', isCorrect: true },
        { id: 'a2', text: 'Porque garantiza que nunca tengamos que esforzarnos ni salir de la zona de confort.', isCorrect: false },
        { id: 'a3', text: 'Porque elimina la necesidad de revisar los objetivos a mitad del camino.', isCorrect: false }
      ],
      explanation: 'El criterio alcanzable equilibra el desafío con la capacidad real, evitando tanto el aburrimiento de metas triviales como la parálisis de metas inalcanzables.'
    }
  },
  R: {
    key: 'R',
    letter: 'R',
    title: 'Relevante',
    englishTitle: 'Relevant',
    badge: 'ALINEACIÓN ESTRATÉGICA',
    accentColor: '#FF00E5',
    definition: 'El objetivo debe contribuir directamente a una prioridad fundamental, necesidad académica, vocacional o propósito significativo a largo plazo.',
    fullExplanation: 'La relevancia responde a la pregunta crucial: "¿Por qué importa esto ahora?". No todas las tareas bien redactadas son metas que merecen ser perseguidas. Si una meta no conecta con la visión global académica, profesional o vital, carecerá de tracción motivacional y consumirá energía que debería dedicarse a las prioridades nucleares.',
    guidingQuestions: [
      '¿Por qué es genuinamente importante para mí este objetivo en este momento?',
      '¿Cómo contribuye a mis metas académicas, profesionales o de vida generales?',
      '¿Vale la pena la inversión de tiempo, energía y costo de oportunidad?',
      '¿Es el momento oportuno para emprender esta iniciativa o compite con algo más urgente?'
    ],
    deficientExample: 'Haré un curso sin saber para qué lo necesito.',
    deficientReason: 'Falla porque representa acumulación compulsiva de certificados o tareas sin conexión con un plan de estudios o aspiración profesional definida.',
    improvedExample: 'Estudiaré consultas SQL para fortalecer las habilidades que necesito en mis proyectos de bases de datos.',
    improvedAdvice: 'Conecta siempre la acción inmediata con un impacto real en tu proyecto final, inserción laboral o avance académico sustantivo.',
    quickCheck: {
      question: '¿Qué distingue una meta Relevante (R) de una meta simplemente atractiva?',
      options: [
        { id: 'r1', text: 'Su alineación estratégica con tus prioridades nucleares y su impacto directo a largo plazo.', isCorrect: true },
        { id: 'r2', text: 'Que sea fácil de completar en menos de una hora.', isCorrect: false },
        { id: 'r3', text: 'Que otras personas en redes sociales la estén haciendo.', isCorrect: false }
      ],
      explanation: 'La relevancia asegura que la meta aporte valor real y significativo al ecosistema de objetivos del individuo o equipo.'
    }
  },
  T: {
    key: 'T',
    letter: 'T',
    title: 'Temporalmente Definido',
    englishTitle: 'Time-Bound',
    badge: 'CADENCIA Y LÍMITES',
    accentColor: '#00F5FF',
    definition: 'Debe establecerse un marco temporal preciso, fecha límite o cadencia periódica que organice las actividades y obligue a la rendición de cuentas.',
    fullExplanation: 'La Ley de Parkinson postula que el trabajo se expande hasta llenar el tiempo disponible para su realización. Sin una fecha límite o un cronograma con hitos intermedios, las metas se postergan indefinidamente ("algún día"). Un horizonte temporal genera un sentido constructivo de urgencia, permite estructurar la agenda y fija el momento exacto para evaluar el éxito.',
    guidingQuestions: [
      '¿Cuándo quiero terminar exactamente?',
      '¿Qué hitos intermedios semanales o quincenales estableceré?',
      '¿Con qué frecuencia revisaré mis avances (ej. cada viernes a las 18:00)?',
      '¿Qué puedo hacer hoy, en dos semanas y al final del plazo?'
    ],
    deficientExample: 'Algún día terminaré mi proyecto.',
    deficientReason: 'Falla porque la expresión "algún día" posterga perpetuamente la acción, disuelve el compromiso y evita cualquier evaluación de cumplimiento.',
    improvedExample: 'Terminaré la primera versión de mi proyecto el 30 de noviembre y revisaré mis avances cada viernes.',
    improvedAdvice: 'Fija una fecha en el calendario y define puntos de control intermedios para detectar desvíos antes de la fecha límite final.',
    caveat: 'Aclaración importante: La fecha del 30 de noviembre se utiliza únicamente con fines ilustrativos y no representa una fecha límite real para el usuario.',
    quickCheck: {
      question: '¿Cuál es la función principal de fijar un límite temporal (T)?',
      options: [
        { id: 't1', text: 'Aumentar los niveles de estrés para rendir bajo presión constante.', isCorrect: false },
        { id: 't2', text: 'Estructurar el esfuerzo en el calendario, crear sentido de urgencia constructivo y definir cuándo evaluar el resultado.', isCorrect: true },
        { id: 't3', text: 'Asegurar que nunca se pueda reprogramar la meta bajo ninguna circunstancia.', isCorrect: false }
      ],
      explanation: 'El límite temporal otorga cadencia a la acción, permitiendo auditar el cumplimiento y asignar los recursos necesarios en el tiempo.'
    }
  }
};
