import { motion } from "framer-motion";
import { styled } from "styled-components";
/* background-color: wheat; */
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
  background: linear-gradient(338deg, black 40%, wheat 97%);
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
    -webkit-text-stroke: #e3f7c5;
    -webkit-text-stroke-width: 2px;
    letter-spacing: 0px;
    position: absolute;
    white-space: nowrap;
    top: 269%;
    /* left: -51%; */
    z-index: 0;
    text-decoration: underline;
    transform: translateZ(42px) translateX(-0px) translateY(-0px) rotate(-20deg);
    filter: drop-shadow(0 0 13px greenyellow);
    /* content: "Hidratacion Imparable con Monster Hydro Hidratacion Imparable con Monster Hydro Hidratacion Imparable con Monster Hydro"; */
    content: " Monster Refrescante Juice Monster Refrescante Juice Monster Refrescante Juice Monster Refrescante Juice Monster Refrescan";
    animation: translateJuice 30s infinite linear;
  }
  @keyframes translateJuice {
    0% {
      transform: translateZ(42px) translateX(-0px) translateY(-0px)
        rotate(-20deg);
      /* transform: translateZ(42px) translateX(126px) translateY(37px)
        rotate(15deg); */
    }
    100% {
      transform: translateZ(42px) translateX(1052px) translateY(-385px)
        rotate(-20deg);
      /* transform: translateZ(42px) translateX(126px) translateY(37px)
        rotate(15deg); */
    }
  }
`;
export const HeadTitle = styled(motion.h1)`
  text-align: center;
  font-family: "Sedgwick Ave Display", cursive;
  font-family: "Rajdhani", sans-serif;
  /* font-family: "Russo One", sans-serif; */
  /* font-family: "Khand", sans-serif; */
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: -3px;
  text-decoration: underline;
  z-index: 5;
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
  width: 67%;
  /* border: 3px solid wheat; */
  border-radius: 10px;
  /* background: #131415; */
  background: linear-gradient(155deg, #00000080 41%, wheat 166%);
  display: flex;
  padding: 2% 5%;
  backdrop-filter: blur(4px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  box-shadow: inset 0 0 0.5rem #131415, 20px 20px 3rem #79637540;
  /* box-shadow: inset 0 0 0.5rem wheat, 20px 20px 3rem #79637540; */
  animation: shinning 4s ease-in-out infinite;
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
  font-size: 1.65rem;
  color: wheat;
  text-decoration: underline;
`;
export const InfoButton = styled(motion.button)`
  border: none;
  border-bottom: 3px solid white;
  border-top: 2px solid wheat;
  padding: 0.6rem 5rem;
  box-shadow: 0 1rem 1rem -15px white;
  font-family: "Rajdhani", sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  background: linear-gradient(0deg, wheat 1%, transparent 5%);
  cursor: pointer;
  color: wheat;
  padding: 0.6rem 2.8rem;
  font-size: 1.4rem;
  /* margin: 1rem; */
  box-shadow: 0 1rem 1rem -11px wheat, inset 0 -1.3rem 1rem -1rem wheat;
  transition: all 0.5s ease-in-out;
  font-weight: 600;
  transform-origin: top;
  border-radius: 18px;
  /* border-radius: 6px; */
  // text-decoration: underline;
  &:hover {
    box-shadow: 0 1rem 1rem -20px wheat, inset 0rem -3rem 1rem 0rem wheat;
    color: #000000;
  }
`;
export const Image = styled(motion.img)`
  height: 110%;
  max-height: 530px;
  position: absolute;
  right: 4%;
  z-index: 16;
  filter: drop-shadow(0px -0px 2rem #f5deb350) saturate(1.3);
`;
