import React from "react"
import styled from "styled-components"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

const Navbar = ({ props }) => {
  return (
    <Nav>
      <DesktopNav props={props} />
      <MobileNav props={props} />
    </Nav>
  )
}

export default Navbar

const Nav = styled.div`
  display: flex;
  flex-flow: column nowrap;
`
