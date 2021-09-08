import React from "react";
import classes from "./Modal.module.css";
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

const Modal = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = (product) => () => {
    dispatch(
      cartActions.addItemToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
      })
    );
    props.onCloseModal();
  };

  return (
    <React.Fragment>
      <div className={`container fixed-bottom w-50 ${classes.food_option}`}>
        <div className={`row ${classes.cart_row}`}>
          <div
            className={`col-md-6 d-flex justify-content-start ${classes.popup_title}`}
          >
            Make your choice
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <button
              onClick={props.onCloseModal}
              type="button"
              className={`btn btn-danger ${classes.close_modal}`}
            >
              Back
            </button>
          </div>
        </div>
        <div className={`${classes.nav_bar}`}></div>
        <div className="row">
          {props.extraItem.map((product) => (
            <div
              onClick={addToCartHandler(product)}
              key={product.id}
              className={`col-md-4 ${classes.select_product}`}
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className={`img-fluid rounded-circle ${classes.product_image_popup}`}
              />
              <h5 className={`${classes.cart_product_name}`}>{product.name}</h5>
              <div className={`${classes.product_image_popup_price}`}>
                ${product.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
