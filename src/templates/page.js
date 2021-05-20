import React, { Component } from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import '../style.css'


const pageTemplate = (data) =>{

  const elementorData = data.data.wpPage.content; 
  
  console.log(data.data.wpPage.content);
  // console.log(elementorData);

  return(
    <>

    <div 
    className=""
    dangerouslySetInnerHTML={{__html : elementorData}}

    />

    </>
  )
}
export default pageTemplate ; 

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
