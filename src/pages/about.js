import React from "react"
import Layout from "../components/layout/layout"
import { FadeIn } from "../components/fadeIn/fadeIn"
import SEO from "../components/seo"

import aboutBanner from "../images/aboutImage.jpg"
import Button from "../components/button/Button"
import TitleBorder from "../images/titleborder.png"
import aboutKarma1 from "../images/aboutKarma1.png"
import aboutKarma2 from "../images/aboutKarma2.png"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div
        className="about__banner"
        style={{
          backgroundImage: `url(${aboutBanner})`,
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
      <div className="about__main">
        <div className="about__content">
          <div className="about__leftContent">
            <div className="about__writtenContent">
              <h2 className="about__leftContent__title">
                <span style={{ color: `#2c2c2c` }}>From What The Blue</span> to
                Brand Spankin New
              </h2>
              <img src={TitleBorder} className="about__titleBorder" />
              <p className="about__paragraphe">
                After four years of chaos, we finally achieved our goal of
                rehabilitating one of the worst buildings on Lake BLVD.
              </p>
              <p className="about__paragraphe">
                Our vision was to rehabilitate it into{" "}
                <strong>
                  {" "}
                  a relaxing environment the locals could call
                  home-away-from-home,
                </strong>{" "}
                come together and get to know one another, all while having a
                good time.
              </p>
            </div>
          </div>
          <div className="about__rightContentImage">
            <img
              src={aboutKarma1}
              alt="About Karma"
              className="karmasbar__image"
            />
            <div className="figmation"></div>
          </div>
        </div>
        <div className="about__main2">
          <div className="about__content">
            <div className="about__rightContentImage">
              <img
                src={aboutKarma2}
                alt="about karma"
                className="karmasbar__image"
              />
              <div className="figmation"></div>
            </div>
            <div className="about__leftContent">
              <div className="about__writtenContent">
                <h2 className="about__leftContent__title">
                  <span style={{ color: `#2c2c2c` }}>
                    A Friendly Neighborhood Bar
                  </span>{" "}
                  That's Right Next Door
                </h2>
                <img src={TitleBorder} className="about__titleBorder" />
                <p className="about__paragraphe">
                  As a small Mother & Son-owned establishment, we aim to provide
                  a<strong> friendly relaxing atmosphere</strong>
                  where people can come and enjoy themselves. An
                  <strong>
                    environment of positivity, good vibes, good drinks, great
                    people, and fresh food
                  </strong>
                  options for the West Side of Redding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
