import { motion } from "framer-motion";
import { styled } from "styled-components";

export const BoxSlideBack = styled(motion.div)`
  width: 100%;
  height: 100vh;
  max-height: 700px;
  background: linear-gradient(-20deg, green -86%, black 82%);
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid white; */
  overflow: hidden;
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
  gap: 2rem;
  /* gap: 300px; */
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
    font-family: "Audiowide", sans-serif;
    font-family: "electrolize", sans-serif;
    font-size: 4.5rem;
    font-weight: 500;
    transform: translateZ(42px) translateX(0px) translateY(3px) rotate(15deg);
    font-style: italic;
    /* color: white; */
    color: #ff110000;
    -webkit-text-stroke: green;
    -webkit-text-stroke-width: 3px;
    letter-spacing: 6px;
    position: absolute;
    white-space: nowrap;
    top: 269%;
    /* left: -51%; */
    z-index: 0;
    text-decoration: underline;
    transform: translateZ(38px) translateX(-1718px) translateY(-676px)
      rotate(381deg);
    filter: drop-shadow(0 0 13px green);
    /* content: "Hidratacion Imparable con Monster Hydro Hidratacion Imparable con Monster Hydro Hidratacion Imparable con Monster Hydro"; */
    content: "Monster Energy Original Monster Energy Original Monster Energy Original Monster Energy Original Monster Energy Original Mo";
    opacity: 1;
    transition: all 1s ease-in-out;
    animation: translateRv 30s infinite linear;
  }
  @keyframes translateRv {
    0% {
      /* transform: translateZ(38px) translateX(-1570px) translateY(-404px)
        rotate(381deg); */
      /* transform: translateZ(42px) translateX(126px) translateY(37px)
        rotate(15deg); */

      transform: translateZ(45px) translateX(1718px) translateY(676px)
        rotate(381deg);
    }
    /* 5% {
      /* transform: translateZ(38px) translateX(-1570px) translateY(-404px)
        rotate(381deg); */
    /* transform: translateZ(42px) translateX(126px) translateY(37px)
        rotate(15deg); 
      opacity: 1;
      transform: translateZ(45px) translateX(-1718px) translateY(-676px)
        rotate(381deg);
    } */
    100% {
      opacity: 1;
      transform: translateZ(45px) translateX(157px) translateY(44px)
        rotate(381deg);
      /* transform: translateZ(42px) translateX(126px) translateY(37px)
        rotate(15deg); */
    }
  }
`;
export const HeadTitle = styled(motion.h1)`
  text-align: center;
  // font-family: "Sedgwick Ave Display", cursive;
  font-family: "Rajdhani", sans-serif;
  font-size: 4.8rem;
  text-decoration: underline;
  letter-spacing: -2px;
  z-index: 1;
  /* position: absolute; */
`;
export const BoxContent = styled(motion.div)`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* z-index: 0; */
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
  height: 80%;
  max-height: 400px;
  width: 90%;
  border-radius: 40px 6px;
  background: linear-gradient(350deg, #000000ad 34%, #2dff00b3 176%);
  display: flex;
  padding: 6% 24% 5% 5%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  backdrop-filter: blur(4px);
  border: 1px solid #1bff1b;
  box-shadow: inset 1px 5px 1rem #1bff1b4d, 0 0 22px #29c12f3b;
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
  font-size: 1.7rem;
`;
export const TextSpecial = styled(motion.span)`
  font-family: "Rajdhani", sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
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
  background: linear-gradient(0deg, white 1%, transparent 17%);
  cursor: pointer;
  color: white;
  padding: 0.5rem 2.5rem;
  font-size: 1.4rem;
  /* margin: 1rem; */
  box-shadow: 0 1rem 1rem -11px white, inset 0 -1rem 1rem -1rem white;
  transition: all 0.5s ease-in-out;
  font-weight: 700;
  transform-origin: bottom;
  border-radius: 7px;
  // text-decoration: underline;
  &:hover {
    box-shadow: 0 1rem 1rem -20px white, inset 0 -3rem 1rem -0rem white;
    color: #00b900;
  }
  & > span {
    filter: drop-shadow(0px 0px 16px white);
  }
`;
export const Image = styled(motion.img)`
  height: 100%;
  max-height: 530px;
  position: absolute;
  right: 10%;
  z-index: 7;
  filter: drop-shadow(0px -0px 19px black) saturate(1.3);
  /* height: 100px; */
`;
