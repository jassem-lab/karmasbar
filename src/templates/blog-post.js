import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import NewsBanner from "../images/NewsBanner.jpg"
import { FadeIn } from "../components/fadeIn/fadeIn"
import { GiCampCookingPot } from "react-icons/gi"
import Img from "gatsby-image"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  const featuredImage = {
    fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: post.featuredImage?.node?.alt || ``,
  }
  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />
      <div
        className="contact__banner"
        style={{
          backgroundImage: `url(${NewsBanner})`,
        }}
      >
        <div style={{ position: `absolute` }}>
          <FadeIn>
            <Img fluid={featuredImage.fluid} alt={featuredImage.alt} />
            <h2 className="contact__banner__title">{post.title}</h2>
            <p className="happyhour__content__p" style={{ color: `white` }}>
              {post.categories.nodes.map((item, key) => (
                <span key={key}>{item.name}</span>
              ))}{" "}
              <GiCampCookingPot /> {post.title}
            </p>
          </FadeIn>
        </div>
        <div style={{ marginTop: `220px` }}></div>
      </div>

      <article
        className="post__section"
        itemScope
        itemType="http://schema.org/Article"
      >
        <h1 itemProp="headline">{parse(post.title)}</h1>

        <p>{post.date}</p>

        {!!post.content && (
          <section itemProp="articleBody" className="post__section__content">
            {parse(post.content)}
          </section>
        )}
      </article>

      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.uri} rel="prev">
                ← {parse(previous.title)}
              </Link>
            )}
          </li>

          <li>
            {next && (
              <Link to={next.uri} rel="next">
                {parse(next.title)} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
      categories {
        nodes {
          name
        }
      }

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

    # this gets us the previous post by id (if it exists)
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }

    # this gets us the next post by id (if it exists)
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
