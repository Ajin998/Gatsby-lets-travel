module.exports = {
  siteMetadata: {
    title: "Image Gallery",
    author: "Ajin Varghese",
    year: 2021,
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
  ],
};
