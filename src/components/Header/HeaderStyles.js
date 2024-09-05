import styled from "styled-components";

export const ImgLogo = styled.img`
  width: 60%;
  /* height: 100%; */
  /* position: relative; */
  /* bottom: -30px; */
`;
export const HeaderBox = styled.div`
  width: 100%;
  max-height: 100px;
  padding: 0rem 0rem;
  /* border: 1px solid white; */
  display: flex;
  position: relative;
  justify-content: center;
  gap: 0%;
  align-items: start;
`;
export const HeaderSubBox = styled.div`
  width: 34.5%;
  /* border: 1px solid white; */
  z-index: 6;
`;
export const HeaderSubImgBox = styled.div`
  width: 30%;
  box-shadow: 0 0px 0.4rem greenyellow;
  height: 110px;
  display: flex;
  background-color: black;
  z-index: 3;
  justify-content: center;
  border-bottom: 2px solid greenyellow;
`;
export const HomeBox = styled.div`
  width: 120%;
  height: 120px;
  left: -20px;
  position: relative;
  background-color: black;
  border-right: 3px solid greenyellow;
  border-bottom: 2px solid greenyellow;
  box-shadow: 0 -2px 0.3rem greenyellow;
  transform: skew(20deg);
`;
