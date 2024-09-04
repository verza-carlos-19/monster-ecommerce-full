import React from "react";
import Navbar from "./Navbar/Navbar";
import {
  HeaderBox,
  HeaderSubBox,
  HeaderSubImgBox,
  HomeBox,
  ImgLogo,
} from "./HeaderStyles";

function Header() {
  return (
    <>
      <HeaderBox>
        <HeaderSubBox>
          <HomeBox />
        </HeaderSubBox>
        <HeaderSubImgBox>
          <ImgLogo src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1713470884/c591259d-f361-4415-a7cb-f558d09cd41d_rrtlkm.webp" />
        </HeaderSubImgBox>
        <HeaderSubBox>
          <Navbar />
        </HeaderSubBox>
      </HeaderBox>
    </>
  );
}

export default Header;
