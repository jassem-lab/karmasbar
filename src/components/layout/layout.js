import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Menu from "../nav/Menu"
import "./layout.css"
import Footer from "../footer/footer"
import { motion, AnimatePresence } from "framer-motion"
import useWindowSize from "../../hooks/useWindowSize"

const { width } = useWindowSize()

const duration = 0.2

const variants = {
  initial: {
    opacity: 0,
    x: -width,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}

const Layout = ({ children }) => {
  const WpData = useStaticQuery(graphql`
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

  return (
    <>
      <Menu />

      <AnimatePresence>
        <motion.main
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
