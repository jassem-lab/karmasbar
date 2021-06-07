import * as React from "react"
import PropTypes from "prop-types"
import Menu from "../nav/Menu"
import "./layout.css"
import Footer from "../footer/footer"
// import { motion, AnimatePresence } from "framer-motion"
// import useWindowSize from "../../hooks/useWindowSize"

const Layout = ({ children }) => {
  // const { width } = useWindowSize()

  // const duration = 0.2

  // const variants = {
  //   initial: {
  //     opacity: 0,
  //     x: -width,
  //   },
  //   enter: {
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       duration: duration,
  //       delay: duration,
  //       when: "beforeChildren",
  //     },
  //   },
  //   exit: {
  //     opacity: 0,
  //     transition: { duration: duration },
  //   },
  // }

  return (
    <>
      <Menu />

      <AnimatePresence>
        <main >
          {children}
        </main>
      </AnimatePresence>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
