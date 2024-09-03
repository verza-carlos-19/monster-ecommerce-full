import React, { useState } from "react";
import { BoxText, ButtonSpe, TextDos, TextUno } from "./ButtonStyles";
import { AnimatePresence } from "framer-motion";
const slide = {
  initial: {
    y: 30,
    x: 300,
    // opacity: 0.5,
    transition: {
      duration: 1,

      ease: [0.76, 0, 0.24, 1],
    },
  },

  enter: {
    y: 150,
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,

      ease: [0.76, 0, 0.24, 1],
    },
  },

  exit: {
    y: 300,
    x: 300,
    opacity: 0,

    transition: {
      duration: 1,

      ease: [0.76, 0, 0.24, 1],
    },
  },
};
const anim = (variants) => {
  return {
    initial: "initial",

    animate: "enter",

    exit: "exit",

    variants,
  };
};
function Button() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ButtonSpe onClick={() => setShowModal(!showModal)}>Test</ButtonSpe>
      <BoxText key="modal">
        <AnimatePresence mode="wait">
          {showModal ? (
            <TextUno key="uno" {...anim(slide)}>
              Uno
            </TextUno>
          ) : (
            <TextDos key="dos" {...anim(slide)}>
              Dos
            </TextDos>
          )}
        </AnimatePresence>
      </BoxText>
    </>
  );
}
export default Button;
