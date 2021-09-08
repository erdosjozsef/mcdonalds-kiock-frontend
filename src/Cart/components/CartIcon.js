import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./CartItem.module.css";

const CartIcon = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className={`col-md-1 ${classes.cart_sidebar}`}>
      <Link to="/cart">
        <ion-icon name="bag-outline"></ion-icon>
        <div className={`${classes.cart_number}`}>{cartQuantity}</div>
        <h5 className={`${classes.cart_text}`}>Cart</h5>
      </Link>
    </div>
  );
};

export default CartIcon;
