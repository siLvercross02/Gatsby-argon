/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Gatsby Starter Argon Design System',
    description:
      'Custom Template For Gatsby and Argon',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    `gatsby-plugin-anchor-links`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'uploads',
        path: `${__dirname}/static/img/brand`,
      },
    },
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {
    //     plugins: [
    //       {
    //         resolve: 'gatsby-remark-relative-images',
    //         options: {
    //           name: 'uploads',
    //         },
    //       },
    //       {
    //         resolve: 'gatsby-remark-images',
    //         options: {
    //           // It's important to specify the maxWidth (in pixels) of
    //           // the content container as this plugin uses this as the
    //           // base for generating different widths of each image.
    //           maxWidth: 2048,
    //         },
    //       },
    //       {
    //         resolve: 'gatsby-remark-copy-linked-files',
    //         options: {
    //           destinationDir: 'static',
    //         },
    //       },

    //     ],
    //   },
    // },
  ],
}
