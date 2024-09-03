import { motion } from "framer-motion";
import { InnerBox, Page, Slide } from "./InnerPageStyles";
import { perspective, opacity, slide } from "../../animations/AnimationsInner";
const anim = (variants) => {
  return {
    initial: "initial",

    animate: "enter",

    exit: "exit",

    variants,
  };
};
function Inner({ children }) {
  return (
    <InnerBox>
      <Slide {...anim(opacity)} />
      <Page {...anim(opacity)}>
        <motion.div {...anim(opacity)}>{children}</motion.div>
      </Page>
    </InnerBox>
  );
}

export default Inner;
