module.exports = {
  siteMetadata: {
    title: `RCH`,
    siteUrl: `https://rchillard.com`,
    description: `Personal website of RCH, servant leader and shortstack developer`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/pages`
        // name: `images`,
        // path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 784
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHeighlight: false
            }
          },
          {
            resolve: `gatsby-remark-emojis`,
            options: {
              active: true,
              class: `emoji-icon`,
              size: 64,
              styles: {
                display: `inline`,
                margin: `0`,
                position: `relative`,
                top: `5px`,
                width: `25px`
              }
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
};
