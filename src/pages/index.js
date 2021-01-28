import React from "react";
import Header from "../components/header";
const index = () => {
  return (
    <div className="main__container">
      <Header />
      <center>
        <h1>National Image Gallery </h1>
      </center>
      <h3>Categories:-</h3>
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
      <details>
        <summary>Photography</summary>
        <h2>Photo</h2>
      </details>
    </div>
  );
};

export default index;
