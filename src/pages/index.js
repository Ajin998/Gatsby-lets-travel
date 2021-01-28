import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import styles from "../styles/index.module.css";
const index = () => {
  return (
    <>
      <Header />
      <div className={styles["main__container"]}>
          <h1 className={styles["main__title"]}>National Image Gallery </h1>
          <hr className={styles["main__header__line"]}/>
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
      <Footer />
    </>
  );
};

export default index;
