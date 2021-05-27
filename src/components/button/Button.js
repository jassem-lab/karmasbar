import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const Btn = styled.div`
  color: #FFFFF;
  font: 14px;
  margin: 0px 5px 0px 0px;
  padding: 12px 27px;
  background-color: #ed2433;
  cursor: pointer;
  box-shadow: 5px 5px 0px 0px rgb(237 36 51 / 30%);
  transition: 0.3s;
  text-align: center;
  
  display: inline-block;
  white-space: nowrap;
  vertical-align: middle;
  font-size: 14px;
  line-height: 1.5;
  text-transform: uppercase;
  border-radius: 0px;
  font-weight: 700;
  &:hover {
    background-color: gray;
  }
  @media all and (min-width:30em){
    display : block ; 
    
  }
`

const Button = ({ link, text }) => {
  return (
    <Btn>
      <Link to={link} style={{ textDecoration: `none`, color: `white`, fontSize : `1vw` }}>
        {text}
      </Link>
    </Btn>
  )
}

export default Button
