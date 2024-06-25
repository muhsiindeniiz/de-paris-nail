import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../config";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Navbar";
import { getDatabase, ref, push, get, remove } from "firebase/database";
import { useForm } from "react-hook-form";
import ImageViewerModal from "../components/ImageViewerModal";

const Gallery = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      }
    });

    // Fetch images from Firebase on component mount
    fetchImages();
  }, [navigate]);

  // Function to fetch images from Firebase
  const fetchImages = async () => {
    const db = getDatabase();
    const galleryRef = ref(db, "0/gallery");

    try {
      const snapshot = await get(galleryRef);
      if (snapshot.exists()) {
        const imageData = snapshot.val();
        // Convert object to array of images for easier rendering
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

  // Function to handle image upload
  const handleUpload = async (data) => {
    const file = data.image[0]; // Assuming image is uploaded as a single file
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async (e) => {
      const base64Image = e.target.result;
      const title = data.title;

      const db = getDatabase();
      const galleryRef = ref(db, "0/gallery");

      try {
        // Push the base64 encoded image and title to Firebase
        await push(galleryRef, { url: base64Image, title });
        reset(); // Reset form after successful upload
        fetchImages(); // Fetch images again to update the list
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };
  };

  const openImageViewer = (image) => {
    setSelectedImage(image);
  };

  // Function to handle closing the image viewer modal
  const closeImageViewer = () => {
    setSelectedImage(null);
  };

  const deleteImage = async (imageId) => {
    const db = getDatabase();
    const galleryRef = ref(db, `0/gallery/${imageId}`);

    try {
      await remove(galleryRef);
      fetchImages(); // Fetch images again to update the list
      closeImageViewer(); // Close modal after deletion
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container-fluid" style={{ flex: 1, marginBottom: 20 }}>
        <div className="row w-full w-100" style={{ height: "100vh" }}>
          <div className="col-lg-12">
            <h1 className="text-center mb-4">Gallery</h1>
            <form onSubmit={handleSubmit(handleUpload)}>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  Upload Image:
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  {...register("image", { required: true })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Image Title:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  {...register("title", { required: true })}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                style={{ background: "orange" }}
              >
                Upload
              </button>
            </form>

            <div
              class="row mt-10"
              style={{
                marginTop: "50px",
              }}
            >
              {images.map((image) => (
                <div class="col-sm-6 col-md-4 mb-3" key={image.id}>
                  <img
                    src={image.url}
                    alt={image.title}
                    onClick={() => openImageViewer(image)}
                    class="fluid img-thumbnail"
                    style={{
                      cursor: "pointer",
                    }}
                  />
                  <label
                    style={{
                      marginTop: 10,
                    }}
                  >
                    {image.title}
                  </label>

                  <div>
                    <button
                      className="w-100 btn mt-1"
                      style={{
                        background: "darkred",
                      }}
                      onClick={() => deleteImage(image.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {selectedImage && (
          <ImageViewerModal
            image={selectedImage}
            onDelete={deleteImage}
            onClose={closeImageViewer}
          />
        )}
      </div>
    </div>
  );
};

export default Gallery;
