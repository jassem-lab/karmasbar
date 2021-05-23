import React, { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"

const onChange = value => {
  console.log(("captcha value", value))
}
const sitekey = "6Lexe-caAAAAAJSLd4HiwN63sH-U9GHzx7VyyaN0"


const Recaptcha = () => {
  const [isVerified, setIsVerified] = useState(false)

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
