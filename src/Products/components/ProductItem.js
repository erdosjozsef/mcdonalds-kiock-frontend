import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import { cartActions } from "../../store/cart-slice";
import "./ProductItem.css";
import Modal from "../../Shared/components/Modal";

const ProductItem = (props) => {
  const [showModal, setShowModal] = useState(true);
  const dispatch = useDispatch();

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: 1,
        title: "hello",
        price: 12,
      })
    );
  };

  return (
    <React.Fragment>
      <div onClick={addToCartHandler} class="col-md-4">
        <img
          src={props.imageUrl}
          alt=""
          class="img-fluid rounded-circle product_image"
        />
        <h5 class="category_name">{props.name}</h5>
        <div class="top-right">${props.price}</div>
      </div>
      {showModal && <Modal />}
    </React.Fragment>
  );
};

export default ProductItem;
