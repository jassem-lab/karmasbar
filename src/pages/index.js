import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Slider from "../components/slider/slider"
import table from "../images/table.png"
import food from "../images/food.png"
import dollar from "../images/dollar.png"
import TitleBorder from "../images/titleborder.png"
import Gallery from "../components/Gallery/gallery"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Slider />
    <div className="homepage__content">
      <div className="homepage__services">
        <div className="homepage__services__box">
          <h3 className="homepage__services__title">
            Relaxing <span className="colored__part">Atmosphere</span>
          </h3>
          <p className="homepage__services__desc">
            Freshly remodeled from the ground up, hanging out at Karma's is like
            home away from home.
          </p>
        </div>
        <div className="homepage__services__box">
          <h3 className="homepage__services__title">
            Real <span className="colored__part"> Quality Food</span>
          </h3>
          <p className="homepage__services__desc">
            Bar food with the freshness of a home-cooked meal. We make our food
            fresh from scratch, using family recipes.
          </p>
        </div>
        <div className="homepage__services__box">
          <h3 className="homepage__services__title">
            <span className="colored__part"> Happy Hour</span> All Week
          </h3>
          <p className="homepage__services__desc">
            All Premium, Well, Doemstic & Import Beers, & Wine are included in
            our reimagined Happy Hour .
          </p>
        </div>
      </div>
      <div className="welcome__content">
        <h1
          className="about__leftContent__title blackTitle"
          style={{ marginBottom: `-10px` }}
        >
          Say Goodbye to Lake Blvd Fast Food
        </h1>
        <h1
          className="about__leftContent__title blackTitle"
          style={{ marginBottom: `-10px` }}
        >
          &
        </h1>
        <h1 className="about__leftContent__title ">
          Hello to Home-Style Fresh Food
        </h1>
        <img src={TitleBorder} className="about__titleBorder" />
        <p className="homepage__services__desc">
          Karma’s House of Spirit’s is Redding’s newest 21 & older bar. Fully
          remodeled from the ground up, featuring 7 flat-screen TVs, Two pool
          tables, a jukebox, and{" "}
          <strong>full kitchen services with delicious housemade food.</strong>{" "}
          Karma’s menu offers a wide variety of classics and specialties you
          won’t find anywhere else, as well as{" "}
          <strong>Sunday Bruch with All Day Happy Hour.</strong> We’re always
          hosting fun events like Karaoke, all sporting events, NFL, MLB,
          Nascar, played over the built-in Bose entertainment system. If you’re
          looking for a <strong>relaxing atmosphere, friendly people</strong>,
          and good food, come and see what Karma’s is all about.
        </p>
        <div>
        <Gallery/>
        </div>
      </div>

    </div>
  </Layout>
)

export default IndexPage
