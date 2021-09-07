import React from "react";
import { Link } from "react-router-dom";
import "./ProductItem.css";
import hamburger from "./hamburger.png";

const ProductItem = (props) => {
  return (
    <div className="col-sm-11">
      <div className="row product-list">
        {props.items.map((product) => (
          <div key={product.id} className="col-md-3">
            <section className="panel">
              <img className="image-box" src={hamburger} alt="" />
              <div className="panel-body text-center">
                <h4>
                  <Link to="#" className="pro-title">
                    Leopard Shirt Dress
                  </Link>
                </h4>
                <p className="price">$300.00</p>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductItem;
