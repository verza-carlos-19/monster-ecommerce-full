import React from "react";
import {
  BoxContent,
  BoxHead,
  BoxSlide,
  BoxSlideBack,
  ButtonBox,
  ContentArticle,
  HeadTitle,
  ImagePrimary,
  ImageSecondary,
  ImageTertiary,
  InfoBox,
  InfoButton,
  InfoText,
  TextSpecial,
} from "./SlideBestSellerStyles";
import { anim } from "../../../../../utils/utils";
import {
  animationButton,
  animationImageFr,
  animationImageSnd,
  animationImageTrd,
  animationText,
  slideTitle,
} from "./AnimationSlide";

function SlideBestSeller() {
  return (
    <>
      <BoxSlideBack>
        <BoxSlide>
          <BoxHead>
            <HeadTitle {...anim(slideTitle)}>
              Nuestras Latas Mas Vendidas!
            </HeadTitle>
          </BoxHead>
          <BoxContent>
            <ContentArticle>
              <InfoBox>
                <InfoText {...anim(animationText)}>
                  Desde <TextSpecial>Monster Energy</TextSpecial> te invitamos a
                  que conozcas nuestros <TextSpecial>Best Sellers</TextSpecial>{" "}
                  que te ayudan a liberar tu fuerza interior y alcanzar tus
                  objetivos. Cada una de nuestras latas aspira a ser la mas
                  vendida. <br />
                  <TextSpecial>¡Conocelas a Todas Ahora!</TextSpecial>
                </InfoText>
                <ButtonBox>
                  <InfoButton {...anim(animationButton)}>
                    ir a mas vendidos
                  </InfoButton>
                </ButtonBox>
              </InfoBox>
              <ImagePrimary
                src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1713817235/5587a01b-3c83-42f7-a741-b29a1d534409_h9n7vc.webp"
                alt="imagen"
                {...anim(animationImageFr)}
              />
              <ImageSecondary
                src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1713817338/e6e3cf70-f77e-4d4d-bd51-f2448af390ce_qzsaav.webp"
                alt="imagen"
                {...anim(animationImageSnd)}
              />
              <ImageTertiary
                src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1713817230/87fba31e-3680-446a-8d86-a714a91d7fe8_kljop0.webp"
                alt="imagen"
                {...anim(animationImageTrd)}
              />
            </ContentArticle>
          </BoxContent>
        </BoxSlide>
      </BoxSlideBack>
    </>
  );
}

export default SlideBestSeller;
