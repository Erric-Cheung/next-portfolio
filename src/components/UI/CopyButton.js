"use client";
import { useState } from "react";
import { IoCopyOutline, IoCheckmarkDoneOutline } from "react-icons/io5";
import styles from "./CopyButton.module.css";


const CopyButton = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(props.text).then(() => {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 5000);
    });
  };

  if (isClicked) {
    return (
      <div className={styles["text"]}>
        <IoCheckmarkDoneOutline size={24} />
        <span>Copied to clipboard</span>
      </div>
    );
  }

  return (
    <button onClick={handleCopy} className={styles["button"]}>
      <IoCopyOutline size={24} />
      <span>{props.text}</span>
    </button>
  );
};

export default CopyButton;
