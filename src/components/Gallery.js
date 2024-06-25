import React, { useEffect, useState } from "react";
import image1 from "../assets/images/700x700_1.jpg";
import { get, getDatabase, ref } from "firebase/database";

const Gallery2 = () => {
  const [images, setImages] = useState([]);
  const fetchImages = async () => {
    const db = getDatabase();
    const galleryRef = ref(db, "0/gallery");

    try {
      const snapshot = await get(galleryRef);
      if (snapshot.exists()) {
        const imageData = snapshot.val();
        const imageArray = Object.keys(imageData).map((key) => ({
          id: key,
          ...imageData[key],
        }));
        setImages(imageArray);
      } else {
        console.log("No images found");
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <section id="gallery-2" className="pt-100 gallery-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-60">
              {/* Section ID */}
              <span className="section-id">Images Gallery</span>

              {/* Title */}
              <h2 className="h2-lg">Stop Time. Stay Beautiful</h2>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
          {images &&
            images.map((img, key) => (
              <div className="col" key={key}>
                <div id="img-2-1" className="gallery-image">
                  <a className="image-link" href={img.url}>
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src={img.url}
                        alt="gallery-image"
                      />
                      <div className="item-overlay"></div>

                      <div className="image-description white--color">
                        <div className="image-caption">
                          <h5 className="h5-lg">{img.title}</h5>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery2;
