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
        maxWidth: `20%`,
        // // maxHeight: window.innerHeight - 50px,
        height: `30%`,
        width: "50%",
        padding: `100px`,
        margin: "15% auto",
        alignItems: `center`,
        // Used to center the image
        marginBottom: "50px",
      },
    }
  }

  return <Img {...normalizedProps} />
}
export default NonStretchedImage
