import { useEffect, useRef } from "react";

function HeroOrbit() {
  const orbitRef = useRef(null);

  useEffect(() => {
    const orbit = orbitRef.current;

    if (!orbit) return;

    function handleMouseMove(event) {
        const rect = orbit.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = event.clientX - centerX;
        const mouseY = event.clientY - centerY;

        const rotateY = Math.max(-6, Math.min(6, mouseX / 50));
        const rotateX = Math.max(-6, Math.min(6, -mouseY / 50));

        orbit.style.transform = `
            perspective(800px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.03)
        `;
    }

    function resetOrbit() {
    orbit.style.transform = `
        perspective(800px)
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
    `;
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", resetOrbit);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", resetOrbit);
    };
  }, []);

  return (
    <div className="hero-orbit-wrapper" ref={orbitRef}>
      <div className="hero-orbit">
        <div className="orbit-ring orbit-ring-1"></div>
        <div className="orbit-ring orbit-ring-2"></div>

        <div className="orbit-core">
          <span>EP</span>
        </div>

        <div className="orbit-label label-data">DATA</div>
        <div className="orbit-label label-ai">AI</div>
        <div className="orbit-label label-code">CODE</div>
      </div>
    </div>
  );
}

export default HeroOrbit;