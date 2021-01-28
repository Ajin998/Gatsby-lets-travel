import React from "react";
import styles from "../styles/footer.module.css";
const footer = ({ author, year }) => {
  return (
    <div className={styles["main__footer"]}>
      <footer className={styles["footer__notes"]}>
        <p>
          {" "}
          All rights and claims are reserved by <span>{author}</span>
        </p>
        <p>
          Copyright @ <span>{year}</span>
        </p>
      </footer>
    </div>
  );
};

export default footer;
