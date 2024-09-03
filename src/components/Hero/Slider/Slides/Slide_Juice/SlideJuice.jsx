import React from "react";
import {
  BoxContent,
  BoxHead,
  BoxSlide,
  BoxSlideBack,
  ContentArticle,
  HeadTitle,
  Image,
  InfoBox,
  InfoButton,
  InfoText,
  TextSpecial,
} from "./SlideJuiceStyles";
import { anim } from "../../../../../utils/utils";
import {
  animationButton,
  animationImage,
  animationText,
  slideTitle,
} from "./AnimationSlide";

function SlideJuice() {
  return (
    <>
      <BoxSlideBack>
        <BoxSlide>
          <BoxHead>
            <HeadTitle {...anim(slideTitle)}>
              Refresca tu Día con Monster Juice
            </HeadTitle>
          </BoxHead>
          <BoxContent>
            <ContentArticle>
              <InfoBox>
                <InfoText {...anim(animationText)}>
                  Descubre <TextSpecial>Monster Juice</TextSpecial>, una
                  explosión de sabores intensos que te revitaliza en cada sorbo.
                  Con una mezcla única de jugos exóticos y{" "}
                  <TextSpecial>la potente energía de Monster</TextSpecial>.
                  Disfruta del sabor intenso y deja que{" "}
                  <TextSpecial>Monster Juice</TextSpecial> te lleve a nuevas
                  alturas. <br />{" "}
                  <TextSpecial>
                    {" "}
                    ¡Revitaliza tu día con Monster Juice!
                  </TextSpecial>
                </InfoText>
                <InfoButton {...anim(animationButton)}>Ver Sitio</InfoButton>
              </InfoBox>
              <Image
                src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1713817233/52ec68fb-cd25-4cbb-9bf0-5f38931e5875_xmdkps.webp"
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

export default SlideJuice;
