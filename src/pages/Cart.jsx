import React from "react";
import { useContext } from "react";
import "./Cart.css";
import { ShopContext } from "../context/ShopContext";
import { PRODUCTS } from "../Products";
import { CartItem } from "./CartItem";
import { Navigate, useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Cart Empty</h1>
      )}
    </div>
  );
}

export default Cart;
