const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
      {
        allMarkdownRemark
        {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    ).then(result => {
      if (result.errors) {
        reject(result.errors)
      } else {
      const posts = result.data.allMarkdownRemark.edges
      result.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
        console.log("Node.fields.slug = " + node.fields.slug)
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
            prev: index === 0 ? null : posts[index - 1].node.fields.slug,
            next: index === (posts.length - 1) ? null : posts[index + 1].node.fields.slug
          },
        })
      })
      // resolve()
      }
    })
  })
}