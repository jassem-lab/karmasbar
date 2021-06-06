import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { useMenuContext } from "../../state"
import { Squash as Hamburger } from "hamburger-react"
import NavLinks from "./NavLinks"
import { useScroll } from "../../hooks"
import Logo from "../../images/Logo.png"

const DesktopNavbar = ({ props }) => {
  const { isMenuOpen, toggleMenu } = useMenuContext()
  const { isScrolled } = useScroll()
  return (
    <DesktopNav isScrolled={isScrolled}>
      <Link to="/">
        <img src={Logo} alt="logo" className="logo" />
      </Link>
      <NavLinks props={props} isScrolled={isScrolled} />
      <Hamburger toggled={isMenuOpen} toggle={toggleMenu} duration={0} />
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
  transition: all 0.5s linear;

  ${props =>
    props.isScrolled &&
    css`
      background: black;
      box-shadow: var(--headerBoxShadow);
      color: white !important ;
      transition: all 0.5s linear;
    `}

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 68px;
  padding: 45px 0;
  z-index: 3;
  transition: all 0.6 linear;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 30px 30px;
    height: 72px;
  }

  .logo {
    flex: 1;
    margin-left: 20px;
    max-width: 150px;
    @media screen and (max-width: 768px) {
      max-width: 250px;
      padding-top: 20px;
      padding-left: 20px;
      height: 65%%;
      width: 70%;
      z-index: 3000;
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
      margin-right: 50px;
      display: block;
    }
  }
`
