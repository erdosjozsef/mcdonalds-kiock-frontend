import React from "react";
import classes from "./Sidebar.module.css";
import { useHistory } from "react-router-dom";

const SidebarItem = (props) => {
  const categoryName = props.seoUrl;
  const history = useHistory();

  const setNavHandler = () => history.push(`/order/${categoryName}`);
  return (
    <React.Fragment>
      <div onClick={setNavHandler}>
        <img
          src={props.imageUrl}
          alt=""
          className={`img-fluid rounded-circle mb-2 ${classes.mcdonalds_logo} ${classes.category_logo}`}
        />
        <h4 className={`${classes.category_sidebar_name}`}>{props.name}</h4>
      </div>
    </React.Fragment>
  );
};

export default SidebarItem;
