import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import style from "../sass/Gallery.module.scss";
import blueHouse from "../images/blueHouse.jpg";
import wood from "../images/interiorWood.jpg";
import brownHouse from "../images/brownHouse.jpg";

export default function Gallery() {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={70}
      totalSlides={4}
    >
      <Slider>
        <Slide index={0}>
          {/* <div className={style.infoSlide}></div> */}
          <div className={style.infoSlide}>
            <img src={blueHouse} alt="info section" />
            <div className={style.infoText}>Gallery</div>
            <div className={style.round}>
              <div id={style.cta}>
                <span
                  className={`${style.arrow} ${style.primera} ${style.next}`}
                ></span>
                <span
                  className={`${style.arrow} ${style.segunda} ${style.next}`}
                ></span>
              </div>
            </div>
          </div>
        </Slide>
        <Slide index={1}>
          <img className={style.slide} src={blueHouse} alt="blue house" />
        </Slide>
        <Slide index={2}>
          <img className={style.slide} src={brownHouse} alt="briwn house" />
        </Slide>
        <Slide index={3}>
          <img className={style.slide} src={wood} alt="floor work" />
        </Slide>
      </Slider>
    </CarouselProvider>
  );
}
