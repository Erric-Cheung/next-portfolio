"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AnimatedNavBar.module.css";
import { motion } from "motion/react";

const AnimatedNavBar = () => {
  const [activeTab, setActiveTab] = useState("#hero-section");
  const containerRef = useRef(null);

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      setActiveTab(id);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const sectionIds = [
      "#hero-section",
      "#projects-section",
      "#skills-section",
      "#about-section",
    ];

    // compares 
    const handleScroll = () => {
      let closestSection = sectionIds[0];
      let closestDistance = Infinity; 

      sectionIds.forEach((id) => {
        const sectionEl = document.querySelector(id);
        if (sectionEl) {
          const rect = sectionEl.getBoundingClientRect();
          const distanceFromTop = Math.abs(rect.top); // distance of section's top from viewport top

          if (
            distanceFromTop < closestDistance &&
            rect.top <= window.innerHeight * 0.5 // ensures section top is atleast halfway above viewport
          ) {
            closestDistance = distanceFromTop;
            closestSection = id;
          }
        }
      });

      setActiveTab(closestSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once at start

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles["nav"]} `}>
      <div className={styles["tab-container"]} ref={containerRef}>
        <ul className={styles["tab-list"]}>
          {[
            { id: "#hero-section", label: "Home" },
            { id: "#projects-section", label: "Projects" },
            { id: "#skills-section", label: "Skills" },
            { id: "#about-section", label: "About" },
          ].map((tab) => (
            <li className={styles["tab-wrapper"]} key={tab.id}>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-pill"
                  style={{ borderRadius: 9999 }}
                  className={styles["pill-container"]}
                  // transition={{ duration: .5 }}
                >
                  <div className={styles["active-pill"]} />
                  <div className={styles["bottom-indicator"]} />
                  <div className={styles["bottom-glow"]} />
                </motion.div>
              )}
              <a
                className={`${styles.tab} ${
                  activeTab !== tab.id ? styles["active-tab"] : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(tab.id);
                }}
              >
                <div className={styles.label}>{tab.label}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default AnimatedNavBar;

