import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductCard = ({ product }) => {

  //
  const [imageData, setImageData] = useState(null);

  //
  const getImage = (images) => {
    // console.log(product);
    // console.log(imageIds)
    console.log(images)
    axios.get("http://localhost:8080/product/images/" + images[0], { responseType: 'arraybuffer' })
      .then(response => {
        const base64Image = btoa(
          new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        setImageData(`data: image / jpeg; base64, ${ base64Image }`);
  }).catch (error => {
    console.error('Error fetching image:', error);
  });
}

//
useEffect(()=>{getImage(product.prodImageIds)},[])

  return (
    <div className="card">
      <img src={imageData} alt={product.productName} className="card-img-top"
       style={{
        maxHeight: "250px",
        width: "100%",
        objectFit: "contain",
        borderRadius: "10px",
      }} />
      <div className="card-body">
        <h5 className="card-title">{product.productName}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-price">₹{product.price}</p>
        <button className="btn btn-primary" >Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;