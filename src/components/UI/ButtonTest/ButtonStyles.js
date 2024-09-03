import styled from "styled-components";
import { motion } from "framer-motion";

export const TextUno = styled(motion.span)`
  color: green;
  font-size: 3em;
  position: fixed;

  left: 0;

  top: 0;
`;

export const TextDos = styled(motion.span)`
  color: yellow;
  font-size: 2em;
  position: fixed;

  left: 0;

  top: 0;
`;
export const BoxText = styled(motion.div)`
  padding: 2rem;
  border: 1px solid white;
`;
export const ButtonSpe = styled(motion.button)`
  display: inline-block;
  text-decoration: none;
  color: white;
  border: 1px solid white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: transparent;
  cursor: pointer;
  border-radius: 5px;
`;
