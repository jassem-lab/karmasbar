import { motion } from "framer-motion"
import React, { useState, useEffect } from "react"
import { fadeIn } from "react-animations"
import "./index.scss"
import styled, { keyframes } from "styled-components"
// import "./slider-animations.css"

const fadeInAnimation = keyframes`${fadeIn}`
const FadeInDiv = styled.div`
  animation: 1.5s ${fadeInAnimation};
`

const Slider = ({ props }) => {
  const [active, setActive] = useState(0)
  const [autoplay, setAutoplay] = useState(1)
  const max = props.length
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
    const slides = props
    return {
      width: slides.length * 100 + "vw",
      transform: "translateX(" + transition + "vw)",
    }
  }

  const renderSlides = () =>
    props.map((item, index) => (
      
      <div
        className="each-slide slide"
        key={index}
        style={{ backgroundImage: `url(${item.node.sourceUrl})` }}
      >
      {console.log(item.node)}
        <div className={isActive(index) + "__content slider__content"} key={index}>
          {console.log(item.node.title)}
          <div>
            <h1>vvv</h1>
            <h3>vvv</h3>
          </div>
          
          
        </div>
      </div>
    ))

  const renderDots = () =>
    props.map((
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
