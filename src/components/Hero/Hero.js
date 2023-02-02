import styles from "./Hero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

const Hero = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className={`${styles.heroWrapper} center`}>
        <div className={`${styles.heroInner}`}>
          <h2 className={styles.headerText}>Jadi expert bersama edspert.id</h2>
          <div className={styles.slogan}>
            <p>
              Tingkatkan skill dan pengetahuan bersama
              <br />
              para mentor terbaik di bidangnya, untuk siapkan karir impian anda.
            </p>
            <p>Lebih dari 200 orang telah bergabung di Edspert.id</p>
          </div>

          <div className={styles.inputLocation}>
            <i className="fas fa-map-marker-alt">
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            <input type="text" placeholder="Ketik Email Anda"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <i className={`${styles.arrow} fas fa-arrow-right`}></i>
          </div>
          <Button className="mt-4" variant="success" type="button" onClick={handleShow}>
            Submit
          </Button>
        </div>
        <div className={styles.heroImage} style={{ textAlign: "end" }}>
          <img
            src="https://d2d8wwwkmhfcva.cloudfront.net/x856/d2guulkeunn7d8.cloudfront.net/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg"
            alt=""
          />
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Subscribtion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Terima kasih,<br/><b>Email anda : {inputValue}</b><br/>telah terdaftar di Komunitas Belajar Bersama.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} className="d-none">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Hero;
