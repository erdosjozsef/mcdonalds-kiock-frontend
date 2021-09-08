import React from "react";
import "./Modal.css";
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";
import productImage from "./hamburger.webp";
const Modal = (props) => {
  const dispatch = useDispatch();
  // const { id, name, price } = props.extras;

  const addToCartHandler = () => {
    // console.log("id", test);
    console.log(props.extras[2].name);
    console.log(props.extras.id);

    dispatch(
      cartActions.addItemToCart({
        id: 1,
        name: "test",
        price: 33,
      })
    );
    props.onClose();
  };

  return (
    <React.Fragment>
      <div className="container fixed-bottom w-50 cart_info">
        <div className="row cart_row">
          <div className="col-md-6 d-flex justify-content-start popup_title">
            Make your choice
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <button type="button" className="btn btn-danger close_modal">
              Back
            </button>
          </div>
        </div>
        <div className="nav-bar"></div>
        <div className="row">
          <div className="col-md-4">
            <img
              src={productImage}
              alt=""
              className="img-fluid rounded-circle product_image_popup"
            />
            <h5 className="cart_product_name">Happy Meals</h5>

            <div className="product_image_popup_price">$15</div>
          </div>
          <div className="col-md-4">
            <img
              src={productImage}
              alt=""
              className="img-fluid rounded-circle product_image_popup"
            />
            <h5 className="cart_product_name">Happy Meals</h5>
            <div className="product_image_popup_price">$15</div>
          </div>
          <div className="col-md-4">
            <img
              src={productImage}
              alt=""
              className="img-fluid rounded-circle product_image_popup"
            />
            <h5 className="cart_product_name">Happy Meals</h5>
            <div className="product_image_popup_price">$15</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
