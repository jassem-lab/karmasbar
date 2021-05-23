import React from "react"
import Layout from "../components/layout/layout"
import contactBanner from "../images/contactUs.jpg"
import Button from "../components/button/Button"
import { FiPhoneCall } from "react-icons/fi"
import { FadeIn } from "../components/fadeIn/fadeIn"
import SEO from "../components/seo"
import "./contact.css"
import Recaptcha from "../components/recaptcha/recaptcha"
const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div
        className="contact__banner"
        style={{
          backgroundImage: `url(${contactBanner})`,
        }}
      >
        <div style={{ position: `absolute` }}>
          <FadeIn>
            <h2 className="contact__banner__title">Get in Touch</h2>
          </FadeIn>
        </div>
        <div style={{ marginTop: `180px` }}>
          <FadeIn>
            <Button text={"530-691-4061"} link={""} />
          </FadeIn>
        </div>
      </div>
      <div className="contact__container">
        <div className="contact__row__left col">
          <div className="contact__row__left__content">
            <h3 className="call_us">Call us</h3>
            <span className="phone_number">
              <FiPhoneCall style={{ color: `red` }} />
              <span className="number">+1 530-691-4061</span>
            </span>
            <div>
              <a href="/contact" className="phone_orders">
                PHONE ORDERS
              </a>
            </div>
          </div>
        </div>
        <div className="contact__row__right col">
          <form action="" className="contact__form">
            <p className="contact__title">Send Message</p>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="phone" placeholder="Contact Number" required />
            <textarea type="text" placeholder="Message" required />
            <Recaptcha />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default contact
