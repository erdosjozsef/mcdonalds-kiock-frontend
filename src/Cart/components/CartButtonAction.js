import React from "react";
import { Link } from "react-router-dom";
import classes from "./CartButtonAction.module.css";

const CardButtonAction = () => {
  return (
    <React.Fragment>
      <div
        className={`
        container
        ${classes.information}
        w-50
        fixed-bottom
        d-flex
        justify-content-center
      `}
      >
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              2,000 calories a day is used for general nutrition advice, but
              calorie needs vary. Additional nutrition information available
              under upon request
            </p>
          </div>

          <div className="w-100"></div>

          <div className="col-md-6 d-flex justify-content-center">
            {" "}
            <Link to="/order">
              <button
                type="button"
                className={`btn btn-danger ${classes.act_buttons}`}
              >
                Go to the products
              </button>
            </Link>
          </div>

          <div className="col-md-6 d-flex justify-content-center">
            {" "}
            <Link to="/payment">
              <button
                type="button"
                className={`btn btn-danger ${classes.act_buttons}`}
              >
                Go to the order
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardButtonAction;
