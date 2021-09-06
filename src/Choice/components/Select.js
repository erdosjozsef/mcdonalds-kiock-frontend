import React from "react";
import logo from "./logo.png";
import classes from "./Select.module.css";
import eatin from "./eatin.svg";
import takeout from "./takeout.png";

const Select = () => {
  return (
    <div>
      <div className={`container ${classes.primary_block}`}>
        <div className="row">
          <div className="col d-flex justify-content-center mb-5">
            <img
              className={`${classes.logo} d-flex justify-content-center`}
              src={logo}
              alt="logo"
            />
          </div>
        </div>
        <div className="row">
          <div className="col ">
            <p className={`${classes.subtitle} text-center`}>
              Where will you be eating today?
            </p>
          </div>
        </div>
        <div class="row ">
          <div class="col-sm d-flex justify-content-around mb-5">
            <div class="imgContainer">
              <div>
                <ion-icon
                  className={`${classes.test}`}
                  name="fast-food-outline"
                ></ion-icon>
              </div>
              <div class={`${classes.imgButton}`}>
                <button className={`${classes.action_button_eat}`}>
                  Eat In
                </button>
              </div>
            </div>
          </div>

          <div className="col-sm d-flex justify-content-around mb-5">
            <div className="imgContainer">
              <div>
                <ion-icon name="bag-handle-outline"></ion-icon>
              </div>
              <div className={`${classes.imgButton}`}>
                <button className={`${classes.action_button_order}`}>
                  Take Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
