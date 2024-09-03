import React from "react";
import {
  BoxContent,
  BoxHead,
  BoxSlide,
  BoxSlideBack,
  ButtonBox,
  ContentArticle,
  HeadTitle,
  Image,
  InfoBox,
  InfoButton,
  InfoText,
  TextSpecial,
} from "./SlideOriginalStyles";
import { anim } from "../../../../../utils/utils";
import { delay } from "framer-motion";
import {
  animationButton,
  animationImage,
  animationText,
  slideTitle,
} from "./AnimationSlide";

function SlideOriginal() {
  return (
    <>
      <BoxSlideBack>
        <BoxSlide>
          <BoxHead>
            <HeadTitle {...anim(slideTitle)}>
              Unleash the Beast with Monster Energy
            </HeadTitle>
          </BoxHead>
          <BoxContent>
            <ContentArticle>
              <InfoBox>
                <InfoText {...anim(animationText)}>
                  Con sabores intensos y una energía poderosa,{" "}
                  <TextSpecial>Monster Energy</TextSpecial> te invita a liberar
                  tu fuerza interior y alcanzar nuevas alturas. Desde las
                  refrescantes <TextSpecial>Ultra</TextSpecial> hasta las
                  revitalizantes <TextSpecial>Rehab</TextSpecial>, cada lata
                  está repleta de una mezcla única que te impulsa a superar tus
                  límites. ¡Desata tu potencial con{" "}
                  <TextSpecial>Monster</TextSpecial> y haz que cada día sea una{" "}
                  <TextSpecial>aventura</TextSpecial>!
                </InfoText>
                <ButtonBox>
                  <InfoButton {...anim(animationButton)}>
                    <span>Ver Mas</span>
                  </InfoButton>
                </ButtonBox>
              </InfoBox>
              <Image
                src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1713817338/86be6554-4e12-435b-b8d0-bc492e68e436_houerh.webp"
                alt="imagen"
                {...anim(animationImage)}
              />
            </ContentArticle>
          </BoxContent>
        </BoxSlide>
      </BoxSlideBack>
    </>
  );
}

export default SlideOriginal;
