import React from "react"
import Layout from "../components/layout/layout"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import { FadeIn } from "../components/fadeIn/fadeIn"
import NewsBanner from "../images/NewsBanner.jpg"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom"
import PostsPreview from "../components/post-preview/post-preview"

const searchClient = algoliasearch(
  "R1NHCEEP4J",
  "6203049fa78007ce80a72170c6d41ef0"
)

const Whatsnew = ({ data, data: { allWpPost } }) => {
  // const image = {
  //   fluid:
  //     allWpPost.featuredImage?.node?.localFile?.childImageSharp?.fluid || ``,
  //   alt: allWpPost.featuredImage?.node?.alt || ``,
  // }

  const posts = allWpPost.nodes

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

      <InstantSearch searchClient={searchClient} indexName="karmasbar">
        <div className="whatsnew__content">
          <ol style={{ listStyle: `none` }} className="content">
            <div className="whatsnew__left">
              <Hits hitComponent={PostsPreview} />
            </div>
          </ol>
          <div className="whatsnew__right">
            <SearchBox
              placeholder="Search"
              autofocus={true}
              searchAsYouType={true}
              showLoadingIndicator={true}
              style={{ backgroundColor: `red` }}
            />

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
      </InstantSearch>
    </Layout>
  )
}

export default Whatsnew

export const pageQuery = graphql`
  query {
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
