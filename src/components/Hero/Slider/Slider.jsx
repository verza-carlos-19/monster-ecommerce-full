import React, { useEffect, useState } from "react";
import SlideOriginal from "./Slides/Slide_Original/SlideOriginal";
import SlideNitro from "./Slides/Slide_Nitro/SlideNitro";
import SlideJuice from "./Slides/Slide_Juice/SlideJuice";
import SlideRehab from "./Slides/Slide_Rehab/SlideRehab";
import SlideBestSeller from "./Slides/Slide_BestSeller/SlideBestSeller";
import SlideHydro from "./Slides/Slide_Hydro/SlideHydro";
import { LineSlider, SlideBox } from "./SliderStyles";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { anim } from "../../../utils/utils";
import { slide } from "../../../animations/AnimationsInner";

const backgrounds = [
  "linear-gradient(-20deg, green -86%, black 82%)",
  // "green",
  // "greenyellow",
  // "black",
  // "#fb3c3c",
  // "#131415",
  // "#871a1a",
  "linear-gradient(-205deg, black 50%, #adff2fab)",
  "linear-gradient(338deg, black 40%, wheat 97%)",
  "linear-gradient(-107deg, #fb3c3c 21%, #f0ff22 99%)",
  "radial-gradient(white -161%, black 77%)",
  "linear-gradient(332deg, #ff0000 -38%, black 62%)",
];
const slides = [
  <SlideOriginal key="slideuno" />,
  <SlideNitro key="slidedos" />,
  <SlideJuice key="slidetercero" />,
  <SlideRehab key="slidecuarto" />,
  <SlideBestSeller key="slidecinco" />,
  <SlideHydro key="slideseis" />,
];

const ShowSlides = () => {
  const [index, setIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(slides[index]);
  const [currentBack, setCurrentBack] = useState(backgrounds[index]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex >= slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000);
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    setCurrentSlide(slides[index]);
    setCurrentBack(backgrounds[index]);
  }, [index]);
  const handleNextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex >= slides.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <SlideBox animate={{ background: currentBack }}>
      <AnimatePresence mode="wait">
        <motion.div key={index} {...anim(slide)} onClick={handleNextSlide}>
          {currentSlide}
        </motion.div>
      </AnimatePresence>
    </SlideBox>
  );
};

// const ShowSlides = () => {
//   const [index, setIndex] = useState(0);
//   const [currentSlide, setCurrentSlide] = useState(slides[index]);
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setIndex((prevIndex) =>
//         prevIndex >= slides.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000);
//     return () => clearInterval(intervalId);
//   }, []);
//   useEffect(() => {
//     setCurrentSlide(slides[index]);
//   }, [index]);
//   const handleNextSlide = () => {
//     setIndex((prevIndex) =>
//       prevIndex >= slides.length - 1 ? 0 : prevIndex + 1
//     );
//   };
//   return (
//     <AnimatePresence mode="wait">
//       <motion.div key={index} {...anim(slide)} onClick={handleNextSlide}>
//         {currentSlide}
//       </motion.div>
//     </AnimatePresence>
//   );
// };

//  const ShowSlides = () => {
// //   const [index, setIndex] = useState(0);
// //   const [currentSlide, setCurrentSlide] = useState(slides[index]);
// //   const controls = useAnimation();

// //   useEffect(() => {
// //     const intervalId = setInterval(() => {
// //       setIndex((prevIndex) =>
// //         prevIndex >= slides.length - 1 ? 0 : prevIndex + 1
// //       );
// //     }, 5000);

// //     return () => clearInterval(intervalId);
// //   }, []);

// //   useEffect(() => {
// //     setCurrentSlide(slides[index]);
// //   }, [index]);

// //   const handleDragEnd = (event, info) => {
// //     const { offset } = info;
// //     const threshold = 100; // Umbral para el movimiento de arrastre

// //     if (offset.x > threshold) {
// //       controls.start({ x: 0 }); // Vuelve al slide anterior
// //       setIndex((prevIndex) =>
// //         prevIndex > 0 ? prevIndex - 1 : slides.length - 1
// //       );
// //     } else if (offset.x < -threshold) {
// //       controls.start({ x: 0 }); // Vuelve al slide siguiente
// //       setIndex((prevIndex) =>
// //         prevIndex >= slides.length - 1 ? 0 : prevIndex + 1
// //       );
// //     } else {
// //       controls.start({ x: 0 }); // Vuelve al slide actual
// //     }
// //   };

// //   return (
// //     <AnimatePresence mode="wait">
// //       <motion.div
// //         key={index}
// //         {...anim(slide)}
// //         drag="x"
// //         dragConstraints={{ left: 0, right: 0 }}
// //         dragElastic={0.5}
// //         dragMomentum={false}
// //         onDragEnd={handleDragEnd}
// //         animate={controls}
// //       >
// //         {currentSlide}
// //       </motion.div>
// //     </AnimatePresence>
// //   );
//  };

function Slider() {
  return <ShowSlides />;
}

export default Slider;
