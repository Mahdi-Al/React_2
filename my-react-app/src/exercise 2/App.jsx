import "./App.css";
import CardGallery from "./GalleryCard";
function Gallery() {
  return (
    <>
      <h1>
        Image Gallery <br />{" "}
        <span style={{ color: "#79c0ff" }}> React.js </span>
      </h1>
      <section>
        <CardGallery />
      </section>
    </>
  );
}

export default Gallery;
