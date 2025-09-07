import NavButton from "../UI/NavButton";
import styles from "./Skills.module.css";
import {
  SiCssmodules,
  SiExpress,
  SiGit,
  SiGithub,
  SiJunit5,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiSelenium,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiWebrtc,
} from "react-icons/si";

const SKILLS = [
  { title: "ReactJS", icon: SiReact, iconColor: "#61DAFB" },
  { title: "TypeScript", icon: SiTypescript, iconColor: "#3178C6" },
  { title: "ExpressJS", icon: SiExpress },
  { title: "Tailwind", icon: SiTailwindcss, iconColor: "#06B6D4" },
  { title: "CSS Modules", icon: SiCssmodules },
  { title: "NextJS", icon: SiNextdotjs },
  { title: "NodeJS", icon: SiNodedotjs, iconColor: "#5FA04E" },
  { title: "MongoDB", icon: SiMongodb, iconColor: "#47A248" },
  { title: "PosgreSQL", icon: SiPostgresql, iconColor: "#4169E1" },
  { title: "WebRTC", icon: SiWebrtc },
  { title: "JUnit", icon: SiJunit5, iconColor: "#25A162" },
  { title: "SpringBoot", icon: SiSpringboot, iconColor: "#6DB33F" },
  { title: "Selenium", icon: SiSelenium, iconColor: "#43B02A" },
  { title: "Git", icon: SiGit, iconColor: "#F05032" },
  { title: "GitHub", icon: SiGithub },
  { title: "Postman", icon: SiPostman, iconColor: "#FF6C37" },
  { title: "Amazon Web Services" },
];
const COURSES = [
  { code: "COMP 3804", title: "Design and Analysis of Algorithms" },
  { code: "COMP 3004", title: "Object-Oriented Software Engineering" },
  { code: "COMP 3008", title: "Human-Computer Interaction" },
  { code: "COMP 4004", title: "Software Quality Assurance" },
  { code: "COMP 3005", title: "Database Management Systems" },
  { code: "COMP 3000", title: "Operating Systems" },
  { code: "COMP 3106", title: "Artificial Intelligence" },
  { code: "COMP 2406", title: "Fundamentals of Web Application" },
  { code: "COMP 2401", title: "Systems Programming" },
];

const Skills = () => {
  return (
    <div className={styles["container"]}>
      <div
        className={`${styles["education-container"]} ${styles["container-box"]}`}
      >
        <h3>EDUCATION</h3>
        <div className={styles["education-row"]}>
          <span>Carleton University</span>
          <span>Ottawa, ON</span>
        </div>
        <div className={styles["education-row"]}>
          <span>Bachelor of Computer Science</span>
          <span>2020 - 2025</span>
        </div>
      </div>
      <div
        className={`${styles["skills-container"]} ${styles["container-box"]}`}
      >
        <h3>SKILLS</h3>
        <ul className={styles["skill-list"]}>
          {SKILLS.map((skill) => {
            const Icon = skill.icon;
            return (
              <li key={skill.title} className={styles["skill-item"]}>
                {skill.icon && (
                  <span className={styles["skill-icon"]}>
                    <Icon size={18} color={skill.iconColor}></Icon>
                  </span>
                )}
                <span>{skill.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={`${styles["courses-container"]} ${styles["container-box"]}`}
      >
        <h3>RELATED COURSES</h3>
        <ul className={styles["course-list"]}>
          {COURSES.map((course) => {
            return (
              <li key={course.code} className={styles["course-item"]}>
                <div className={styles["course-content"]}>
                  <div className={styles["course-code"]}>{course.code} </div>
                  <div className={styles["course-title"]}>{course.title}</div>
                </div>
                <div className={styles["bottom-streak"]} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={`${styles["info-container"]} ${styles["container-box"]}`}>
        <NavButton
          href="/EricCheungResume.pdf"
          target="_blank"
          title="SEE MY RESUME"
        />
        {/* <h3>MORE</h3> */}
      </div>
    </div>
  );
};

export default Skills;
