import React from "react";
import { CardContainer } from "./CardProductStyles";

function CardProducts({ ...product }) {
  const { titleCard, price, img, colorCard } = product;
  // const [color, setColor] = useState()
  return (
    <CardContainer>
      <div className={colorCard}>
        <span className="title">{titleCard}</span>
        <span className="price">
          <span className="simbol">$</span>
          {price}
        </span>
        <button className="button">
          {" "}
          <span className="buttonsp"></span> <p class="textbtn">COMPRAR</p>{" "}
        </button>
        <img className="image" src={img} alt="messi" />
      </div>
    </CardContainer>
  );
}

export default CardProducts;
