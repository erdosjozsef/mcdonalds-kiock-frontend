import React from "react";
import CartIcon from "../../Cart/components/CartIcon";

const ProductChildren = (props) => {
  return (
    <React.Fragment>
      <div className="col-md-9">
        <div className="row d-flex justify-content-start">{props.children}</div>
      </div>
      <CartIcon />
    </React.Fragment>
  );
};

export default ProductChildren;
