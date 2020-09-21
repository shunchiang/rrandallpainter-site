import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "../components/Navbar";
import style from "../sass/GalleryPage.module.scss";
import axios from "axios";
import Modal from "react-modal";
import Head from "next/head";

//modal styles
Modal.setAppElement("body");

const photoModalStyle = {
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

const uploadModalStyle = {
  content: {
    position: "absolute",
    bottom: "0",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflow: "auto",
    bottom: "auto",
    backgroundColor: "rgb(49 49 49)",
    borderRadius: "8px",
    borderColor: "transparent",
    maxHeight: "60vh",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.37)",
  },
};

export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [clickedImage, setClickedImage] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [uploadModalIsOpen, setUploadModal] = useState(false);
  const [logged, setLogged] = useState(null);
  const [imagesToUpload, setImagesToUpload] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [addingImage, setAddingImage] = useState(false);

  const onFileChange = (e) => {
    setAddingImage(true);
    setImagesToUpload([...imagesToUpload, e.target.files[0]]);
  };

  function openModal() {
    setIsOpen(true);
  }
  function openUploadModal() {
    setUploadModal(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function closeUploadModal() {
    setUploadModal(false);
  }

  const successToast = () =>
    toast.success(" Upload Success", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: style.toastSuccess,
    });

  const errorToast = () =>
    toast.error("Upload error, please refresh", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const warningToast = () =>
    toast.warn("No images selected", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  function deleteUpload(i) {
    if (previews.length > 1) {
      const temp1 = previews.splice(i, 1);
      const temp2 = imagesToUpload.splice(i, 1);
      setPreviews(previews.filter((el) => el !== temp1));

      setImagesToUpload(
        imagesToUpload.filter((el) => el !== temp2.splice(i, 1))
      );
      setAddingImage(false);
    } else {
      setPreviews([]);
      setImagesToUpload([]);
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!imagesToUpload.length) {
      return warningToast();
    }
    const formData = new FormData();
    imagesToUpload.forEach((e) => formData.append("images", e));
    for (const pair of formData.entries()) {
      console.log(pair[1]);
    }
    axios
      .post("http://localhost:3080/api/upload", formData)
      .then((res) => {
        console.log(res);
        successToast();
        closeUploadModal();
      })
      .catch((err) => {
        console.log(err);
        errorToast();
      });
  }

  useEffect(() => {
    if (imagesToUpload.length && addingImage === true) {
      const objectUrl = URL.createObjectURL(
        imagesToUpload[imagesToUpload.length - 1]
      );
      setPreviews([...previews, objectUrl]);
      console.log(previews);
      setAddingImage(false);
    }
    console.log("itu1", imagesToUpload);
  }, [imagesToUpload]);

  useEffect(() => {
    setLogged(localStorage.getItem("rrandall-authorization"));
    axios
      .get("http://localhost:3080/images/")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

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
      <Head>
        <title>R.Randall Gallery</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
          integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
          crossorigin="anonymous"
        />
      </Head>
      <ToastContainer />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={photoModalStyle}
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
      <Modal
        isOpen={uploadModalIsOpen}
        onRequestClose={closeUploadModal}
        style={uploadModalStyle}
        contentLabel="Modal"
        id={style.uploadModal}
      >
        <div className={style.uploadModal}>
          <form onSubmit={onSubmit}>
            <input
              type="file"
              name="imgCollection"
              className={style.uploadInput}
              onChange={onFileChange}
              multiple
            />
            <button className={style.submitBtn}>
              <i className="fas fa-plus"></i>Upload
            </button>
          </form>
          <div className={style.previews}>
            {previews.length > 0 &&
              previews.map((p, i) => (
                <div className={style.thumbsDiv}>
                  <i
                    class="far fa-times-circle"
                    onClick={() => {
                      deleteUpload(i);
                    }}
                  ></i>
                  <img className={style.previewThumb} src={p} />
                </div>
              ))}
          </div>
        </div>
      </Modal>
      <Navbar />
      <div className={style.galleryPage}>
        <h2 className={style.galleryTitle}>Full Gallery</h2>
        {logged && (
          <div className={style.uploadBtn} onClick={openUploadModal}>
            Upload
          </div>
        )}

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
