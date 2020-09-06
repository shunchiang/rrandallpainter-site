import React, { useState } from "react";
import styles from "../sass/Jumbo.module.scss";
import kitchenPhoto from "../images/kitchen1.png";

export default function Jumbo() {
  const [mainPhoto, setMainPhoto] = useState(kitchenPhoto);
  return (
    <div className={styles.jumboTron}>
      <img className={styles.heroImage} src={mainPhoto} alt="painting sample" />
      <div className={styles.jumboContent}>
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
