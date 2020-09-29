import React, { useState, useEffect } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import axios from "axios";
import style from "../sass/Gallery.module.scss";
import blueHouse from "../images/blueHouse.jpg";
import useWindowSize from "../utils/useWindowSize";

export default function Gallery() {
  const size = useWindowSize();
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    axios
      .post(
        "https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/images/",
        {}
      )
      .then((res) => {
        console.log(res.data);
        setGalleryImages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={70}
      totalSlides={galleryImages.length + 1}
      visibleSlides={size.width > 1000 ? 2 : 1}
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
        {galleryImages.map((url, index) => {
          return (
            <Slide index={index + 1}>
              <img className={style.slide} src={url} alt="gallery image" />
            </Slide>
          );
        })}
      </Slider>
    </CarouselProvider>
  );
}
