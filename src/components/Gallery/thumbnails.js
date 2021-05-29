import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import { withStyles, ButtonBase, Grid } from "@material-ui/core"

const style = theme => ({
  previewButton: {
    display: "inline-block",
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
    height: `30vh`,
    width: `25vw`,
    borderRadius: 4,
  },
})

const ThumbGrid = ({ images, handleOpen, classes }) => {
  return images.map((image, i) => (
    <div className="gallery__image">
      <ButtonBase onClick={handleOpen(i)} className={classes.previewButton}>
        <Img
          fluid={image.node.childImageSharp.fluid}
          className={classes.thumbnail}
        />
      </ButtonBase>
    </div>
  ))
}

ThumbGrid.propTypes = {
  classes: PropTypes.object,
  images: PropTypes.array,
}
export default withStyles(style)(ThumbGrid)
