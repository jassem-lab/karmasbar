import React from "react"
import styled from "styled-components"

export const DeviceSize = {
  mobile: 768,
  tablet: 992,
  laptop: 1324,
  desktop: 2024,
}

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: red;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  z-index : 200 ;

  &:hover {
    border-bottom: 2px solid red;
    color : red ; 
  }
`

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 14px;
  font-family : ;
  font-weight : 700px ;
  text-transform: uppercase;
  line-height: 95px;

`

export function NavLinks({props}) {
  console.log(props);
  return (
    <NavLinksContainer>
      <LinksWrapper>
        {props.map((item, key) => (
          <LinkItem>
            <Link href={item.url} key={key.url}>{item.label}</Link>
          </LinkItem>
        ))}
      </LinksWrapper>
    </NavLinksContainer>
  )
}
