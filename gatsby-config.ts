import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `About | Nikos Oikonomou`,
    description: "Nikos Oikonomou Personal Site.",
    siteUrl: `https://nikooiko.github.io`,
    author: "Nikos Oikonomou",
    menuLinks: [
      {
        name: "About",
        link: "/",
      },
      {
        name: "Articles",
        link: "/articles",
      },
    ],
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",

    // Static Images and SVGs
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },

    // Source JSON data
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data`,
      },
    },
    "gatsby-transformer-json",

    // Remote images plugin
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "ArticlesJson", // Matches the type created from JSON files
        imagePath: "imageURL", // Field in JSON file with image URLs
        name: "remoteImage", // The field name for the generated image node
      },
    },

    // Image optimization plugins
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};

export default config;
