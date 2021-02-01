import React from "react";
import styles from "../styles/Image_gallery.module.css";
import { graphql, useStaticQuery } from "gatsby";

const ImageGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          year
        }
      }
    }
  `);
  return (
    <div className={styles["main__container"]}>
      <h1 className={styles["main__title"]}>{data.site.siteMetadata.title} </h1>
      <hr className={styles["main__header__line"]} />
      <details>
        <summary>Nature</summary>
        <h1>I am in Nature</h1>
      </details>
      <details>
        <summary>Architectures</summary>
        <h2>Achitectures</h2>
      </details>
      <details>
        <summary>Creativity</summary>
        <h2>Creativity</h2>
      </details>
    </div>
  );
};

export default ImageGallery;
