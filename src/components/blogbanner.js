import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import "../style.css"
import { FadeIn } from "../components/fadeIn/fadeIn"
import { BiSearchAlt2 } from "react-icons/bi"
import NewsBanner from "../images/NewsBanner.jpg"

const banner = () => {
  return (
    <>
      <div
        className="contact__banner"
        style={{
          backgroundImage: `url(${NewsBanner})`,
        }}
      >
        <div style={{ position: `absolute` }}>
          <FadeIn>
            <h2 className="contact__banner__title">Get in Touch</h2>
          </FadeIn>
        </div>
        <div style={{ marginTop: `220px` }}></div>
      </div>
      <div className="whatsnew__content">
        <div className="whatsnew__left"></div>
        <div className="whatsnew__right">
          <form className="search-box">
            <input type="text" className="search-input" placeholder="search" />
            <button type="submit" className="search-button">
              <BiSearchAlt2 style={{ color: `white` }} />
            </button>
          </form>
          <div className="recent__post">
            <h2 className="recent__post__title">Recent Posts</h2>
            <div className="border__bottom"></div>
          </div>
        </div>
      </div>
    </>
  )
}
