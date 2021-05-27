import React, { useState, useEffect } from "react"
import "./index.scss"
import { FadeIn } from "../fadeIn/fadeIn"
import { sliderContent } from "./sliderContent"
import { Animated } from "react-animated-css"



const Slider = ({ props }) => {
  const [active, setActive] = useState(0)
  const autoplay = 1
  const max = sliderContent.length
  const intervalBetweenSlides = () =>
    autoplay && setActive(active === max - 1 ? 0 : active + 1)

  useEffect(() => {
    const interval = setInterval(() => intervalBetweenSlides(), 4000)
    return () => clearInterval(interval)
  })

  const nextOne = () => active < max - 1 && setActive(active + 1)

  const prevOne = () => active > 0 && setActive(active - 1)

  const isActive = value => active === value && "active"

  const setSliderStyles = () => {
    const transition = active * -100
    const slides = sliderContent
    return {
      width: slides.length * 100 + "vw",
      transform: "translateX(" + transition + "vw)",
    }
  }

  const renderSlides = () =>
    sliderContent.map((item, index) => (
      <div
        className="each-slide slide"
        key={index}
        style={{ backgroundImage: `url(${item.sourceUrl})` }}
      >
        <div
          className={isActive(index) + "__content slider__content"}
          key={index}
        >
          <Animated
            animationIn="fadeInUp"
            isVisible={false}
            animationInDelay="4000"
            style={{ marginTop: `20px` }}
          >
            <h1>vvv</h1>
            <h1>vvv</h1>
          </Animated>
        </div>
      </div>
    ))

  const renderDots = () =>
    sliderContent.map((
      slide,
      index // check index
    ) => (
      <li className={isActive(index) + " dots"} key={index}>
        <button onClick={() => setActive(index)}>
          <span>&#9679;</span>
        </button>
      </li>
    ))

  const renderArrows = () => (
    <React.Fragment>
      <button type="button" className="arrows prev" onClick={() => prevOne()}>
        <svg fill="#FFFFFF" width="50" height="50" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
      <button type="button" className="arrows next" onClick={() => nextOne()}>
        <svg fill="#FFFFFF" height="50" viewBox="0 0 24 24" width="50">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
    </React.Fragment>
  )

  return (
    <section className="slider">
      <div className="wrapper" style={setSliderStyles()}>
        {renderSlides()}
      </div>
      {renderArrows()}
      <ul className="dots-container">{renderDots()}</ul>
    </section>
  )
}

export default Slider
