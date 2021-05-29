import React, { useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import ThumbGrid from "./thumbnails"
import LightBox from "./lightbox"


const GalleryComponent = props => {
  const [showLightbox, setShowLightbox] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleOpen = i => e => {
    setShowLightbox(true)
    setSelectedImage(i)
  }
  const handleClose = () => {
    setShowLightbox(false)
    setSelectedImage(null)
  }
  const handlePrevRequest = (i, length) => e => {
    setSelectedImage((i - 1 + length) % length)
  }
  const handleNextRequest = (i, length) => e => {
    setSelectedImage((i + 1) % length)
  }
  // const styles = {
  //   root: {
  //     display: "flex",
  //     flexWrap: "wrap",
  //     justifyContent: "space-around",
  //     fontFamily: "Open Sans",
  //   },
  //   gridList: {
  //     width: 500,
  //     overflowY: "auto",
  //   },
  //   link: {
  //     color: "#eae",
  //   },
  //   title: {
  //     fontWeight: "800",
  //   },
  // }
  return (
    <StaticQuery
      query={graphql`
        query allImgQuery {
          source: allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
            edges {
              node {
                childImageSharp {
                  fluid(maxHeight: 500) {
                    ...GatsbyImageSharpFluid
                    presentationWidth
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const images = data.source.edges
        return (
          <div className="row">
            <div className="column">
              <ThumbGrid images={images} handleOpen={handleOpen} />
            </div>

              {showLightbox && selectedImage !== null && (
                <LightBox
                  images={images}
                  handleClose={handleClose}
                  handleNextRequest={handleNextRequest}
                  handlePrevRequest={handlePrevRequest}
                  selectedImage={selectedImage}
                />
              )}
          </div>
        )
      }}
    />
  )
}
export default GalleryComponent
