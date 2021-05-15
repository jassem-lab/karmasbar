import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { useMenuContext } from "../../state"
import { Squash as Hamburger } from "hamburger-react"
import NavLinks from "./NavLinks"
import { useScroll } from "../../hooks"
import Logo from '../../images/Logo.png'

const DesktopNavbar = ({props}) => {
 
  const { isMenuOpen, toggleMenu } = useMenuContext()
  const { isScrolled } = useScroll()
  return (
    <DesktopNav isScrolled={isScrolled}>
      <Link to="/" >
        <img src={Logo} alt="logo" className="logo"/>
      </Link>
      <NavLinks props={props} isScrolled={isScrolled}/>
      <Hamburger
        toggled={isMenuOpen}
        toggle={toggleMenu}
        duration={0}
      />
    </DesktopNav>
  )
}

export default DesktopNavbar

const DesktopNav = styled.nav`
  display: flex;
  flex-flow: row no wrap;
  justify-content: space-between;
  align-items: center;

  background: transparent;
  color: white;
  transition: all 150ms linear;

  ${props =>
    props.isScrolled &&
    css`
      background: black;
      box-shadow: var(--headerBoxShadow);
      color : white !important ; 
    `}

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px ;
  padding: 20px 0;
  z-index: 2;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 10px 30px;
  }

  .logo {
    flex: 1;
    margin-left : 20px ; 
    max-width : 200px ;
    @media screen and (max-width:768px ){
      padding-top : 20px ; 
      padding-left : 20px  ; 
      height : 50% ; 
      width : 60% ; 
      z-index : 3000 ; 
    }
    
  }

  .nav-links {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .hamburger-react {

    display: none;
    z-index: 99;
    & > div > div {
      background: black;
    }
    @media screen and (max-width: 768px) {
      margin-right : 50px ; 
      display: block;
    }
  }
`
