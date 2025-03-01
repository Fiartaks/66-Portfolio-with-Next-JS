import React, { useEffect } from "react";

const CanvasRevealEffect = ({
  dotsCount = 50,
  animationSpeed = 1,
  colors = ['#00FFFF', '#FF00FF', '#FFFF00'],
}) => {
  useEffect(() => {
    // Bu kod yalnızca client-side'da çalışır
    const container = document.querySelector('.canvas-reveal-effect');

    const createDots = () => {
      for (let i = 0; i < dotsCount; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        const size = Math.random() * 20 + 5;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * animationSpeed;

        dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.position = 'absolute';
        dot.style.borderRadius = '50%';
        dot.style.opacity = "0";
        dot.style.animation = `fadeIn 1s forwards`;
        dot.style.left = `${left}%`;
        dot.style.top = `${top}%`;
        dot.style.animationDelay = `${delay}s`;
        dot.style.transform = `translate(-50%, -50%)`;

        if (container) {
          container.appendChild(dot);
        }
      }
    };

    createDots();

    return () => {
      if (container) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
    };
  }, [dotsCount, animationSpeed, colors]);

  return (
    <div className="canvas-reveal-effect" style={{ position: 'relative', width: '100%', height: '100%', backgroundColor: 'white', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0))', pointerEvents: 'none' }} />
    </div>
  );
};

export default CanvasRevealEffect;