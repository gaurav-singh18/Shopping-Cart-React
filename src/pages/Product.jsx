import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <div className="addToCartBttn" onClick={() => addToCart(id)}>
        Add to Cart
      </div>
    </div>
  );
};
