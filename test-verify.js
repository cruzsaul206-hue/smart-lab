import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
console.log('--- INICIANDO PROTOCOLO DE VERIFICACIÓN AUTOMATIZADA SMART//LAB ---');

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passCount++;
  } else {
    console.error(`[FAIL] ${message}`);
    failCount++;
  }
}

// 1. Verificar archivos del bundle de producción
const distIndex = path.join(projectRoot, 'dist', 'index.html');
assert(fs.existsSync(distIndex), 'dist/index.html existe tras la compilación de Vite');

if (fs.existsSync(distIndex)) {
  const htmlContent = fs.readFileSync(distIndex, 'utf-8');
  assert(htmlContent.includes('SMART//LAB'), 'index.html contiene el título e identidad SMART//LAB');
  assert(htmlContent.includes('Orbitron'), 'index.html incluye la tipografía Orbitron');
  assert(htmlContent.includes('Rajdhani'), 'index.html incluye la tipografía Rajdhani');
  assert(htmlContent.includes('JetBrains+Mono') || htmlContent.includes('JetBrains Mono'), 'index.html incluye la tipografía monoespaciada JetBrains Mono');
  assert(htmlContent.includes('meta name="description"'), 'index.html incluye meta descripción para SEO');
}

// 2. Verificar favicon
const faviconPath = path.join(projectRoot, 'public', 'favicon.svg');
assert(fs.existsSync(faviconPath), 'public/favicon.svg existe');

// 3. Verificar netlify.toml
const netlifyPath = path.join(projectRoot, 'netlify.toml');
assert(fs.existsSync(netlifyPath), 'netlify.toml de despliegue existe');
if (fs.existsSync(netlifyPath)) {
  const netlifyContent = fs.readFileSync(netlifyPath, 'utf-8');
  assert(netlifyContent.includes('publish = "dist"'), 'netlify.toml publica la carpeta dist');
  assert(netlifyContent.includes('npm run build'), 'netlify.toml utiliza npm run build');
}

// 4. Verificar datos académicos
const criteriaFile = path.join(projectRoot, 'src', 'data', 'smartCriteria.ts');
assert(fs.existsSync(criteriaFile), 'smartCriteria.ts existe');
if (fs.existsSync(criteriaFile)) {
  const content = fs.readFileSync(criteriaFile, 'utf-8');
  assert(content.includes('Quiero mejorar.'), 'smartCriteria incluye ejemplo deficiente S obligatorio ("Quiero mejorar.")');
  assert(content.includes('Java'), 'smartCriteria incluye ejemplo Java obligatorio');
  assert(content.includes('Practicaré mucho.'), 'smartCriteria incluye ejemplo deficiente M obligatorio ("Practicaré mucho.")');
  assert(content.includes('Aprenderé todo Java en dos días desde cero.'), 'smartCriteria incluye ejemplo deficiente A obligatorio');
  assert(content.includes('Haré un curso sin saber para qué lo necesito.'), 'smartCriteria incluye ejemplo deficiente R obligatorio');
  assert(content.includes('Algún día terminaré mi proyecto.'), 'smartCriteria incluye ejemplo deficiente T obligatorio ("Algún día...")');
  assert(content.includes('30 de noviembre'), 'smartCriteria incluye fecha de ejemplo ilustrativa obligatoria (30 de noviembre)');
}

// 5. Verificar 10 preguntas del cuestionario
const quizFile = path.join(projectRoot, 'src', 'data', 'quizQuestions.ts');
assert(fs.existsSync(quizFile), 'quizQuestions.ts existe');
if (fs.existsSync(quizFile)) {
  const content = fs.readFileSync(quizFile, 'utf-8');
  const questionMatches = content.match(/id:\s*\d+/g);
  assert(questionMatches && questionMatches.length === 10, 'quizQuestions contiene exactamente 10 preguntas');
  assert(content.includes('George T. Doran'), 'quizQuestions incluye preguntas sobre la historia de Doran');
}

// 6. Verificar los 5 retos prácticos
const simulatorFile = path.join(projectRoot, 'src', 'data', 'simulatorChallenges.ts');
assert(fs.existsSync(simulatorFile), 'simulatorChallenges.ts existe');
if (fs.existsSync(simulatorFile)) {
  const content = fs.readFileSync(simulatorFile, 'utf-8');
  assert(content.includes('Estudios Universitarios'), 'Simulador incluye contexto de universidad');
  assert(content.includes('Programación'), 'Simulador incluye contexto de programación');
  assert(content.includes('Gestión del Tiempo'), 'Simulador incluye contexto de organización del tiempo');
  assert(content.includes('Desarrollo Profesional'), 'Simulador incluye contexto de desarrollo profesional');
  assert(content.includes('Trabajo en Equipo'), 'Simulador incluye contexto de trabajo en equipo');
}

// 7. Verificar datos de Doran 1981
const doranFile = path.join(projectRoot, 'src', 'data', 'historicalDoran.ts');
assert(fs.existsSync(doranFile), 'historicalDoran.ts existe');
if (fs.existsSync(doranFile)) {
  const content = fs.readFileSync(doranFile, 'utf-8');
  assert(content.includes('Assignable'), 'Archivo histórico registra "Assignable" como la A original de Doran');
  assert(content.includes('Realistic'), 'Archivo histórico registra "Realistic" como la R original de Doran');
  assert(content.includes('Time-related'), 'Archivo histórico registra "Time-related" como la T original de Doran');
  assert(content.includes('decisionskills.com'), 'Archivo histórico incluye enlace verificado al PDF');
  assert(content.includes('openurl.ebsco.com'), 'Archivo histórico incluye enlace verificado a EBSCO');
}

// 8. Verificar estilos cyberpunk y accesibilidad
const cssFile = path.join(projectRoot, 'src', 'styles', 'cyberpunk.css');
assert(fs.existsSync(cssFile), 'cyberpunk.css existe');
if (fs.existsSync(cssFile)) {
  const content = fs.readFileSync(cssFile, 'utf-8');
  assert(content.includes('#ff00e5'), 'Paleta contiene rosa neón (#ff00e5)');
  assert(content.includes('#8a2bff'), 'Paleta contiene morado eléctrico (#8a2bff)');
  assert(content.includes('#00f5ff'), 'Paleta contiene cian brillante (#00f5ff)');
  assert(content.includes('prefers-reduced-motion: reduce'), 'CSS incluye soporte explícito para prefers-reduced-motion');
  assert(content.includes(':focus-visible'), 'CSS define focos visibles para accesibilidad de teclado');
}

console.log(`\n========================================`);
console.log(`RESULTADO DE LA VERIFICACIÓN: ${passCount} PASADAS, ${failCount} FALLIDAS`);
console.log(`========================================\n`);

if (failCount > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
