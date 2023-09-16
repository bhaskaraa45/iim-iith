// import GalleryData from "../services/GalleryData";
import "../styles/GalleryCardStyles.css";

function GalleryCard(props) {
  return (
    <>
      {props.info.map((value) => (
        // <div className="photoContainer">
          <div className="galleryStyles">
            <img src={value.photo} alt="" className="gallery" />
          </div>
        // </div>
      ))}
    </>
  );
}

export default GalleryCard;
