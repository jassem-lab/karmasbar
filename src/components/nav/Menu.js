import React from "react"
import Navbar from "./index"
import { MenuProvider } from "../../state"
import {MenuItems} from "./NavLinksConstants"

const Menu = ({ menu }) => {
  //   console.log(menuItems) props
  
  return (
    <MenuProvider>
      <Navbar props={MenuItems} />
    </MenuProvider>
  )
}
export default Menu
