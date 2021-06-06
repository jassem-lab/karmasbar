import React from "react"
import Img from "gatsby-image"
import useWindowSize from "../../hooks/useWindowSize"

const NonStretchedImage = props => {
  const { width } = useWindowSize()

  let normalizedProps = props
  console.log(props.fluid.presentationWidth)
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: `100%`,
        // // maxHeight: window.innerHeight - 50px,
        height: width - 50,
        width: "100%",
        padding : `100px`,
        margin: "50px auto 50px",
        // Used to center the image
        marginBottom: "50px",
      },
    }
  }

  return <Img {...normalizedProps} />
}
export default NonStretchedImage
