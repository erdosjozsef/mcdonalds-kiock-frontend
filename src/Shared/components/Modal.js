import React from "react";

import "./Modal.css";
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

const Modal = (props) => {
  const dispatch = useDispatch();
  const { id, name, price } = props.extras;

  const addToCartHandler = () => {
    // console.log("id", test);
    console.log(props.extras[2].name);
    console.log(props.extras.id);

    dispatch(
      cartActions.addItemToCart({
        id: 1,
        name: "test",
        price: 33,
      })
    );
    props.onClose();
  };

  return (
    <div>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">MAKE YOUR CHOICE</h5>
            <button
              onClick={props.onClose}
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
          <div className="wrapper">
            {props.extras.map((extra) => (
              <div
                key={extra.id}
                onClick={addToCartHandler}
                id={extra.id}
                name={extra.name}
                price={extra.price}
              >
                {extra.name} - {extra.price}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
