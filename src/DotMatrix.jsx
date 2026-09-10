import { useEffect, useRef } from "react";
import "./DotMatrix.css";

function DotMatrix() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width;
    let height;
    let dots = [];

    const mouse = {
      x: -1000,
      y: -1000,
    };

    const spacing = 35;
    const baseRadius = 1;
    const interactionRadius = 150;
    
    const pushStrength = 1.4;
    const springStrength = 0.04;
    const friction = 0.88;

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createDots();
    }

    function createDots() {
      dots = [];

      for (let x = spacing / 2; x < width; x += spacing) {
        for (let y = spacing / 2; y < height; y += spacing) {
          dots.push({
            baseX: x,
            baseY: y,

            x,
            y,

            vx: 0,
            vy: 0,
          });
        }
      }
    }

    function handleMouseMove(event) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    }

    function handleMouseLeave() {
      mouse.x = -1000;
      mouse.y = -1000;
    }

    function updateDot(dot) {
      const dx = dot.x - mouse.x;
      const dy = dot.y - mouse.y;

      const distance = Math.sqrt(dx * dx + dy * dy);

      /*
        Cursor repulsion
      */

      if (distance < interactionRadius && distance > 0) {
        const force =
          (interactionRadius - distance) / interactionRadius;

        const directionX = dx / distance;
        const directionY = dy / distance;

        dot.vx += directionX * force * pushStrength;
        dot.vy += directionY * force * pushStrength;
      }

      /*
        Spring force pulling dot back
        toward original grid position
      */

      const springX = dot.baseX - dot.x;
      const springY = dot.baseY - dot.y;

      dot.vx += springX * springStrength;
      dot.vy += springY * springStrength;

      /*
        Friction prevents endless bouncing
      */

      dot.vx *= friction;
      dot.vy *= friction;

      dot.x += dot.vx;
      dot.y += dot.vy;
    }

    function drawDot(dot) {
      const dx = mouse.x - dot.x;
      const dy = mouse.y - dot.y;

      const distance = Math.sqrt(dx * dx + dy * dy);

      let radius = baseRadius;
      let opacity = 0.13;

      if (distance < interactionRadius) {
        const strength =
          1 - distance / interactionRadius;

        radius =
          baseRadius +
          strength * 2.2;

        opacity =
          0.13 +
          strength * 0.7;
      }

      ctx.beginPath();

      ctx.arc(
        dot.x,
        dot.y,
        radius,
        0,
        Math.PI * 2
      );

      ctx.fillStyle =
        `rgba(255,255,255,${opacity})`;

      ctx.fill();
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      dots.forEach((dot) => {
        updateDot(dot);
        drawDot(dot);
      });

      animationFrameId =
        requestAnimationFrame(animate);
    }

    resizeCanvas();
    animate();

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    return () => {
      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      cancelAnimationFrame(
        animationFrameId
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="dot-matrix"
    />
  );
}

export default DotMatrix;