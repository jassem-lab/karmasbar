import React, { Component } from "react"
import { graphql } from 'gatsby'

class pageTemplate extends Component {
  render() {
    const siteMetadata = this.props.data.site.siteMetadata
    const currentPage = this.props.data.page

    console.log(currentPage)

    return (
      <div>
       hello post
      </div>
    )
  }
}

export default pageTemplate

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    wpPage (id: { eq: $id }) {
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
