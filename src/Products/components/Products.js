import React from "react";
import ProductItem from "./ProductItem";

const DUMMY_PRODUCTS = [
  {
    id: "1",
    price: 12,
    title: "Hamburgers",
    imageUrl:
      "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/Mc_Puisor.png?itok=aaKzVOZG",
  },
  {
    id: "2",
    price: 12,
    title: "Drinks",
    imageUrl:
      "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/McChicken.png?itok=d3RF6nf9",
  },
  {
    id: "3",
    price: 12,
    title: "Coffee",
    imageUrl:
      "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/Dublu_cheeseburger.png?itok=_XPObYJA",
  },
  {
    id: "4",
    price: 12,
    title: "Potato",
    imageUrl:
      "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/McToast_0.png?itok=vPyk4qDX",
  },
  {
    id: "5",
    price: 12,
    title: "Potato",
    imageUrl:
      "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/Dublu_cheeseburger.png?itok=_XPObYJA",
  },
];
const Product = () => {
  return <ProductItem items={DUMMY_PRODUCTS} />;
};

export default Product;
