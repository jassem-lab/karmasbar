const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

const pageQuery = `
{
    allWpPage {
    edges {
      node {
        id
        slug
        status
        template
      }
    }
  }
}
`

const postsQuery = `
{
    allWpPost {
    edges {
      node {
        id
        slug
        status
        template
        format
      }
    }
  }
}
`


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    // query content for WordPress posts
    const {
      data: {
        allWpPost: { nodes: allPosts },
      },
    } = await graphql(`
      query {
        allWpPost {
          nodes {
            id
            uri
          }
        }
      }
    `)
    const postTemplate = path.resolve(`./src/templates/post.js`)
    allPosts.forEach(post => {
        console.log(post);
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
  }






// exports.createPages = ({ graphql, actions, ...props }) => {
//   const { createPage } = actions

//   return new Promise((resolve, reject) => {
//     // Pages
//     graphql(pageQuery)
//       .then(result => {
//         if (result.errors) {
//           console.log(result.errors)
//           reject(result.errors)
//         }

//         const pageTemplate = path.resolve("./src/templates/page.js")

//         _.each(result.data.wpPage.edges, edge => {
//           createPage({
//             path: `/${edge.node.slug}/`,
//             component: slash(pageTemplate),
//             context: {
//               id: edge.node.id,
//             },
//           })
//           console.log(result);
//         })
//       })

//       .then(() => {
//         graphql(postsQuery).then(result => {
//           if (result.errors) {
//             console.log(result.errors)
//             reject(result.errors)
//           }
//           const postTemplate = path.resolve("./src/templates/post.js")

//           _.each(result.data.wpPost.edges, edge => {
//             createPage({
//               path: `/post/${edge.node.slug}/`,
//               component: slash(postTemplate),
//               context: {
//                 id: edge.node.id,
//               },
//             })
//             console.log(result);
//           })
//           resolve()
//         })
//       })
//     // ==== END POSTS ====
//   })
// }
