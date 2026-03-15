import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

interface Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
}

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Config
    const particleCount = 100;
    const maxConnectionDistance = 150;
    const mouseRadius = 150;
    
    // Mouse tracking
    const mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 1,
          dy: (Math.random() - 0.5) * 1,
          radius: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      const particleColor = isDark ? 'rgba(52, 211, 153, 0.5)' : 'rgba(16, 185, 129, 0.4)'; // Emerald tones
      const lineColor = isDark ? 'rgba(52, 211, 153, ' : 'rgba(16, 185, 129, ';

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Move
        particle.x += particle.dx;
        particle.y += particle.dy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxConnectionDistance) {
            const opacity = 1 - (distance / maxConnectionDistance);
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `${lineColor}${opacity * 0.2})`;
            ctx.stroke();
          }
        }

        // Connect to mouse
        const mouseDx = particle.x - mouse.x;
        const mouseDy = particle.y - mouse.y;
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

        if (mouseDistance < mouseRadius) {
          const opacity = 1 - (mouseDistance / mouseRadius);
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `${lineColor}${opacity * 0.5})`;
          ctx.stroke();
          
          // Slight attraction to mouse
          particle.x -= mouseDx * 0.01;
          particle.y -= mouseDy * 0.01;
        }
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    resizeCanvas();
    initParticles();
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};
