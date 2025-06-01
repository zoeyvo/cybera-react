/**
 * CursorTrail.jsx
 * Renders the custom mouse particle/cursor effect.
 * - Uses react-mouse-particles for trailing effect.
 * - Enforces custom angel wings cursor globally.
 * - Particle frequency is controlled by minDistance and minInterval.
 *   Lower values = more frequent 1/0 particles.
 *   Current: minDistance = 24px, minInterval = 24ms (high frequency)
 * - No unused code or styles.
 */

import React, { useEffect, useState } from "react";

const chars = ['0', '1'];

function CursorTrail({ count = 10 }) {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    let lastX = null;
    let lastY = null;
    const minDistance = 24; // More frequent 1s/0s: lower distance between spawns
    let lastTime = 0;
    const minInterval = 24; // More frequent 1s/0s: lower ms between spawns
    const handleMove = (e) => {
      const now = Date.now();
      if (now - lastTime < minInterval) return;
      lastTime = now;
      const x = e.pageX;
      const y = e.pageY;
      if (lastX !== null && lastY !== null) {
        const dx = x - lastX;
        const dy = y - lastY;
        if (Math.sqrt(dx*dx + dy*dy) < minDistance) return;
      }
      lastX = x;
      lastY = y;
      const id = now + Math.random();
      const char = chars[Math.floor(Math.random() * chars.length)];
      // Randomize initial velocity for a "spilling" effect
      const angle = (Math.random() - 0.5) * Math.PI / 1.5; // -60deg to +60deg
      const speed = 5 + Math.random() * 3; // px per frame
      const vx = Math.cos(angle) * speed * (Math.random() > 0.5 ? 1 : -1); // left or right
      const vy = -6 - Math.random() * 2; // initial upward velocity
      setTrail((prev) => [
        ...prev,
        { id, x, y, char, vx, vy, t: 0 }
      ]);
      setTimeout(() => {
        setTrail((prev) => prev.filter((item) => item.id !== id));
      }, 500); // disappear after 400ms
    };
    document.addEventListener("mousemove", handleMove);
    return () => document.removeEventListener("mousemove", handleMove);
  }, []);

  // Animate the trail: update x/y position and velocity (gravity, horizontal drift)
  useEffect(() => {
    if (trail.length === 0) return;
    const interval = setInterval(() => {
      setTrail((prev) =>
        prev.map((item) => {
          const gravity = 0.7;
          const newVy = item.vy + gravity;
          const newY = item.y + item.vy + gravity * item.t;
          const newX = item.x + item.vx * (0.98 ** item.t); // horizontal drift slows over time
          return { ...item, vy: newVy, y: newY, x: newX, t: item.t + 1 };
        })
      );
    }, 16);
    return () => clearInterval(interval);
  }, [trail.length]);

  return (
    <>
      {trail.map((item) => (
        <span
          key={item.id}
          className="cursor-trail-char"
          style={{
            position: "fixed",
            left: item.x,
            top: item.y,
            fontSize: `1.1rem`, // match button text size
            pointerEvents: "none",
            transform: `translate(-50%, -50%) scale(${1.0}) rotate(${(item.vx > 0 ? 1 : -1) * item.t * 2}deg)`,
            opacity: 1 - item.t * 0.02,
            color: '#fff', // white text
            WebkitTextStroke: 'none',
            textShadow: '0 0 6px #00FF00, 0 0 12px #00FF00', // strong green glow
            background: 'none',
            border: 'none',
            letterSpacing: '0.1em',
            fontFamily: 'Typewriter, monospace',
            fontWeight: 'bold',
            zIndex: 2147483647,
            boxShadow: 'none',
            outline: 'none',
          }}
        >
          {item.char}
        </span>
      ))}
    </>
  );
}

export default CursorTrail;
