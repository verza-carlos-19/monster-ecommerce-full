import { easeInOut } from "framer-motion";

export const slideTitle = {
  initial: {
    y: 30,
    x: 500,
    scale: 0,
    opacity: 0,
    // opacity: 0.5,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  enter: {
    y: 65,
    x: 0,
    scale: 1,
    // scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      scale: {
        delay: 0.3,
        duration: 0.3,
      },
      y: {
        delay: 0.2,
        duration: 0.5,
      },
      opacity: {
        delay: 0.4,
        duration: 0.8,
      },
      x: {
        delay: 0.5,
        duration: 0.4,
      },
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    // y: -50,
    x: -600,
    scale: 0,
    opacity: 0,

    transition: {
      duration: 1,
      scale: {
        delay: 0.4,
        duration: 2,
      },
      y: {
        // delay: 0.1,
        duration: 0.3,
      },
      //   opacity: {
      //     // delay: 0.2,
      //     duration: 0.3,
      //   },
      x: {
        delay: 0.3,
        duration: 1,
      },
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
export const animationText = {
  initial: {
    opacity: 0,
    x: 50,
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 2,
      x: {
        delay: 1,
        duration: 0.5,
      },
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    // y: -50,
    x: -500,
    // scale: 0,
    opacity: 0,

    transition: {
      delay: 0.2,
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
export const animationButton = {
  initial: {
    scaleY: 0,
  },
  enter: {
    x: 0,
    scaleY: 1,
    opacity: 1,
    transition: {
      delay: 0.7,
      duration: 0.1,
      ease: [0.58, 0.06, 1, 0.16],
      // ease: easeInOut,
    },
  },
  exit: {
    x: -500,
    opacity: 0,
    transition: {
      opacity: {
        delay: 0.5,
        duration: 1,
      },
      duration: 0.1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
export const animationImage = {
  initial: {
    x: 1000,
    opacity: 0,
    rotate: 15,
  },
  enter: {
    x: 0,
    scale: 0.97,
    rotate: -3,
    // scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      scale: {
        delay: 0.5,
        duration: 0.45,
      },
      y: {
        delay: 0.3,
        duration: 0.3,
      },
      x: {
        delay: 0.3,
        duration: 0.8,
      },
      rotate: {
        delay: 0.4,
        duration: 0.7,
      },
      opacity: {
        delay: 0.4,
        duration: 0.8,
        ease: [0.46, 0.23, 0.76, 0.24],
      },
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    // y: -50,
    x: -500,
    // scale: 0,
    opacity: 0,
    rotate: -15,
    transition: {
      duration: 0.6,
      scale: {
        duration: 0.45,
      },
      rotate: {
        delay: 0,
        duration: 0.5,
      },
      // x: {
      //   // delay: 0.2,
      //   duration: 0.4,
      // },
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
