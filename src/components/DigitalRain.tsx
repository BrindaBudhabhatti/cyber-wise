'use client';

import { useEffect } from 'react';

export default function DigitalRain() {
  useEffect(() => {
    const canvas = document.getElementById('rain-canvas') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      // Get mode (dark/light)
      const isDark = document.documentElement.classList.contains('dark');

      // Background fade effect
      ctx.fillStyle = isDark ? '#08041416' : 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = isDark ? '#02595996' : '#d9d9d9'; // Text color
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const binary = ['0', '1'];
        const text = binary[Math.floor(Math.random() * binary.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      id="rain-canvas"
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
