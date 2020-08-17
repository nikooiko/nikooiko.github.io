module.exports = {
  plugins: [
    "gatsby-plugin-top-layout",
    "gatsby-plugin-material-ui",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "src/images",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        start_url: "/",
        include_favicon: false,
      },
    },
  ],
  siteMetadata: {
    title: "Nikos Oikonomou",
    description: "Nikos Oikonomou Personal Site.",
    author: "Nikos Oikonomou",
  },
};
