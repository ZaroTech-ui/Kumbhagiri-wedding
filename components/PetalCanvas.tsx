import { useEffect, useRef } from 'react';

export default function PetalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const COLORS = [
      'rgba(245,198,160,0.7)',
      'rgba(255,182,193,0.65)',
      'rgba(240,208,96,0.5)',
      'rgba(255,220,180,0.6)',
      'rgba(255,160,160,0.55)',
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Petal {
      x: number;
      y: number;
      size: number;
      vy: number;
      vx: number;
      rot: number;
      rotV: number;
      opacity: number;
      color: string;
      sway: number;
      swaySpd: number;
      swayOff: number;

      constructor(init = false) {
        this.x = Math.random() * canvas.width;
        this.y = init ? Math.random() * canvas.height * -1 : -20;
        this.size = Math.random() * 10 + 5;
        this.vy = Math.random() * 1.2 + 0.4;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.rot = Math.random() * Math.PI * 2;
        this.rotV = (Math.random() - 0.5) * 0.04;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.sway = Math.random() * 2;
        this.swaySpd = Math.random() * 0.02 + 0.01;
        this.swayOff = Math.random() * Math.PI * 2;
      }

      update(t: number) {
        this.y += this.vy;
        this.x += this.vx + Math.sin(t * this.swaySpd + this.swayOff) * this.sway * 0.3;
        this.rot += this.rotV;
        if (this.y > canvas.height + 30) {
          this.x = Math.random() * canvas.width;
          this.y = -20;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rot);
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size * 0.5, this.size, 0, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(-this.size * 0.1, -this.size * 0.2, this.size * 0.15, this.size * 0.4, -0.3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.2)';
        ctx.fill();
        ctx.restore();
      }
    }

    resize();
    const petals = Array.from({ length: 35 }, () => new Petal(true));

    const handleResize = () => {
      resize();
      petals.forEach(p => {
        p.x = Math.random() * canvas.width;
        p.y = Math.random() * canvas.height * -1;
      });
    };

    window.addEventListener('resize', handleResize);

    let t = 0;
    let animId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.016;
      petals.forEach(p => {
        p.update(t);
        p.draw();
      });
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-[9999] pointer-events-none" />;
}
