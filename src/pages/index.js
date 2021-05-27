import * as React from "react"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import "../components/sliderAnimation.scss"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Slider from "../components/slider/slider"
import { sliderContent } from "../components/slider/sliderContent"
import Button from "../components/button/Button"
import { FadeIn } from "../components/fadeIn/fadeIn"
import AwesomeSliderStyles from "react-awesome-slider/dist/styles.css?raw"
import withAutoplay from "react-awesome-slider/dist/autoplay"

const AutoplaySlider = withAutoplay(AwesomeSlider)

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <AutoplaySlider
      className="slider"
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={3000}
    >
      {sliderContent.map(item => (
        <>
          <div
            style={{ backgroundImage: `${item.sourceUrl}`, marginBottom : `30px ` }}
            className="sliderContent"
          >
            <h3 className="">{item.sliderAlt}</h3>
            <h1 className="">{item.sliderTitle}</h1>
            <p className="">{item.sliderDesc}</p>
          </div>
          <Button
            link={item.slideLinkUrl}
            text={item.sliderLinkPath}
            style={{ width: ` 80px ` }}
          />
        </>
      ))}
    </AutoplaySlider>
  </Layout>
)

export default IndexPage
