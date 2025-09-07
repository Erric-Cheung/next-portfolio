import Link from "next/link";
import styles from "./NavButton.module.css";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const NavButton = (props) => {
  const { title, href, onClick } = props;

  return (
    <div className={styles["button-wrapper"]}>
      <Link href={href} className={styles["button"]}>
        <span>
          <IoArrowForwardCircleOutline size={32} />
        </span>
        <span>{title}</span>
      </Link>
    </div>
  );
};

export default NavButton;
