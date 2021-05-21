import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

const PostTemplate = () => {
  return <></>
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
