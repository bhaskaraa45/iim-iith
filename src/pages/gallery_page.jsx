import "../styles/GalleryStyles.css";
import GalleryData from "../services/GalleryData";
import GalleryCard from "../components/GalleryCard";
import React, { useState } from "react";


function GalleryPage() {
  const [isClicked, setIsClicked] = useState(false);

  const onOff = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <div className="galleryPage">
      <button className="allPhotosBtn" onClick={onOff}>
        {isClicked ? "Hide" : "See all Photos"}
      </button>

      {isClicked && (
        <div className="galleryCard">
          <GalleryCard info={GalleryData} />
        </div>
      )}
    </div>
  );
}

export default GalleryPage;
