import styled from "styled-components";

export const NavbarContentBox = styled.div`
  transform: skew(20deg);
`;
export const ItemList = styled.span`
  font-size: 1rem;
  color: white;
`;
export const NavbarList = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  height: 120px;
  align-items: center;
`;
export const NavbarBox = styled.div`
  width: 120%;
  height: 120px;
  left: -15%;
  position: relative;
  background-color: black;
  border-left: 3px solid greenyellow;
  border-bottom: 2px solid greenyellow;
  box-shadow: -0px -2px 0.3rem greenyellow;
  transform: skew(-20deg);
`;
