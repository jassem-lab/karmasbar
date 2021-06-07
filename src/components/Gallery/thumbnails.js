import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import { withStyles, ButtonBase } from "@material-ui/core"

const style = theme => ({
  previewButton: {
    background: "transparent",
    border: "none",
    padding: 0,
    margin: 0,
    width: `100%`,
    height: `100%`,
    borderRadius: 4,
    boxShadow: "0 0 25px -5px rgba(0,0,0,0.3)",
  },
  thumbnail: {
    height: `100%`,
    width: `100%`,
    borderRadius: 4,
  },
})

const ThumbGrid = ({ images, handleOpen, classes }) => {
  return (
    <>
      <div className="gallery__image  ">
        {images.map((image, i) => (
          <div className="image-card about__rightContentImage ">
            <ButtonBase
              onClick={handleOpen(i)}
              className="image karmasbar__image"
            >
              <Img
                fluid={image.node.childImageSharp.fluid}
                className={classes.thumbnail}
              />
            </ButtonBase>
            <div className="figmation"></div>
          </div>
        ))}
      </div>
    </>
  )
}

ThumbGrid.propTypes = {
  classes: PropTypes.object,
  images: PropTypes.array,
}
export default withStyles(style)(ThumbGrid)
