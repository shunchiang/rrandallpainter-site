import React from "react";
import review1 from "../images/review1.png";
import review2 from "../images/review2.png";
import review3 from "../images/review3.png";
import review4 from "../images/review4.png";
import style from "../sass/Review.module.scss";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

export default function Reviews() {
  return (
    <>
      <div className={style.titleBox}>
        <p className={style.title}>Reviews</p>
        <div className={style.line}></div>
      </div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={4}
        isPlaying={true}
      >
        <Slider>
          <Slide index={0}>
            <img className={style.slide} src={review1} alt="google review" />
          </Slide>
          <Slide index={1}>
            <img className={style.slide} src={review2} alt="google review" />
          </Slide>
          <Slide index={2}>
            <img className={style.slide} src={review3} alt="google review" />
          </Slide>
          <Slide index={3}>
            <img className={style.slide} src={review4} alt="google review" />
          </Slide>
        </Slider>
        <ButtonBack className={style.btnLeft}>
          <i class="fas fa-angle-left"></i>
        </ButtonBack>
        <ButtonNext className={style.btnRight}>
          <i class="fas fa-angle-right"></i>
        </ButtonNext>
      </CarouselProvider>
    </>
  );
}
