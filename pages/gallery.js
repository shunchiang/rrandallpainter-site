import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "../components/Navbar";
import style from "../sass/GalleryPage.module.scss";
import axios from "axios";
import Modal from "react-modal";
import Head from "next/head";
import cancelIcon from "../images/times-circle-solid.png";

import useWindowSize from "../utils/useWindowSize";

Modal.setAppElement("body");

export default function Gallery() {
  // windowSize custom hook
  const size = useWindowSize();
  //modal styles

  const photoModalStyle = {
    content: {
      width: "60%",
      top: "10%",
      left: "20%",
      bottom: "auto",
      marginRight: "-50%",
      backgroundColor: "transparent",
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
      top: "35%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      overflow: "auto",
      bottom: "auto",
      backgroundColor: "rgb(49 49 49)",
      borderRadius: "0",
      borderColor: "transparent",
      maxHeight: "80vh",
      width: size.width < 400 ? "85%" : "70%",
    },
    overlay: {
      backgroundColor: "rgba(255, 255, 255, 0.37)",
    },
  };
  //state declarations
  const [galleryImages, setGalleryImages] = useState([]);
  const [clickedImage, setClickedImage] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [uploadModalIsOpen, setUploadModal] = useState(false);
  const [logged, setLogged] = useState(null);
  const [imagesToUpload, setImagesToUpload] = useState([]);
  const [clickedDone, setClickedDone] = useState(false);
  const [stagedImageIndex, setStagedImageIndex] = useState(0);
  const [preview, setPreview] = useState(null);
  const [thumbs, setThumbs] = useState([]);
  const [addingImage, setAddingImage] = useState(false);
  const [tags, setTags] = useState([]);
  const [inputKey, setInputkey] = useState();
  const [category, setActiveCategory] = useState("All");

  //variable and function declarations
  const allTags = [
    "Residential",
    "Commercial",
    "Interior",
    "Exterior",
    "Cabinets",
  ];

  const allCategories = ["All"].concat(allTags);

  const axiosInstance = axios.create({
    withCredentials: true,
  });

  //Modal functions

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

  //tagging functions

  function addTag(t, i) {
    if (!tags[i]) {
      setTags([...tags, (tags[i] = [t])]);
    } else {
      const temp = tags[i];
      setTags(
        tags.map((arr, index) => {
          if (index == i) {
            return (arr[i] = temp.concat(t));
          } else {
            return arr;
          }
        })
      );
    }
  }

  function cancelTag(t, i) {
    setTags(
      tags.map((arr, index) => {
        if (index === i) {
          return arr.filter((tag) => tag !== t);
        } else {
          return arr;
        }
      })
    );
  }

  // toast functions

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

  // file functions
  const resetInput = () => {
    let sign = Date.now();
    setInputkey(sign);
  };
  const onFileChange = (e) => {
    setClickedDone(false);
    setAddingImage(true);
    setImagesToUpload([...imagesToUpload, e.target.files[0]]);
    setStagedImageIndex(imagesToUpload.length - 1);
  };

  function deleteUpload(i) {
    if (thumbs.length > 1) {
      if (preview === thumbs[i]) {
        setPreview(thumbs[i - 1]);
      }
      const temp1 = thumbs.splice(i, 1);
      const temp2 = imagesToUpload.splice(i, 1);
      const temp3 = tags.splice(i, 1);
      setThumbs(thumbs.filter((el) => el !== temp1));
      setImagesToUpload(
        imagesToUpload.filter((el) => el !== temp2.splice(i, 1))
      );
      setTags(tags.filter((t) => t !== temp3));
      setAddingImage(false);
    } else {
      setTags([]);
      setThumbs([]);
      setImagesToUpload([]);
      setPreview(null);
      console.log("preview", preview);
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!imagesToUpload.length) {
      return warningToast();
    }
    const formData = new FormData();
    imagesToUpload.forEach((e, i) => {
      formData.append("images", e);
      formData.append("tags", tags[i]);
    });
    for (const pair of formData.entries()) {
      console.log(pair[1]);
    }

    axiosInstance
      .post("http://localhost:3080/api/upload", formData)
      .then((res) => {
        console.log(res);
        successToast();
        closeUploadModal();
        setPreview(null);
        setImagesToUpload([]);
      })
      .catch((err) => {
        console.log(err);
        errorToast();
      });
  }

  // Side effects

  useEffect(() => {
    if (imagesToUpload.length && addingImage === true) {
      const objectUrl = URL.createObjectURL(
        imagesToUpload[imagesToUpload.length - 1]
      );
      setPreview(objectUrl);
      setStagedImageIndex(imagesToUpload.length - 1);
      setAddingImage(false);
      console.log("***", imagesToUpload);
    }
  }, [imagesToUpload]);

  useEffect(() => {
    setLogged(localStorage.getItem("rrandall-authorization"));
    axios
      .get("http://localhost:3080/images/search")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  //initialize
  useEffect(() => {
    axiosInstance
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
        return axiosInstance.get("http://localhost:3080/images/");
      })
      .then((res) => {
        console.log(res.data);
        return axiosInstance.post("http://localhost:3080/api/tags", {
          ids: res.data,
        });
      })
      .then((res) => console.log("**tags", res.data))
      .catch((err) => console.log("cannot get tags", err))
      .catch((err) => {
        console.log("cannot GET", err);
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
              key={inputKey || ""}
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
          <div className={preview ? style.previews : null}>
            {preview && (
              <div className={style.staging}>
                <div className={style.tags}>
                  <p className={style.tagsTitle}>Tags</p>

                  {!tags[stagedImageIndex]
                    ? allTags.map((t) => (
                        <div
                          className={style.tagRow}
                          onClick={() => {
                            addTag(t, stagedImageIndex);
                          }}
                        >
                          <i className="fas fa-tag"></i>
                          <p>{t}</p>
                        </div>
                      ))
                    : allTags
                        .filter((t) => {
                          for (
                            let i = 0;
                            i < tags[stagedImageIndex].length;
                            i++
                          ) {
                            if (t === tags[stagedImageIndex][i]) {
                              return false;
                            }
                          }
                          return true;
                        })
                        .map((t) => (
                          <div
                            className={style.tagRow}
                            onClick={() => {
                              addTag(t, stagedImageIndex);
                            }}
                          >
                            <i className="fas fa-tag"></i>
                            <p>{t}</p>
                          </div>
                        ))}
                  <button
                    disabled={
                      !tags[stagedImageIndex] || clickedDone ? "disabled" : null
                    }
                    className={
                      tags[stagedImageIndex]
                        ? tags[stagedImageIndex].length === 0
                          ? style.disable
                          : style.doneBtn
                        : style.disable
                    }
                    onClick={() => {
                      setThumbs([...thumbs, preview]);
                      setClickedDone(true);
                      resetInput();
                    }}
                  >
                    Done
                  </button>
                </div>
                <div className={style.StagingPicDiv}>
                  {preview && (
                    <img
                      style={style.stagingPic}
                      src={preview}
                      alt="staging preview"
                    />
                  )}

                  <div className={style.activeTags}>
                    {tags[stagedImageIndex] &&
                      tags[stagedImageIndex].map((t) => (
                        <div
                          className={style.tagRow}
                          onClick={() => {
                            cancelTag(t, stagedImageIndex);
                          }}
                        >
                          <i className={`${style.taggedIcon} fas fa-times`}></i>
                          <p className={style.tagged}>{t}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}
            <div className={style.mainthumbsDiv}>
              {thumbs.length > 0 && (
                <div className={style.thumbsDiv}>
                  <label for="file-upload" class="custom-file-upload">
                    <p>Add More</p>
                    <i className={`fas fa-plus ${style.plusIcon}`}></i>
                  </label>
                  <input id="file-upload" type="file" onChange={onFileChange} />
                </div>
              )}
              {thumbs.length > 0 &&
                thumbs.map((p, i) => (
                  <div
                    className={style.thumbsDiv}
                    onClick={() => {
                      setStagedImageIndex(i);
                      thumbs.length > 1 && setPreview(thumbs[i]);
                    }}
                  >
                    <img
                      className={style.crossIcon}
                      onClick={() => {
                        deleteUpload(i);
                      }}
                      src={cancelIcon}
                      alt="exit"
                    />
                    <img className={style.previewThumb} src={p} tabindex={i} />
                  </div>
                ))}
            </div>
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
        <div className={style.categories}>
          {allCategories.map((c, i) => {
            return (
              <div
                className={
                  category === c
                    ? `${style.tagBtn} ${style.activeTagBtn}`
                    : style.tagBtn
                }
                onClick={() => {
                  setActiveCategory(c);
                }}
              >
                {c}
              </div>
            );
          })}
        </div>
        <div className={style.grid}>
          <div className={style.rows}>
            {galleryImages.map((url, index) => {
              return (
                <div className={style.item}>
                  <img
                    src={url}
                    className={style.galleryImage}
                    alt={`picture at index ${index}`}
                    onClick={() => {
                      openModal();
                      setClickedImage(url);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
