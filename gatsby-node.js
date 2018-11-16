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

const createTagPages = (createPage, posts) => {
  const allTagsIndexTemplate = path.resolve('src/templates/all-tags.js')
  const singleTagIndexTemplate = path.resolve('src/templates/single-tag.js')
  
  const postsByTag = {}

  posts.forEach(({node}) => {
    node.frontmatter.tags.forEach(tag => {
      // If tag does not exist
      if(!postsByTag[tag]) {
        // Create new array of posts with this tag
        postsByTag[tag] = []
      }
      // Add post to array of posts with this tag
      postsByTag[tag].push(node)
    })
  })
  // Create master list of all tags and posts
  const tags = Object.keys(postsByTag)
  // Create page for each of the tags
  createPage({
    path: '/tags',
    component: allTagsIndexTemplate,
    context: {
      tags: tags.sort()
    }
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
    {
      allMarkdownRemark (sort: {order: ASC, fields: [frontmatter___date]}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }`).then(result => {
      const posts = result.data.allMarkdownRemark.edges

      createTagPages(createPage, posts)

      posts.forEach(({ node }, index) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            slug: node.fields.slug,
            prev: index === 0 ? null : posts[index - 1].node.fields.slug,
            next: index === (posts.length - 1) ? null : posts[index + 1].node.fields.slug
          }
        })
      })
      resolve()
    })
  })
}