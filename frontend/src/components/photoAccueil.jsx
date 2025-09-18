import axios from "axios";
import React, { useEffect, useState } from "react";

const PhotosAccueil = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/photos_accueil")
      .then((res) => setPhotos(res.data))
      .catch((err) => console.error(err));
  }, []);

  console.log(photos);

  return (
    <div className="photos-accueil">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-card">
          <img
            src={`http://localhost:5000${photo.image_url}`}
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
