import React from "react"
import Navbar from "./index"
import { MenuProvider } from "../../state"

const Menu = ({ menu }) => {
  //   console.log(menuItems) props
  const menuItems = menu.edges[0].node.menuItems.nodes
  return (
    <MenuProvider>
      <Navbar props={menuItems} />
    </MenuProvider>
  )
}
export default Menu
