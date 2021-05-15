import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Menu from "./Menu"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allWpMenu {
        edges {
          node {
            id
            name
            menuItems {
              nodes {
                label
                url
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Menu menu={data.allWpMenu} />
      <div>
        <div style={{ height: "100vh" }}>Blabla</div>
        <div style={{ height: "100vh" }}>Blabla</div>
        <main
        // style={{overflowY:"", height:"2000px" ,margintop:"100px"}}
        >
          {children}
        </main>
        <footer
          style={{
            position: `absolute`,
            bottom: `0`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
