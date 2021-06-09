import React from "react"
import "./footer.css"
import { timeTable } from "./TimeTable"
// import Map from "../map/map"
import { RiFacebookCircleFill } from "react-icons/ri"
import { AiFillGooglePlusSquare } from "react-icons/ai"
import { FaYoutube } from "react-icons/fa"
import { IconContext } from "react-icons"
import loadable from '@loadable/component'

const Map = loadable(() => import("../map/map"))

const Footer = () => {
  return (
    <footer>
      <div className="ft-main">
        <section className="ft-item">
          <div className="ft-item__title">
            Karma’s House of Spirits 329 Lake Blvd Redding CA 96003 530-691-4061
          </div>
        </section>
        <section className=" ft-days-table">
          <h3 className="ft-item__title">
            If We’re Busy We’ll Be Open Past 8pm, Call & Ask!
          </h3>
          {timeTable.map((item, key) => (
            <ul>
              <li key={key} className="days__list">
                <span>{item.day}</span>
                <span>{item.hour}</span>
              </li>
            </ul>
          ))}
        </section>
        <section className="ft-item">
          <Map />
        </section>
      </div>
      <section class="ft-legal">
        <ul class="ft-legal-list">
          <li>
            <p>
              {" "}
              © 2020,{" "}
              <a href="#" style={{ color: `#ed2433` }}>
                <strong> Karma’s House of Spirits </strong>
              </a>
              . All rights reserved
            </p>
          </li>
          <div className="icons__section">
            <IconContext.Provider
              value={{
                color: `blue`,
                className: `global-class-name`,
                size: `30px`,
              }}
            >
              <RiFacebookCircleFill className="ft__icons" />
            </IconContext.Provider>

            <IconContext.Provider
              value={{
                color: `white`,
                className: `global-class-name`,
                size: `30px`,
              }}
            >
              <AiFillGooglePlusSquare className="ft__icons" />
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                color: `red`,
                className: `global-class-name`,
                size: `30px`,
              }}
            >
              <FaYoutube className="ft__icons" />
            </IconContext.Provider>
          </div>
        </ul>
      </section>
    </footer>
  )
}

export default Footer
