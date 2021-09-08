import React from "react";
import ProductItem from "./ProductItem";
import ProductChildren from "./ProductChildren";
const DUMMY_PRODUCTS = [
  {
    id: "1",
    price: 12,
    name: "Big Mac™",
    imageUrl:
      "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/McChicken.png?itok=d3RF6nf9",
    extras: [
      {
        id: "1",
        name: "Big Mac™",
        price: 5,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/McChicken.png?itok=d3RF6nf9",
      },
      {
        id: "2",
        name: "Big Mac™ + Cola",
        price: 15,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/McChicken.png?itok=d3RF6nf9",
      },
      {
        id: "3",
        name: "Big Mac™++",
        price: 20,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/McChicken.png?itok=d3RF6nf9",
      },
    ],
  },
  {
    id: "2",
    price: 15,
    name: "McToast™",
    imageUrl:
      "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/McChicken.png?itok=d3RF6nf9",
    extras: [
      {
        id: "1",
        name: "McToast™",
        price: 6,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/McChicken.png?itok=d3RF6nf9",
      },
      {
        id: "2",
        name: "McToast™ + Potato",
        price: 12,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/McChicken.png?itok=d3RF6nf9",
      },
      {
        id: "3",
        name: "Family McToast™",
        price: 16,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/McChicken.png?itok=d3RF6nf9",
      },
    ],
  },
  {
    id: "3",
    price: 20,
    name: "Royal Deluxe",
    imageUrl:
      "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/Dublu_cheeseburger.png?itok=_XPObYJA",
    extras: [
      {
        id: "1",
        name: "Royal Deluxe",
        price: 6,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/Dublu_cheeseburger.png?itok=_XPObYJA",
      },
      {
        id: "2",
        name: "Royal Deluxe + Cola",
        price: 5,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/Dublu_cheeseburger.png?itok=_XPObYJA",
      },
      {
        id: "3",
        name: "Royal Deluxe + Potato + Cola",
        price: 11,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/Dublu_cheeseburger.png?itok=_XPObYJA",
      },
    ],
  },
  {
    id: "3",
    price: 20,
    name: "Royal Deluxe",
    imageUrl:
      "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/McChicken.png?itok=d3RF6nf9",
    extras: [
      {
        id: "1",
        name: "Royal Deluxe",
        price: 6,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/McChicken.png?itok=d3RF6nf9",
      },
      {
        id: "2",
        name: "Royal Deluxe + Cola",
        price: 5,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/McChicken.png?itok=d3RF6nf9",
      },
    ],
  },
  {
    id: "3",
    price: 20,
    name: "Royal Deluxe",
    imageUrl:
      "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/Meniu_Big_Mac.png?itok=pnrRX8HJ",
    extras: [
      {
        id: "1",
        name: "Royal Deluxe",
        price: 6,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/Meniu_Big_Mac.png?itok=pnrRX8HJ",
      },
      {
        id: "2",
        name: "Royal Deluxe + Cola",
        price: 5,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/Meniu_Big_Mac.png?itok=pnrRX8HJ",
      },
      {
        id: "3",
        name: "Royal Deluxe + Potato + Cola",
        price: 11,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/Meniu_Big_Mac.png?itok=pnrRX8HJ",
      },
    ],
  },
];

const Product = () => {
  return (
    <React.Fragment>
      <ProductChildren>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            imageUrl={product.imageUrl}
            id={product.id}
            name={product.name}
            price={product.price}
            extra={product.extras}
            image={product.imageUrl}
            extraItem={product.extras}
          />
        ))}
      </ProductChildren>
    </React.Fragment>
  );
};

export default Product;
