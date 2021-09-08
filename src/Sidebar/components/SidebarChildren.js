import React from "react";
import Products from "../../Products/components/Products";
import Banner from "../../Shared/components/Banner";
import "./Sidebar.css";
import logo from "./logo.png";

const SidebarChildren = (props) => {
  return (
    <React.Fragment>
      <Banner />
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
