import React from "react";
import Products from "../../Products/components/Products";
import Banner from "../../Shared/components/Banner";
import classes from "./Sidebar.module.css";
import logo from "./logo.png";

const SidebarChildren = (props) => {
  return (
    <React.Fragment>
      <Banner />
      <div class="container text-center">
        <div className="row">
          <div class={`col-md-2 ${classes.sidebar}`}>
            <img
              src={logo}
              alt="mcdonalds"
              class={`img-fluid rounded-circle mb-2 ${classes.mcdonalds_logo}`}
            />
            <h4>McDonald's</h4>
            {props.children}
          </div>
          <Products />
        </div>
      </div>
    </React.Fragment>
  );
};
export default SidebarChildren;
