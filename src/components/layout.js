import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Menu from "./Menu"
import Slider from './slider/slider'
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
      allWpMediaItem {
        edges {
          node {
            altText
            id
            title
            sourceUrl
            description
          }
        }
      }
    }
  `)
    console.log(data.allWpMediaItem.edges);
    const sliderDetails = data.allWpMediaItem.edges
  return (
    <>
      <Menu menu={data.allWpMenu} />
      <div>
        <Slider props ={sliderDetails} />
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
