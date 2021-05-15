import React, { useState, useEffect } from "react"

const slides = [
  {
    eachSlide: "url(https://unsplash.it/1900/1024/?image=497)",
    title : "welcome to Karma's",
    description : "2 Redding's newest 21+ ",
    buttoncontent : 'view Menu' , 
    buttonLink : 'google.com'
  },
  {
    eachSlide: "url(https://unsplash.it/1900/1024/?image=291)",
    title : "welcome to Karma's",
    description : "2 Redding's newest 21+ ",
    buttoncontent : 'view Menu' , 
    buttonLink : 'google.com'
  },
  {
    eachSlide: "url(https://unsplash.it/1900/1024/?image=786)",
    title : "welcome to Karma's",
    description : "2 Redding's newest 21+ ",
    buttoncontent : 'view Menu' , 
    buttonLink : 'google.com'
  },
  {
    eachSlide: "url(https://unsplash.it/1900/1024/?image=768)",
    title : "welcome to Karma's",
    description : "2 Redding's newest 21+ ",
    buttoncontent : 'view Menu' , 
    buttonLink : 'google.com'
  },
  {
    eachSlide: "url(https://unsplash.it/1900/1024/?image=726)",
    title : "welcome to Karma's",
    description : "2 Redding's newest 21+ ",
    buttoncontent : 'view Menu' , 
    buttonLink : 'google.com'
  },
  {
    eachSlide: "url(https://unsplash.it/1900/1024/?image=821)",
    title : "welcome to Karma's",
    description : "2 Redding's newest 21+ ",
    buttoncontent : 'view Menu' , 
    buttonLink : 'google.com'
  },
]

const Slider = () => {
  const [active, setActive] = useState(0)
  const [autoPlay, setAutoPlay] = useState(0)
  const max = slides.length

  const intervalBetweenSlides = () =>
    autoPlay && setActive(active === max - 1 ? 0 : active + 1)

  useEffect(() => {
    const interval = setInterval(() => intervalBetweenSlides(), 5000)
    return () => clearInterval(interval)
  })

  const toggleAuto = () => setAutoPlay(!autoplay)
  const nextOne = () => active < max - 1 && setActive(active + 1)
  const prevOne = () => active > 0 && setActive(active - 1)
  const setSliderStyles = () => {
    const transition = active * -100
    return {
      width: `${slides.length * 100} - 100`,
      transform: `translateX + ${transition} +vw`,
    }
  }
  const renderSlides = () => slides.map((item , index) => (
      <div
      className = 'each-slide'
      key = {index}
      style={{backgroundImage : item.eachSlide}}
      >
        

      </div>
  ));
  const renderDots = () =>{
    slides.map((slide,index)=>(
      <li 
      className={isActive(index)+ 'dots'}
      key={index}
      >
       <button onClick={()=>setActive(index)}><span>&#9679;</span></button>
      </li>
    ))
  }
}
