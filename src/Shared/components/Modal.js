import React from "react";
import "./Modal.css";
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

const Modal = (props) => {
  const dispatch = useDispatch();

  // const addToCartHandler = () => {
  // dispatch(
  //   cartActions.addItemToCart({
  //     id: 1,
  //     name: "test",
  //     price: 33,
  //   })
  // );
  // props.onCloseModal();
  // };

  const addToCartHandler = (product) => () => {
    dispatch(
      cartActions.addItemToCart({
        id: product.id,
        name: product.name,
        price: product.price,
      })
    );
    props.onCloseModal();
  };

  return (
    <React.Fragment>
      <div className="container fixed-bottom w-50 cart_info">
        <div className="row cart_row">
          <div className="col-md-6 d-flex justify-content-start popup_title">
            Make your choice
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <button
              onClick={props.onCloseModal}
              type="button"
              className="btn btn-danger close_modal"
            >
              Back
            </button>
          </div>
        </div>
        <div className="nav-bar"></div>
        <div className="row">
          {props.extraItem.map((product) => (
            <div
              // onClick={addToCartHandler}
              // onClick={handleClick(product); }
              onClick={addToCartHandler(product)}
              key={product.id}
              className="col-md-4 select_product"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="img-fluid rounded-circle product_image_popup"
              />
              <h5 className="cart_product_name">{product.name}</h5>
              <div className="product_image_popup_price">${product.price}</div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
