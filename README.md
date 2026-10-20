# SMART//LAB
### *TUS METAS. TU FUTURO. TU SISTEMA.*
> **"Cyberpunk extremo por fuera. Excelencia académica por dentro."**

SMART//LAB es un laboratorio digital interactivo diseñado para transformar intenciones generales y anhelos difusos en planes operativos estructurados bajo la metodología **SMART** (*Specific, Measurable, Achievable, Relevant, Time-bound*), integrando rigor académico, fuentes primarias históricas verificadas y una experiencia visual de consola futurista de alto impacto.

---

## 🚀 1. Identidad y Filosofía de Diseño

- **Nombre:** SMART//LAB
- **Eslogan:** "TUS METAS. TU FUTURO. TU SISTEMA."
- **Público Objetivo:** Estudiantes universitarios, investigadores, desarrolladores de software y profesionales que buscan estructurar y auditar sus metas con rigor.
- **Paleta Cromática Cyberpunk:**
  - Negro Profundo: `#050508`
  - Negro Violáceo: `#100817`
  - Superficie Oscura: `#171022`
  - Rosa Neón: `#FF00E5`
  - Morado Eléctrico: `#8A2BFF`
  - Cian Brillante: `#00F5FF`
  - Verde Matriz: `#00FFA3`
  - Blanco Frío: `#F5F2FF`
- **Tipografías:**
  - *Orbitron:* Títulos y cabeceras de alta tecnología.
  - *Rajdhani:* Subtítulos, comandos y etiquetas HUD.
  - *Space Grotesk:* Cuerpo de lectura de alta legibilidad académica.
  - *JetBrains Mono:* Terminales, códigos, métricas y telemetría.

---

## 🧠 2. Módulos y Arquitectura del Sistema

El proyecto está estructurado de forma modular y desacoplada:

```
smart-lab/
├── dist/                          # Archivos compilados listos para producción
├── public/
│   └── favicon.svg                # Favicon vectorial cyberpunk
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx         # Barra superior HUD con audio FX y menú móvil
│   │   │   └── Footer.tsx         # Pie con índice de navegación y accesibilidad
│   │   ├── ui/
│   │   │   └── HoloTarget.tsx     # Consola holográfica SVG interactiva
│   │   └── sections/
│   │       ├── BootSequence.tsx   # Secuencia de inicio tipo terminal cyberpunk
│   │       ├── HeroSection.tsx    # Portada de alto impacto con radar HUD
│   │       ├── SystemOverview.tsx # Comparativa interactiva (Intención vs. SMART)
│   │       ├── SmartProtocolSection.tsx # Los 5 criterios con micro-comprobaciones
│   │       ├── HistoricalArchive.tsx    # Análisis de George T. Doran (1981)
│   │       ├── GoalHackerSection.tsx    # Asistente guiado de 8 pasos
│   │       ├── NeuralTestSection.tsx    # Cuestionario interactivo de 10 preguntas
│   │       ├── TrainingSimulatorSection.tsx # 5 retos prácticos multicontexto
│   │       ├── MissionControlSection.tsx    # Panel de telemetría de sesión real
│   │       ├── DataArchiveSection.tsx       # Fuentes bibliográficas verificadas
│   │       └── FinalProtocolSection.tsx     # Cierre y ficha técnica de entrega
│   ├── data/
│   │   ├── smartCriteria.ts       # Datos académicos de S, M, A, R, T
│   │   ├── historicalDoran.ts     # Matriz comparativa Doran 1981 vs. Moderno
│   │   ├── quizQuestions.ts       # Banco de 10 preguntas con explicaciones
│   │   ├── simulatorChallenges.ts # 5 escenarios de simulación práctica
│   │   └── referencesData.ts      # Enlaces y citas en formato APA
│   ├── styles/
│   │   └── cyberpunk.css          # Sistema de diseño, neones y accesibilidad
│   ├── types/
│   │   └── index.ts               # Tipado estricto en TypeScript
│   ├── utils/
│   │   ├── sound.ts               # Sintetizador Web Audio API para efectos cyber
│   │   └── progressStorage.ts     # Gestor de progreso en localStorage
│   ├── App.tsx                    # Orquestador principal
│   └── main.tsx                   # Punto de entrada de React
├── netlify.toml                   # Configuración para despliegue estático
├── package.json                   # Dependencias y scripts
├── test-verify.js                 # Suite automatizada de pruebas y validación
└── tsconfig.json                  # Configuración TypeScript
```

---

## ⚡ 3. Tecnologías Utilizadas

- **Framework:** React 19 (Hooks, estado reactivo, accesibilidad ARIA).
- **Lenguaje:** TypeScript 6 (tipado estricto sin dependencias residuales).
- **Empaquetador y Dev Server:** Vite 8 (compilación ultrarrápida en ~1.4s).
- **Iconografía:** Lucide React (iconos vectoriales de trazo limpio).
- **Audio:** Web Audio API (efectos de sonido sintetizados en tiempo real sin archivos MP3 pesados, con interruptor de silenciado).
- **Celebración:** Canvas Confetti (microinteracción en puntajes altos).
- **Estilos:** Vanilla CSS moderno con variables CSS personalizadas, soporte `prefers-reduced-motion` y compatibilidad móvil completa.

