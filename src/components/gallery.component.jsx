import ImageContainer from "./imageContainer.component";
import "./gallery.component.css";



const Gallery =() => {
  
  const deleteItem = () => {
    
  }
  const images = require.context("../Assets", true);
  const imageList = images.keys().map(image => images(image));
  

  return (
    <div className="Gallery">
        <div className="heading">
            <h1>Gallery</h1>
            <p onClick={deleteItem}>Delete items</p>
        </div>
        <hr />
        <div className="image-container">
          {imageList.map((image, index) => (
            <ImageContainer key={index} image={image}/>
          ))}
        </div>
        
    </div>
  );
}

export default Gallery;