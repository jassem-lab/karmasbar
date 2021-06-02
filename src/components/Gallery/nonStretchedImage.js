import React from "react"
import Img from "gatsby-image"

const NonStretchedImage = props => {
  let normalizedProps = props
  console.log(props.fluid.presentationWidth)
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: `80%`,
        // // maxHeight: window.innerHeight - 50px,
        height: window.innerHeight - 50,
        width: "auto",
        margin: "50px auto 50px",
        // Used to center the image
        marginBottom: "50px",
      },
    }
  }

  return <Img {...normalizedProps} />
}
export default NonStretchedImage
