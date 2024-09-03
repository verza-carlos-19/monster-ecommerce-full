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
  background: linear-gradient(-107deg, #fb3c3c 21%, #f0ff22 99%);
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
    font-family: "jaro", sans-serif;
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
    top: 260%;
    /* left: -51%; */
    z-index: 0;
    text-decoration: underline;
    transform: translateZ(42px) translateX(643px) translateY(-207px)
      rotate(-18deg);
    filter: drop-shadow(0 0 13px #ffffff60);
    /* content: "Hidratacion Imparable con Monster Hydro Hidratacion Imparable con Monster Hydro Hidratacion Imparable con Monster Hydro"; */
    content: " Monster Rehab Monster Rehab Monster Rehab Monster Rehab Monster Rehab Monster Rehab Monster Rehab Monster Rehab Monster R";
    animation: translaterh 30s infinite linear;
  }
  @keyframes translaterh {
    0% {
      transform: translateZ(42px) translateX(0px) translateY(0px) rotate(-18deg);
      /* transform: translateZ(42px) translateX(126px) translateY(37px)
        rotate(15deg); */
    }
    100% {
      transform: translateZ(42px) translateX(643px) translateY(-207px)
        rotate(-18deg);
      /* transform: translateZ(42px) translateX(126px) translateY(37px)
        rotate(15deg); */
    }
  }
`;
export const HeadTitle = styled(motion.h1)`
  text-align: center;
  font-family: "Sedgwick Ave Display", cursive;
  font-family: "jaro", sans-serif;
  font-size: 4.7rem;
  font-weight: 100;
  letter-spacing: 1px;
  text-decoration: underline;
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
  align-items: start;
  padding: 7% 0% 0% 10%;
  justify-content: center;
`;
export const InfoBox = styled(motion.div)`
  height: 80%;
  max-height: 370px;
  width: 90%;
  /* border: 3px solid wheat; */
  border-radius: 10px;
  /* background: #131415; */
  background: linear-gradient(155deg, #ff572287 41%, wheat 166%);
  display: flex;
  padding: 3% 29% 3% 6%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0 39px #ffeb3b, 0 0 11px #0000004a;
  gap: 1rem;
  /* box-shadow: inset 0 0 0.5rem #131415, 20px 20px 3rem #79637540; */
  /* box-shadow: inset 0 0 0.5rem wheat, 20px 20px 3rem #79637540; */
  /* animation: shinning 4s ease-in-out infinite; */
  backdrop-filter: blur(2px);
  @keyframes shinning {
    0% {
      /* box-shadow: inset 0 0 1rem wheat, 0 0 6rem #0e090d; */
      box-shadow: inset 0 0 0.5rem #131415, 20px 20px 3rem #79637540;
      border-radius: 24px;
    }
    50% {
      /* box-shadow: inset 0 0 1.5rem wheat, 0 0 6rem #0e090d; */
      box-shadow: inset 0 0 1rem #131415, 20px 20px 3rem #79637540;
      border-radius: 30px;
    }
    100% {
      /* box-shadow: inset 0 0 1rem wheat, 0 0 6rem #0e090d; */
      box-shadow: inset 0 0 0.5rem #131415, 20px 20px 3rem #79637540;
      border-radius: 24px;
    }
  }
`;
export const ButtonBox = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15%;
  justify-content: center;
`;
/* font-family: "Russo One", sans-serif; */
/* font-family: "Khand", sans-serif; */
export const InfoText = styled(motion.p)`
  font-family: "Share tech", sans-serif;
  /* font-family: "Jaro", sans-serif; */
  font-weight: 500;
  font-size: 1.7rem;
  text-align: start;
`;
export const TextSpecial = styled(motion.span)`
  font-family: "Rajdhani", sans-serif;
  /* font-family: "Russo One", sans-serif; */
  /* font-family: "Khand", sans-serif; */
  font-weight: 800;
  font-size: 1.7rem;
  color: black;
  text-decoration: underline;
`;
export const InfoButton = styled(motion.button)`
  border: none;
  border-bottom: 3px solid black;
  border-top: none;
  box-shadow: 0 1rem 1rem -15px white;
  font-family: "share tech", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  background: linear-gradient(0deg, #ffc107 3%, transparent 28%);
  cursor: pointer;
  color: black;
  padding: 0.5rem 9rem;
  padding: 0.3rem 9rem 0.7rem 9rem;
  font-size: 1.5rem;
  box-shadow: 0 1rem 1rem -11px #ffffff, inset 0 -1rem 1rem -1rem #ffffff;
  transition: all 0.5s ease-in-out;
  font-weight: 600;
  transform-origin: top;
  border-radius: 1px 1px 10px 10px;
  &:hover {
    box-shadow: 0 1rem 1rem -20px wheat, inset 0rem -2.8rem 1rem -1rem #ffc107;
    color: black;
    border-color: black;
  }
`;

export const ImagePrimary = styled(motion.img)`
  height: 100%;
  max-height: 530px;
  position: absolute;
  right: 18%;
  z-index: 2;
  filter: drop-shadow(0px -0px 0.5rem black) saturate(1.3);
`;
export const ImageSecondary = styled(motion.img)`
  height: 85%;
  max-height: 510px;
  position: absolute;
  right: 7%;
  z-index: 1;
  filter: drop-shadow(0px -0px 0.5rem black) saturate(1.3);
`;
