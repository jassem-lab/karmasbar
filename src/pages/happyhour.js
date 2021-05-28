import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import HappyHourBanner from "../images/HappyHourBanner.jpg"
import { FadeIn } from "../components/fadeIn/fadeIn"
import { Btn } from "../components/button/Button"
import TitleBorder from "../images/titleborder.png"
import barHappyHour from "../images/barHappyHour.jpg"
import { happyHour } from "../components/happyHourTable/happyHour"
import BrunchSpecial from "../images/BrunchSpecial.jpg"


const Happyhour = () => {
  return (
    <Layout>
      <SEO title="Happy Hour" />

      <div
        className="deals__banner"
        style={{
          backgroundImage: `url(${HappyHourBanner})`,
        }}
      >
        <div className="deals__banner__content" style={{ maxWidth: `30%` }}>
          <FadeIn>
            <h2 className="deals__banner__title">Happy Hour Unleashed</h2>
            <FadeIn>
              <Btn>
                <a href="#offers" style={{ color: `white` }}>
                  EARLY BIRD STARTS @12:30PM -2:30PM
                </a>
              </Btn>
            </FadeIn>
          </FadeIn>
        </div>
        <div style={{ marginTop: `220px` }}></div>
      </div>
      <div className="happyhour__content">
        <div className="happyhour__leftcontent happyhour__box">
          <h2 className="about__leftContent__title">
            Happy Hour Unleashed,
            <span style={{ color: `#2c2c2c` }}>
              No Restrictions on Premium Spirits or Import Beers!
            </span>
          </h2>
          <img src={TitleBorder} className="about__titleBorder" />
          <p className="happyhour__content__p">
            During our Happy Hours, everything on our shelves qualifies, with{" "}
            <strong>
              no restrictions on premium liquors, import beers, or glasses of
              wines.{" "}
            </strong>
            Come and grab your favorite drink at a great price. We have Happy
            Hour,<strong> 2x a Day Monday – Friday, and All Day Sunday</strong>{" "}
            with Brunch Specials.
          </p>
          <Btn style={{ color: `white`, marginTop: `30px` }}>
            ALL ALCOHOLIC BEVERAGES ARE $1 OFF
          </Btn>
        </div>
        <div className="happyhour__rightcontent happyhour__box">
          <div className="about__rightContentImage">
            <img
              src={barHappyHour}
              alt="bar HappyHour"
              className="happyhour__bar karmasbar__image"
            />
            <div className="figmation"></div>
          </div>
        </div>
        <div className="happyhour__leftcontent happyhour__box shadowBox">
          <h2 className="about__leftContent__title">
            <span style={{ color: `#2c2c2c` }}>Happy Hours 2x a Day</span>
            All Day Sunday W/Brunch
          </h2>
          <div className="happyhour__table">
            {happyHour.map((item, key) => (
              <ul>
                <li key={key} className="days__list">
                  <p className="happyhour__content__p">{item.day}</p>
                  <p className="happyhour__content__p">{item.time}</p>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="happyhour__rightcontent happyhour__box">
          <div
            className="about__rightContentImage "
            style={{ marginTop: `80px` }}
          >
            <img
              src={BrunchSpecial}
              alt="bar HappyHour"
              className="karmasbar__image border"
            />
            <div className="figmation"></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Happyhour
