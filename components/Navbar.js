import React, { useState } from "react";
import logo from "../images/RRandallLogo.png";
import callIcon from "../images/phoneCircleIcon.png";
import mailIcon from "../images/mail_icon.png";
import styles from "../sass/Navbar.module.scss";
import Modal from "react-modal";

Modal.setAppElement("body");

let subtitle;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    backgroundColor: "rgb(58, 58, 58)",
    borderRadius: "0px",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.37)",
  },
};

export default function Navbar() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "white";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles.navbarContainer}>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <div className={styles.modalHeader}>
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Contact Me</h2>
          <button onClick={closeModal}>
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div className={styles.contactInputs}>
          <form action="https://formspree.io/mnqpoygn" method="POST">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Name" />
            <label htmlFor="replyTo">Email</label>

            <input type="text" name="_replyto" placeholder="Email" />
            <label htmlFor="subject">Subject</label>

            <input type="text" name="subject" placeholder="Subject" />
            <label htmlFor="message">Info</label>

            <textarea
              className={styles.textArea}
              name="message"
              placeholder="Message"
              rows="6"
            ></textarea>
            <input className={styles.sendBtn} type="submit" value="Send" />
          </form>
        </div>
      </Modal>

      <div className={styles.logoContainer}>
        <a href="/">
          <img className={styles.navLogo} src={logo} alt="business logo" />
        </a>
      </div>
      <div className={styles.icons}>
        <a href="/gallery">
          <i className="far fa-images galleryIcon"></i>
        </a>

        <img
          className={styles.mailIcon}
          src={mailIcon}
          alt="mail icon"
          onClick={openModal}
        />
        <a href="tel:1-920-851-0083">
          <img className={styles.phoneIcon} src={callIcon} alt="phone icon" />
        </a>
      </div>
    </div>
  );
}
