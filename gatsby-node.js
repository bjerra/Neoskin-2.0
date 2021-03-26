const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      features: [ServicesJson] @link(by: "title") 
      
    }

  `
  createTypes(typeDefs)
}


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
      allCategoriesJson {
        nodes {
          title
          slug
        }
      }
      allServicesJson {
        nodes {
            id    
            slug
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    
    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    const categories = result.data.allCategoriesJson.nodes
    categories.forEach(category => {
        createPage({
          path: `/${category.slug}`,
          component: path.resolve("./src/templates/category-page.js"),
          context: {
            id: category.title,
          },
        })
    })

    const services = result.data.allServicesJson.nodes
    services.forEach(service => {
        createPage({
          path: `/behandlingar/${service.slug}`,
          component: path.resolve("./src/templates/service-modal.js"),
          context: {
            id: service.id,
          },
        })
    })

  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
//  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

