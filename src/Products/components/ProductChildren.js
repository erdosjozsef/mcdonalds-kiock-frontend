import React from "react";
import CartIcon from "../../Cart/components/CartIcon";

const ProductChildren = (props) => {
  return (
    <React.Fragment>
      <div class="col-md-9">
        <div class="row d-flex justify-content-start">{props.children}</div>
      </div>
      <CartIcon />
    </React.Fragment>
  );
};

export default ProductChildren;
