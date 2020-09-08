import React from "react";
import style from "../sass/Contact.module.scss";

export default function Contact() {
  return (
    <>
      <div className={style.sectionContainer}>
        <div className={style.contactBox}>
          <p className={style.title}>Contact</p>
          <div className={style.emailBox}>
            <p className={style.email}>placeHolder@gmail</p>
          </div>
          <div className={style.phoneBox}>
            <p className={style.phoneNumber}>920-111-2222</p>
          </div>
          <div className={style.contactText}>
            Text or call us to get a free evaluation. We serve projects all over
            Wisconsin
          </div>
        </div>
        <div className={style.businessHours}>
          <div className={style.hoursBox}>
            <p className={style.hoursTitle}>Business Hours</p>
            <div className={style.row}>
              <p className={style.day}>Mon</p>
              <p className={style.hours}>8:00 AM - 8:00 PM</p>
            </div>
            <div className={style.row}>
              <p className={style.day}>Tue</p>
              <p className={style.hours}>8:00 AM - 8:00 PM</p>
            </div>
            <div className={style.row}>
              <p className={style.day}>Wed</p>
              <p className={style.hours}>8:00 AM - 8:00 PM</p>
            </div>
            <div className={style.row}>
              <p className={style.day}>Thu</p>
              <p className={style.hours}>8:00 AM - 8:00 PM</p>
            </div>
            <div className={style.row}>
              <p className={style.day}>Fri</p>
              <p className={style.hours}>8:00 AM - 8:00 PM</p>
            </div>
            <div className={style.row}>
              <p className={style.day}>Sat</p>
              <p className={style.hours}>8:00 AM - 8:00 PM</p>
            </div>
            <div className={style.row}>
              <p className={style.day}>Sun</p>
              <p className={style.hours}>8:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
