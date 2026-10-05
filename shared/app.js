/**
 * HIRUDO RWE - Slide Presentation Engine
 * Features:
 * - Keyboard navigation (Arrows, Space, Enter, Home, End, F for fullscreen)
 * - Progressive reveals via .fragment and data-fragment-index
 * - Hash routing & state persistence (#1, #2...)
 * - HUD integration (dynamic progress bar, coordinate counter, step tracker)
 * - Lightbox modal for zoomable graphics
 * - Smart click advance (ignoring interactive elements)
 */

(function () {
  'use strict';

  window.initApp = function () {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const counterEl = document.getElementById('slideCounter');
    const progressFill = document.getElementById('hudProgressFill');
    const coordEl = document.getElementById('hudCoordinate');
    const totalSlides = slides.length;

    let currentSlide = 0;

    if (totalSlides === 0) return;

    // Public method to navigate to slide number (1-based)
    function goToSlide(slideNum) {
      const num = parseInt(slideNum, 10);
      if (!isNaN(num) && num >= 1 && num <= totalSlides) {
        currentSlide = num - 1;
        updateSlides();
      }
    }
    window.goToSlide = goToSlide;

    // Listen for hash change (e.g. from internal links or browser history)
    window.addEventListener('hashchange', () => {
      if (window.location.hash) {
        const hashSlide = parseInt(window.location.hash.substring(1), 10);
        if (!isNaN(hashSlide) && hashSlide > 0 && hashSlide <= totalSlides) {
          if (currentSlide !== hashSlide - 1) {
            currentSlide = hashSlide - 1;
            updateSlides();
          }
        }
      }
    });

    // Initial hash check
    if (window.location.hash) {
      const initialHash = parseInt(window.location.hash.substring(1), 10);
      if (!isNaN(initialHash) && initialHash > 0 && initialHash <= totalSlides) {
        currentSlide = initialHash - 1;
      }
    }

    // Core Slide State Update
    function updateSlides() {
      slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev');
        if (index === currentSlide) {
          slide.classList.add('active');
        } else if (index < currentSlide) {
          slide.classList.add('prev');
        }
      });

      // Update Slide Counter
      if (counterEl) {
        const padCurrent = (currentSlide + 1).toString().padStart(2, '0');
        const padTotal = totalSlides.toString().padStart(2, '0');
        counterEl.textContent = `${padCurrent} / ${padTotal}`;
      }

      // Update HUD Progress Fill
      if (progressFill) {
        const percent = totalSlides > 1 ? (currentSlide / (totalSlides - 1)) * 100 : 100;
        progressFill.style.width = `${percent}%`;
      }

      // Update HUD Coordinate indicator
      if (coordEl) {
        const activeSlide = slides[currentSlide];
        const customCoord = activeSlide ? activeSlide.getAttribute('data-coord') : null;
        const padIndex = (currentSlide + 1).toString().padStart(2, '0');
        if (customCoord) {
          coordEl.textContent = customCoord;
        } else {
          coordEl.textContent = `SLD_${padIndex} // SEC_RWE`;
        }
      }

      // Update Buttons Disabled States
      if (prevBtn) prevBtn.disabled = currentSlide === 0;
      if (nextBtn) nextBtn.disabled = currentSlide === totalSlides - 1;

      // Update URL hash smoothly
      history.replaceState(null, null, `#${currentSlide + 1}`);
    }

    // --- Progressive Fragment Logic ---
    function advanceFragments(currentSlideEl) {
      if (!currentSlideEl) return false;
      const nonVisibleFragments = currentSlideEl.querySelectorAll('.fragment:not(.visible)');
      if (nonVisibleFragments.length > 0) {
        let minIndex = Infinity;
        nonVisibleFragments.forEach(f => {
          const idx = parseInt(f.getAttribute('data-fragment-index') || Number.MAX_SAFE_INTEGER, 10);
          if (idx < minIndex) minIndex = idx;
        });
        nonVisibleFragments.forEach(f => {
          const idx = parseInt(f.getAttribute('data-fragment-index') || Number.MAX_SAFE_INTEGER, 10);
          if (idx === minIndex) f.classList.add('visible');
        });
        return true;
      }
      return false;
    }

    function retreatFragments(currentSlideEl) {
      if (!currentSlideEl) return false;
      const visibleFragments = currentSlideEl.querySelectorAll('.fragment.visible');
      if (visibleFragments.length > 0) {
        let maxIndex = -Infinity;
        visibleFragments.forEach(f => {
          const idx = parseInt(f.getAttribute('data-fragment-index') || -1, 10);
          if (idx > maxIndex) maxIndex = idx;
        });
        visibleFragments.forEach(f => {
          const idx = parseInt(f.getAttribute('data-fragment-index') || -1, 10);
          if (idx === maxIndex) f.classList.remove('visible');
        });
        return true;
      }
      return false;
    }

    // --- Keyboard Navigation ---
    function handleKeyDown(e) {
      // Don't intercept if user is typing in an input or textarea
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

      const currentSlideEl = slides[currentSlide];

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (!advanceFragments(currentSlideEl) && currentSlide < totalSlides - 1) {
          currentSlide++;
          updateSlides();
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (!retreatFragments(currentSlideEl) && currentSlide > 0) {
          currentSlide--;
          updateSlides();
          setTimeout(() => {
            const prevSlideEl = slides[currentSlide];
            if (prevSlideEl) {
              prevSlideEl.querySelectorAll('.fragment').forEach(f => f.classList.add('visible'));
            }
          }, 10);
        }
      } else if (e.key === 'Home') {
        e.preventDefault();
        currentSlide = 0;
        updateSlides();
      } else if (e.key === 'End') {
        e.preventDefault();
        currentSlide = totalSlides - 1;
        updateSlides();
      } else if (e.key === 'f' || e.key === 'F') {
        if (!e.ctrlKey && !e.metaKey) {
          toggleFullscreen();
        }
      }
    }

    document.removeEventListener('keydown', window._hirudoKeyDown || (() => {}));
    window._hirudoKeyDown = handleKeyDown;
    document.addEventListener('keydown', window._hirudoKeyDown);

    // --- Button Navigation and Smart Click Advance ---
    document.removeEventListener('click', window._hirudoClickNav || (() => {}));
    window._hirudoClickNav = function (e) {
      const targetBtn = e.target.closest('.control-btn');
      const currentSlideEl = slides[currentSlide];

      if (!targetBtn) {
        // Smart click: check if clicking on slide canvas to advance
        const slideArea = e.target.closest('#slide-container, .slide');
        const isInteractive = e.target.closest('button, a, input, select, textarea, .modal, .zoomable-image, [data-modal-target], .slide-controls, .interactive, [onclick]');
        
        if (slideArea && !isInteractive && currentSlideEl) {
          if (!advanceFragments(currentSlideEl) && currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlides();
          }
        }
        return;
      }

      if (targetBtn.id === 'prevSlide' && currentSlideEl) {
        if (!retreatFragments(currentSlideEl) && currentSlide > 0) {
          currentSlide--;
          updateSlides();
          setTimeout(() => {
            const newSlideEl = slides[currentSlide];
            if (newSlideEl) {
              newSlideEl.querySelectorAll('.fragment').forEach(f => f.classList.add('visible'));
            }
          }, 10);
        }
      } else if (targetBtn.id === 'nextSlide' && currentSlideEl) {
        if (!advanceFragments(currentSlideEl) && currentSlide < totalSlides - 1) {
          currentSlide++;
          updateSlides();
        }
      } else if (targetBtn.id === 'fullscreenToggle') {
        toggleFullscreen();
      }
    };
    document.addEventListener('click', window._hirudoClickNav);

    // --- Fullscreen Toggle Helper ---
    function toggleFullscreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        }
      }
    }
    window.toggleFullscreen = toggleFullscreen;

    // --- Modal Architecture ---
    function openModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('active');
        const outsideClick = (e) => {
          if (e.target === modal) {
            closeModal(modalId);
            modal.removeEventListener('click', outsideClick);
          }
        };
        modal.addEventListener('click', outsideClick);
      }
    }

    function closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove('active');
      }
    }

    window.openModal = openModal;
    window.closeModal = closeModal;

    // Lightbox & Modal Close Triggers
    const closeBtns = document.querySelectorAll('.modal-close');
    closeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal-overlay');
        if (modal) closeModal(modal.id);
      });
    });

    // Escape Key Listener for Modals
    function handleEscape(e) {
      if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal-overlay.active');
        if (activeModal) closeModal(activeModal.id);
      }
    }
    document.removeEventListener('keydown', window._hirudoEscape || (() => {}));
    window._hirudoEscape = handleEscape;
    document.addEventListener('keydown', window._hirudoEscape);

    // Zoomable Image Logic
    const zoomableImages = document.querySelectorAll('.zoomable-image');
    const globalImageModal = document.getElementById('global-image-modal');
    const globalImageContent = document.getElementById('global-image-content');

    if (globalImageModal && globalImageContent) {
      zoomableImages.forEach(img => {
        img.addEventListener('click', () => {
          globalImageContent.src = img.src;
          openModal('global-image-modal');
        });
      });
    }

    // Initialize first display
    updateSlides();
  };
})();
