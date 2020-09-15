import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import style from "../sass/GalleryPage.module.scss";
import axios from "axios";
import Modal from "react-modal";

//modal styles
const customStyles = {
  content: {
    width: "60%",
    top: "10%",
    left: "20%",
    bottom: "auto",
    marginRight: "-50%",
    backgroundColor: "transparent",
    borderRadius: "8px",
    borderColor: "transparent",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.37)",
  },
};

export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [clickedImage, setClickedImage] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    axios
      .post(
        "http://localhost:3080/images/",
        {},
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
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
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <div>
          <img
            src={clickedImage}
            alt="gallery modal"
            className={style.clickedImage}
          />
        </div>
      </Modal>
      <Navbar />
      <div className={style.galleryPage}>
        <h2 className={style.galleryTitle}>Full Gallery</h2>
        <div className={style.grid}>
          <div className={style.rows}>
            {galleryImages.map((url, index) => {
              return (
                <img
                  src={url}
                  className={style.galleryImage}
                  alt={`picture at index ${index}`}
                  onClick={() => {
                    openModal();
                    setClickedImage(url);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
