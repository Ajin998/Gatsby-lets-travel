import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styles from "../styles/header.module.css";
import logo from "../images/header__logo.png";
const header = () => {
  return (
    <div className={styles["header__main_div"]}>
      <div className={styles["header__logo"]}>
        <img
          src={logo}
          className={styles["header__logo__img"]}
          alt="image for header"
        />
      </div>
      <div className={styles["header__nav_links"]}>
        <Link to="/about" className={styles["navlinks"]}>
          About_Us
        </Link>
        <Link to="/" className={styles["navlinks"]}>
          Home
        </Link>
        <Link to="/contactUs" className={styles["navlinks"]}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default header;
