import React from "react"
import { sliderContent2 } from "./sliderContent2"
import AwesomeSliderStyles from "react-awesome-slider/dist/styles.css?raw"
import withAutoplay from "react-awesome-slider/dist/autoplay"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import CoreStyles from "react-awesome-slider/src/core/styles.scss"
import { FaQuoteLeft } from "react-icons/fa"
import TitleBorder from "../../images/titleborder.png"

// import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss"
// import AnimationStyles from "react-awesome-slider/src/styled/cube-animation/cube-animation.scss"
const AutoplaySlider = withAutoplay(AwesomeSlider)

const Slider2 = () => {
  return (
    <div className="">
      <AutoplaySlider
        bullets="false"
        animation="cube"
        className="slider"
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={3000}
        cssModule={(AwesomeSliderStyles, CoreStyles)}
      >
        {sliderContent2.map(item => (
          <div
            className="secondSlider"
            style={{
              backgroundColor: `transparent`,
              padding: `0 10px`,
              display: `flex`,
              flexDirection: `column`,
              textAlign: `center`,

              margin: `0 auto`,
              color: `#fff`,
              fontFamily: `"Open Sans",Sans-serif`,
              fontSize: `20px`,
              fontStyle: `italic`,
              lineHeight: `32px`,
            }}
          >
            <div>
              <h3 className="about__leftContent__title">Good Vibes Only</h3>
              <img src={TitleBorder} className="about__titleBorder" />
            </div>
            <div>
              <FaQuoteLeft
                style={{
                  fontSize: `80px`,
                  display: `block`,
                  marginBottom: `-45px`,
                  color: `rgba(241,236,233,.29)`,
                  textAlign: `center`,
                }}
              />
              <p>{item.text}</p>
            </div>
            <h4>{item.author}</h4>
          </div>
        ))}
      </AutoplaySlider>
    </div>
  )
}

export default Slider2
