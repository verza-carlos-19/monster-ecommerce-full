import { motion } from "framer-motion";
import { styled } from "styled-components";
export const BoxSlideBack = styled(motion.div)`
  width: 100%;
  height: 100vh;
  max-height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid white; */
  overflow: hidden;
  width: 100%;
  perspective: 1000px;
  /* background-color: black; */
  background: radial-gradient(white -161%, black 77%);
  /* background-color: greenyellow; */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 1rem black, 0 0 4rem black;
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
`;
export const BoxHead = styled(motion.div)`
  height: 10%;
  position: relative;
  width: 100%;
  justify-content: center;
  display: flex;
  /* border: 1px solid white; */
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
    -webkit-text-stroke: white;
    -webkit-text-stroke-width: 2px;
    letter-spacing: 0px;
    position: absolute;
    white-space: nowrap;
    top: 350%;
    /* left: -51%; */
    z-index: 0;
    text-decoration: underline;
    transform: translateZ(42px) translateX(-1600px) translateY(-425px)
      rotate(15deg);
    filter: drop-shadow(0 0 13px white);
    transform: translateZ(42px) translateX(0px) translateY(0px) rotate(-8deg);
    /* content: "Hidratacion Imparable con Monster Hydro Hidratacion Imparable con Monster Hydro Hidratacion Imparable con Monster Hydro"; */
    content: " Beast Sellers Monsters Sellers Beast Sellers Monsters Sellers Beast Sellers Monsters Sellers Beast Sellers Monsters Selle";
    animation: translatebsts 15s infinite linear;
  }
  @keyframes translatebsts {
    0% {
      transform: translateZ(42px) translateX(0px) translateY(0px) rotate(-8deg);
      /* transform: translateZ(42px) translateX(126px) translateY(37px)
        rotate(15deg); */
    }
    100% {
      transform: translateZ(42px) translateX(1250px) translateY(-174px)
        rotate(-8deg);
      /* transform: translateZ(42px) translateX(126px) translateY(37px)
        rotate(15deg); */
    }
  }
  &::before {
    text-align: center;
    font-family: "electrolize", sans-serif;
    font-family: "Audiowide", sans-serif;
    font-size: 4.5rem;
    font-weight: 500;
    transform: translateZ(42px) translateX(0px) translateY(3px) rotate(15deg);
    font-style: italic;
    /* color: white; */
    color: transparent;
    -webkit-text-stroke: white;
    -webkit-text-stroke-width: 2px;
    letter-spacing: 0px;
    position: absolute;
    white-space: nowrap;
    top: 100%;
    /* opacity: 0.8; */
    /* left: -51%; */
    z-index: 0;
    text-decoration: underline;
    /* transform: translateZ(42px) translateX(-1600px) translateY(-425px)
    rotate(15deg); */
    transform: translateZ(42px) translateX(126px) translateY(37px) rotate(15deg);
    filter: drop-shadow(0 0 13px white);
    /* content: "Hidratacion Imparable con Monster Hydro Hidratacion Imparable con Monster Hydro Hidratacion Imparable con Monster Hydro"; */
    content: " Beast Sellers Monsters Sellers Beast Sellers Monsters Sellers Beast Sellers Monsters Sellers Beast Sellers Monsters Selle";
    animation: translatebs 30s infinite linear;
  }
  @keyframes translatebs {
    0% {
      transform: translateZ(-42px) translateX(126px) translateY(37px)
        rotate(15deg);
      /* transform: translateZ(42px) translateX(126px) translateY(37px)
      rotate(15deg); */
    }
    100% {
      transform: translateZ(-42px) translateX(-1506px) translateY(-400px)
        rotate(15deg);
      /* transform: translateZ(42px) translateX(126px) translateY(37px)
        rotate(15deg); */
    }
  }
`;
export const HeadTitle = styled(motion.h1)`
  text-align: center;
  font-family: "electrolize", sans-serif;
  // font-family: "jaro", sans-serif;
  font-size: 5.2rem;
  font-weight: 700;
  letter-spacing: 0px;
  filter: drop-shadow(2px 4px 6px black);
  /* text-decoration: underline; */
  z-index: 0;
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
  align-items: end;
  padding: 7% 5% 0% 5%;
  justify-content: center;
`;
export const InfoBox = styled(motion.div)`
  height: 80%;
  max-height: 370px;
  width: 64%;
  border-radius: 10px;
  background: radial-gradient(#ffffff99 -100%, #00000099 69%);
  display: flex;
  padding: 1% 2% 1% 2%;
  flex-direction: column;
  align-items: center;
  border: 2px solid white;
  backdrop-filter: blur(2px);
  justify-content: center;
  box-shadow: inset 0 0 40px #ffffff26, 0 0 51px 26px #000000;
  gap: 1rem;
  transition: all 0.6s ease-in-out;
  &:hover {
    box-shadow: inset 0 0 40px #ffffff56, 0 0 51px 26px #000000;
  }
`;
export const ButtonBox = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // padding: 0 15%;
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
  color: greenyellow;
  text-decoration: underline;
`;
export const InfoButton = styled(motion.button)`
  border: none;
  border-left: 4px solid white;
  font-family: "electrolize", sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  background: linear-gradient(90deg, white 1%, transparent 10%);
  color: white;
  padding: 0.3rem 4rem;
  border-radius: 12px;
  box-shadow: -9px 0rem 0.5rem -0.55rem #ffffff,
    inset 3rem 0rem 1rem -1.4rem #ffffff;
  transition: all 0.8s ease-in-out;

  &:hover {
    box-shadow: 0 0rem 8px 0px white, inset 21rem 0rem 1rem 1rem #000000eb;
    /* color: #000000eb; */
    /* border-color: white; */
    color: greenyellow;
    border-color: greenyellow;
  }
`;

export const ImagePrimary = styled(motion.img)`
  height: 100%;
  max-height: 530px;
  position: absolute;
  left: 13%;
  z-index: 2;
  filter: drop-shadow(0px -0px 0.1rem black) saturate(1.3);
`;
export const ImageSecondary = styled(motion.img)`
  height: 80%;
  max-height: 510px;
  position: absolute;
  left: 23.6%;
  /* top: 0.5%; */
  z-index: 1;
  filter: drop-shadow(0px -0px 0.5rem black) saturate(1.3);
`;
export const ImageTertiary = styled(motion.img)`
  height: 80%;
  max-height: 510px;
  position: absolute;
  left: 5%;
  /* top: 0.5%; */
  z-index: 1;
  filter: drop-shadow(0px -0px 0.5rem black) saturate(1.3);
`;
