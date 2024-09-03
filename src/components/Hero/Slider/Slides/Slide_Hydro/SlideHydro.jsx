import React from "react";
import {
  BoxButtons,
  BoxContent,
  BoxHead,
  BoxImages,
  BoxSlide,
  BoxSlideBack,
  ContentArticle,
  HeadTitle,
  ImagePrimary,
  ImageSecondary,
  ImageTertiary,
  InfoBox,
  InfoButtonPrimary,
  InfoButtonSecondary,
  InfoText,
  TextSpecial,
} from "./SlideHydroStyles";
import { anim } from "../../../../../utils/utils";
import {
  animationButton,
  animationImageFr,
  animationImageSnd,
  animationImageTrd,
  animationText,
  slideTitle,
} from "./AnimationSlide";

function SlideHydro() {
  return (
    <>
      <BoxSlideBack>
        <BoxSlide>
          <BoxHead>
            <HeadTitle {...anim(slideTitle)}>
              Hidratación Imparable con Monster Hydro
            </HeadTitle>
          </BoxHead>
          <BoxContent>
            <ContentArticle>
              <InfoBox>
                <InfoText {...anim(animationText)}>
                  Descubre la potencia de la hidratación con{" "}
                  <TextSpecial>Monster Hydro</TextSpecial>, la bebida que
                  combina el sabor refrescante con el impulso{" "}
                  <TextSpecial>energético</TextSpecial> que necesitas para
                  superar cualquier desafío. <br />
                  <TextSpecial>
                    ¡Refresca tu mundo con Monster Hydro!
                  </TextSpecial>
                </InfoText>
                <BoxButtons>
                  <InfoButtonPrimary {...anim(animationButton)}>
                    conoce mas
                  </InfoButtonPrimary>
                  <InfoButtonSecondary {...anim(animationButton)}>
                    comprar un lote
                  </InfoButtonSecondary>
                </BoxButtons>
              </InfoBox>
              <BoxImages>
                <ImagePrimary
                  src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1713817231/94015780-39ac-430a-a868-48f0d2eef235_shpvq4.webp"
                  alt="imagen"
                  {...anim(animationImageFr)}
                />
                <ImageSecondary
                  src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1713817229/f8cb1ff8-14e2-4e79-ada9-061af3f92ebc_s6jsng.webp"
                  alt="imagen"
                  {...anim(animationImageSnd)}
                />
                <ImageTertiary
                  src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1713817229/03164a8a-ef75-458b-bb5d-126fc6f26bd9_nmnrma.webp"
                  alt="imagen"
                  {...anim(animationImageTrd)}
                />
              </BoxImages>
            </ContentArticle>
          </BoxContent>
        </BoxSlide>
      </BoxSlideBack>
    </>
  );
}

export default SlideHydro;
