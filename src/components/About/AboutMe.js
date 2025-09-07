import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <p>
          I'm Eric, a software developer based in Ontario. I'm a computer science
          graduate from the University of Carleton. With a strong foundation in
          full-stack development and a constant eagerness to learn, I enjoy
          transforming product ideas into seamless, impactful user experiences.
        </p>
        <p>My other hobbies include volleyball, travelling, and video games.</p>
        <p>I am currently open to new opportunities. </p>
      </div>
    </div>
  );
};

export default AboutMe;
