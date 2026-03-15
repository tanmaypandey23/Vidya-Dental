// ========== doctor-hero.js ==========
// Opening animations: fade and slide in elements on page load

(function() {
  // Ensure the DOM is fully loaded before manipulating
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    initAnimations(); // DOM already ready
  }

  function initAnimations() {
    // get animated elements
    const badge = document.querySelector('.hero-badge');
    const title = document.querySelector('.hero-title');
    const desc = document.querySelector('.hero-description');
    const trust = document.querySelector('.trust-strip');
    const cta = document.querySelector('.cta-group');
    const visual = document.querySelector('.hero-visual');
    
    const elements = [badge, title, desc, trust, cta, visual];
    
  }
}
)