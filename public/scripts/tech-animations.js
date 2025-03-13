class TechAnimations {
  constructor() {
    this.initMatrix();
    this.initHolograms();
  }

  initMatrix() {
    const matrix = document.querySelector('.matrix-effect');
    const columns = Math.floor(window.innerWidth / 20);
    const rows = Math.floor(window.innerHeight / 20);
    
    matrix.style.backgroundSize = `${columns}px ${rows}px`;
  }

  initHolograms() {
    const cards = document.querySelectorAll('.link-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.boxShadow = `0 0 20px rgba(0, 255, 65, 0.8)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.boxShadow = 'none';
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new TechAnimations();
});
