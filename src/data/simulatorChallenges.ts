import type { SimulatorChallenge } from '../types';

export const SIMULATOR_CHALLENGES: SimulatorChallenge[] = [
  {
    id: 'chall-1',
    title: 'OPERACIÓN CAMPUS: EXAMEN DE CÁLCULO',
    category: 'Estudios Universitarios',
    categoryKey: 'universidad',
    scenario: 'Laura está en su segundo año de ingeniería y se enfrenta al examen final de Cálculo Multivariable. En el primer parcial obtuvo una nota baja y teme reprobar. Al preguntarle cuál es su plan de acción, responde con la siguiente meta.',
    analyzedGoal: '"Me esforzaré al máximo y estudiaré todo lo posible durante las próximas semanas para pasar Cálculo con una buena nota."',
    diagnosticQuestion: '¿Cuál es la debilidad metodológica más crítica en la meta declarada por Laura?',
    options: [
      {
        id: 'opt-a',
        text: 'Carece de especificidad (S) y medición (M): "esforzarse al máximo" y "estudiar todo lo posible" no determinan qué temas estudiará, cuántas horas dedicará ni qué evidencia objetiva evaluará su avance.',
        isCorrect: true,
        feedback: '¡Diagnóstico certero! La meta de Laura es una declaración de intenciones sin unidades operativas. No define qué guías de ejercicios resolverá ni qué nota específica necesita alcanzar.'
      },
      {
        id: 'opt-b',
        text: 'El objetivo es inalcanzable (A) porque nadie que haya reprobado un parcial puede aprobar una materia de cálculo.',
        isCorrect: false,
        feedback: 'Incorrecto. Aprobar Cálculo tras un mal parcial es completamente viable con un plan de estudio estructurado y práctica deliberada.'
      },
      {
        id: 'opt-c',
        text: 'Falla exclusivamente en la relevancia (R), ya que el cálculo multivariable no tiene ninguna aplicación en la ingeniería moderna.',
        isCorrect: false,
        feedback: 'Incorrecto. El cálculo es una asignatura medular en los planes de estudio de ingeniería; la relevancia no es el problema en este caso.'
      }
    ],
    failingCriterion: 'S',
    exemplaryResolution: 'Durante las próximas 4 semanas, estudiaré 90 minutos diarios de lunes a viernes resolviendo 5 problemas de integrales múltiples por sesión, realizando un simulacro semanal los sábados para obtener al menos un 80% de aciertos antes del examen del 18 de junio.',
    academicRationale: 'Al transformar "estudiar todo lo posible" en dosis diarias discretas con un simulacro auditable, Laura sustituye la angustia abstracta por un protocolo de estudio con retroalimentación medible.'
  },
  {
    id: 'chall-2',
    title: 'DEBUGGER SPRINT: REFACTORIZACIÓN BACKEND',
    category: 'Programación',
    categoryKey: 'programacion',
    scenario: 'Mateo es desarrollador junior en una startup. El servidor Node.js tiene cuellos de botella en las consultas a la base de datos PostgreSQL. En la reunión de retrospectiva, propone su objetivo para el sprint.',
    analyzedGoal: '"Reescribiré todo el backend en Go y optimizaré todas las consultas para que la aplicación sea súper rápida antes del viernes."',
    diagnosticQuestion: '¿Qué criterio SMART colapsa principalmente en la propuesta de Mateo?',
    options: [
      {
        id: 'opt-a',
        text: 'Relevancia (R), ya que hacer una aplicación rápida nunca beneficia a una empresa de tecnología.',
        isCorrect: false,
        feedback: 'Incorrecto. Optimizar el rendimiento y la latencia es prioritario; la relevancia está plenamente justificada.'
      },
      {
        id: 'opt-b',
        text: 'Alcanzable (A) y Medible (M): Reescribir toda la arquitectura backend a otro lenguaje en menos de una semana es inviable para un desarrollador junior, y "súper rápida" es una métrica subjetiva inauditable.',
        isCorrect: true,
        feedback: '¡Excelente análisis! Migrar una base de código completa a un nuevo paradigma en 4 días desafía la viabilidad real. Además, "súper rápida" carece de un umbral técnico como latencia P95 o tiempo de respuesta en milisegundos.'
      },
      {
        id: 'opt-c',
        text: 'Falla únicamente porque los objetivos en programación no admiten nombres de tecnologías específicas como Go.',
        isCorrect: false,
        feedback: 'Incorrecto. Mencionar tecnologías concretas refuerza la especificidad técnica; el error radica en la desproporción temporal y la falta de métricas precisas.'
      }
    ],
    failingCriterion: 'A',
    exemplaryResolution: 'Durante el sprint de 5 días, indexaré las 3 consultas críticas de Postgres identificadas en los logs y optimizaré los endpoints de usuarios para reducir el tiempo de respuesta P95 de 850ms a menos de 200ms antes del viernes a las 17:00.',
    academicRationale: 'Acotar la optimización a las consultas que causan el 80% de la latencia hace viable la tarea en el tiempo del sprint y define un indicador medible indiscutible (200ms).'
  },
  {
    id: 'chall-3',
    title: 'CHRONO MATRIX: LA TRAMPA DE LA PROCRASTINACIÓN',
    category: 'Gestión del Tiempo',
    categoryKey: 'tiempo',
    scenario: 'Sofía cursa el último año universitario mientras realiza prácticas profesionales. Siente que los días se le escapan sin avanzar en su proyecto de fin de grado (TFG). En su libreta de notas escribe:',
    analyzedGoal: '"Organizaré mi tiempo para avanzar en el trabajo de fin de grado y ser mucho más productiva en mis ratos libres."',
    diagnosticQuestion: '¿Por qué esta formulación fracasará en ayudar a Sofía a vencer la postergación?',
    options: [
      {
        id: 'opt-a',
        text: 'Porque no establece delimitación temporal (T) ni bloques de tiempo concretos: no especifica qué días, qué horas ni cuándo habrá una entrega verificable del capítulo.',
        isCorrect: true,
        feedback: '¡Correcto! "Organizar mi tiempo" y "ratos libres" es la receta perfecta para la postergación. El tiempo libre no planificado suele ser absorbido por tareas reactivas o descanso pasivo.'
      },
      {
        id: 'opt-b',
        text: 'Porque los estudiantes universitarios con prácticas no deben intentar titularse nunca.',
        isCorrect: false,
        feedback: 'Incorrecto. Miles de estudiantes compaginan trabajo y universidad; lo que necesitan es una metodología de bloques temporales rígidos pero sostenibles.'
      },
      {
        id: 'opt-c',
        text: 'Porque el objetivo contiene la palabra "productiva", la cual está prohibida en el marco SMART.',
        isCorrect: false,
        feedback: 'Incorrecto. La metodología no censura palabras, sino la carencia de estructura y plazos auditables.'
      }
    ],
    failingCriterion: 'T',
    exemplaryResolution: 'Todos los martes y jueves de 07:00 a 08:30 redactaré 500 palabras del marco metodológico del TFG, para entregar el borrador del Capítulo 2 a mi tutor el 15 de noviembre.',
    academicRationale: 'Asignar una cita fija en el calendario antes de que comience el ruido del día laboral (time-blocking) erradica la ambigüedad y compromete un plazo fijo con un destinatario externo.'
  },
  {
    id: 'chall-4',
    title: 'CAREER LEVEL UP: CERTIFICACIÓN CLOUD',
    category: 'Desarrollo Profesional',
    categoryKey: 'carrera',
    scenario: 'Carlos trabaja en soporte de TI y quiere dar el salto a ingeniero DevOps o Cloud Architect. Escuchó que las certificaciones ayudan y escribió el siguiente objetivo en su evaluación de desempeño:',
    analyzedGoal: '"Sacaré la certificación de Amazon Web Services (AWS) para mejorar mi perfil."',
    diagnosticQuestion: '¿Qué componente SMART requiere refuerzo inmediato en el objetivo de Carlos?',
    options: [
      {
        id: 'opt-a',
        text: 'Falta especificidad (S) en el nivel de certificación (existen más de 10 certificaciones AWS) y delimitación temporal (T) con fecha para presentar el examen.',
        isCorrect: true,
        feedback: '¡Exacto! "La certificación de AWS" es ambiguo: ¿Cloud Practitioner? ¿Solutions Architect Associate? ¿DevOps Professional? Además, sin fecha para el examen, el estudio se posterga indefinidamente.'
      },
      {
        id: 'opt-b',
        text: 'Es una meta completamente irrelevante para alguien que trabaja en soporte de TI y quiere pasar a infraestructura.',
        isCorrect: false,
        feedback: 'Incorrecto. Una certificación Cloud oficial es un puente idóneo y altamente relevante para transicionar de soporte a arquitectura en la nube.'
      },
      {
        id: 'opt-c',
        text: 'Falla porque solo se pueden perseguir metas que la empresa pague en su totalidad.',
        isCorrect: false,
        feedback: 'Incorrecto. La viabilidad financiera o el patrocinio de la empresa es un factor a contemplar, pero no invalida un objetivo profesional.'
      }
    ],
    failingCriterion: 'S',
    exemplaryResolution: 'Completaré el curso oficial de AWS Solutions Architect Associate y 3 exámenes de prueba con más del 85% de aprobación, para rendir el examen oficial de certificación el día 25 de octubre.',
    academicRationale: 'Especificar la credencial exacta y poner fecha de examen en la plataforma de Pearson VUE transforma un deseo en un contrato de compromiso personal con fecha límite irrevocable.'
  },
  {
    id: 'chall-5',
    title: 'SYNAPSE SQUAD: PROYECTO COLABORATIVO',
    category: 'Trabajo en Equipo',
    categoryKey: 'equipo',
    scenario: 'Un equipo de cuatro estudiantes debe desarrollar una aplicación web para la feria de innovación académica. En su primera reunión de equipo, anotan como acuerdo general:',
    analyzedGoal: '"Haremos una app genial de inteligencia artificial que gane el primer lugar de la feria."',
    diagnosticQuestion: 'Desde la perspectiva metodológica y la formulación original de George Doran (1981), ¿cuál es el vacío más peligroso de esta meta?',
    options: [
      {
        id: 'opt-a',
        text: 'Carece de criterio Asignable/Específico (quién hace qué) y de métricas viables: "genial" es subjetivo y ganar el primer lugar depende de factores fuera de su control exclusivo (los jueces).',
        isCorrect: true,
        feedback: '¡Magistral! Como señaló Doran en 1981, la dimensión Asignable ("A") es crítica en equipos: quién programa la interfaz, quién entrena el modelo, quién prepara la documentación. Además, ganar el premio es un resultado externo, no una meta de rendimiento bajo su control directo.'
      },
      {
        id: 'opt-b',
        text: 'La meta es perfecta porque tener como única obsesión ganar el trofeo siempre garantiza el éxito técnico del software.',
        isCorrect: false,
        feedback: 'Incorrecto. Centrarse exclusivamente en el premio sin plan operativo conduce a discusiones internas y entregas defectuosas.'
      },
      {
        id: 'opt-c',
        text: 'Falla porque en la universidad está prohibido utilizar técnicas de inteligencia artificial en ferias de innovación.',
        isCorrect: false,
        feedback: 'Incorrecto. La temática es idónea; la falencia está en la ausencia de asignación de roles, especificaciones y control de variables.'
      }
    ],
    failingCriterion: 'A',
    exemplaryResolution: 'Antes del 10 de noviembre, el equipo entregará un prototipo funcional con React y FastAPI con 3 casos de uso documentados, asignando frontend a Laura, backend a Carlos, dataset a Sofía y pruebas a Mateo, ensayando la presentación el 12 de noviembre.',
    academicRationale: 'Distribuir responsabilidades claras (Assignable) y centrar la meta en la calidad del entregable controlado por el equipo asegura la coordinación y el avance sincrónico.'
  }
];
