import React from "react"
import ReCAPTCHA from "react-google-recaptcha"

const onChange = value => {
  console.log(("captcha value", value))
}

const Recaptcha = () => {
  return (
    <div>
      <ReCAPTCHA
        sitekey="6Lexe-caAAAAAHK20M9q6kdvEvxMB05-6RIdUka5"
        onChange={onChange}
      />
    </div>
  )
}

export default Recaptcha
