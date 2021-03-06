const path = require(`path`)
const slash = require(`slash`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              id
              slug
              title
            }
          }
        }
      }
    `
  )
    .then((result) => {
      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors)
      }

      const blogPostTemplate = path.resolve("./src/templates/blogpost.js")

      result.data.allContentfulPost.edges.forEach((edge) => {
        createPage({
          path: `/blogpost/${edge.node.slug}/`,
          component: slash(blogPostTemplate),
          context: {
            slug: edge.node.slug,
            id: edge.node.id,
          },
        })
      })
    })
    .catch((error) => {
      console.log("Error retrieving contentful data", error)
    })
}
