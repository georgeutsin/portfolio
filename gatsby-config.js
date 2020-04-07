/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require("path")

module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/assets/markdown/projects`,
      },
    },
    {
      resolve: "gatsby-source-flickr",
      options: {
        api_key: process.env.FLICKR_API_KEY,
        user_id: process.env.FLICKR_USER_ID
      },
    },
  ],
}
