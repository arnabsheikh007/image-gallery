import React, { useState } from "react";

import ImageContainer from "./imageContainer.component";
import "./gallery.component.css";

const Gallery = () => {
  const images = require.context("../Assets", true);
  const data = images.keys().map((image) => images(image));

  const [imageList, setImageList] = useState(data);
  const [selected, setSelected] = useState(0);
  const [selectedImages, setSelectedImages] = useState([]);

  const txt = `${selected} item${selected > 1 ? "s" : ""} selected`;
  const showDelete = selected > 0;

  const handleCheckboxChange = (image) => {
    if (selectedImages.includes(image)) {
      setSelectedImages(selectedImages.filter((img) => img !== image));
      setSelected(selected - 1);
    } else {
      setSelectedImages([...selectedImages, image]);
      setSelected(selected + 1);
    }
  };

  const deleteItem = () => {
    const updatedImage = imageList.filter(
      (img) => !selectedImages.includes(img)
    );
    setImageList(updatedImage);
    setSelectedImages([]);
    setSelected(0);
  };
  // console.log(imageList);
  return (
    <div className="Gallery">
      {showDelete ? (
        <div className="heading">
          <h2>{txt}</h2>
          <p onClick={deleteItem}>Delete items</p>
        </div>
      ) : (
        <div className="heading">
          <h2>Gallery</h2>
        </div>
      )}
      <hr />
      <div className="image-container">
        {imageList.map((image) => (
          <ImageContainer
            key={image}
            image={image}
            onCheckboxChange={handleCheckboxChange}
            isChecked={selectedImages.includes(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
