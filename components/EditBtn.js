import React from "react";
import styles from "../sass/EditBtn.module.scss";
import EditIcon from "../images/pen-square-solid.svg";

export default function EditBtn() {

  return(
  <div className={styles.EditBtn}>
    <img src={EditIcon} alt="edit icon"/>
  </div>
  )
}
