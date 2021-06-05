import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import menuBannerMobile from "../images/menuBannerMobile.jpg"
import TitleBorder from "../images/titleborder.png"
import menuBanner from "../images/MenuBanner.jpg"
import {
  appetizers,
  salads,
  otherItems,
  sandwiches,
} from "../components/menu/MenuContent"
import EggBenedict from "../images/EggBenedict.jpg"
import EggBake from "../images/EggBake.jpg"
import BrunchSpecial from "../images/BrunchSpecial.jpg"

const Menu = () => {
  return (
    <Layout>
      <SEO title="Menu" />

      <img src={menuBanner} alt="Menu Banner" className="menu__header1" />
      <img
        src={menuBannerMobile}
        alt="Menu Banner Mobile"
        className="menu__header2"
      />
      <div className="menu__content">
        <h2 className="menu__content__title">
          <span style={{ color: `#2c2c2c` }}>Appetizers</span>
          <div>
            <img
              src={TitleBorder}
              alt="title border"
              className="about__titleBorder"
            />
          </div>
        </h2>
        <p className="menu__description">
          Delicious{" "}
          <strong>handcrafted appetizers that are made-to-order</strong> from
          classics to housemade creations
        </p>
        <div className="menu__table">
          {appetizers.map((item, key) => (
            <div className="menu__box" key={key}>
              <div className="item__status">
                <h5 className="item__status__content">{item.status}</h5>
              </div>
              <div className="box__header">
                <h2 className="item__title">{item.title}</h2>
                <hr className="dash" />
                <h3 className="item__price">$ {item.price}</h3>
              </div>
              <p className="item__description">{item.description}</p>
            </div>
          ))}
        </div>{" "}
        <h2 className="menu__content__title">
          <span style={{ color: `#2c2c2c` }}>Sandwiches</span>
          <div>
            <img
              src={TitleBorder}
              alt="titleBorder"
              className="about__titleBorder"
            />
          </div>
        </h2>
        <p className="menu__description">
          Delicious{" "}
          <strong>handcrafted appetizers that are made-to-order</strong> from
          classics to housemade creations
        </p>
        <div className="menu__table">
          {sandwiches.map((item, key) => (
            <div className="menu__box" key={key}>
              <div className="item__status">
                <h5 className="item__status__content">{item.status}</h5>
              </div>
              <div className="box__header">
                <h2 className="item__title">{item.title}</h2>
                <hr className="dash" />
                <h3 className="item__price">$ {item.price}</h3>
              </div>
              <p className="item__description">{item.description}</p>
            </div>
          ))}
        </div>
        <h2 className="menu__content__title">
          <span style={{ color: `#2c2c2c` }}>Salads</span>
          <div>
            <img
              src={TitleBorder}
              alt="titleBorder"
              className="about__titleBorder"
            />
          </div>
        </h2>
        <p className="menu__description">
          All Salad come with a daily mix of a fresh cut crispy lettuce and
          spinach,and one of our house-made dressings (ranch, chipotle ranch,
          thousand, pomegranate vinaigrette)
        </p>
        <div className="menu__table">
          {salads.map((item, key) => (
            <div className="menu__box" key={key}>
              <div className="item__status">
                <h5 className="item__status__content">{item.status}</h5>
              </div>
              <div className="box__header">
                <h2 className="item__title">{item.title}</h2>
                <hr className="dash" />
                <h3 className="item__price">$ {item.price}</h3>
              </div>
              <p className="item__description">{item.description}</p>
            </div>
          ))}
        </div>
        <h2 className="menu__content__title">
          <span style={{ color: `#2c2c2c` }}>Other Items</span>
          <div>
            <img
              src={TitleBorder}
              alt="titleBorder"
              className="about__titleBorder"
            />
          </div>
        </h2>
        <div className="menu__table">
          {otherItems.map((item, key) => (
            <div className="menu__box" key={key}>
              <div className="item__status">
                <h5 className="item__status__content">{item.status}</h5>
              </div>
              <div className="box__header">
                <h2 className="item__title">{item.title}</h2>
                <hr className="dash" />
                <h3 className="item__price">$ {item.price}</h3>
              </div>
              <p className="item__description">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="contact__container">
          <div className="contact__row__left col">
            <div className="contact__row__left__content">
              <h2
                className="menu__content__title"
                style={{ marginBottom: `20px ` }}
              >
                <span style={{ color: `#2c2c2c` }}>Join us for Brunch</span>A
                New Chef Special Every Sunday
                <span style={{ color: `#2c2c2c` }}>11:00 am to 2:00 pm</span>
              </h2>
              <div className="about__rightContentImage">
                <img
                  src={BrunchSpecial}
                  alt="brunch special"
                  className="menu__image karmasbar__image"
                />
                <div className="figmation"></div>
              </div>
            </div>
          </div>
          <div className="contact__row__right col2">
            <div className="about__rightContentImage">
              <img
                src={EggBenedict}
                alt="brunch special"
                className="menu__image karmasbar__image image2"
              />
              <div className="figmation"></div>
            </div>
            <div className="about__rightContentImage">
              <img
                src={EggBake}
                alt="brunch special"
                className="menu__image karmasbar__image image2"
              />
              <div className="figmation"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Menu
