import React, { Component } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

class PostTemplate extends Component {
  render() {
    
    const post = this.props.data
    console.log(post);
    
    return (
      <div>
        <h1>{post.wpPost.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: post.wpPost.content}} />
      </div>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wpPost (id: { eq: $id }) {
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
