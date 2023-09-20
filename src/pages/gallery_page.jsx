import "../styles/GalleryStyles.css";
import GalleryData from "../services/GalleryData";
// import GalleryCard from "../components/GalleryCard";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleLeft,
  faCircleRight,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";

function GalleryPage() {
  const [isClicked, setIsClicked] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const onOff = () => {
    setIsClicked((prevState) => !prevState);
  };

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  const prevSlide = () => {
    slideNumber === 0 ? setSlideNumber( GalleryData.length - 1 ) : setSlideNumber(slideNumber - 1)
  }

  const nextSlide = () => {
    slideNumber === GalleryData.length - 1 ? setSlideNumber( 0 ) : setSlideNumber(slideNumber + 1)

  }

  return (
    <>
      {openModal && 
        <div className="sliderWrap">
          <FontAwesomeIcon icon={faCircleXmark} className="btnClose" onClick={handleCloseModal}/>
          <FontAwesomeIcon icon={faCircleLeft} className="btnLeft" onClick={prevSlide}/>
          <FontAwesomeIcon icon={faCircleRight} className="btnRight" onClick={nextSlide}/>

          <div className="fullScreenImage">
            <img src={GalleryData[slideNumber].photo} alt="" />
          </div>
        </div>
      }
      <div className="galleryPage">
        <button className="allPhotosBtn" onClick={onOff}>
          {isClicked ? "Hide" : "See all Photos"}
        </button>

        {isClicked && (
          <div className="galleryWrap">
            {GalleryData &&
              GalleryData.map((slide, index) => {
                return (
                  <div
                    className="single"
                    key={index}
                    onClick={() => handleOpenModal(index)}
                  >
                    <img src={slide.photo} alt="" />
                  </div>
                );
              })}
          </div>
         )}
      </div>
    </>
  );
}

export default GalleryPage;
