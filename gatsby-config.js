module.exports = {
  siteMetadata: {
    title: `OverPowered`,
    description: `The first ever fully customizable game mat.`,
  },
  plugins: [
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
        name: `Overpowered`,
        short_name: `Overpowered`,
        start_url: `/`,
        icon: `src/images/logo-white.png`,
        include_favicon: true,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-136435486-1',
      },
    },
  ],
}
