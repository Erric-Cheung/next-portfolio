"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import { RiFileTextLine, RiGithubLine, RiLinkedinLine } from "react-icons/ri";

const Footer = () => {
  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <footer className={styles["footer"]}>
      <div className={styles["top-streak"]}></div>
      <div className={styles["container"]}>
        <div className={styles["about"]}>
          <div className={styles["header"]}>ERIC CHEUNG</div>
          <div className={styles["description"]}>
            Hi, I'm a Software Developer specializing in Full-Stack
            developement. I enjoy solving problems and building things that
            satifies users.
          </div>
        </div>
        <div className={styles["nav"]}>
          <div className={styles["nav-content"]}>
            <div className={styles["nav-header"]}>Navigate</div>
            <div className={styles["nav-list"]}>
              <Link
                href="/"
                className={styles["nav-link"]}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#hero-section");
                }}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className={styles["nav-link"]}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#projects-section");
                }}
              >
                Projects
              </Link>
              <Link
                href="/skills"
                className={styles["nav-link"]}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#skills-section");
                }}
              >
                Skills
              </Link>
              <Link
                href="/about"
                className={styles["nav-link"]}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#about-section");
                }}
              >
                About
              </Link>
            </div>
          </div>
          <div className={styles["nav-content"]}>
            <div className={styles["nav-header"]}>My Links</div>
            <div className={styles["nav-list"]}>
              <a
                href="https://www.linkedin.com/in/erriccheung/"
                target="_blank"
                className={styles["nav-link"]}
              >
                <span>
                  <RiLinkedinLine size={22} />
                </span>
                <span>Linkedin</span>
              </a>
              <a
                href="https://github.com/Erric-Cheung"
                target="_blank"
                className={styles["nav-link"]}
              >
                <span>
                  <RiGithubLine size={22} />
                </span>
                <span>Github</span>
              </a>
              <a
                href="/EricCheungResume.pdf"
                target="_blank"
                className={styles["nav-link"]}
              >
                <span>
                  <RiFileTextLine size={22} />
                </span>
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
