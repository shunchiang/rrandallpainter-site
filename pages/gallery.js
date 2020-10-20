import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

import Navbar from "../components/Navbar";
import EditBtn from "../components/EditBtn";
import DeleteBtn from "../components/DeleteBtn";
import EditTags from "../components/Modal_EditTags";
import style from "../sass/GalleryPage.module.scss";
import axios from "axios";
import Modal from "react-modal";
import Head from "next/head";
import cancelIcon from "../images/times-circle-solid.png";
import DeleteModal from "../components/DeleteModal";

import useWindowSize from "../utils/useWindowSize";
import { Tags } from "../utils/tags";

import {
  photoModalStyle,
  uploadModalStyle,
  tagsModalStyle,
} from "../utils/modalStyles";

import { successToast, errorToast, warningToast } from "../utils/toasts";

Modal.setAppElement("body");

export default function Gallery() {
  // windowSize Custom Hook
  const size = useWindowSize();

  // Modal Styles - Responsives Sizing
  photoModalStyle.content.width = size.width <= 1024 ? "95%" : "60%";
  uploadModalStyle.content.width = size.width <= 1024 ? "95%" : "60%";
  tagsModalStyle.content.width = size.width <= 1024 ? "95%" : "60%";

  //state declarations
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryTags, setGalleryTags] = useState([]);
  const [clickedImage, setClickedImage] = useState("");
  const [clickedImageId, setClickedImageId] = useState("");
  const [publicIds, setPublicIds] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [uploadModalIsOpen, setUploadModal] = useState(false);
  const [tagsModalIsOpen, setTagsModal] = useState(false);
  const [deleteModalIsOpen, setDeleteModal] = useState(false);
  const [logged, setLogged] = useState(null);
  const [imagesToUpload, setImagesToUpload] = useState([]);
  const [clickedDone, setClickedDone] = useState(false);
  const [stagedImageIndex, setStagedImageIndex] = useState(0);
  const [preview, setPreview] = useState(null);
  const [thumbs, setThumbs] = useState([]);
  const [addingImage, setAddingImage] = useState(false);
  const [tags, setTags] = useState([]);
  const [tagsLoaded, setTagsLoaded] = useState(false);
  const [inputKey, setInputkey] = useState();
  const [category, setActiveCategory] = useState("All");

  //variable and function declarations
  const allTags = Tags;

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

  function openTagsModal() {
    setTagsModal(true);
  }

  function openDeleteModal() {
    setDeleteModal(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function closeUploadModal() {
    setUploadModal(false);
  }

  function closeDeleteModal() {
    setDeleteModal(false);
  }

  function closeTagsModal() {
    setTagsModal(false);
  }

  //tagging functions

  function addTag(t, i) {
    if (!tags[i]) {
      setTags([...tags, (tags[i] = [t])]);
    } else {
      const temp = tags[i];
      setTags(
        tags.map((arr, index) => {
          if (index === i) {
            return (tags[i] = temp.concat(t));
          } else {
            return arr;
          }
        })
      );
    }
    console.log(tags);
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
      return warningToast("No images selected");
    }
    const formData = new FormData();
    imagesToUpload.forEach((e, i) => {
      formData.append("images", e);
      formData.append("tags", tags[i]);
      console.log(tags[i]);
    });
    for (const pair of formData.entries()) {
      console.log(pair[1], pair[2]);
    }

    axiosInstance
      .post(
        "https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/api/upload",
        formData
      )
      .then((res) => {
        console.log(res);
        successToast("Upload Success");
        closeUploadModal();
        setPreview(null);
        setImagesToUpload([]);
      })
      .catch((err) => {
        console.log(err);
        errorToast("Upload error, please refresh");
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
    axiosInstance
      .get(
        "https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/images/search"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  //initialize
  useEffect(() => {
    axiosInstance
      .post(
        "https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/images/",
        {}
      )
      .then((res) => {
        console.log(res.data);
        setGalleryImages(
          res.data.map((a, i) => {
            return { id: i, url: a };
          })
        );
        return axiosInstance.get(
          "https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/images/"
        );
      })
      .then((res) => {
        console.log(res.data);
        setPublicIds([...res.data]);
        return axiosInstance.post(
          "https://sev3k1liw3.execute-api.us-east-1.amazonaws.com/dev/api/tags",
          {
            ids: res.data,
          }
        );
      })
      .then((res) => {
        console.log("**tags", res.data);
        setGalleryTags(res.data);
      })
      .catch((err) => console.log("cannot get tags", err))
      .catch((err) => {
        console.log("cannot GET", err);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (galleryTags.length > 0) {
      setGalleryImages(
        galleryImages.map((a, i) => {
          return { id: a.id, url: a.url, tags: galleryTags[i] };
        })
      );
      setTagsLoaded(true);
    }
  }, [galleryTags]);

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
        <img
          src={clickedImage}
          alt="gallery modal"
          className={style.clickedImage}
        />
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
                    <img className={style.previewThumb} src={p} tabIndex={i} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={tagsModalIsOpen}
        onRequestClose={closeTagsModal}
        style={tagsModalStyle}
        contentLabel="Modal"
      >
        <EditTags img={clickedImage} id={clickedImageId} />
      </Modal>
      <DeleteModal
        isOpen={deleteModalIsOpen}
        galleryImages={galleryImages}
        setGalleryImages={setGalleryImages}
        onRequestClose={closeDeleteModal}
        id={clickedImageId}
        url={clickedImage}
      />
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
            {category === "All"
              ? galleryImages.map((el, index) => {
                  return (
                    <div className={style.item}>
                      <img
                        src={el.url}
                        className={style.galleryImage}
                        alt={`picture at index ${index}`}
                        onClick={() => {
                          openModal();
                          setClickedImage(el.url);
                        }}
                      />
                      {logged && (
                        <>
                          <div
                            onClick={() => {
                              openTagsModal();
                              setClickedImage(el.url);
                              setClickedImageId(publicIds[index]);
                              console.log(clickedImageId);
                            }}
                          >
                            <EditBtn key={`edit-btn-${index}`} />
                          </div>
                          <DeleteBtn
                            key={`delete-btn-${index}`}
                            openDeleteModal={openDeleteModal}
                            setClickedImageId={setClickedImageId}
                            id={publicIds[index]}
                            setClickedImage={setClickedImage}
                            url={el.url}
                          />
                        </>
                      )}
                    </div>
                  );
                })
              : category !== "ALL" && tagsLoaded === true
              ? galleryImages
                  .filter((el) => {
                    return el.tags.includes(category);
                  })
                  .map((el, index) => {
                    return (
                      <div className={style.item}>
                        <img
                          src={el.url}
                          className={style.galleryImage}
                          alt={`picture at index ${index}`}
                          onClick={() => {
                            openModal();
                            setClickedImage(el.url);
                            setClickedImageId(publicIds[index]);
                          }}
                        />
                      </div>
                    );
                  })
              : null}
          </div>
        </div>
      </div>
    </>
  );
}
