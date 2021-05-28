import React, { useState } from "react"
import Layout from "../components/layout/layout"
import contactBanner from "../images/contactUs.jpg"
import Button from "../components/button/Button"
import { FiPhoneCall } from "react-icons/fi"
import { FadeIn } from "../components/fadeIn/fadeIn"
import SEO from "../components/seo"

import Recaptcha from "../components/recaptcha/recaptcha"
import { Btn } from "../components/button/Button"

const Contact = () => {
  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = e => {
    fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
    e.preventDefault()
  }
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
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
          <form
            onSubmit={handleSubmit}
            className="contact__form"
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <p className="contact__title">Send Message</p>
            <input type="hidden" name="form-name" value="contact" />
            <input
              onChange={handleChange}
              value={formState.name}
              id="name"
              type="text"
              placeholder="Name"
              required
            />
            <input
              onChange={handleChange}
              value={formState.email}
              id="email"
              type="email"
              placeholder="Email"
              required
            />
            <input
              onChange={handleChange}
              value={formState.phone}
              id="phone"
              type="phone"
              placeholder="Contact Number"
              required
            />
            <textarea
              onChange={handleChange}
              value={formState.message}
              id="message"
              rows="10"
              type="text"
              placeholder="Message"
              required
            />
            <Recaptcha />
            <Btn style={{ marginTop: `10px` }}>
              <a type="submit" style={{ color: `white` }}>
                SEND MESSAGE
              </a>
            </Btn>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
