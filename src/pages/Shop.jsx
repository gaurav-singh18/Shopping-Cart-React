import React from "react";
import "./Shop.css";
// import Product from "./Product";
import { Product } from "./Product";
import { PRODUCTS } from "../Products";

function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Tech Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
