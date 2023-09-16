import "../styles/GalleryStyles.css";
import GalleryData from "../services/GalleryData";
import GalleryCard from "../components/GalleryCard";

function GalleryPage() {
  return (
    <div className="galleryPage">
      <div className="galleryCard">
        <GalleryCard info={GalleryData} />
      </div>
    </div>
  );
}

export default GalleryPage;
