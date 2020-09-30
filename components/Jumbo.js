import React, { useState, useEffect } from "react";
import EditBtn from "./EditBtn";
// import axios from "axios";
import styles from "../sass/Jumbo.module.scss";
import kitchenPhoto from "../images/kitchen1.png";
import desktopKitchen from "../images/desktopKitchen.jpg";
import useWindowSize from "../utils/useWindowSize";

export default function Jumbo() {
  // Helper to grab window size
  const size = useWindowSize();
  const [mainPhoto, setMainPhoto] = useState(kitchenPhoto);
  const [logged, setLogged] = useState(null);

  // Grab admin logged in state
  useEffect(() => {
    setLogged(localStorage.getItem("rrandall-authorization"));
  });

  // -
  useEffect(() => {
    if (size.width > 850) {
      setMainPhoto(desktopKitchen);
    } else {
      setMainPhoto(kitchenPhoto);
    }
  }, [size.width]);

  return (
    <div className={styles.jumboTron}>
      <img className={styles.heroImage} src={mainPhoto} alt="painting sample" />
      <div className={styles.jumboContent}>
        <EditBtn/>
        <p className={styles.jumboText}>
          Premium craftsmanship
          <br />
          Competitive value
          <br />
          Maximum satisfaction
        </p>
        <button className={styles.ctaBtn}>Get Quote</button>
      </div>
    </div>
  );
}
