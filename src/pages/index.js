import * as React from "react"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import CoreStyles from "react-awesome-slider/src/core/styles.scss"
// import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss"
// import AnimationStyles from "react-awesome-slider/src/styled/cube-animation/cube-animation.scss"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Slider from "../components/slider/slider"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Slider />
  </Layout>
)

export default IndexPage
