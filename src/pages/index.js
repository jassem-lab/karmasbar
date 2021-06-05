import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Slider from "../components/slider/slider"
import Slider2 from "../components/slider/slider2"
import table from "../images/table.png"
import food from "../images/food.png"
import dollar from "../images/dollar.png"
import TitleBorder from "../images/titleborder.png"
import Gallery from "../components/Gallery/gallery"
import Button from "../components/button/Button"
import AppetizerOffer from "../images/Appetizer-Offer-01-300x233.jpg"
import secondBannerImage from "../images/Interior-768x576.jpg"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import parse from "html-react-parser"

const IndexPage = ({ data: { allWpPost } }) => {
  const posts = allWpPost.nodes
  const image = {
    fluid: allWpPost.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: allWpPost.featuredImage?.node?.alt || ``,
  }
  console.log(posts)

  return (
    <Layout>
      <Seo title="Home" />
      <Slider />
      <div className="homepage__content">
        <div className="homepage__services">
          <div className="homepage__services__box">
            <img src={table} alt="table" style={{ width: `100px` }} />
            <h3 className="homepage__services__title">
              Relaxing <span className="colored__part">Atmosphere</span>
            </h3>
            <p className="homepage__services__desc">
              Freshly remodeled from the ground up, hanging out at Karma's is
              like home away from home.
            </p>
          </div>
          <div className="homepage__services__box">
            <img src={food} alt="table" style={{ width: `100px` }} />
            <h3 className="homepage__services__title">
              Real <span className="colored__part"> Quality Food</span>
            </h3>
            <p className="homepage__services__desc">
              Bar food with the freshness of a home-cooked meal. We make our
              food fresh from scratch, using family recipes.
            </p>
          </div>
          <div className="homepage__services__box">
            <img src={dollar} alt="table" style={{ width: `100px` }} />
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
          <img
            src={TitleBorder}
            alt="titleBorder"
            className="about__titleBorder"
          />
          <p className="homepage__services__desc">
            Karma’s House of Spirit’s is Redding’s newest 21 & older bar. Fully
            remodeled from the ground up, featuring 7 flat-screen TVs, Two pool
            tables, a jukebox, and{" "}
            <strong>
              full kitchen services with delicious housemade food.
            </strong>{" "}
            Karma’s menu offers a wide variety of classics and specialties you
            won’t find anywhere else, as well as{" "}
            <strong>Sunday Bruch with All Day Happy Hour.</strong> We’re always
            hosting fun events like Karaoke, all sporting events, NFL, MLB,
            Nascar, played over the built-in Bose entertainment system. If
            you’re looking for a{" "}
            <strong>relaxing atmosphere, friendly people</strong>, and good
            food, come and see what Karma’s is all about.
          </p>
          <div className="gallery"></div>
         <Gallery/>
        </div>
        <div className="home__second__banner">
          <div className="home__second__banner__content">
            <p>
              Meet your new best option for{" "}
              <strong>
                fresh, home-style cooked food on the West Side of Redding.
              </strong>{" "}
              We’re open again, and if you didn’t know, we’re a full-service bar
              with a full kitchen. Our kitchen is cooking delicious food from
              open to close, so if you find yourself on the West Side of town
              and{" "}
              <strong>
                looking for a relaxing atmosphere, and great food,
              </strong>{" "}
              come give us a try.
            </p>
            <Button
              style={{ marginTop: `40px` }}
              link={
                "https://www.google.com/maps/place/Karma's+House+of+Spirits/@40.6120391,-122.3843883,17z/data=!3m1!4b1!4m5!3m4!1s0x54d29383cb1c0307:0x4e496a43804af528!8m2!3d40.6120678!4d-122.3822421"
              }
              text={"GET DIRECTIONS"}
            />
          </div>
          <div className="home__second__banner__image">
            <div className="about__rightContentImage ">
              <img
                src={secondBannerImage}
                alt="bar HappyHour"
                className="karmasbar__image"
              />
              <div className="figmation"></div>
            </div>
          </div>
        </div>
        <div className="specialOffers">
          <h3 className="about__leftContent__title">
            <span style={{ color: `#2c2c2c` }}>Special</span> Offers
          </h3>
          <img
            src={TitleBorder}
            alt="titleBorder"
            className="about__titleBorder"
          />
          <div className="about__rightContentImage ">
            <img
              src={AppetizerOffer}
              alt="AppetizerOffer"
              className="karmasbar__image"
            />
            <div className="figmation"></div>
          </div>
          <Button
            link={"/deals/"}
            text={"VIEW ALL DEALS"}
            style={{ marginTop: ` 10px` }}
          />
        </div>
        <div className="home__ThirdBanner">
          <div className="brightness__effect"></div>
          <Slider2 />
        </div>
        <div className="whats__happening">
          <h3 className="about__leftContent__title">
            <span style={{ color: `#2c2c2c` }}>what's</span> Happening
          </h3>
          <img
            src={TitleBorder}
            alt="titleBorder"
            className="about__titleBorder"
          />
          <div className="whats__happening__container">
            {posts.slice(0, 3).map((item, key) => (
              <div className="whats__happening__box" key={key}>
                <Link to={item.uri}>
                  <Img
                    style={{ width: `150px` }}
                    fluid={
                      item.featuredImage?.node?.localFile?.childImageSharp
                        ?.fluid
                    }
                    alt={image.alt}
                  />
                </Link>
                <Link to={item.uri}>
                  <h4
                    className="about__leftContent__title"
                    style={{ fontSize: `30px` }}
                  >
                    {item.title}
                  </h4>
                </Link>
                <p className="happyhour__content__p">{parse(item.excerpt)}</p>
                <Button link={item.uri} text={"READ MORE >>"} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        uri
        title
        excerpt
        slug
        date

        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
