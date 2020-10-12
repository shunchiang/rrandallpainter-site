import React from "react";
import Modal from "react-modal";
import axios from "axios";
import { deleteModalStyle } from "../utils/modalStyles";
import { successToast, errorToast } from "../utils/toasts";

import style from "../sass/DeleteModal.module.scss";

const axiosInstance = axios.create({
  withCredentials: true,
});

export default function DeleteModal({
  isOpen,
  onRequestClose,
  id,
  setGalleryImages,
  url,
  galleryImages,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={deleteModalStyle}
      contentLabel="Modal"
    >
      <div className={style.deleteModalDiv}>
        <p>Are you sure you want to delete this image?</p>
        <div className={style.btnRow}>
          <button
            className={style.confirmBtn}
            onClick={() => {
              const idsArray = [];
              idsArray.push(id);
              axiosInstance
                .delete(
                  "https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/api/delete",
                  { data: idsArray },
                  {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                )
                .then((res) => {
                  console.log(res.data);
                  successToast("Image Deleted");
                  setGalleryImages(
                    galleryImages.filter((el) => el.url !== url)
                  );
                })
                .catch((err) => {
                  console.log(err);
                  errorToast("Delete Failed");
                  console.log("ID", id);
                });
            }}
          >
            Confirm
          </button>
          <button className={style.deleteBtn} onClick={onRequestClose}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}
