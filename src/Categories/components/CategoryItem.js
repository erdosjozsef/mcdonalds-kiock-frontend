import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Categories.css";

const CategoryItem = (props) => {
  return (
    <div className="col-sm-1">
      <nav id="sidebar" className="active">
        <h1>
          <a href="index.html" className="logo">
            <img className="mcdonalds" src={logo} alt="logo" />
          </a>
        </h1>
        <ul className="list-unstyled components mb-5">
          {props.items.map((category) => (
            <li>
              <Link to="#">
                <img className="categoryImage" src="./" />
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default CategoryItem;
