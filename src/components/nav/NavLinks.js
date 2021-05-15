import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useMenuContext } from "../../state"

const DesktopNavLinks = ({ props }) => {
  const { closeMenu } = useMenuContext()
  return (
    <NavLinksWrapper className="nav-links">
      {props.map(link => (
        <li key={link.label}>
          <NavLink to={`${link.url}`} className="link" onClick={closeMenu}>
            {link.label}
          </NavLink>
        </li>
      ))}
    </NavLinksWrapper>
  )
}

export default DesktopNavLinks

const NavLinksWrapper = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding-bottom: 20px;

  li:not(:last-child) {
    margin-right: 26px;
  }

  button {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    li {
      padding: 12px;
      margin: 0 !important;
    }
  }
`

export const NavLink = styled(Link)`
  position: relative;
  text-decoration: none;
  text-transform: capitalize;
  color: white;
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0;
    transition: width 150ms linear;
  }
  &:hover {
    width: 100%;
    color: red;
  }
`
