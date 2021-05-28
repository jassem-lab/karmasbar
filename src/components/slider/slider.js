import React from "react"
import { sliderContent } from "./sliderContent"
import Button from "../components/button/Button"
import AwesomeSliderStyles from "react-awesome-slider/dist/styles.css?raw"
import withAutoplay from "react-awesome-slider/dist/autoplay"
const AutoplaySlider = withAutoplay(AwesomeSlider)

const Slider = () => {
  return (
    <div className="">
      <AutoplaySlider
        animation="cube"
        className="slider"
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={3000}
        cssModule={(AwesomeSliderStyles, CoreStyles)}
      >
        {sliderContent.map(item => (
          <div
            style={{
              backgroundImage: `url(${item.sourceUrl})`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: `cover`,
              height: `650px`,
              backgroundPosition: `50% 50%`,
              display: `flex`,
              flexDirection: `column`,
              textAlign: `center`,
            }}
          >
            <h1 className="sliderTitle">
              <span className="sliderAlt">{item.sliderAlt}</span>
            </h1>
            <h1 className="sliderTitle">{item.sliderTitle}</h1>
            <p className="sliderDesc">{item.sliderDesc}</p>
            <Button text={item.sliderLinkPath} link={item.sliderLinkUrl} />
          </div>
        ))}
      </AutoplaySlider>
    </div>
  )
}

export default Slider
