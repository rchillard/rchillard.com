module.exports = {
    siteMetadata: {
      title: `Learn, Build, Teach`,
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/pages`,
        },
      },
      `gatsby-plugin-emotion`,
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-prismjs`,
              options: {
                classPrefix: "language-",
                inlineCodeMarker: null,
                aliases: {},
                showLineNumbers: false,
                noInlineHeighlight: false,
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
          pathToConfigModule: `src/utils/typography`,
        },
      },
    ],
  }