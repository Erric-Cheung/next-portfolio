import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const Projects = ({ projectList }) => {
  return (
    <div className={styles["project-list"]}>
      {projectList.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
};

export default Projects;
