import { delay } from "framer-motion";

export const perspective = {
  initial: {
    scale: 1,

    y: 0,
    transition: {
      duration: 2,

      ease: [0.76, 0, 0.24, 1],
    },
  },

  enter: {
    scale: 0.9,

    y: 10,
    transition: {
      duration: 2,

      ease: [0.76, 0, 0.24, 1],
    },
  },

  exi: {
    scale: 0.5,

    y: -150,

    opacity: 0.5,

    transition: {
      duration: 12,

      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const slide = {
  initial: {
    x: "30vw",
    width: "100%",
    opacity: 0,
  },

  enter: {
    x: "0vw",
    opacity: 1,
    width: "100%",

    transition: {
      duration: 1,
      x: {
        delay: 0,
        duration: 0.8,
      },
      opacity: {
        delay: 0.4,
        duration: 1.5,
      },
      ease: [0.45, 0.02, 0.58, 0.78],
      //   ease: [0.76, 0, 0.24, 1],
    },
  },

  exit: {
    x: "-30vw",
    opacity: 0,
    transition: {
      duration: 1,
      //   ease: [0.45, 0.02, 0.58, 0.78],
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
    x: 350,
  },

  enter: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },

  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
