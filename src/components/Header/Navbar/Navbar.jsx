import React from "react";
import {
  ItemList,
  NavbarBox,
  NavbarContentBox,
  NavbarList,
} from "./NavbarStyles";

function Navbar() {
  return (
    <>
      <NavbarBox>
        <NavbarContentBox>
          <NavbarList>
            <ItemList>HOME</ItemList>
            <ItemList>ABOUT</ItemList>
            <ItemList>PRODUCTS</ItemList>
            <ItemList>LOG IN</ItemList>
          </NavbarList>
        </NavbarContentBox>
      </NavbarBox>
    </>
  );
}

export default Navbar;
