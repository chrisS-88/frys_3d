export function initParallax(selector = "[data-parallax]", strength = 5) {
  const elements = document.querySelectorAll(selector);

  function update() {
    const scrollY = window.scrollY;

    elements.forEach((el) => {
      const speed = parseFloat(el.dataset.parallaxSpeed || 1);
      const rotate = parseFloat(el.dataset.parallaxRotate || 0);
      const offset = (scrollY * speed) / strength;

      const base = el.dataset.parallaxBase || "";

      el.style.transform = `
        ${base}
        translateY(${offset}px)
        rotate(${scrollY * rotate}deg)
      `;
    });

    requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}
