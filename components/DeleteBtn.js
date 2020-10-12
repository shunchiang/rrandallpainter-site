import React from "react";
import styles from "../sass/DeleteBtn.module.scss";
import deleteIcon from "../images/times-circle-solid.png";

export default function DeleteBtn({
  openDeleteModal,
  setClickedImageId,
  id,
  setClickedImage,
  url,
}) {
  return (
    <div
      className={styles.DeleteBtn}
      onClick={() => {
        openDeleteModal();
        setClickedImageId(id);
        setClickedImage(url);
      }}
    >
      <img src={deleteIcon} alt="edit icon" />
    </div>
  );
}
