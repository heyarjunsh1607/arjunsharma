"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import type { Body, Constraint } from "matter-js";

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
const watermark = "good things\nstart with search.";
const STEP = 1000 / 60;
const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(n, max));

type Drag = { index: number; id: number; constraint: Constraint | null; ox: number; oy: number };

// Rigid-body physics for the blocks, driven by Matter.js and painted onto the DOM.
function mount(Matter: typeof import("matter-js"), stage: HTMLDivElement, reset: HTMLButtonElement) {
  const { Engine, Bodies, Body, Composite, Constraint, Sleeping } = Matter;
  const blocks = Array.from(stage.querySelectorAll<HTMLButtonElement>(".outcome-block"));
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const engine = Engine.create({ enableSleeping: true });
  engine.gravity.y = 1.4;
  let bodies: Body[] = [];
  let sizes: { w: number; h: number }[] = [];
  let width = 0;
  let height = 0;
  let reach = 0;
  let frame = 0;
  let last = 0;
  let carry = 0;
  let visible = false;
  let drag: Drag | null = null;

  const paint = () => bodies.forEach((body, i) => {
    const { w, h } = sizes[i];
    blocks[i].style.transform = `translate3d(${body.position.x - w / 2}px,${body.position.y - h / 2}px,0) rotate(${body.angle}rad)`;
  });
  const step = (time: number) => {
    frame = 0;
    carry += Math.min(time - last, 50);
    last = time;
    if (drag?.constraint) Sleeping.set(bodies[drag.index], false);
    // Fixed timestep keeps the simulation identical at 60Hz and 120Hz.
    while (carry >= STEP) { Engine.update(engine, STEP); carry -= STEP; }
    paint();
    const resting = !drag && bodies.every(b => b.isSleeping);
    if (visible && !motion.matches && !resting) frame = requestAnimationFrame(step);
  };
  const wake = () => {
    if (!frame && visible && !motion.matches) { last = performance.now(); carry = 0; frame = requestAnimationFrame(step); }
  };
  const endDrag = () => {
    if (!drag) return;
    const { index, id, constraint } = drag;
    drag = null;
    if (constraint) Composite.remove(engine.world, constraint);
    const block = blocks[index];
    block.classList.remove("is-grabbed");
    if (block.hasPointerCapture(id)) block.releasePointerCapture(id);
  };
  const arrange = () => {
    cancelAnimationFrame(frame); frame = 0;
    endDrag();
    width = stage.clientWidth; height = stage.clientHeight;
    Composite.clear(engine.world, false);
    const wall = 200;
    const floor = height - 26;
    // Hard stops top and bottom only. Blocks may leave the screen sideways; the far
    // walls just keep the world finite so a slide always ends.
    reach = width * 1.5;
    Composite.add(engine.world, [
      Bodies.rectangle(width / 2, floor + wall / 2, width * 4, wall, { isStatic: true }),
      Bodies.rectangle(width / 2, -wall / 2, width * 4, wall, { isStatic: true }),
      Bodies.rectangle(-reach - wall / 2, height / 2, wall, height * 3, { isStatic: true }),
      Bodies.rectangle(width + reach + wall / 2, height / 2, wall, height * 3, { isStatic: true }),
    ]);
    const still = motion.matches;
    // Lay the pile out within the content column even though the stage is full-bleed.
    const span = Math.min(width, 1280 - 88);
    const left = (width - span) / 2 + 18;
    const columns = Math.max(2, Math.min(4, Math.floor((span - 36) / (blocks[0].offsetWidth + 18))));
    const cell = (span - 36) / columns;
    sizes = blocks.map(block => ({ w: block.offsetWidth, h: block.offsetHeight }));
    bodies = blocks.map((block, i) => {
      const { w, h } = sizes[i];
      const row = Math.floor(i / columns);
      return Bodies.rectangle(
        left + (i % columns) * cell + cell / 2 + (still ? 0 : [-6, 4, -3, 7, 5, -5, 3, -4][i]),
        floor - h / 2 - row * (h + 14) - (still ? 0 : 12 + row * 30),
        w, h,
        {
          chamfer: { radius: Math.min(16, h / 3) },
          angle: still ? 0 : [-.05, .03, -.02, .05, .03, -.04, .04, -.02][i],
          restitution: .18, friction: .55, frictionStatic: .8, frictionAir: .012, density: .0016,
          sleepThreshold: 40,
        },
      );
    });
    Composite.add(engine.world, bodies);
    paint();
    wake();
  };
  const point = (e: PointerEvent) => {
    const rect = stage.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };
  const down = (e: PointerEvent) => {
    if (drag || (e.pointerType === "mouse" && e.button !== 0)) return;
    const block = (e.target as HTMLElement).closest<HTMLButtonElement>(".outcome-block");
    if (!block) return;
    const index = blocks.indexOf(block), body = bodies[index], p = point(e);
    let constraint: Constraint | null = null;
    if (!motion.matches) {
      // Same idea as MouseConstraint: a soft spring from the pointer to the grabbed point,
      // so blocks swing from where you hold them and keep their momentum when let go.
      constraint = Constraint.create({
        pointA: p, bodyB: body, pointB: { x: p.x - body.position.x, y: p.y - body.position.y },
        length: 0, stiffness: .2, damping: .08,
      });
      // Supported at runtime, missing from the type definitions.
      Object.assign(constraint, { angularStiffness: .15 });
      Composite.add(engine.world, constraint);
    }
    Sleeping.set(body, false);
    drag = { index, id: e.pointerId, constraint, ox: p.x - body.position.x, oy: p.y - body.position.y };
    block.setPointerCapture(e.pointerId); block.classList.add("is-grabbed");
    wake();
  };
  const move = (e: PointerEvent) => {
    if (!drag || e.pointerId !== drag.id) return;
    const p = point(e);
    if (drag.constraint) {
      drag.constraint.pointA = { x: p.x, y: clamp(p.y, 0, height) };
      wake();
      return;
    }
    const { w, h } = sizes[drag.index];
    Body.setPosition(bodies[drag.index], {
      x: clamp(p.x - drag.ox, -reach + w / 2, width + reach - w / 2), y: clamp(p.y - drag.oy, h / 2, height - 26 - h / 2),
    });
    paint();
  };
  const release = (e: PointerEvent) => {
    if (!drag || e.pointerId !== drag.id) return;
    endDrag();
    wake();
  };
  const key = (e: KeyboardEvent) => {
    const index = blocks.indexOf(e.target as HTMLButtonElement);
    if (index < 0 || !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " ", "Enter"].includes(e.key)) return;
    e.preventDefault();
    const body = bodies[index], { w, h } = sizes[index];
    Sleeping.set(body, false);
    if (e.key.startsWith("Arrow")) {
      const dx = e.key === "ArrowLeft" ? -24 : e.key === "ArrowRight" ? 24 : 0;
      const dy = e.key === "ArrowUp" ? -24 : e.key === "ArrowDown" ? 24 : 0;
      Body.setPosition(body, {
        x: clamp(body.position.x + dx, -reach + w / 2, width + reach - w / 2), y: clamp(body.position.y + dy, h / 2, height - 26 - h / 2),
      });
      paint();
    } else if (!motion.matches) {
      Body.setVelocity(body, { x: index % 2 ? -5 : 5, y: -14 });
      Body.setAngularVelocity(body, index % 2 ? -.06 : .06);
    }
    wake();
  };
  const resize = new ResizeObserver(() => {
    if (stage.clientWidth !== width || stage.clientHeight !== height) arrange();
  });
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) wake();
    else { cancelAnimationFrame(frame); frame = 0; }
  });
  arrange();
  resize.observe(stage);
  observer.observe(stage);
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
    Engine.clear(engine);
  };
}

