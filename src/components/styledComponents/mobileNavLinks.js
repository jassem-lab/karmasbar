import React, { useState } from "react"
import styled from "styled-components"
import { MenuToggle } from "./MenuToggle"

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
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 95px;
  right: 0;
`

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: red;
  font-weight: 500;
  font-size: 16px;
  display: flex;

  margin-bottom: 10px;
`

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`

const Marginer = styled.div`
  height: 2em;
`

export function MobileNavLinks({props}) {
  const [isOpen, setOpen] = useState(false)

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          {props.map((item, key) => (
            <LinkItem>
              <Link href={item.url} key={key.url} >{item.label}</Link>
            </LinkItem>
          ))}
          <Marginer />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  )
}
