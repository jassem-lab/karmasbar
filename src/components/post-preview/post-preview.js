import React from "react"
import parse from "html-react-parser"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Postpreview = ({ hit }) => {
  return (
    <>
      <div className="about__rightContentImage rightcontentimage">
        <Image
          fluid={hit.featuredImage.node.link}
          alt={hit.featuredImage.node.id}
          className="karmasbar__image"
          style={{ marginBottom: `50`, width: `40%` }}
        />
        <div className="figmation"></div>
      </div>
      <li key={hit.uri} className="post__desc">
        <article
          className="post-list-item"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h2>
              <Link to={hit.uri} itemProp="url">
                <span itemProp="headline" className="about__leftContent__title">
                  {parse(hit.title)}
                </span>
              </Link>
            </h2>
            <small>{new Date(hit.date).toLocaleDateString()}</small>
          </header>
          <section
            itemProp="description"
            className="item__description description"
          >
            {parse(
              hit.excerpt
                .substr(
                  0,
                  Math.min(hit.excerpt.length, hit.excerpt.lastIndexOf(""))
                )
                .concat("...")
            )}
            .....
          </section>
        </article>
      </li>
    </>
  )
}

export default Postpreview
