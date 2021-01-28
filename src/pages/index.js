import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import styles from "../styles/index.module.css";
import { graphql, useStaticQuery } from "gatsby";
const Index = () => {
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
    <>
      <Header />
      <div className={styles["main__container"]}>
        <h1 className={styles["main__title"]}>
          {data.site.siteMetadata.title}{" "}
        </h1>
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
      <Footer
        author={data.site.siteMetadata.author}
        year={data.site.siteMetadata.year}
      />
    </>
  );
};

export default Index;
