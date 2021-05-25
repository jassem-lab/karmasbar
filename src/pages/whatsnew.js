import React, { useState } from "react"
import Layout from "../components/layout/layout"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import parse from "html-react-parser"
import Image from "gatsby-image"
import { FadeIn } from "../components/fadeIn/fadeIn"
import NewsBanner from "../images/NewsBanner.jpg"
import "./whatsnew.css"
import SearchBar from "../components/search/search"
import { useFlexSearch } from "react-use-flexsearch"
import {unFlattenResults} from "../components/unflattenResults"

const Whatsnew = ({
  data,
  data: {
    localSearchPosts ,
    allWpPost,
  },
}) => {
  // const wpPosts = data.data.allWpPost.nodes
  // console.log(wpPosts[0].featuredImage)
  // const featuredImage = wpPosts[0].featuredImage
  // const image = {
  //   fluid: wpPosts[0].featuredImage?.node?.localFile?.childImageSharp?.fluid,
  //   alt: wpPosts[0].featuredImage?.node?.alt || ``,
  // }

  console.log(data);
  
  const image = {
    fluid: allWpPost.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: allWpPost.featuredImage?.node?.alt || ``,
  }
  const { search } = window.location
  const query = new URLSearchParams(search).get("s")
  const [searchQuery, setSearchQuery] = useState(query || "")
  const results = useFlexSearch(searchQuery, localSearchPosts.index , JSON.parse(localSearchPosts.store ))
  const posts = searchQuery ? unFlattenResults(results) : allWpPost.nodes ; 
  
  

  return (
    <Layout>
      <SEO title="home" />

      <div
        className="contact__banner"
        style={{
          backgroundImage: `url(${NewsBanner})`,
        }}
      >
        <div style={{ position: `absolute` }}>
          <FadeIn>
            <h2 className="contact__banner__title">Get in Touch</h2>
          </FadeIn>
        </div>
        <div style={{ marginTop: `220px` }}></div>
      </div>
      <div className="whatsnew__content">
        <div className="whatsnew__left">
          <ol style={{ listStyle: `none` }} className="content">
            {image?.fluid && (
              <div className="about__rightContentImage rightcontentimage">
                <Image
                  fluid={image.fluid}
                  alt={image.alt}
                  className="karmasbar__image"
                  style={{ marginBottom: `50`, width: `40%` }}
                />
                <div className="figmation"></div>
              </div>
            )}

            {posts.map(post => {
              const title = post.title

              return (
                <li key={post.uri} className="post__desc">
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h2>
                        <Link to={post.uri} itemProp="url">
                          <span
                            itemProp="headline"
                            className="about__leftContent__title"
                          >
                            {parse(title)}
                          </span>
                        </Link>
                      </h2>
                      <small>{post.date}</small>
                    </header>
                    <section
                      itemProp="description"
                      className="item__description description"
                    >
                      {parse(
                        post.excerpt
                          .substr(
                            0,
                            Math.min(
                              post.excerpt.length,
                              post.excerpt.lastIndexOf("")
                            )
                          )
                          .concat("...")
                      )}
                      .....
                    </section>
                  </article>
                </li>
              )
            })}
          </ol>
        </div>
        <div className="whatsnew__right">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          {/* <form className="search-box">
            <input type="text" className="search-input" placeholder="search" />
            <button type="submit" className="search-button">
              <BiSearchAlt2 style={{ color: `white` }} />
            </button>
          </form> */}
          <div className="recent__post">
            <h2 className="recent__post__title">Recent Posts</h2>
            <div className="border__bottom"></div>
            {posts.slice(0, 5).map(post => (
              <Link itemProp="url" to={post.uri}>
                <span className="recent__post__content">{post.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Whatsnew

export const pageQuery = graphql`
  query {
    localSearchPosts {
      index
      store
    }
    allWpPost(sort: { fields: [date] }) {
      nodes {
        uri
        title
        excerpt
        slug
        date

        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
