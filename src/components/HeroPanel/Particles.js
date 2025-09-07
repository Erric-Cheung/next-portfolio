"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import styles from "./Particles.module.css";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false, zIndex: 2 },
      particles: {
        number: { value: 40 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: {
          value: 1,
          random: true,
        },
        size: {
          value: { min: 0.1, max: 1 },
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          outModes: "out",
        },
      },
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      background: {
        color: "transparent",
      },
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        className={styles["particles"]}
      />
    );
  }

  return <></>;
};

export default ParticleBackground;
