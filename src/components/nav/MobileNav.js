import React from "react"
import styled from "styled-components"
import { useMenuContext } from "../../state"
import { useScrollFreeze } from "../../hooks"
import NavLinks from "./NavLinks"

const MobileNavbar = ({ props }) => {
  const { isMenuOpen } = useMenuContext()
  useScrollFreeze(isMenuOpen)
  return (
    <>
      {isMenuOpen && (
        <MobileNav>
          <NavLinks props={props} />
        </MobileNav>
      )}
    </>
  )
}

export default MobileNavbar

const MobileNav = styled.nav`
  position: fixed;
  top: 12%;
  margin: auto;
  height: 100%;
  width: 100%;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`
