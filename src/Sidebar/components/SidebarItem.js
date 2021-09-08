import React from "react";
import classes from "./Sidebar.module.css";

const SidebarItem = (props) => {
  return (
    <React.Fragment>
      <img
        src={props.imageUrl}
        alt=""
        class={`img-fluid rounded-circle mb-2 ${classes.mcdonalds_logo} ${classes.category_logo}`}
      />
      <h4 className={`${classes.category_sidebar_name}`}>{props.name}</h4>
    </React.Fragment>
  );
};

export default SidebarItem;
