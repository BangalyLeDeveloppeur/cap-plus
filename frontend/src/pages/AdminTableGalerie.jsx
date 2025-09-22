import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const AdminTableGalerie = () => {
  const [tablegalerie, setTableGalerie] = useState([]);
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const fetchImageGalerie = async () => {
    const sql = await axios("http://localhost:5000/api/galerie");
    return sql.data;
  };

  useEffect(() => {
    fetchImageGalerie();
  }, []);

  return <div></div>;
};

export default AdminTableGalerie;
