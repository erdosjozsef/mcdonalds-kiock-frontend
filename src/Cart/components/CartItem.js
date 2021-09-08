import classes from "./CartItem.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const { name, quantity, total, price, id, imageUrl } = props.item;
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
      })
    );
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-2">
            <img
              src={imageUrl}
              alt={name}
              className={`rounded-circle ${classes.cart_image}`}
            />
          </div>
          <div
            className={`col-md-auto align-self-center ${classes.cart_product_name}`}
          >
            {quantity} x {name} <br />
            300 Cal ${price.toFixed(2) * quantity}
            <div className="row">
              <div className={`col p-3 ${classes.update_ing}`}>
                Want to change ingredients?
              </div>
            </div>
          </div>
          <div className="col col-lg-2 align-self-center">
            <button
              type="button"
              className={`btn btn-danger ${classes.customize_btn}`}
            >
              Customize
            </button>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-md-12">
            <div className="input-group">
              <div className="input-group-prepend">
                <button
                  onClick={removeItemHandler}
                  className={`btn btn-danger ${classes.in_dec}`}
                  type="submit"
                >
                  -
                </button>
              </div>
              <input
                value={quantity}
                type="text"
                disabled
                className={`${classes.product_quantity} text-center`}
              />
              <div className="input-group-append">
                <button
                  onClick={addItemHandler}
                  className={`btn btn-danger ${classes.in_dec}`}
                  type="submit"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartItem;
