import React from "react"
import Layout from "../components/layout/layout"

import SEO from "../components/seo"
import DealsBanner from "../images/dealsBanner.jpg"
import { FadeIn } from "../components/fadeIn/fadeIn"
import { Btn } from "../components/button/Button"
import TitleBorder from "../images/titleborder.png"
import Offer from "../images/offer.jpg"

const Deals = () => {
  return (
    <Layout>
      <SEO title="Deals" />

      {/* BANNER  */}

      <div
        className="deals__banner"
        style={{
          backgroundImage: `url(${DealsBanner})`,
        }}
      >
        <div className="deals__banner__content" style={{ maxWidth: `30%` }}>
          <FadeIn>
            <h2 className="deals__banner__title">
              Looking for Crazy Deals on Grub ?
            </h2>
            <FadeIn>
              <Btn>
                <a href="#offers" style={{ color: `white` }}>
                  VIEW DEALS
                </a>
              </Btn>
            </FadeIn>
          </FadeIn>
        </div>
        <div style={{ marginTop: `220px` }}></div>
      </div>

      {/* Content */}

      <div className="deals__content">
        <h2 className="deals__content__title">
          <span style={{ color: `#2c2c2c` }}>Our Special</span> Offers
          <div>
            {" "}
            <img src={TitleBorder} className="about__titleBorder" />
          </div>
        </h2>
        <img src={Offer} alt="Offer image" className="deals__image" />
        <Btn style={{ color: `white`, margin: `25px` }}>GET COUPON</Btn>
        <div className="deals__coupons">
          <div className="box">
            <p>00</p>Days
          </div>
          <div className="box">
            <p>00</p>Hours
          </div>
          <div className="box">
            <p>00</p>Minutes
          </div>
          <div className="box">
            <p>00</p>Seconds
          </div>
        </div>
        <h2 className="countdown__message">
          Sorry, You Missed it! 🙁 We're Launching Our Next Promotion Soon!
        </h2>
      </div>
    </Layout>
  )
}

export default Deals