---

## 🛠️ 4. Instrucciones de Ejecución Local

### Prerrequisitos
- Node.js versión 18 o superior (verificado con Node v25).
- npm versión 9 o superior.

### Instalación de dependencias
```bash
npm install
```

### Ejecutar en modo desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173/`.

### Ejecutar la suite de pruebas
```bash
npm test
```
Verifica automáticamente la existencia del bundle de producción, la integridad de los datos académicos obligatorios (Doran 1981, ejemplos S-M-A-R-T, banco de preguntas, retos del simulador) y la configuración de estilos y accesibilidad.

### Generar la compilación para producción
```bash
npm run build
```
Genera los archivos estáticos optimizados en el directorio `dist/`.

### Vista previa local del bundle de producción
```bash
npm run preview
```
Inicia un servidor local en `http://localhost:4173/` sirviendo los archivos optimizados de `dist/`.

---

## 🌐 5. Instrucciones para Publicación (Netlify)

El proyecto incluye el archivo `netlify.toml` preconfigurado:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Opción A: Despliegue mediante GitHub en Netlify (Recomendado)
1. Sube esta carpeta a un repositorio en tu cuenta de GitHub o GitLab.
2. Inicia sesión en [Netlify](https://app.netlify.com/).
3. Haz clic en **"Add new site"** > **"Import an existing project"**.
4. Selecciona tu repositorio de GitHub.
5. Netlify detectará automáticamente `netlify.toml` con:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Haz clic en **"Deploy smart-lab"**. Tu enlace público estará activo en segundos con certificado SSL gratuito (HTTPS).

### Opción B: Despliegue Manual (Netlify Drop)
1. Ejecuta `npm run build` en tu terminal local.
2. Abre [Netlify Drop](https://app.netlify.com/drop).
3. Arrastra la carpeta `dist/` a la ventana del navegador.
4. Tu sitio se publicará de inmediato y recibirás una URL pública (ej. `https://smart-lab-cyberpunk.netlify.app`).

---

## 📚 6. Fuentes y Referencias Académicas Verificadas

| Autor / Institución | Año | Título / Publicación | Estado de Verificación |
|---|---|---|---|
| **George T. Doran** | 1981 | *"There's a S.M.A.R.T. Way to Write Management's Goals and Objectives"*, Management Review (AMA), 70(11), pp. 35–36. | Indexado en [EBSCO Information Services](https://openurl.ebsco.com/contentitem/gcd%3A6043491) y texto en [Decisionskills PDF](https://www.decisionskills.com/uploads/5/1/6/0/5160560/doran_1981_s.m.a.r.t-way-management-review.pdf). |
| **Centers for Disease Control and Prevention (CDC)** | 2024 | *"SMART Framework — Action Plans"*, Youth Advisory Councils Resources. | Verificado en vivo en [cdc.gov](https://www.cdc.gov/youth-advisory-councils/action-plans/smart-framework.html). |
| **Memorial University of Newfoundland (MUN)** | 2023 | *"SMART Goals"*, Academic Success Centre (MUNup Learning Skills). | Verificado en vivo en [mun.ca](https://www.mun.ca/munup/academic-success-centre/learning-skills-resources/smart-goals/). |
| **Monash University** | 2023 | *"Breaking goals down using the SMART framework"*, Student Academic Success. | Dominio oficial [monash.edu](https://www.monash.edu/student-academic-success/goal-setting-and-time-management/breaking-goals-down-using-the-smart-framework). |
| **Edwin A. Locke & Gary P. Latham** | 2002 | *"Building a practically useful theory of goal setting and task motivation: A 35-year odyssey"*, American Psychologist, 57(9), 705–717. | DOI oficial [10.1037/0003-066X.57.9.705](https://doi.org/10.1037/0003-066X.57.9.705). |

---

## 📋 7. Registro de Pruebas Ejecutadas

1. **Compilación:** `npm run build` ejecutado exitosamente con código `0` en 1.42s con `tsc -b` y Vite 8.
2. **Pruebas de Datos:** 39 comprobaciones automatizadas pasadas en `test-verify.js` (`npm test`).
3. **Navegación:** Probados todos los anclajes de sección (`#overview`, `#criteria`, `#historical`, `#builder`, `#quiz`, `#simulator`, `#mission-control`, `#references`, `#final-protocol`).
4. **Constructor Goal Hacker:** Probado en 8 pasos con validación de campos vacíos, detección de fechas pasadas, síntesis no adulterada, copiado con fallback y descarga `.txt`.
5. **Cuestionario Neural Test:** Probado con 10 preguntas, feedback inmediato por pregunta, cálculo de puntaje acumulativo y rango interpretativo (0–49%, 50–79%, 80–100%).
6. **Simulador de Entrenamiento:** 5 retos prácticos interactivos con diagnóstico de fallos, fundamentación y refactorización ejemplar.
7. **Control de Misión:** Registro de sesión en tiempo real a través de `localStorage` con botón de purga verificado.
8. **Accesibilidad:** Respeto a `prefers-reduced-motion: reduce`, indicadores de foco `:focus-visible`, etiquetas semánticas y contraste de lectura óptimo.
