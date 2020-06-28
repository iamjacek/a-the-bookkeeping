module.exports = {
  siteMetadata: {
    title: `A - Payroll and Bookkeeping for small business`,
    description: `Payroll and bookkeeping service for self-employed and business.`,
    author: `J Media`,
    twitterHandle: "@ann_payroll",
    siteUrl: "https://apayroll.co.uk",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#E4E4E4`,
        theme_color: `#004F69`,
        display: `minimal-ui`,
        icon: `src/images/a-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `s7habp9jovrz`,
        accessToken: `Z_UfPb1NvakB8UBAYBzZYQzNsjzkxUoqxfAX5DqTcaU`,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
