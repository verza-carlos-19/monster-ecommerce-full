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
} from "./SlideNitroStyles";
import { anim } from "../../../../../utils/utils";
import {
  animationButton,
  animationImage,
  animationText,
  slideTitle,
} from "./AnimationSlide";

function SlideNitro() {
  return (
    <>
      <BoxSlideBack>
        <BoxSlide>
          <BoxHead>
            <HeadTitle {...anim(slideTitle)}>
              Domina los Desafios con Monster Nitro
            </HeadTitle>
          </BoxHead>
          <BoxContent>
            <ContentArticle>
              <InfoBox>
                <InfoText {...anim(animationText)}>
                  Prepárate para un impulso sin igual con{" "}
                  <TextSpecial>Monster Nitro</TextSpecial>. Esta poderosa bebida
                  energética te brinda una{" "}
                  <TextSpecial>explosión de energía</TextSpecial>
                  que te permite dominar tus desafíos diarios. Con un sabor
                  intenso y una mezcla energética potente,{" "}
                  <TextSpecial>Monster Nitro</TextSpecial> te impulsa hacia
                  adelante, ayudándote a alcanzar tus metas con determinación y
                  fuerza.
                  <br />
                  <TextSpecial>
                    ¡Domina tu día con Monster Nitro y alcanza nuevos niveles de
                    energía y rendimiento!
                  </TextSpecial>
                </InfoText>
                <ButtonBox>
                  <InfoButton {...anim(animationButton)}>ver mas</InfoButton>
                </ButtonBox>
              </InfoBox>
              <Image
                src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1713817338/03129094-b0f6-41d9-b188-ab0677afdf2c_wz9tbj.webp"
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

export default SlideNitro;
