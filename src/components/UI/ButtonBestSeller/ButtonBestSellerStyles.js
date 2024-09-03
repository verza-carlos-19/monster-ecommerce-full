import styled from "styled-components";

export const Botonform = styled.button`
  border: none;
  /* border-bottom: 2px solid greenyellow;
  border-left: 1px solid greenyellow; */
  font-size: 20px;
  background: none;
  padding: 1rem 3rem 0.3rem 3rem;
  color: white;
  position: relative;
  margin: 3rem;

  &:hover::before {
    left: 0px;
    transform: skew(-25deg);
  }
  &::before {
    content: "";
    position: absolute;
    transition: all cubic-bezier(0.55, 0.055, 0.675, 0.19) 0.2s;
    bottom: 0;
    left: 10px;
    width: 100%;
    height: 70%;
    border-bottom: 2px solid greenyellow;
    border-left: 2px solid greenyellow;
    transform: skew(-35deg);
  }
`;

export const Textbot = styled.span``;
