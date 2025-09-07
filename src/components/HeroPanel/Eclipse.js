import styles from "./Eclipse.module.css";

const Eclipse = () => {
  return (
    <div className={styles.container}>
      <div className={styles.moon} />
      <div className={styles.sun} />
      <div className={styles.glow} />      
    </div>
  );
};

export default Eclipse;
