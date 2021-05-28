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
    width: 200,
    height: 200,
    borderRadius: 4,
    boxShadow: "0 0 25px -5px rgba(0,0,0,0.3)",
  },
  thumbnail: {
    width: 200,
    height: 200,
    borderRadius: 4,
  },
})

const ThumbGrid = ({ images, handleOpen, classes }) => {
  return images.map((image, i) => (
    <Grid item key={i}>
      <ButtonBase onClick={handleOpen(i)} className={classes.previewButton}>
        <img
          src={image.image}
          className={classes.thumbnail}
        />
      </ButtonBase>
    </Grid>
  ))
}

ThumbGrid.propTypes = {
  classes: PropTypes.object,
  images: PropTypes.array,
}
export default withStyles(style)(ThumbGrid)
