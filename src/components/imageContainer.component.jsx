import React from "react";
import "./imageContainer.component.css";

const ImageContainer = (props) => {
  const { image, onCheckboxChange, isChecked } = props;

  const handleCheckboxChange = () => {
    onCheckboxChange(image);
  };
  return (
    <div className="container">
      <input
        type="checkbox"
        className="overlay-checkbox"
        onChange={handleCheckboxChange}
        checked={isChecked}
      />
      <label htmlFor="checkbox" className="overlay-div"></label>
      <img src={props.image} alt="img" />
    </div>
  );
};

export default ImageContainer;
