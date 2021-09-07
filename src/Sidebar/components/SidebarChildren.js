import React from "react";
import Products from "../../Products/components/Products";
import "./Sidebar.css";
import logo from "./logo.png";

const SidebarChildren = (props) => {
  return (
    <React.Fragment>
      <div class="container bg"></div>
      <div class="container text-center">
        <div className="row">
          <div class="col-md-2 sidebar">
            <img
              src={logo}
              alt=""
              class="img-fluid rounded-circle mb-2 mcdonalds_logo"
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
