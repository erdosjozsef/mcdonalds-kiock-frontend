import React from "react";
import Banner from "../../Shared/components/Banner";

const Cart = () => {
  return (
    <React.Fragment>
      <Banner />
      <div class="container fixed-bottom w-50 cart_info">
        <div class="row cart_row">
          <div class="col-md-6">Make your choice</div>
          <div class="col-md-6 d-flex justify-content-end">
            <button type="button" class="btn btn-danger close_modal">
              Back
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <img
              src="./img/hamburger.webp"
              alt=""
              class="img-fluid rounded-circle product_image_popup"
            />
            <h5 class="cart_product_name">Happy Meals</h5>

            <div class="product_image_popup_price">$15</div>
          </div>
          <div class="col-md-4">
            <img
              src="./img/hamburger.webp"
              alt=""
              class="img-fluid rounded-circle product_image_popup"
            />
            <h5 class="cart_product_name">Happy Meals</h5>
            <div class="product_image_popup_price">$15</div>
          </div>
          <div class="col-md-4">
            <img
              src="./img/hamburger.webp"
              alt=""
              class="img-fluid rounded-circle product_image_popup"
            />
            <h5 class="cart_product_name">Happy Meals</h5>
            <div class="product_image_popup_price">$15</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Cart;
