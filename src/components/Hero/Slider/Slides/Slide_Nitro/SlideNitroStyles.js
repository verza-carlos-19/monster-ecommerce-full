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
  /* background-color: black; */
  background: linear-gradient(-205deg, black 50%, #adff2fab);
  /* background-color: greenyellow; */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 1rem black, 0 0 4rem black;
`;
export const BoxSlide = styled(motion.div)`
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
    -webkit-text-stroke: greenyellow;
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
    filter: drop-shadow(0 0 13px greenyellow);
    /* content: "Hidratacion Imparable con Monster Hydro Hidratacion Imparable con Monster Hydro Hidratacion Imparable con Monster Hydro"; */
    content: "Monster Nitro Beast Monster Nitro Beast Monster Nitro Beast Monster Nitro Beast Monster Nitro Beast Monster Nitro Beast Mo";
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
  font-family: "Sedgwick Ave Display", cursive;
  font-family: "Rajdhani", sans-serif;
  font-family: "Khand", sans-serif;
  font-size: 4.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-decoration: underline;
  z-index: 0;
  /* position: absolute; */
`;
export const BoxContent = styled(motion.div)`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3%;
  z-index: 0;
`;
export const ContentArticle = styled(motion.article)`
  height: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const InfoBox = styled(motion.div)`
  height: 70%;
  max-height: 370px;
  width: 90%;
  border: 1px solid greenyellow;
  border-radius: 50px;
  /* background: #00b900; */
  background: #00000057;
  backdrop-filter: blur(4px);
  display: flex;
  padding: 5% 3% 5% 24%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  /* clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%); */
  box-shadow: inset 0 0 1rem greenyellow, 0 0 6rem #0e090d;
  animation: shinning 4s ease-in-out infinite;
  @keyframes shinning {
    0% {
      box-shadow: inset 0 0 1rem greenyellow, 0 0 6rem #0e090d;
    }
    50% {
      box-shadow: inset 0 0 1.5rem greenyellow, 0 0 6rem #0e090d;
    }
    100% {
      box-shadow: inset 0 0 1rem greenyellow, 0 0 6rem #0e090d;
    }
  }
`;
export const ButtonBox = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const InfoText = styled(motion.p)`
  font-family: "Rajdhani", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
`;
export const TextSpecial = styled(motion.span)`
  font-family: "Rajdhani", sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  color: greenyellow;
  text-decoration: underline;
`;
export const InfoButton = styled(motion.button)`
  border: none;
  border-bottom: 3px solid white;
  padding: 0.5rem 2rem;
  box-shadow: 0 1rem 1rem -15px white;
  font-family: "Rajdhani", sans-serif;
  font-weight: 500;
  font-size: 1.3rem;
  background: linear-gradient(0deg, greenyellow 1%, transparent 17%);
  cursor: pointer;
  color: greenyellow;
  padding: 0.5rem 2.5rem;
  font-size: 1.4rem;
  /* margin: 1rem; */
  box-shadow: 0 1rem 1rem -11px greenyellow,
    inset 0 -1rem 1rem -1rem greenyellow;
  transition: all 0.5s ease-in-out;
  font-weight: 600;
  transform-origin: top;
  /* border-radius: 6px; */
  // text-decoration: underline;
  &:hover {
    box-shadow: 0 1rem 1rem -20px greenyellow,
      inset 0rem -3rem 1rem 0rem greenyellow;
    color: black;
  }
`;
export const Image = styled(motion.img)`
  height: 100%;
  max-height: 520px;
  position: absolute;
  left: 10%;
  filter: drop-shadow(0px -0px 1rem black) saturate(1.2);
  /* filter: drop-shadow(0 0 0.2rem greenyellow); */
  /* height: 100px; */
`;
