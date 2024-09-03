import { motion } from "framer-motion";
import { styled } from "styled-components";

export const SlideBox = styled(motion.section)`
  width: 100%;
  background-color: black;
  display: flex;
  transition: all 1s ease-in-out;
  /* box-shadow: inset 0 0 5rem black, 0 0 4rem black, 0 0 4rem black; */
  /* z-index: 10; */
`;

export const LineSlider = styled.div`
  width: 100%;
  height: 65px;
  rotate: -45deg;
  top: 51%;
  position: absolute;
  box-shadow: 0 0 5rem #00b900, 0 0 5rem #00b900, 0 0 1rem #00b900,
    0 0 2rem #00b900, 0 0 2rem #00b900, 0 0 5rem #00b900, 0 0 4rem #00b900,
    0 0 1rem #00b900, 0 0 1rem #00b900;
  z-index: -1;
  background-color: #00b900;
  left: -32%;
  animation: lineslide 30s ease-in-out infinite;
  @keyframes lineslide {
    0% {
      width: 100%;
      height: 65px;
      rotate: -45deg;
      top: 51%;
      position: absolute;
      box-shadow: 0 0 5rem #00b900, 0 0 5rem #00b900, 0 0 1rem #00b900,
        0 0 2rem #00b900, 0 0 2rem #00b900, 0 0 5rem #00b900, 0 0 4rem #00b900,
        0 0 1rem #00b900, 0 0 1rem #00b900;
      /* z-index: 0; */
      background-color: #00b900;
      left: -32%;
    }
    20% {
      width: 100%;
      height: 65px;
      rotate: -49deg;
      top: 51%;
      position: absolute;
      box-shadow: 0 0 5rem greenyellow, 0 0 5rem greenyellow,
        0 0 1rem greenyellow, 0 0 2rem greenyellow, 0 0 2rem greenyellow,
        0 0 5rem greenyellow, 0 0 4rem greenyellow, 0 0 1rem greenyellow,
        0 0 1rem greenyellow;
      /* z-index: 0; */
      background-color: greenyellow;
      left: -13%;
    }
    40% {
      width: 100%;
      height: 65px;
      rotate: -49deg;
      top: 51%;
      position: absolute;
      box-shadow: 0 0 5rem greenyellow, 0 0 5rem greenyellow,
        0 0 1rem greenyellow, 0 0 2rem greenyellow, 0 0 2rem greenyellow,
        0 0 5rem greenyellow, 0 0 4rem greenyellow, 0 0 1rem greenyellow,
        0 0 1rem greenyellow;
      /* z-index: 0; */
      background-color: greenyellow;
      left: -17%;
    }
    60% {
      width: 100%;
      height: 65px;
      rotate: -49deg;
      top: 51%;
      position: absolute;
      box-shadow: 0 0 5rem greenyellow, 0 0 5rem greenyellow,
        0 0 1rem greenyellow, 0 0 2rem greenyellow, 0 0 2rem greenyellow,
        0 0 5rem greenyellow, 0 0 4rem greenyellow, 0 0 1rem greenyellow,
        0 0 1rem greenyellow;
      /* z-index: 0; */
      background-color: greenyellow;
      left: -17%;
    }
    80% {
      width: 100%;
      height: 65px;
      rotate: -49deg;
      top: 51%;
      position: absolute;
      box-shadow: 0 0 5rem greenyellow, 0 0 5rem greenyellow,
        0 0 1rem greenyellow, 0 0 2rem greenyellow, 0 0 2rem greenyellow,
        0 0 5rem greenyellow, 0 0 4rem greenyellow, 0 0 1rem greenyellow,
        0 0 1rem greenyellow;
      /* z-index: 0; */
      background-color: greenyellow;
      left: -17%;
    }
    100% {
      width: 100%;
      height: 65px;
      rotate: -49deg;
      top: 51%;
      position: absolute;
      box-shadow: 0 0 5rem greenyellow, 0 0 5rem greenyellow,
        0 0 1rem greenyellow, 0 0 2rem greenyellow, 0 0 2rem greenyellow,
        0 0 5rem greenyellow, 0 0 4rem greenyellow, 0 0 1rem greenyellow,
        0 0 1rem greenyellow;
      /* z-index: 0; */
      background-color: greenyellow;
      left: -17%;
    }
  }
`;
