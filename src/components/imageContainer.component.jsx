import React from 'react';
import './imageContainer.component.css';

const ImageContainer =(props) => {
  return (
    <div className="container"> 
      <input type="checkbox" className='overlay-checkbox'/>
      <label htmlFor="checkbox" className="overlay-div"></label>
      <img src={props.image} alt="hello" />
    </div>
  );
}

export default ImageContainer;