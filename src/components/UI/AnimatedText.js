import styles from "./AnimatedText.module.css";
const AnimatedText = ({ text }) => {
  return (
    <div className={styles["animated-text"]}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={{ animationDelay: `${index * 0.1}s` }} // delay increases per letter
        >
       {char === " " ? "\u00A0" : char} {/* render space properly */}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
