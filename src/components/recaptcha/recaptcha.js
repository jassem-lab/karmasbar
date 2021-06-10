import React from "react"
// import ReCAPTCHA from "react-google-recaptcha"
import loadable from "@loadable/component"

const ReCAPTCHA = loadable(() => import("react-google-recaptcha"))


const Recaptcha = () => {
  return (
    <div>
      <ReCAPTCHA
        sitekey="6Lexe-caAAAAAHK20M9q6kdvEvxMB05-6RIdUka5"
      />
    </div>
  )
}

export default Recaptcha
