import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Menu from "../nav/Menu"
import Slider from "../slider/slider"
import "./layout.css"
import Footer from "../footer/footer"

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

  const sliderDetails = data.allWpMediaItem.edges
  return (
    <>
      <Menu />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
