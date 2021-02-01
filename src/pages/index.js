import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import ImageGallery from "../components/ImageGallery";
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
      <ImageGallery/>
      <Footer
        author={data.site.siteMetadata.author}
        year={data.site.siteMetadata.year}
      />
    </>
  );
};

export default Index;
