import React from "react";
import logo from "../images/RRandallLogo.png";
import callIcon from "../images/phoneCircleIcon.png";
import mailIcon from "../images/mail_icon.png";
import styles from "../sass/Navbar.module.scss";

export default function () {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logoContainer}>
        <img className={styles.navLogo} src={logo} alt="business logo" />
      </div>
      <div className={styles.icons}>
        <img className={styles.mailIcon} src={mailIcon} alt="mail icon" />
        <img className={styles.phoneIcon} src={callIcon} alt="phone icon" />
      </div>
    </div>
  );
}
