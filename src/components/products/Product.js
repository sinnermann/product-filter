import React from "react";
import "./Product.css";
//import productImg from "../../images/7.png";

const Product = ({ title, img, price }) => {
  return (
    <div className="product --card">
      <img src={img} alt="ProductImage" />
      <div className="--bg-primary --center-all --p">
        <h3 className="--text-light">{title}</h3>
        <div className="--flex-between --width-100">
          <p className="--text-light">{price}</p>
          <button className="--btn --btn-danger">Add To Card</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
