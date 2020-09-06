import React from "react";
import logo from "../images/RRLogo.png";
import styles from "../sass/Navbar.module.scss";

export default function () {
  return (
    <div className={styles.navbarContainer}>
      <img className={styles.navLogo} src={logo} alt="logo" />
    </div>
  );
}
