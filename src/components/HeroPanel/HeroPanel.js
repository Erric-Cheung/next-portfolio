import Eclipse from "./Eclipse";
import styles from "./HeroPanel.module.css";
import { IoDocumentText, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import ParticleBackground from "./Particles";
import AnimatedText from "../UI/AnimatedText";

const HeroPanel = () => {
  return (
    <div className={styles["section"]}>
      <div className={`${styles["container"]}`}>
        <div className={styles["content"]}>
          <div className={styles["banner"]}>
            <h1>ERIC CHEUNG</h1>
            <p className={styles["headline"]}>Software Developer</p>
          </div>
          <div className={styles["welcome-info"]}>
            <div className={styles["welcome-title"]}>
              <AnimatedText text={"Welcome to my portfolio."} />
            </div>
            <div className={styles["connect-icons"]}>
              <a
                className={`${styles["button"]}`}
                href="https://www.linkedin.com/in/erriccheung/"
                target="_blank"
              >
                <div className={styles["connect-item"]}>
                  <IoLogoLinkedin size={24} />
                </div>
              </a>
              <a
                className={`${styles["button"]}`}
                href="https://github.com/Erric-Cheung"
                target="_blank"
              >
                <div className={styles["connect-item"]}>
                  <IoLogoGithub size={24} />
                </div>
              </a>
              <a
                className={`${styles["button"]}`}
                href="/EricCheungResume.pdf"
                target="_blank"
              >
                <div className={styles["connect-item"]}>
                  <IoDocumentText size={24} />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={styles["eclipse"]}>
          <Eclipse />
        </div>
        <div className={styles["background"]}>
          <ParticleBackground />
        </div>
      </div>
    </div>
  );
};

export default HeroPanel;
