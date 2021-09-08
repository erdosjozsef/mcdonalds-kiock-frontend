import React, { useState } from "react";

import "./ProductItem.css";
import Modal from "../../Shared/components/Modal";

const ProductItem = (props) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <React.Fragment>
      <div onClick={showModalHandler} class="col-md-4">
        <img
          src={props.imageUrl}
          alt=""
          class="img-fluid rounded-circle product_image"
        />
        <h5 class="category_name">{props.name}</h5>
        <div class="top-right">${props.price}</div>
      </div>
      {showModal && (
        <Modal onCloseModal={hideModalHandler} extraItem={props.extraItem} />
      )}
    </React.Fragment>
  );
};

export default ProductItem;
