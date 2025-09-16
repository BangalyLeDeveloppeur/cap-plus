import React, { useEffect, useState } from "react";
import axios from "axios";

const PhotosAccueil = () => {
  const [photos, setPhotos] = useState([]);
  console.log("photo");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/photos_accueil")
      .then((res) => setPhotos(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="photos-accueil">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-card">
          <img
            src={`http://localhost:5000/uploads/${photo.image}`}
            alt={photo.description}
            className="photo"
          />
          <p>{photo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PhotosAccueil;
