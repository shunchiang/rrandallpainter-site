import React, { useState } from "react";
import Reviews from "./Reviews";
import Gallery from "./Gallery";
import Contact from "./Contact";
import style from "../sass/Main.module.scss";
import residentialDefault from "../images/residentialDefault.jpg";
import commercialDefault from "../images/commercialWork.jpg";

export default function Main() {
  return (
    <>
      <div className={style.about}>
        <p className={style.aboutTitle}>15 Years of excellence</p>
        <div className={style.line}></div>
        <p className={style.aboutContent}>
          We are a fox valley based, down to earth service commited to
          excellence. Our dedication to craftsmanship promises the attention
          your property deserves
        </p>
      </div>
      <div className={style.offersSection}>
        <div className={style.residential}>
          <div className={style.resContent}>
            <div className={style.resTitleBox}>
              <i class="fas fa-home"></i>
              <p className={style.resTitle}>Residential</p>
            </div>
            <p className={style.resText}>
              We specialize in both interior and exterior painting in addition
              to staining to perfectly suit your home
            </p>
            <p className={style.seeMore}>See More</p>
          </div>
          <div className={style.resImgContainer}>
            <img
              className={style.offersImage1}
              src={residentialDefault}
              alt="residence"
            />
          </div>
        </div>
        <div className={style.commercial}>
          <div className={style.comImgContainer}>
            <img
              className={style.offerImage2}
              src={commercialDefault}
              alt="gas station"
            />
          </div>

          <div className={style.comContent}>
            <div className={style.comTitleBox}>
              <i class="fas fa-warehouse"></i>
              <p className={style.comTitle}>Commercial</p>
            </div>
            <p className={style.comText}>
              Our veteran level experience with commercial projects will deliver
              the results you deserve
            </p>
            <p className={style.seeMore}>See More</p>
          </div>
        </div>
      </div>
      <Reviews />
      <Contact />
      <Gallery />
    </>
  );
}
