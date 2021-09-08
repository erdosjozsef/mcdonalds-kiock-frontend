import "./CartItem.css";
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
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col col-lg-2">
            <img
              src={imageUrl}
              alt="{product.name}"
              class="rounded-circle cart_image"
            />
          </div>
          <div class="col-md-auto align-self-center cart_product_name">
            {quantity} x {name} <br />
            300 Cal ${price.toFixed(2) * quantity}
            <div class="row">
              <div class="col p-3 update_ing">Want to change ingredients?</div>
            </div>
          </div>
          <div class="col col-lg-2 align-self-center 3">
            <button type="button" class="btn btn-danger customize_btn">
              Customize
            </button>
          </div>
        </div>
      </div>
      <div class="container d-flex justify-content-center">
        <div class="row">
          <div class="col-md-12">
            <div class="input-group">
              <div class="input-group-prepend">
                <button
                  onClick={removeItemHandler}
                  class="btn btn-danger in_dec"
                  type="submit"
                >
                  -
                </button>
              </div>
              <input
                value={quantity}
                type="text"
                disabled
                class="product_quantity text-center"
                aria-label="Amount (to the nearest dollar)"
              />
              <div class="input-group-append">
                <button
                  onClick={addItemHandler}
                  class="btn btn-danger in_dec"
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
