import styles from "./page.module.css";
import HeroPanel from "@/components/HeroPanel/HeroPanel";
import AboutMe from "@/components/About/AboutMe";
import AnimatedNavBar from "@/components/AnimatedNavBar";
import Skills from "@/components/Skills/Skills";
import Footer from "@/components/Footer";
import Projects from "@/components/Project/Projects";

const FEATURED_PROJECTS = [
  {
    title: "VolleyTok",
    description:
      "A video platform designed specifically for volleyball to watch, upload, and discuss volleyball content. It was built to allow people passionate about volleyball to gather in once place.",
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Auth0",
      "PostgreSQL",
    ],
    theme: "blue",
    github_url: "https://github.com/Erric-Cheung/VolleyTok",
    thumbnail: "VolleytokThumbnail.PNG",
  },
  {
    title: "Discord Clone",
    description:
      "A full-stack web application that replicates the features and visuals of the popular communication application, Discord.",
    tools: [
      "React",
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "WebRTC",
    ],
    theme: "red",
    github_url: "https://github.com/Erric-Cheung/Discord-Clone",
    thumbnail: "DiscordCloneThumbnail.PNG",
  },
  {
    title: "Sorting Visualizer",
    description:
      "A simple sorting visualizer that visualizes the selected sorting algorithm on a randomly generated array.",
    tools: ["React", "Redux"],
    theme: "purple",
    github_url: "https://github.com/Erric-Cheung/SortingVisualizer",
    thumbnail: "SortingThumbnail.PNG",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <AnimatedNavBar />
      <main className={styles.main}>
        <section
          id="hero-section"
          className={`${styles.section} ${styles["hero-section"]}`}
        >
          <HeroPanel />
        </section>
        <div className={styles.sections}>
          <section id="projects-section" className={`${styles.section}`}>
            <div
              className={`${styles["section-container"]} ${styles["projects"]}`}
            >
              <div className={styles["section-header"]}>
                <h2>PROJECTS</h2>
                <p className={styles.headline}>Featured Work</p>
              </div>
              <Projects projectList={FEATURED_PROJECTS} />
            </div>
          </section>
          <section id="skills-section" className={`${styles.section}`}>
            <div
              className={`${styles["section-container"]} ${styles["skills"]}`}
            >
              <div className={styles["section-header-center"]}>
                <h2>SKILLS & EDUCATION </h2>
                <p className={styles.headline}>Areas of Expertise</p>
              </div>
              <Skills />
            </div>
          </section>
          <section id="about-section" className={`${styles.section}`}>
            <div
              className={`${styles["section-container"]} ${styles["about"]}`}
            >
              <div className={`${styles["section-header-center"]}`}>
                <h2>ABOUT ME</h2>
                <p className={styles.headline}>Who I Am</p>
              </div>
              <AboutMe />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
