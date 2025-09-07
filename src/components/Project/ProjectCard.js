import styles from "./ProjectCard.module.css";
import { MdArrowOutward } from "react-icons/md";

const ProjectCard = (props) => {
  const { title, description, tools, github_url, theme, thumbnail } = props;
  const themeClass = styles[`theme-${theme}`] || "";

  return (
    <div className={`${styles.container} ${themeClass}`}>
      <div className={styles["frame"]}>
        <div className={styles["outer-frame"]}>
          <div className={styles["top-streak"]}></div>
          <div className={styles["inner-frame"]}>
            {thumbnail && <img src={thumbnail}></img>}
          </div>
        </div>
      </div>
      <div className={styles["info"]}>
        <h3>{title}</h3>
        <p className={styles["description"]}>{description}</p>
        <div className={styles["tools"]}>
          {tools.map((tool) => (
            <div className={styles["tool"]} key={tool}>
              {tool}
            </div>
          ))}
        </div>
        <div className={styles["button-wrapper"]}>
          {github_url && (
            <a
              className={styles["sample-button"]}
              href={`${github_url} `}
              target="_blank"
            >
              <span>See on GitHub</span>
              <span>
                <MdArrowOutward size={20} />
              </span>
            </a>
          )}
        </div>
      </div>
      <div className={styles["marker"]}></div>
    </div>
  );
};

export default ProjectCard;
