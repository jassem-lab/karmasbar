import * as React from "react"
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
