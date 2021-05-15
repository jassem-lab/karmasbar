import React, { useState } from "react"
import {Logo} from './styledComponents/logo/index'
import { NavLinks } from "./styledComponents/StyledNavbar"
import { DeviceSize } from "./styledComponents/StyledNavbar"
import { MobileNavLinks } from "./styledComponents/mobileNavLinks"
import { useMediaQuery } from "react-responsive"
import styled from "styled-components"


const NavbarContainer = styled.div`
   
  width: 100%;
  height: 70px;
  ${'' /* box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13); */}
  display: flex;
  align-items: center;
  padding: 0.8em 1.5em;
  position : sticky ; 
`

const LeftSection = styled.div`
  display: flex;
`

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`

const RightSection = styled.div`
  display: flex;
`

const Menu = ({ menu }) => {
  //   console.log(menuItems) props
  const menuItems = menu.edges[0].node.menuItems.nodes

  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })
  const [colorChange, setColorChange] = useState(false)
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true)
    } else {
      setColorChange(false)
    }
  }
  window.addEventListener("scroll", changeNavbarColor)
  return (
    <div style={{position:'fixed' }}>
      <NavbarContainer className={colorChange ? "colorChange" : "navbar"}>
        <LeftSection>
          <Logo />
        </LeftSection>
        <MiddleSection>
          {!isMobile && <NavLinks props={menuItems} />}
        </MiddleSection>
        <RightSection>
          {isMobile && <MobileNavLinks props={menuItems} />}
        </RightSection>
      </NavbarContainer>
    </div>
  )
}
export default Menu
