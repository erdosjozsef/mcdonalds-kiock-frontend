import React from "react";

import Products from "../../Products/components/Products";
import Categories from "../../Categories/pages/Categories";

const Order = () => {
  const classes = 1;
  return (
    <div>
      <div className={`container ${classes.primary_block}`}>
        <div className="row">
          <Categories />
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Order;
