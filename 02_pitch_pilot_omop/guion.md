# Guion Ejecutivo de Presentación: Adopción OMOP CDM en su Institución
## Pitch de 15 Minutos para Directores Médicos, Comités de Investigación y CIOs
### Dirección y Acompañamiento Estratégico: 2EVS S.A.S.

> **Audiencia Objetivo:** Directores Generales de Hospitales/Clínicas, Directores Médicos, Directores de Investigación e Innovación, Jefes de Epidemiología y Directores de Tecnología/Sistemas (CIOs/CTOs).  
> **Duración Máxima:** 15 Minutos (14 minutos de exposición estructurada + 1 minuto de cierre hacia la Mesa Técnica).  
> **Cadencia Verbal:** ~125 a 130 palabras por minuto.  
> **Identidad Corporativa:** [2EVS S.A.S.](file:///D:/EATS/BRAIN/CynthIA_Cognitive_Twin/11-IDENTITY/2evs-sas.md) (NIT: 901.315.206-1) | Dirección Científica: Ever Augusto Torres Silva, Ph.D.  

---

## Cronograma y Estructura de Tiempos

| Lámina | Título / Tema | Tiempo Estimado | Minuto Acumulado |
| :--- | :--- | :--- | :--- |
| **Slide 01** | Portada: Desbloqueando la Inteligencia Clínica de la Institución | 01:00 min | 00:00 – 01:00 |
| **Slide 02** | El Problema: La Trampa de los Silos y la Crisis de Reproducibilidad | 01:30 min | 01:00 – 02:30 |
| **Slide 03** | El Mapa de Estándares: ¿Dónde Encaja OMOP CDM? (vs. FHIR y terminologías) | 01:30 min | 02:30 – 04:00 |
| **Slide 04** | OMOP CDM v5.4: El "Adaptador Universal" (Sintaxis y Semántica) | 01:45 min | 04:00 – 05:45 |
| **Slide 05** | Preguntas Médicas en la Trayectoria del Paciente (3 Paradigmas) | 01:30 min | 05:45 – 07:15 |
| **Slide 06** | Aceleración de Ensayos Clínicos (Feasibility, Patrocinadores Pharma y Controles Sintéticos) | 01:45 min | 07:15 – 09:00 |
| **Slide 07** | Red Federada: El Dato Sensible Jamás Abandona el Hospital | 01:30 min | 09:00 – 10:30 |
| **Slide 08** | Del Dato Crudo a la Evidencia Confiable: El Pipeline OHDSI y Calidad DQD | 01:30 min | 10:30 – 12:00 |
| **Slide 09** | Retorno Institucional: Los 4 Pilares de Impacto (Prestigio, Ingresos, Calidad, Soberanía) | 01:15 min | 12:00 – 13:15 |
| **Slide 10** | La Alianza: Acompañamiento de 2EVS SAS y Hoja de Ruta del Piloto Ágil | 01:00 min | 13:15 – 14:15 |
| **Slide 11** | Cierre y Llamado a la Acción: Mesa Técnica de Descubrimiento de 1 Hora | 00:45 min | 14:15 – 15:00 |

---

## Slide 01: Portada — Desbloqueando la Inteligencia Clínica de la Institución
* **Coordenada HUD:** `SLD_01 // SEC_INTRO_CDM`  
* **Tiempo:** 01:00 min (Palabras estimadas: ~125)  
* **Objetivo:** Captar el interés inmediato de la junta directiva y el comité médico planteando la paradoja central: los datos existen, pero su valor está atrapado.

### Discurso Verbal del Expositor:
> "Muy buenos días a todos los miembros de la mesa directiva, dirección médica y liderazgo de sistemas.
>
> Cada día, los profesionales de su institución registran miles de consultas, signos vitales, resultados de laboratorio, dosis de medicamentos y procedimientos en la historia clínica electrónica. Es un activo clínico de incalculable valor. Sin embargo, hoy en día casi el noventa por ciento de ese conocimiento permanece silenciado en las bases de datos transaccionales, incapaz de responder preguntas clínicas complejas o de atraer ensayos multicéntricos.
>
> En los próximos quince minutos, les mostraremos cómo la adopción del estándar global **OMOP Common Data Model** de la comunidad internacional OHDSI permite desbloquear ese potencial: transformando sus datos clínicos en evidencia de clase mundial, acelerando la llegada de ensayos clínicos patrocinados y manteniendo una soberanía estricta donde el dato sensible de sus pacientes jamás abandona su firewall."

* **Transición:** *"Para entender la magnitud del cambio, veamos primero la realidad operativa que vive cualquier hospital cuando intenta investigar hoy en día."*

---

## Slide 02: El Problema — La Trampa de los Silos Clínicos y la Crisis de Reproducibilidad
* **Coordenada HUD:** `SLD_02 // SEC_DATA_SILOS`  
* **Tiempo:** 01:30 min (Palabras estimadas: ~190)  
* **Objetivo:** Mostrar con empatía y rigor técnico el dolor actual de los médicos investigadores y del equipo de TI.

### Discurso Verbal del Expositor:
> "Observen este esquema. En la operación cotidiana de la clínica, los datos se encuentran dispersos en silos estancos: la historia clínica tiene sus propias tablas; el laboratorio reporta en unidades y textos libres; la farmacia registra marcas comerciales locales; la UCI maneja series de monitores; y el área de facturación codifica RIPS o CUPS para cobrar a las aseguradoras.
>
> Cuando un médico o epidemiólogo desea contestar una pregunta científica, tiene que pedir extracciones manuales en hojas de cálculo. Cada analista inventa sus propios filtros, limpia los campos a mano y formula consultas SQL aisladas. 
>
> El resultado empírico es demoledor: estudios internacionales demuestran que conciliar datos entre centros de salud toma una mediana de 358 días. Peor aún, el 59% de los términos utilizados son códigos locales que nadie afuera comprende. Y tal como demostró el profesor John Ioannidis en su célebre publicación en *PLOS Medicine*, la gran mayoría de hallazgos observacionales no logran ser reproducidos porque dependen de limpiezas artesanales imposibles de auditar.
>
> Lo más frustrante para la institución es que el esfuerzo de limpieza de hoy muere al terminar el artículo: no deja ninguna capacidad instalada reutilizable para la clínica."

* **Transición:** *"Frente a este caos de formatos, la primera reacción del equipo de TI suele ser: '¿pero no tenemos ya HL7 o FHIR?' Analicemos en qué se diferencia cada estándar."*

---

## Slide 03: El Panorama de Estándares: ¿Dónde Encaja OMOP CDM?
* **Coordenada HUD:** `SLD_03 // SEC_STANDARDS_MAP`  
* **Tiempo:** 01:30 min (Palabras estimadas: ~195)  
* **Objetivo:** Despejar la confusión común de los CIOs entre estándares de intercambio (FHIR) y estándares de persistencia y analítica (OMOP CDM).

### Discurso Verbal del Expositor:
> "Es fundamental ordenar el mapa tecnológico en salud para no pedirle a un destornillador que cumpla el rol de un martillo. Existen tres tipos de estándares y cada uno tiene su misión precisa.
>
> A la izquierda tenemos los estándares de **Terminología y Clasificación**, como SNOMED CT, LOINC o CIE-10. Ellos definen el significado de cada término médico individual.
>
> En el centro encontramos los estándares de **Intercambio Transaccional**, dominados hoy por HL7 FHIR y DICOM. Su propósito es mover mensajes individuales en tiempo real: por ejemplo, que una aplicación móvil consulte la última glucemia del paciente en el punto de atención.
>
> Pero cuando la institución necesita hacer **Analítica Poblacional, Inferencia Causal, Inteligencia Artificial o Ensayos Clínicos Multicéntricos**, enviar millones de recursos FHIR uno a uno colapsa las bases transaccionales. Aquí es donde entra la tercera columna: los estándares de **Modelado Analítico y Persistencia**, donde **OMOP CDM** es el estándar de oro absoluto a nivel mundial.
>
> La regla que transmitimos a los CIOs es muy clara: **FHIR y OMOP no compiten; son complementarios.** FHIR traslada eventos clínicos transaccionales; OMOP estructura la historia longitudinal completa para investigación masiva."

* **Transición:** *"Entendida su posición, ¿cómo logra OMOP unificar la historia clínica de un paciente? Veamos su diseño estructural."*

---

## Slide 04: OMOP CDM v5.4: El "Adaptador Universal" en Salud
* **Coordenada HUD:** `SLD_04 // SEC_OMOP_ADAPTER`  
* **Tiempo:** 01:45 min (Palabras estimadas: ~225)  
* **Objetivo:** Explicar la dualidad técnica de OMOP (sintaxis relacional fija + semántica normalizada en ATHENA) sin abrumar con tecnicismos innecesarios.

### Discurso Verbal del Expositor:
> "OMOP CDM funciona exactamente igual que un adaptador universal de viaje. Si ustedes viajan por el mundo con sus dispositivos electrónicos, no cambian los circuitos de su teléfono; simplemente utilizan un adaptador que encaja en cualquier tomacorriente. OMOP hace exactamente eso con sus historias clínicas.
>
> Y lo hace resolviendo dos problemas al mismo tiempo.
>
> Primero, la **Interoperabilidad Sintáctica**. OMOP define un esquema de base de datos relacional estándar centrado en el paciente: tablas como `PERSON`, `VISIT_OCCURRENCE`, `CONDITION_OCCURRENCE`, `DRUG_EXPOSURE` y `MEASUREMENT`. Cualquier hospital en el mundo con OMOP tiene exactamente las mismas tablas y campos, lo que permite que una consulta analítica escrita en Europa o Estados Unidos corra idénticamente en nuestra clínica.
>
> Segundo, la **Interoperabilidad Semántica** mediante el repositorio ATHENA de OHDSI. ATHENA reúne más de 12 millones de conceptos médicos universales. Si en su sistema local un diagnóstico se registró con un código propio o un CIE-10, la tabla `CONCEPT_RELATIONSHIP` lo mapea al concepto estándar sin ambigüedad.
>
> Y un detalle crítico para el auditor médico: OMOP jamás destruye el dato fuente. Los campos `source_value` conservan el texto original intacto para trazabilidad médico-legal, mientras los `concept_id` habilitan la analítica global automatizada con relaciones de jerarquía entre patologías."

* **Transición:** *"Con este adaptador universal instalado, ¿qué tipo de preguntas clínicas de alto nivel podemos responder en el día a día?"*

---

## Slide 05: Preguntas Médicas en la Trayectoria del Paciente
* **Coordenada HUD:** `SLD_05 // SEC_PATIENT_JOURNEY`  
* **Tiempo:** 01:30 min (Palabras estimadas: ~195)  
* **Objetivo:** Conectar la arquitectura técnica con el valor asistencial y científico para los jefes de departamento médico y epidemiología.

### Discurso Verbal del Expositor:
> "Al estandarizar los datos, toda la trayectoria del paciente se alinea en un eje temporal continuo. Podemos fijar un 'Evento Índice' en el tiempo cero —como el diagnóstico de falla cardíaca o el inicio de una quimioterapia— y analizar con precisión matemática qué sucedió en su línea base previa y qué ocurre en su seguimiento posterior.
>
> Esto nos habilita para responder a los tres grandes paradigmas de la investigación médica moderna:
>
> El primero es la **Caracterización Clínica**: responder con certeza qué perfil de comorbilidades tienen los pacientes que reciben cada terapia, cuál es la tasa de adherencia y qué complicaciones reales se presentan en nuestro centro.
>
> El segundo es la **Estimación de Efectos Poblacionales**: evaluar causalidad mediante técnicas bioestadísticas avanzadas como *Propensity Score Matching*. ¿El medicamento biológico A reduce los reingresos y la mortalidad frente al medicamento B en nuestra población real, controlando rigurosamente por factores de confusión?
>
> Y el tercero es la **Predicción a Nivel de Paciente**: aplicar modelos validados de Machine Learning para predecir qué pacientes tienen alta probabilidad de sufrir un desenlace adverso en los próximos 90 días, anticipándonos con medidas preventivas."

* **Transición:** *"Más allá de la investigación observacional interna, OMOP abre una compuerta estratégica extraordinaria: el mundo de los ensayos clínicos patrocinados."*

---

## Slide 06: Aceleración de Ensayos Clínicos con OMOP CDM
* **Coordenada HUD:** `SLD_06 // SEC_CLINICAL_TRIALS`  
* **Tiempo:** 01:45 min (Palabras estimadas: ~230)  
* **Objetivo:** Conectar con la dirección médica y los centros de investigación clínica, mostrando cómo OMOP atrae estudios de farmacéuticas y resuelve la factibilidad.

### Discurso Verbal del Expositor:
> "Uno de los dolores de cabeza más grandes para los directores de investigación clínica y las CROs es la **factibilidad o feasibility** de los ensayos clínicos. 
>
> Una multinacional farmacéutica envía un protocolo con criterios de inclusión muy estrictos: pacientes entre 45 y 75 años, con diagnóstico confirmado de asma grave, niveles de eosinófilos superiores a un umbral específico en los últimos tres meses, y sin uso de corticoides orales en el último semestre. En un hospital tradicional, responder si tenemos 50 o 100 pacientes candidatos toma semanas de búsqueda manual en archivos de historias clínicas. Para cuando el hospital responde, el patrocinador ya asignó el estudio a otro centro.
>
> Con OMOP CDM, esa consulta se ejecuta en **cuestión de minutos**, traduciendo el protocolo en código ejecutable con cohortes reproducibles. Esto posiciona inmediatamente a su hospital en la lista prioritaria de selección de centros (*site selection*) de las farmacéuticas.
>
> Además, los datos estandarizados en OMOP habilitan la creación de **Brazos de Control Sintéticos** (*Synthetic Control Arms*), permitiendo comparar tratamientos experimentales contra el estándar de cuidado histórico del hospital, una práctica cada vez más avalada por agencias como la FDA y la EMA.
>
> En síntesis: dejamos de pagar el 'impuesto de interoperabilidad' de tener que mapear y reestructurar datos para cada nuevo ensayo. Se estandariza una sola vez y se reutiliza para decenas de protocolos simultáneos."

* **Transición:** *"Frente a esta apertura a estudios internacionales, surge la pregunta crítica de todo comité ético y oficial de cumplimiento: ¿qué pasa con la privacidad de los pacientes?"*

---

## Slide 07: Red Federada: El Dato Sensible Jamás Abandona el Hospital
* **Coordenada HUD:** `SLD_07 // SEC_FEDERATED_NETWORK`  
* **Tiempo:** 01:30 min (Palabras estimadas: ~200)  
* **Objetivo:** Tranquilizar por completo al oficial de privacidad, equipo legal y directores sobre la soberanía y seguridad jurídica del dato.

### Discurso Verbal del Expositor:
> "Esta es la diapositiva más importante para su departamento legal, su oficial de cumplimiento y su Comité de Ética en Investigación.
>
> En el modelo tradicional extractivo, las empresas comerciales pretenden comprar o copiar las historias clínicas fuera de la clínica, generando enormes riesgos legales de protección de datos personales y Habeas Data.
>
> La red global OHDSI opera bajo un paradigma completamente distinto denominado **Compute-to-Data** o red federada no custodia. Como pueden ver en la lámina:
>
> Su institución aloja el repositorio OMOP CDM en sus propios servidores locales o en su nube privada, detrás del firewall hospitalario. Cuando un consorcio internacional o un patrocinador propone un estudio, no solicita datos de pacientes: envía un paquete analítico estandarizado en código abierto (R o HADES). Ese código se ejecuta localmente dentro de su servidor y devuelve exclusivamente **resultados estadísticos agregados**: tablas de frecuencias, curvas de supervivencia anónimas o estimadores de riesgo relativo.
>
> Jamás sale de la clínica un microdato, un nombre o una identificación de paciente. Además, el sistema aplica por diseño reglas de privacidad diferencial y supresión de celdas con menos de 5 pacientes, haciendo matemáticamente imposible cualquier intento de reidentificación."

* **Transición:** *"Asegurada la custodia del dato, ¿cómo garantizamos que la información transformada tenga el más alto rigor de calidad científica?"*

---

## Slide 08: Del Dato Crudo a la Evidencia Confiable: El Pipeline OHDSI
* **Coordenada HUD:** `SLD_08 // SEC_OHDSI_PIPELINE`  
* **Tiempo:** 01:30 min (Palabras estimadas: ~195)  
* **Objetivo:** Transmitir tranquilidad al equipo técnico mostrando que existen herramientas probadas y maduras para la extracción, transformación y control de calidad.

### Discurso Verbal del Expositor:
> "La estandarización no es una caja negra ni un experimento improvisado. OHDSI cuenta con un conjunto de herramientas de código abierto utilizadas y perfeccionadas por más de 4,000 investigadores y cientos de hospitales en más de 50 países.
>
> El pipeline se divide en cuatro fases metódicas:
>
> Primero, **White Rabbit** realiza un perfilamiento inicial de las bases de datos origen del hospital para identificar el volumen, formatos y completitud sin tocar información sensible.
>
> Segundo, **Rabbit In a Hat** permite modelar visualmente el mapeo tabla por tabla, mientras **Usagi** asiste a los especialistas en salud para mapear vocabularios locales, medicamentos y procedimientos hacia los conceptos estándar de ATHENA.
>
> Tercero, el **Data Quality Dashboard (DQD)** y la suite Achilles ejecutan automáticamente más de 3,500 pruebas de calidad de datos, verificando la plausibilidad clínica, la conformidad del esquema y la completitud temporal. Si hay un error, el sistema genera alertas antes de que cualquier análisis sea procesado.
>
> Y cuarto, la plataforma visual **ATLAS** y los paquetes de **HADES** permiten a sus epidemiólogos y médicos diseñar estudios, caracterizar cohortes y generar evidencia reproducible en cuestión de días."

* **Transición:** *"Viendo el pipeline completo, ¿cuál es el retorno real y medible que esta transformación le entrega a la institución?"*

---

## Slide 09: Retorno Institucional: Los 4 Pilares de Impacto
* **Coordenada HUD:** `SLD_09 // SEC_ROI_IMPACT`  
* **Tiempo:** 01:15 min (Palabras estimadas: ~165)  
* **Objetivo:** Sintetizar el caso de negocio en cuatro dimensiones claras para la toma de decisión directiva.

### Discurso Verbal del Expositor:
> "Sintetizando la visión ejecutiva, la adopción de OMOP CDM genera cuatro retornos institucionales concretos:
>
> 1. **Prestigio Académico y Publicaciones:** Posiciona a la institución en el mapa científico internacional con capacidad de coautoría en publicaciones de alto impacto en consorcios globales.
> 2. **Atracción de Ensayos Clínicos e Ingresos:** Permite monetizar la capacidad de investigación atrayendo ensayos clínicos patrocinados por la industria farmacéutica y estudios de Real-World Evidence de alta remuneración.
> 3. **Gestión Clínica Basada en Valor:** Entrega evidencia objetiva interna para evaluar la efectividad real de los tratamientos, optimizar el gasto de medicamentos de alto costo y reducir reingresos evitables.
> 4. **Capacidad Instalada Soberana:** El hospital no queda amarrado a contratos de licencias propietarias; desarrolla activos tecnológicos basados en estándares abiertos que fortalecen a su propio personal."

* **Transición:** *"La pregunta clave entonces es: ¿cómo implementamos esto sin sobrecargar al equipo de TI del hospital? Aquí es donde entra nuestra propuesta."*

---

## Slide 10: La Alianza: Acompañamiento Estratégico de 2EVS SAS
* **Coordenada HUD:** `SLD_10 // SEC_2EVS_ALLIANCE`  
* **Tiempo:** 01:00 min (Palabras estimadas: ~140)  
* **Objetivo:** Presentar las credenciales de 2EVS SAS y del Dr. Ever Torres como el socio estratégico idóneo para ejecutar un piloto ágil sin fricciones.

### Discurso Verbal del Expositor:
> "Para que esta transformación ocurra de forma fluida, su institución no necesita contratar un ejército de ingenieros ni desviar a su equipo de sistemas de sus tareas operativas.
>
> En **2EVS SAS**, empresa de base tecnológica especializada en Ciencia de Datos en Salud, Real-World Evidence y Bioestadística Avanzada, asumimos el rol de aliado estratégico. Bajo la dirección científica de nuestro CEO, el Dr. Ever Augusto Torres Silva —Ingeniero Biomédico y Doctor en Ingeniería con amplia trayectoria internacional en interoperabilidad clínica—, diseñamos e implementamos un **Programa Piloto Ágil de 6 a 8 semanas**.
>
> El piloto se divide en cuatro fases: Descubrimiento de fuentes; Mapeo ETL a ATHENA; Despliegue del nodo local con certificación de calidad DQD; y la entrega de un primer estudio epidemiológico demostrativo junto con la capacitación a su equipo. Todo respaldado por un estricto marco de confidencialidad B2B."

* **Transición:** *"¿Cómo damos el primer paso conjunto? Cerremos con una propuesta concreta para el día de hoy."*

---

## Slide 11: Cierre y Llamado a la Acción: Próximos Pasos
* **Coordenada HUD:** `SLD_11 // SEC_NEXT_STEPS`  
* **Tiempo:** 00:45 min (Palabras estimadas: ~100)  
* **Objetivo:** Cerrar la reunión con un llamado a la acción simple, sin compromiso financiero inmediato: acordar la Mesa Técnica de 1 Hora.

### Discurso Verbal del Expositor:
> "Para materializar esta oportunidad, no requerimos compromisos presupuestales prematuros. Nuestra propuesta es dar un paso inicial muy concreto:
>
> Les invitamos a agendar una **Mesa Técnica de Descubrimiento de una hora**, en la que nos reuniremos con su equipo médico y el líder de TI para revisar qué bases de datos existen (HCE, laboratorio, farmacia) y seleccionar conjuntamente la cohorte clínica foco para el piloto —por ejemplo, pacientes oncológicos o cardiovasculares de los últimos tres años—.
>
> Con esa sesión, 2EVS SAS estructurará la propuesta técnica y el cronograma detallado a la medida de su institución.
>
> El conocimiento médico ya está en sus historias clínicas. Permítannos acompañarles para convertirlo en evidencia global. Muchas gracias y abrimos el espacio para sus preguntas."

---

## Preguntas Frecuentes y Respuestas Blindadas para el Expositor

A continuación se listan las 4 preguntas más habituales que directores médicos o CIOs suelen formular al finalizar el pitch, con las respuestas exactas sugeridas:

### 1. ¿Cuánto tiempo de dedicación real se le exigirá al equipo de sistemas de nuestro hospital?
* **Respuesta del Expositor:**  
  *"Prácticamente mínimo. Estimamos entre 8 y 12 horas en total durante todo el piloto, enfocadas exclusivamente en habilitar accesos de solo-lectura a réplicas o vistas de las bases de datos y aprovisionar la máquina virtual o contenedor local. Toda la ingeniería de datos, el perfilamiento con White Rabbit, los scripts de transformación ETL y las pruebas de calidad DQD son desarrollados y ejecutados directamente por el equipo de 2EVS SAS."*

### 2. ¿Existe algún riesgo de fuga de datos o incumplimiento de leyes de protección de datos personales (Habeas Data / Ley 1581 / GDPR)?
* **Respuesta del Expositor:**  
  *"Cero riesgo. Toda la arquitectura se despliega bajo el principio de red federada no custodia. El repositorio OMOP CDM reside en la infraestructura local de su hospital. Ni 2EVS SAS ni ningún consorcio externo extrae identificadores ni microdatos de pacientes. Únicamente se generan resultados agregados anónimos bajo una política de privacidad diferencial que suprime automáticamente cualquier celda con menos de 5 pacientes."*

### 3. ¿Por qué empezar con un piloto de una patología en lugar de transformar todo el hospital a la vez?
* **Respuesta del Expositor:**  
  *"Porque un piloto enfocado (por ejemplo en Cardiología, Oncología o UCI) permite validar la viabilidad técnica, certificar la calidad de los datos y obtener resultados clínicos medibles en 6 a 8 semanas, demostrando el retorno institucional con mínimo consumo de recursos antes de escalar progresivamente al resto de especialidades."*

### 4. ¿Qué capacidad instalada le queda a la institución una vez finalizado el acompañamiento de 2EVS SAS?
* **Respuesta del Expositor:**  
  *"A la institución le queda el repositorio OMOP CDM funcionando, los pipelines y scripts de ETL documentados y versionados bajo estándares abiertos, el informe de calidad de datos certificado por DQD, la capacidad de ejecutar consultas de factibilidad para ensayos clínicos en minutos y un equipo médico y de sistemas capacitado en el uso de las herramientas del ecosistema OHDSI."*
