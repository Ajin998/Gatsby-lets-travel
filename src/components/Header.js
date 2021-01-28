import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styles from "../styles/header.module.css";
const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      imgLogo: file(relativePath: { eq: "headerLogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <div className={styles["header__main_div"]}>
      <div className={styles["header__logo"]}>
        <Img
          fluid={data.imgLogo.childImageSharp.fluid}
          alt="header_logo"
          className={styles["header__logo__img"]}
        />
      </div>
      <div className={styles["header__nav_links"]}>
        <Link to="/" className={styles["navlinks"]}>
          Home
        </Link>
        <Link to="/about" className={styles["navlinks"]}>
          About_Us
        </Link>
        <Link to="/contactUs" className={styles["navlinks"]}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};
export default Header;
