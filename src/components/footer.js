import React from "react";
import styles from "../styles/footer.module.css";
const footer = () => {
  return (
    <div className={styles["main__footer"]}>
      <footer className={styles["footer__notes"]}>
        <p> All rights and claims are reserved by Ajin Varghese</p>
        <p>Copyright @ 2021</p>
      </footer>
    </div>
  );
};

export default footer;
