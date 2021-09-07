import React from "react";
import "./Sidebar.css";

const SidebarItem = (props) => {
  return (
    <React.Fragment>
      <img
        src={props.imageUrl}
        alt=""
        class="img-fluid rounded-circle mb-2 mcdonalds_logo category_logo"
      />
      <h4 className="category_sidebar_name">{props.name}</h4>
    </React.Fragment>
  );
};

export default SidebarItem;
