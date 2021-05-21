import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import "../style.css"

const pageTemplate = () => {
  return <></>
}
export default pageTemplate

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
      slug
      id
      date(formatString: "MMMM DD, YYYY")
    }
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`
