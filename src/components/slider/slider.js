import React from "react"
import { sliderContent } from "./sliderContent"
import Button from "../button/Button"
import withAutoplay from "react-awesome-slider/dist/autoplay"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import {graphql , StaticQuery} from "gatsby"




const AutoplaySlider = withAutoplay(AwesomeSlider)

const Slider = () => {
  return (
    <div>
      <AutoplaySlider
        bullets="false"
        className="slider"
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={3000}
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
            <div className="first__slider__content">
              <span className="sliderAlt">{item.sliderAlt}</span>
              <h1 className="sliderTitle">{item.sliderTitle}</h1>
              <p className="sliderDesc">{item.sliderDesc}</p>
              <Button text={item.sliderLinkPath} link={item.sliderLinkUrl} />
            </div>
          </div>
        ))}
      </AutoplaySlider>
    </div>
  )
}

export default Slider