export function OutcomePlayground() {
  const stageRef = useRef<HTMLDivElement>(null);
  const resetRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const reset = resetRef.current;
    if (!stage || !reset) return;
    let disposed = false;
    let cleanup: (() => void) | undefined;
    // The engine is only fetched once the footer comes near the viewport.
    const loader = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      loader.disconnect();
      import("matter-js").then(module => {
        if (!disposed) cleanup = mount(module.default ?? module, stage, reset);
      });
    }, { rootMargin: "400px" });
    loader.observe(stage);
    return () => { disposed = true; loader.disconnect(); cleanup?.(); };
  }, []);

  return <div className="outcome-playground">
    <div className="outcome-stage" ref={stageRef} role="group" aria-label="SEO outcome playground" aria-describedby="outcome-instructions">
      <span className="outcome-watermark" data-text={watermark} aria-hidden="true">{watermark}</span>
      <div className="outcome-floor" aria-hidden="true" />
      {outcomes.map((outcome, i) => <button type="button" key={outcome.label}
        className={`outcome-block outcome-${outcome.color}`} style={{ "--block-index": i } as CSSProperties}
        aria-label={`${outcome.label}. Move with arrow keys or toss with Enter.`}>
        <span className="outcome-block-icon" aria-hidden="true">{outcome.icon}</span><span>{outcome.label}</span>
      </button>)}
      <button ref={resetRef} type="button" className="outcome-reset"><span aria-hidden="true">↺</span> Reset</button>
    </div>
    <p id="outcome-instructions" className="sr-only">Drag or toss the blocks. Keyboard: Tab to a block, arrow keys to move, Enter to toss. Reset restores the layout.</p>
  </div>;
}
