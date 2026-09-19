"use client";

import { useEffect, useRef, type CSSProperties } from "react";

const outcomes = [
  { label: "Qualified leads", icon: "↗", color: "violet" },
  { label: "AI mentions", icon: "✳", color: "lime" },
  { label: "More visibility", icon: "⌕", color: "cream" },
  { label: "Brand authority", icon: "✦", color: "pink" },
  { label: "Better-fit projects", icon: "◎", color: "lime" },
  { label: "Organic traffic", icon: "↗", color: "blue" },
  { label: "Client conversations", icon: "↗", color: "cream" },
  { label: "A stronger pipeline", icon: "✳", color: "violet" },
];
type Body = { x: number; y: number; vx: number; vy: number; angle: number; spin: number; w: number; h: number };
const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(n, max));

export function OutcomePlayground() {
  const stageRef = useRef<HTMLDivElement>(null);
  const resetRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const reset = resetRef.current;
    if (!stage || !reset) return;
    const blocks = Array.from(stage.querySelectorAll<HTMLButtonElement>(".outcome-block"));
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let bodies: Body[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let last = 0;
    let idle = 0;
    let visible = false;
    let drag: { index: number; id: number; ox: number; oy: number; time: number } | null = null;

    const paint = () => bodies.forEach((body, i) => {
      blocks[i].style.transform = `translate3d(${body.x}px,${body.y}px,0) rotate(${body.angle}deg)`;
    });
    const contain = (b: Body) => {
      const right = width - b.w - 14;
      const floor = height - b.h - 24;
      if (b.x < 14 || b.x > right) { b.x = clamp(b.x, 14, right); b.vx *= -.5; b.spin *= -.5; }
      if (b.y < 14 || b.y > floor) {
        b.y = clamp(b.y, 14, floor);
        b.vy = Math.abs(b.vy) < 45 ? 0 : b.vy * -.32;
        b.vx *= .86;
        b.spin *= .7;
      }
    };
    const step = (time: number) => {
      frame = 0;
      const dt = Math.min((time - last) / 1000 || .016, .025);
      last = time;
      for (let i = 0; i < bodies.length; i++) {
        if (drag?.index === i) continue;
        const b = bodies[i];
        b.vy += 950 * dt;
        b.x += b.vx * dt; b.y += b.vy * dt;
        b.angle = clamp(b.angle + b.spin * dt, -16, 16);
        b.vx *= .992; b.spin *= .96;
        contain(b);
      }
      // Small, bounded pile: resolve pairs twice for stable stacked blocks.
      for (let pass = 0; pass < 2; pass++) {
        for (let i = 0; i < bodies.length; i++) for (let j = i + 1; j < bodies.length; j++) {
          const a = bodies[i], b = bodies[j];
          const dx = b.x + b.w / 2 - a.x - a.w / 2;
          const dy = b.y + b.h / 2 - a.y - a.h / 2;
          const ox = (a.w + b.w) / 2 + 6 - Math.abs(dx);
          const oy = (a.h + b.h) / 2 + 8 - Math.abs(dy);
          if (ox <= 0 || oy <= 0) continue;
          const ma = drag?.index === i ? 0 : drag?.index === j ? 1 : .5;
          const mb = 1 - ma;
          if (ox < oy) {
            const sign = dx >= 0 ? 1 : -1;
            a.x -= sign * ox * ma; b.x += sign * ox * mb;
            const impulse = (a.vx - b.vx) * .6;
            a.vx -= impulse * ma; b.vx += impulse * mb;
          } else {
            const sign = dy >= 0 ? 1 : -1;
            a.y -= sign * oy * ma; b.y += sign * oy * mb;
            if (ma) { a.vy *= .3; a.vx *= .9; a.spin *= .8; }
            if (mb) { b.vy *= .3; b.vx *= .9; b.spin *= .8; }
          }
        }
        bodies.forEach((b, i) => { if (drag?.index !== i) contain(b); });
      }
      paint();
      const moving = bodies.some(b => Math.abs(b.vx) + Math.abs(b.vy) + Math.abs(b.spin) > 25);
      idle = moving || drag ? 0 : idle + 1;
      if (visible && !motion.matches && idle < 24) frame = requestAnimationFrame(step);
    };
    const wake = () => {
      idle = 0;
      if (!frame && visible && !motion.matches) { last = performance.now(); frame = requestAnimationFrame(step); }
    };
    const arrange = () => {
      cancelAnimationFrame(frame); frame = 0;
      if (drag) {
        const block = blocks[drag.index];
        if (block.hasPointerCapture(drag.id)) block.releasePointerCapture(drag.id);
        block.classList.remove("is-grabbed"); drag = null;
      }
      width = stage.clientWidth; height = stage.clientHeight;
      const columns = Math.max(2, Math.min(4, Math.floor((width - 36) / (blocks[0].offsetWidth + 18))));
      const cell = (width - 36) / columns;
      bodies = blocks.map((block, i) => ({
        x: 18 + (i % columns) * cell + (cell - block.offsetWidth) / 2,
        y: height - 38 - (Math.floor(i / columns) + 1) * (block.offsetHeight + 18),
        w: block.offsetWidth, h: block.offsetHeight, vx: 0, vy: 0,
        angle: [-7, 5, -4, 7, 4, -6, 6, -3][i], spin: 0,
      }));
      paint();
    };
    const down = (e: PointerEvent) => {
      if (drag || (e.pointerType === "mouse" && e.button !== 0)) return;
      const block = (e.target as HTMLElement).closest<HTMLButtonElement>(".outcome-block");
      if (!block) return;
      const index = blocks.indexOf(block), b = bodies[index], rect = stage.getBoundingClientRect();
      drag = { index, id: e.pointerId, ox: e.clientX - rect.left - b.x, oy: e.clientY - rect.top - b.y, time: performance.now() };
      b.vx = 0; b.vy = 0;
      block.setPointerCapture(e.pointerId); block.classList.add("is-grabbed");
      wake();
    };
    const move = (e: PointerEvent) => {
      if (!drag || e.pointerId !== drag.id) return;
      const b = bodies[drag.index], rect = stage.getBoundingClientRect(), now = performance.now();
      const dt = Math.max((now - drag.time) / 1000, .008);
      const x = clamp(e.clientX - rect.left - drag.ox, 14, width - b.w - 14);
      const y = clamp(e.clientY - rect.top - drag.oy, 14, height - b.h - 24);
      b.vx = clamp((x - b.x) / dt, -1200, 1200); b.vy = clamp((y - b.y) / dt, -1200, 1200);
      b.spin = b.vx * .07; b.x = x; b.y = y; drag.time = now;
      paint();
    };
    const release = (e: PointerEvent) => {
      if (!drag || e.pointerId !== drag.id) return;
      const { index, id, time } = drag;
      const block = blocks[index];
      if (e.type !== "pointerup" || performance.now() - time > 100 || motion.matches) {
        bodies[index].vx = 0; bodies[index].vy = 0; bodies[index].spin = 0;
      }
      drag = null;
      block.classList.remove("is-grabbed");
      if (block.hasPointerCapture(id)) block.releasePointerCapture(id);
      wake();
    };
    const key = (e: KeyboardEvent) => {
      const index = blocks.indexOf(e.target as HTMLButtonElement);
      if (index < 0 || !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " ", "Enter"].includes(e.key)) return;
      e.preventDefault();
      const b = bodies[index];
      if (e.key.startsWith("Arrow")) {
        b.x += e.key === "ArrowLeft" ? -24 : e.key === "ArrowRight" ? 24 : 0;
        b.y += e.key === "ArrowUp" ? -24 : e.key === "ArrowDown" ? 24 : 0;
        contain(b); paint();
      } else if (!motion.matches) {
        b.vy = -520; b.vx = index % 2 ? -160 : 160; b.spin = index % 2 ? -35 : 35; wake();
      }
    };
    const resize = new ResizeObserver(arrange);
    resize.observe(stage);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible) { cancelAnimationFrame(frame); frame = 0; }
    });
    observer.observe(stage);
    arrange();
    stage.addEventListener("pointerdown", down);
    stage.addEventListener("pointermove", move);
    stage.addEventListener("pointerup", release);
    stage.addEventListener("pointercancel", release);
    stage.addEventListener("lostpointercapture", release);
    stage.addEventListener("keydown", key);
    reset.addEventListener("click", arrange);
    motion.addEventListener("change", arrange);
    return () => {
      cancelAnimationFrame(frame); resize.disconnect(); observer.disconnect();
      stage.removeEventListener("pointerdown", down); stage.removeEventListener("pointermove", move);
      stage.removeEventListener("pointerup", release); stage.removeEventListener("pointercancel", release);
      stage.removeEventListener("lostpointercapture", release); stage.removeEventListener("keydown", key);
      reset.removeEventListener("click", arrange); motion.removeEventListener("change", arrange);
    };
  }, []);

  return <div className="wrap outcome-playground">
    <div className="outcome-heading">
      <div><p className="eyebrow">SMALL MOVES. COMPOUNDING POSSIBILITIES.</p>
        <h2>What could getting found <span className="serif">set in motion?</span></h2></div>
      <button ref={resetRef} type="button" className="outcome-reset"><span aria-hidden="true">↺</span> Reset blocks</button>
    </div>
    <div className="outcome-stage" ref={stageRef} role="group" aria-label="SEO outcome playground" aria-describedby="outcome-instructions">
      <span className="outcome-watermark" aria-hidden="true">good things<br />start with search.</span>
      <div className="outcome-floor" aria-hidden="true" />
      {outcomes.map((outcome, i) => <button type="button" key={outcome.label}
        className={`outcome-block outcome-${outcome.color}`} style={{ "--block-index": i } as CSSProperties}
        aria-label={`${outcome.label}. Move with arrow keys or toss with Enter.`}>
        <span className="outcome-block-icon" aria-hidden="true">{outcome.icon}</span><span>{outcome.label}</span>
      </button>)}
    </div>
    <p id="outcome-instructions" className="outcome-instructions"><span aria-hidden="true">✳</span> A little momentum goes a long way. Drag, toss, play.<span className="sr-only"> Keyboard: Tab to a block, arrow keys to move, Enter to toss. Reset blocks restores the layout.</span></p>
  </div>;
}
