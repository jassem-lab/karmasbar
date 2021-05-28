import React from "react"
import Img from "gatsby-image"

const NonStretchedImage = props => {
  let normalizedProps = props
  if (props) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: `350px`,
        // maxHeight: window.innerHeight - 50px,
        height: window.innerHeight - 50,
        width: "auto",
        margin: "50px auto 0", // Used to center the image
      },
    }
  }

  return <image src={normalizedProps.src.image} />
}
export default NonStretchedImage
