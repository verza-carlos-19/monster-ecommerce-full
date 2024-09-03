import { motion } from "framer-motion";
import { styled } from "styled-components";

export const ProductsTitle = styled(motion.h1)`
  text-align: center;
  font-size: 10rem;
  rotate: -5deg;
  position: relative;
  transform: translateY(-50px);
  letter-spacing: 15px;
  text-decoration: underline;
  white-space: nowrap;
  /* margin-bottom: 2rem; */
  color: white;
  font-family: "Rajdhani", sans-serif;
  filter: drop-shadow(0 0 1.5rem black);
`;
export const ContainerBox = styled.section`
  display: flex;
  flex-direction: column;
  /* overflow-x: hidden; */
  width: 100%;
  gap: 1rem;
  align-items: center;
  /* border: 1px solid white; */
  background-color: #111111;
  padding: 1rem;
  /* max-width: 1200px; */
  box-shadow: inset 0 0 5rem black;
  /* box-shadow: inset 0 0 10rem #ffffff30; */
`;
export const ProductsBox = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  row-gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  /* border: 1px solid white; */
  padding: 1rem;
  max-width: 1200px;
`;
