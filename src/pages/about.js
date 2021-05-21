import React from "react"
import Layout from "../components/layout/layout"
import styled, { keyframes } from "styled-components"
import { fadeInUp } from "react-animations"
import "./about.css"
import aboutBanner from "../images/aboutImage.jpg"
import Button from "../components/button/Button"

const fadeInAnimation = keyframes`
${fadeInUp}
`
const FadeIn = styled.div`
  color: white;
  animation: 1s ${fadeInAnimation};
`

const About = () => {
  return (
    <Layout>
      <div
        className="about__banner"
        style={{
          backgroundImage: `url(${aboutBanner})`,
          backgroundPosition: "60% 50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: `100%`,
          width: `100%`,
          textAlign: `center`,
          margin: `auto`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          padding : `150px`
        }}
      >
        <div style={{ position: `absolute` }}>
          <FadeIn>
            <h2 className="about__banner__title">Our Vision</h2>
          </FadeIn>
        </div>
        <div style={{ marginTop: `180px` }}>
          <FadeIn>
            <Button
              text={"A 4 YEAR RENOVATION THAT BRINGS GOOD VIBES TO LAKE BLVD"}
              link={""}
            />
          </FadeIn>
        </div>
      </div>
      <div className="about__main"></div>
    </Layout>
  )
}

export default About
