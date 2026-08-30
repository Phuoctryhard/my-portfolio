"use client";

import { useEffect, useRef } from "react";

export default function ShootingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(document.documentElement);
    window.addEventListener("resize", resize);

    /* ── Static stars ── */
    const stars = Array.from({ length: 380 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.1 + 0.2,
      alpha: Math.random() * 0.55 + 0.15,
      twinkleSpeed: Math.random() * 0.018 + 0.004,
      twinkleOffset: Math.random() * Math.PI * 2,
    }));

    /* ── Shooting stars ── */
    type Meteor = {
      x: number; y: number;
      vx: number; vy: number;
      len: number; alpha: number; width: number;
      life: number; maxLife: number;
    };
    const meteors: Meteor[] = [];

    const spawnMeteor = () => {
      const angle = (Math.random() * 20 + 15) * (Math.PI / 180);
      const speed = Math.random() * 9 + 7;
      meteors.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.6,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        len: Math.random() * 140 + 80,
        alpha: Math.random() * 0.55 + 0.45,
        width: Math.random() * 1.4 + 0.5,
        life: 0,
        maxLife: Math.random() * 65 + 45,
      });
    };

    /* ── Floating orbs ── */
    const orbs = Array.from({ length: 14 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 180 + 60,
      alpha: Math.random() * 0.07 + 0.02,
      speedX: (Math.random() - 0.5) * 0.0002,
      speedY: (Math.random() - 0.5) * 0.0002,
      hue: ["109,40,217", "168,85,247", "76,29,149", "139,92,246"][Math.floor(Math.random() * 4)],
    }));

    let frame = 0;
    let nextMeteor = Math.floor(Math.random() * 30 + 15);

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      /* orbs */
      orbs.forEach(o => {
        o.x = (o.x + o.speedX + 1) % 1;
        o.y = (o.y + o.speedY + 1) % 1;
        const grd = ctx.createRadialGradient(o.x * W, o.y * H, 0, o.x * W, o.y * H, o.r);
        grd.addColorStop(0, `rgba(${o.hue},${o.alpha})`);
        grd.addColorStop(1, `rgba(${o.hue},0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(o.x * W, o.y * H, o.r, 0, Math.PI * 2);
        ctx.fill();
      });

      /* static stars */
      stars.forEach(s => {
        const twinkle = Math.sin(frame * s.twinkleSpeed + s.twinkleOffset) * 0.3 + 0.7;
        ctx.globalAlpha = s.alpha * twinkle;
        ctx.fillStyle = "#e2d9f3";
        ctx.beginPath();
        ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      /* meteors */
      if (frame >= nextMeteor) {
        const burst = Math.random() < 0.3 ? 3 : 1;
        for (let b = 0; b < burst; b++) spawnMeteor();
        nextMeteor = frame + Math.floor(Math.random() * 40 + 18);
      }

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        const progress = m.life / m.maxLife;
        const fade = progress < 0.2 ? progress / 0.2 : 1 - (progress - 0.2) / 0.8;
        const spd = Math.hypot(m.vx, m.vy);
        const tailX = m.x - (m.vx / spd) * m.len;
        const tailY = m.y - (m.vy / spd) * m.len;

        const grad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        grad.addColorStop(0, `rgba(255,255,255,0)`);
        grad.addColorStop(0.6, `rgba(200,170,255,${m.alpha * fade * 0.45})`);
        grad.addColorStop(1,   `rgba(255,255,255,${m.alpha * fade})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = m.width;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();

        /* sparkle head */
        ctx.globalAlpha = m.alpha * fade * 0.9;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.width * 1.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;

        m.x += m.vx;
        m.y += m.vy;
        m.life++;
        if (m.life > m.maxLife) meteors.splice(i, 1);
      }

      frame++;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
