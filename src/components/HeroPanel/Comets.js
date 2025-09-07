"use client";

import styles from "./Comets.module.css";

import { useRef, useEffect } from "react";

const Comets = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const comets = Array.from({ length: 5 }).map(() => {
      // const speedX = 10;
      // const speedY = 20;
      const speedX = 1;
      const speedY = 2;
      return {
        x: canvas.width,
        y: canvas.height,
        speedX,
        speedY,
        length: Math.random() * 100 + 250, // longer tails
      };
    });

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      comets.forEach((c) => {
        // compute comet angle from velocity
        const angle = Math.atan2(c.speedY, c.speedX);

        // comet vector
        const dx = Math.cos(angle);
        const dy = Math.sin(angle);

        // coordinates
        const headX = c.x;
        const headY = c.y;
        const tailX = c.x - dx * c.length;
        const tailY = c.y - dy * c.length;

        // create gradient for color + taper
        const gradient = ctx.createLinearGradient(headX, headY, tailX, tailY);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(0.2, "cyan");
        gradient.addColorStop(1, "transparent");

        // save context to use variable line width
        ctx.save();

        // use path stroke
        ctx.strokeStyle = gradient;
        ctx.lineCap = "round"; // <-- makes both ends round
        ctx.shadowBlur = 10;
        ctx.shadowColor = "cyan";

        // tapering trick: draw multiple strokes decreasing width
        for (let i = 0; i < 6; i++) {
          ctx.lineWidth = 8 - i * 2; // start thick, then thinner
          ctx.globalAlpha = 1 - i * 0.15;

          ctx.beginPath();
          ctx.moveTo(headX, headY);
          ctx.lineTo(tailX, tailY);
          ctx.stroke();
        }

        ctx.restore();

        // move comet
        c.x += c.speedX;
        c.y += c.speedY;

        // reset when off screen
        if (c.x > canvas.width || c.y > canvas.height) {
          if (Math.random() < 0.5) {
            // spawn from top
            c.x = Math.random() * canvas.width;
            c.y = -20;
          } else {
            // spawn from left
            c.x = -20;
            c.y = Math.random() * canvas.height;
          }
        }
      });

      requestAnimationFrame(draw);
    }

    draw();

    // resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles["comets"]}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Comets;

// const Comets = () => {
//   return (
//     <div className={styles.comets}>
//       {Array.from({ length: 20 }).map((_, i) => (
//         <span
//           key={i}
//           style={{
//             left: `${Math.random() * 100}%`,
//             animationDelay: `${i * 0.2}s`,
//           }}
//         />
//       ))}
//     </div>
//   );
// };
// export default Comets;
