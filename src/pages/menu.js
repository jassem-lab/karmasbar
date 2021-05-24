import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import MenuBanner from "../images/MenuBanner.jpg"
import "./menu.css"


const Menu = () => {
  return (
    <Layout>
      <SEO title="Menu" />
      <div
        className="menu__banner"
        style={{
          backgroundImage: `url(${MenuBanner})`,
        }}
      ></div>
    </Layout>
  )
}

export default Menu
