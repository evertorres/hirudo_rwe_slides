# Hirudo RWE // Master Presentation Repository

Repositorio centralizado de diapositivas interactivas para el programa formativo en **Evidencia en el Mundo Real (RWE)**, modelos de datos comunes (**OMOP CDM**), inferencia causal observacional y bioestadística en salud, bajo la identidad y arquitectura de **Hirudo**.

Este proyecto traslada la experiencia modular y pedagógica de `diplomado_neurum_2026` hacia una experiencia visual de alta precisión técnica, implementada estrictamente bajo el estándar **Syntropic Telemetry** documentado en [`DESIGN.md`](file:///D:/EATS/repos/hirudo_rwe_slides/DESIGN.md).

---

## 📐 Estructura del Repositorio

```
hirudo_rwe_slides/
│
├── DESIGN.md                 # Especificación del sistema de diseño (colores, tipografía, layouts)
├── index.html                # Directorio principal interactivo (Dashboard de cursos y módulos)
├── README.md                 # Esta guía de uso y desarrollo
│
├── shared/                   # Núcleo compartido del motor de presentaciones
│   ├── styles.css            # Hoja de estilos global (Syntropic Telemetry / Dark Tech)
│   └── app.js                # Motor de navegación, fragments, HUD y modales
│
└── 00_template/              # PLANTILLA MAESTRA lista para clonar
    ├── index.html            # Host de la presentación (HUD Header, Canvas, HUD Footer, Loader)
    ├── guion.md              # Libreto y notas metodológicas del docente / presentador
    ├── slides/               # Diapositivas individuales cargadas modularmente
    │   ├── slide01.html      # Portada unificada con telemetría, badges y arte vectorial
    │   ├── slide02.html      # Agenda / Hoja de ruta en runway modular de 4 fases
    │   ├── slide03.html      # Fundamentos y arquitectura del flujo (Split 7:5)
    │   ├── slide04.html      # Cuadro de mando de métricas y telemetría cuantitativa (4-up)
    │   ├── slide05.html      # Separador de sección de alto impacto (Sector 02)
    │   ├── slide06.html      # Caso de estudio y grid de especificaciones tabulares
    │   └── slide07.html      # Agradecimiento, 3 síntesis clave y botones de acción
    ├── images/               # Gráficos y diagramas específicos de la sesión
    └── resources/            # Datasets de muestra, scripts R/Python/SQL o lecturas
```

---

## 🚀 Buenas Prácticas Adoptadas de `diplomado_neurum_2026`

### 1. Diapositiva de Apertura / Portada (`slide01.html`)
- **Jerarquía de Badges Técnicos:** Identificación clara del número de sesión, módulo temático y estado operativo del sistema.
- **Tesis y Kicker:** Kicker semántico en mayúsculas (`ARQUITECTURA DE DATOS EN SALUD`) y título principal con gradiente de alto contraste.
- **Foco Visual en el Dominio:** Sustitución de ornamentos genéricos o emojis por un **artefacto vectorial SVG interactivo** que representa los nodos y conductos de datos del motor RWE.
- **Tarjeta del Presentador:** Metadatos claros del expositor y rol técnico.
- **Doble Llamado a la Acción:** Botón principal con flecha de avance ("Iniciar Presentación") y botón secundario ("Directorio del Curso").

### 2. Diapositiva de Cierre y Agradecimiento (`slide07.html`)
- **Agradecimiento Institucional:** Tipografía de impacto en Space Grotesk `¡Muchas Gracias!`.
- **3 Tarjetas de Síntesis Conceptual (Core Takeaways):** En lugar de un cierre vacío, resume los 3 aprendizajes troncales con bordes superiores temáticos (`#10b981` Esmeralda, `#6366f1` Índigo, `#b4c5ff` Azul de Comando).
- **Canales de Discusión:** Identificación del docente, plataforma y canal de soporte Q&A.
- **Navegación de Retorno:** Botón para volver al directorio maestro y botón interactivo para **reiniciar la presentación** desde la primera lámina (`goToSlide(1)`).

### 3. Motor de Presentación (`shared/app.js` & `shared/styles.css`)
- **Navegación por Teclado:** Flechas izquierda/derecha, barra espaciadora, Enter, Inicio (`Home`), Fin (`End`), tecla `F` (pantalla completa) y `Escape` (cierre de modales).
- **Progresión Modular (Fragments):** Animación controlada paso a paso mediante clases `.fragment` y atributo `data-fragment-index`.
- **Ruta Persistente (URL Hash):** El estado se sincroniza en la URL (`#1`, `#2`, `#3`), permitiendo recargar o compartir diapositivas específicas directamente.
- **HUD Integrado:** Barra de progreso en tiempo real y contador de coordenadas técnicas (`SLD_01 // SEC_RWE_INIT`).
- **Zoom Lightbox:** Las imágenes con clase `.zoomable-image` se amplían automáticamente en un modal de alta definición al hacer clic.

---

## 🛠️ Cómo Crear una Nueva Sesión a partir de la Plantilla

Cuando desees generar una nueva presentación (por ejemplo, `01_fundamentos_rwe`):

1. **Duplica la carpeta `00_template`:**
   ```powershell
   Copy-Item -Recurse 00_template 01_fundamentos_rwe
   ```

2. **Personaliza el archivo host (`01_fundamentos_rwe/index.html`):**
   - Modifica el título en `<title>` y en los breadcrumbs del HUD (`hudModule` y `hudTopic`):
     ```html
     <div class="hud-breadcrumb">
         [ <span id="hudModule">MÓDULO 01</span> // <span id="hudTopic">FUNDAMENTOS_RWE</span> ]
     </div>
     ```
   - Si la nueva sesión tiene más o menos diapositivas, ajusta la constante `totalSlides` en el bloque `<script>`:
     ```javascript
     const totalSlides = 10; // o el número de slides en slides/
     ```

3. **Edita o añade diapositivas en `slides/`:**
   - Cada archivo debe llamarse `slide01.html`, `slide02.html`, ..., `slideNN.html`.
   - Ajusta el atributo `data-coord` en la etiqueta `<section>` para que el HUD footer refleje la coordenada correcta:
     ```html
     <section class="slide" id="slide03" data-coord="SLD_03 // SEC_DATA_TYPES">
     ```

4. **Actualiza el guion del docente (`guion.md`):**
   - Escribe los puntos clave, objetivos y transiciones para cada diapositiva.

5. **Enlaza la nueva presentación en el `index.html` raíz:**
   - Abre `index.html` en la raíz y cambia la tarjeta correspondiente de clase `pending` a enlace activo.

---

## 💻 Ejecución y Servidor Local

Dado que el motor carga los archivos HTML individuales mediante solicitudes asíncronas estándar (`fetch()`), el navegador requiere servirlos a través de un servidor HTTP local (no mediante doble clic con `file://`):

### Opción A: Servidor Python rápido (Recomendado)
```powershell
# En la raíz del repositorio:
python -m http.server 8000
```
Luego abre en tu navegador: [http://localhost:8000](http://localhost:8000)

### Opción B: Extensión Live Server en VS Code
Haz clic derecho en `index.html` o en `00_template/index.html` y selecciona **"Open with Live Server"**.
