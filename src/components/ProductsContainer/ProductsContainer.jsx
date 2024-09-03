import React from "react";
import CardProducts from "./CardProducts/CardProducts";
import {
  ContainerBox,
  ProductsBox,
  ProductsTitle,
} from "./ProductsContainerStyles";
import { useSpring, useTransform } from "framer-motion";

function ProductsContainer({ array, scroll }) {
  const arrayProp = array;
  const translateVer = useTransform(scroll, [0, 0.18], [10, -80]);
  const translateY = useSpring(translateVer, {
    stiffness: 700,
    damping: 150,
  });
  const translateHor = useTransform(scroll, [0, 0.18], [-4500, -2100]);
  const translateX = useSpring(translateHor, {
    stiffness: 350,
    damping: 200,
  });
  const transformation = {
    translateX,
    translateY,
  };
  return (
    <ContainerBox>
      <ProductsTitle style={{ ...transformation }}>
        BEAST Sellers BEST Sellers BEAST Sellers BEST Sellers BEAST Sellers BEST
        Sellers BEAST Sellers
      </ProductsTitle>
      <ProductsBox>
        {arrayProp.map((element) => {
          return <CardProducts key={element.id} {...element} />;
        })}
      </ProductsBox>
    </ContainerBox>
  );
}

export default ProductsContainer;
