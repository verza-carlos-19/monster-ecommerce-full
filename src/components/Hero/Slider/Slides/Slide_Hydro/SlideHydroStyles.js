import { motion } from "framer-motion";
import { styled } from "styled-components";
export const BoxSlideBack = styled(motion.div)`
  width: 100%;
  height: 100vh;
  max-height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  perspective: 1000px;
  background: linear-gradient(332deg, #ff0000 -38%, black 62%);
  box-shadow: inset 0 0 1rem black, 0 0 4rem black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BoxSlide = styled(motion.div)`
  // transform: translateZ(-100px);
  width: 100%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  z-index: 3;
  flex-direction: column;
  align-items: center;
  gap: 7rem;
`;
export const BoxHead = styled(motion.div)`
  height: 10%;
  position: relative;
  width: 100%;
  justify-content: center;
  display: flex;
  perspective: 100px;
  /* border: 1px solid white; */
  &::after {
    text-align: center;
    font-family: "electrolize", sans-serif;
    font-family: "Audiowide", sans-serif;
    font-size: 4.5rem;
    font-weight: 500;
    transform: translateZ(42px) translateX(0px) translateY(3px) rotate(15deg);
    font-style: italic;
    /* color: white; */
    color: #ff110000;
    -webkit-text-stroke: #f44336;
    -webkit-text-stroke-width: 2px;
    letter-spacing: 0px;
    position: absolute;
    white-space: nowrap;
    top: 269%;
    /* left: -51%; */
    z-index: 0;
    text-decoration: underline;
    transform: translateZ(42px) translateX(-1600px) translateY(-425px)
      rotate(15deg);
    filter: drop-shadow(0 0 13px #f44336);
    /* content: "Hidratacion Imparable con Monster Hydro Hidratacion Imparable con Monster Hydro Hidratacion Imparable con Monster Hydro"; */
    content: "Monster Hydro Imparable Monster Hydro Imparable Monster Hydro Imparable Monster Hydro Imparable Monster Hydro Imparable Mo";
    animation: translate 30s infinite linear;
  }
  @keyframes translate {
    0% {
      transform: translateZ(42px) translateX(-1506px) translateY(-400px)
        rotate(15deg);
      /* transform: translateZ(42px) translateX(126px) translateY(37px)
        rotate(15deg); */
    }
    100% {
      transform: translateZ(42px) translateX(126px) translateY(37px)
        rotate(15deg);
      /* transform: translateZ(42px) translateX(126px) translateY(37px)
        rotate(15deg); */
    }
  }
`;
export const HeadTitle = styled(motion.h1)`
  text-align: center;
  font-family: "electrolize", sans-serif;
  font-family: "Audiowide", sans-serif;
  font-size: 4.5rem;
  font-weight: 700;
  font-style: italic;
  color: #ffffff;
  letter-spacing: 0px;
  z-index: 0;
  text-decoration: underline;
  filter: drop-shadow(0 0 26px #ffffff30);
  animation: shinning 3s ease infinite;
  @keyframes shinning {
    0% {
      filter: drop-shadow(0 0 26px #ffffff30);
    }
    50% {
      filter: drop-shadow(0 0 16px #ffffff40);
    }
    100% {
      filter: drop-shadow(0 0 26px #ffffff30);
    }
  }
  /* text-decoration-color: #673ab7; */
  /* background-image: linear-gradient(398deg, #ffffff, wheat);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto; */

  /* position: absolute; */
`;
export const BoxContent = styled(motion.div)`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
`;
export const ContentArticle = styled(motion.article)`
  height: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0% 5% 0% 5%;
  justify-content: center;
`;
export const InfoBox = styled(motion.div)`
  height: 80%;
  max-height: 370px;
  width: 95%;
  border-radius: 10px;
  display: flex;
  padding: 1% 40% 1% 1%;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(#ffffff12 -3%, #ff05053b 192%);
  border: 2px solid white;
  justify-content: center;
  gap: 2rem;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  box-shadow: inset 0 0 1rem #00000090, 0 0 2rem #ff00004a, 0 0 1rem #ffffff40;
  transition: all 0.6s ease-in-out;
  &:hover {
    box-shadow: inset 0 0 2rem #00000095, 0 0 2.5rem #ff00004a,
      0 0 1.5rem #ffffff40;
    /* box-shadow: inset 0 0 40px #ffffff56, 0 0 51px 26px #000000; */
  }
`;
export const BoxButtons = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  // padding: 0 15%;
  gap: 2rem;
  justify-content: center;
`;
/* font-family: "Russo One", sans-serif; */
/* font-family: "Khand", sans-serif; */
export const InfoText = styled(motion.p)`
  font-family: "Share tech", sans-serif;
  /* font-family: "Jaro", sans-serif; */
  font-weight: 500;
  font-size: 1.7rem;
  text-align: center;
`;
export const TextSpecial = styled(motion.span)`
  font-family: "Rajdhani", sans-serif;
  /* font-family: "Russo One", sans-serif; */
  /* font-family: "Khand", sans-serif; */
  font-weight: 800;
  font-size: 1.7rem;
  color: red;
  text-decoration: underline;
  filter: drop-shadow(0px 0px 1rem #ff000091);
  text-transform: capitalize;
`;
export const InfoButtonSecondary = styled(motion.button)`
  border: none;
  border-right: 4px solid white;
  font-family: "electrolize", sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  background: linear-gradient(270deg, white 1%, transparent 10%);
  color: white;
  padding: 0.3rem 2rem;
  border-radius: 12px;
  box-shadow: 9px 0rem 0.5rem -0.55rem #ffffff,
    inset -3rem 0rem 1rem -1.4rem #ffffff;
  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 0rem 8px 0px white, inset -21rem 0rem 1rem 1rem #000000eb;
    /* color: #000000eb; */
    /* border-color: white; */
    color: greenyellow;
    border-color: greenyellow;
    box-shadow: 0 0rem 8px 0px white, inset -21rem 0rem 1rem 1rem #000000eb;
    color: #ff1100;
    border-color: #ff1100;
    background: linear-gradient(270deg, red 3%, transparent 32%);
  }
`;
export const InfoButtonPrimary = styled(motion.button)`
  border: none;
  border-left: 4px solid white;
  font-family: "electrolize", sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  background: linear-gradient(90deg, white 1%, transparent 10%);
  color: white;
  padding: 0.3rem 2rem;
  border-radius: 12px;
  box-shadow: -9px 0rem 0.5rem -0.55rem #ffffff,
    inset 3rem 0rem 1rem -1.4rem #ffffff;
  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 0rem 8px 0px white, inset 21rem 0rem 1rem 1rem #000000eb;
    color: #ff1100;
    border-color: #ff1100;
    background: linear-gradient(90deg, red 3%, transparent 32%);
  }
`;

export const ImagePrimary = styled(motion.img)`
  height: 100%;
  max-height: 530px;
  position: relative;
  right: 0%;
  z-index: 3;
  filter: drop-shadow(0px -0px 1.3rem black) saturate(1.3) brightness(1.1);
  transition: all 0.5s ease-in-out;
  &:hover {
    z-index: 5;
    filter: drop-shadow(0px -0px 0.8rem black) saturate(1.3) brightness(1.1);
  }
`;
export const ImageSecondary = styled(motion.img)`
  height: 90%;
  max-height: 510px;
  position: relative;
  right: -14%;
  margin-left: -28%;
  /* top: 0.5%; */
  z-index: 2;
  filter: drop-shadow(0px -0px 0.8rem black) saturate(1.2) brightness(0.8);
  transition: all 0.5s ease-in-out;
  rotate: 12deg;
  &:hover {
    height: 100%;
    z-index: 5;
    rotate: 0deg;
    filter: drop-shadow(0px -0px 0.8rem black) saturate(1.3) brightness(1);
  }
`;
export const ImageTertiary = styled(motion.img)`
  height: 80%;
  max-height: 510px;
  position: relative;
  right: 0%;
  /* top: 0.5%; */
  z-index: 1;
  filter: drop-shadow(0px -0px 0.5rem black) saturate(1.3) brightness(0.8);
  transition: all 0.5s ease-in-out;
  rotate: 26deg;
  &:hover {
    z-index: 5;
    rotate: 0deg;
    height: 90%;
    filter: drop-shadow(0px -0px 0.8rem black) saturate(1.3) brightness(1);
  }
`;
export const BoxImages = styled(motion.div)`
  width: fit-content;
  height: 100%;
  right: -3%;
  position: absolute;
  display: flex;
  align-items: center;
  scale: 1.1;
`;
