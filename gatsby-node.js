const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // query content for WordPress posts
  const {
    data: {
      allWpPost: { nodes: allPosts },
      allWpPage: { nodes: allPages },
    },
  } = await graphql(`
    query {
      allWpPost {
        nodes {
          id
          uri
        }
      }
      allWpPage {
        nodes {
          id
          uri
        }
      }
    }
  `)
  const postTemplate = path.resolve(`./src/templates/post.js`)
  allPosts.forEach(post => {
    console.log(post)
    createPage({
      // will be the url for the page
      path: `/post${post.uri}`,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: post.id,
      },
    })
  })
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  allPages.forEach(page => {
    console.log(page)
    createPage({
      // will be the url for the page
      path: `${page.uri}`,
      // specify the component template of your choice
      component: slash(pageTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: page.id,
      },
    })
  })
}
