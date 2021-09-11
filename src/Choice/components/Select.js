import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { eatActions } from "../../store/eat-type";
import logo from "./logo.png";
import classes from "./Select.module.css";

const Select = () => {
  const dispatch = useDispatch();

  const setInEatHandler = () => {
    dispatch(
      eatActions.selectEatType({
        eatType: 1,
      })
    );
  };

  const setTakeOutHandler = () => {
    dispatch(
      eatActions.selectEatType({
        eatType: 2,
      })
    );
  };

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
          <div className="col">
            <p className={`${classes.subtitle} text-center`}>
              Where will you be eating today?
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm d-flex justify-content-around mb-5">
            <div className="imgContainer">
              <div>
                <ion-icon
                  className={`${classes.test}`}
                  name="fast-food-outline"
                ></ion-icon>
              </div>
              <Link to="/order">
                <div className={`${classes.imgButton}`}>
                  <button
                    onClick={setInEatHandler}
                    className={`${classes.action_button_eat}`}
                  >
                    Eat In
                  </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-sm d-flex justify-content-around mb-5">
            <div className="imgContainer">
              <div>
                <ion-icon name="bag-handle-outline"></ion-icon>
              </div>
              <Link to="order">
                <div className={`${classes.imgButton}`}>
                  <button
                    onClick={setTakeOutHandler}
                    className={`${classes.action_button_order}`}
                  >
                    Take Out
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
