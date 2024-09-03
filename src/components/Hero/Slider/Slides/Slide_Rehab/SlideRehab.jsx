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
  InfoBox,
  InfoButton,
  InfoText,
  TextSpecial,
} from "./SlideRehabStyles";
import { anim } from "../../../../../utils/utils";
import {
  animationButton,
  animationImageFr,
  animationImageSnd,
  animationText,
  slideTitle,
} from "./AnimationSlide";

function SlideRehab() {
  return (
    <>
      <BoxSlideBack>
        <BoxSlide>
          <BoxHead>
            <HeadTitle {...anim(slideTitle)}>
              Refresca y Revitaliza con Monster Rehab
            </HeadTitle>
          </BoxHead>
          <BoxContent>
            <ContentArticle>
              <InfoBox>
                <InfoText {...anim(animationText)}>
                  Experimenta la energía de{" "}
                  <TextSpecial>Monster Rehab</TextSpecial>. Con sabores
                  refrescantes como <TextSpecial>Tea + Lemonade</TextSpecial> y
                  Peach Tea, esta bebida única combina energía y hidratación
                  avanzada para mantenerte en tu mejor momento. <br />
                  <TextSpecial>
                    ¡Refresca tu día y energiza tu vida con Monster Rehab!
                  </TextSpecial>{" "}
                </InfoText>
                <ButtonBox>
                  <InfoButton {...anim(animationButton)}>
                    Visita Rehab
                  </InfoButton>
                </ButtonBox>
              </InfoBox>
              <ImagePrimary
                src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1713817230/d9cfa97e-c911-4859-88dd-192b03b8e5a2_ykdnj7.webp"
                alt="imagen"
                {...anim(animationImageFr)}
              />
              <ImageSecondary
                src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1713817229/4f567b12-7b4f-401b-ae9c-50cdacf0fd0d_obnin5.webp"
                alt="imagen"
                {...anim(animationImageSnd)}
              />
            </ContentArticle>
          </BoxContent>
        </BoxSlide>
      </BoxSlideBack>
    </>
  );
}

export default SlideRehab;
