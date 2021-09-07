import React from "react";

const ProductChildren = (props) => {
  return (
    <React.Fragment>
      <div class="col-md-9">
        <div class="row d-flex justify-content-start">{props.children}</div>
      </div>
    </React.Fragment>
  );
};

export default ProductChildren;
