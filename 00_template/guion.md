# Guion del Presentador // Hirudo RWE: Plantilla Maestra

Este documento sirve como guía metodológica y libreto de referencia para impartir la sesión formativa utilizando la plantilla estándar de **Hirudo RWE**.

---

## Diapositiva 01: Portada Unificada de Telemetría RWE
- **Coordenada:** `SLD_01 // SEC_RWE_INIT`
- **Objetivo:** Establecer la autoridad científica, el alcance analítico y contextualizar a la audiencia (bioestadísticos, informáticos médicos, decisores regulatorios).
- **Puntos Clave del Discurso:**
  - Dar la bienvenida formal al módulo de Hirudo RWE.
  - Explicar la motivación: cómo la medicina de precisión y la evaluación de tecnologías sanitarias exigen transformar datos observacionales rutinarios en evidencia causalmente válida.
  - Presentar las credenciales del docente y la infraestructura tecnológica de la plataforma.
- **Transición:** "Iniciemos revisando nuestra hoja de ruta y la agenda secuencial de trabajo para esta sesión..."

---

## Diapositiva 02: Hoja de Ruta Modular (4-Stage Runway)
- **Coordenada:** `SLD_02 // SEC_RWE_AGENDA`
- **Objetivo:** Proporcionar al participante un mapa mental claro de las cuatro etapas del ciclo de vida del dato.
- **Puntos Clave del Discurso:**
  - **Fase 1 (Ingestión):** Fuentes dispersas, registros electrónicos de salud (EHR), claims y sesgos inherentes a la práctica habitual.
  - **Fase 2 (Estandarización OMOP):** La necesidad de un modelo de datos común y ontologías controladas para evitar el "síndrome de la torre de Babel".
  - **Fase 3 (Computación de Cohortes):** Modelos bioestadísticos avanzados y aprendizaje automático para controlar confusión.
  - **Fase 4 (Traslación):** Cómo el dato transformado impacta guías clínicas y aprobaciones regulatorias.
- **Transición:** "Comencemos profundizando en los fundamentos conceptuales que diferencian un dato crudo de una evidencia concluyente..."

---

## Diapositiva 03: Fundamentos y Arquitectura del Flujo RWE
- **Coordenada:** `SLD_03 // SEC_RWE_FOUNDATIONS`
- **Objetivo:** Explicar el puente entre los ensayos clínicos aleatorizados (RCT) y la evidencia del mundo real (RWE).
- **Puntos Clave del Discurso:**
  - Explicar por qué la *eficacia* en ambientes controlados no siempre equivale a *efectividad* en poblaciones heterogéneas.
  - Demostrar el flujo técnico: Extracción ➔ Mapeo OMOP CDM ➔ Inferencia causal.
  - Enfatizar el concepto de análisis federado (los datos nunca viajan fuera del hospital custodio, los algoritmos viajan al dato).
- **Transición:** "Veamos ahora cómo cuantificamos y monitoreamos este proceso a través de nuestro cuadro de mando de telemetría..."

---

## Diapositiva 04: Panel de Telemetría y Métricas RWE
- **Coordenada:** `SLD_04 // SEC_RWE_TELEMETRY`
- **Objetivo:** Demostrar rigor cuantitativo con indicadores clave de rendimiento (KPIs) y métricas de calidad de datos.
- **Puntos Clave del Discurso:**
  - Detallar el tamaño de la cohorte activa (>1.2 millones de pacientes).
  - Explicar el Hazard Ratio ajustado (HR = 0.74, IC 95%: 0.68 - 0.81), demostrando reducción de riesgo cardiovascular estadísticamente significativa.
  - Destacar la tasa de completitud semántica de OMOP CDM (99.6% de éxito en Achilles / DQD).
  - Subrayar la reducción en los tiempos de generación de evidencia reproducible.
- **Transición:** "Pasemos ahora a la definición formal de los fenotipos computables que hacen posible estos números..."

---

## Diapositiva 05: Separador de Sección (Sector 02)
- **Coordenada:** `SLD_05 // SEC_RWE_DIVIDER`
- **Objetivo:** Crear una pausa visual estratégica y marcar el inicio del bloque práctico o analítico detallado.
- **Puntos Clave del Discurso:**
  - Invitar a los alumnos a reflexionar sobre la dificultad de definir una patología clínicamente homogénea con códigos de facturación y diagnósticos heterogéneos.
  - Definir qué es un "fenotipo computable": reglas lógicas y semánticas explícitas.
- **Transición:** "Analicemos un caso de estudio real en farmacovigilancia y efectividad comparativa..."

---

## Diapositiva 06: Caso de Estudio y Grid de Datos Comparativos
- **Coordenada:** `SLD_06 // SEC_RWE_CASE_STUDY`
- **Objetivo:** Evaluar datos tabulares cuantitativos entre dos cohortes clínicas complejas (SGLT-2i vs. GLP-1 RA).
- **Puntos Clave del Discurso:**
  - Resaltar la importancia del balance de covariables post-apareamiento (ASMD < 0.1 en todas las variables críticas).
  - Contrastar el Hazard Ratio crudo (0.81) con el ajustado por Propensity Score (0.74).
  - Discutir el concepto de E-Value (2.14) como medida de robustez frente a factores de confusión no medidos.
- **Transición:** "Para finalizar nuestra sesión, sinteticemos los tres aprendizajes esenciales..."

---

## Diapositiva 07: Cierre Unificado, Síntesis y Agradecimientos
- **Coordenada:** `SLD_07 // SEC_RWE_CONCLUSION`
- **Objetivo:** Consolidar el mensaje pedagógico, agradecer a la audiencia y facilitar canales de consulta y navegación.
- **Puntos Clave del Discurso:**
  - Recapitular las tres columnas vertebrales: Estandarización semántica, Inferencia causal rigurosa y Traslación clínica pragmática.
  - Abrir la sesión para preguntas y respuestas (Q&A).
  - Indicar a los participantes los enlaces para volver al directorio de módulos o repasar las diapositivas.
