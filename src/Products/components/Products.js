import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import ProductChildren from "./ProductChildren";
import { useHttpClient } from "../../hook/http-hook";
import { useParams } from "react-router-dom";
const DUMMY_PRODUCTS = [
  {
    id: "1",
    price: 12.55,
    name: "Big Mac™",
    imageUrl:
      "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/McChicken.png?itok=d3RF6nf9",
    extras: [
      {
        id: "2",
        name: "Big Mac™",
        price: 5.55,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/McChicken.png?itok=d3RF6nf9",
      },
      {
        id: "3",
        name: "Big Mac™ + Cola",
        price: 7.9,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/McChicken.png?itok=d3RF6nf9",
      },
      {
        id: "4",
        name: "Big Mac™++",
        price: 20,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/McChicken.png?itok=d3RF6nf9",
      },
    ],
  },
  {
    id: "5",
    price: 15,
    name: "McToast™",
    imageUrl:
      "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/McChicken.png?itok=d3RF6nf9",
    extras: [
      {
        id: "6",
        name: "McToast™",
        price: 6,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/McChicken.png?itok=d3RF6nf9",
      },
      {
        id: "7",
        name: "McToast™ + Potato",
        price: 12,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/McChicken.png?itok=d3RF6nf9",
      },
      {
        id: "8",
        name: "Family McToast™",
        price: 16,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/McChicken.png?itok=d3RF6nf9",
      },
    ],
  },
  {
    id: "9",
    price: 20,
    name: "Royal Deluxe",
    imageUrl:
      "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/Dublu_cheeseburger.png?itok=_XPObYJA",
    extras: [
      {
        id: "10",
        name: "Royal Deluxe",
        price: 6,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/Dublu_cheeseburger.png?itok=_XPObYJA",
      },
      {
        id: "11",
        name: "Royal Deluxe + Cola",
        price: 5,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/Dublu_cheeseburger.png?itok=_XPObYJA",
      },
      {
        id: "12",
        name: "Royal Deluxe + Potato + Cola",
        price: 11,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/Dublu_cheeseburger.png?itok=_XPObYJA",
      },
    ],
  },
  {
    id: "13",
    price: 20,
    name: "Royal Deluxe",
    imageUrl:
      "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/McChicken.png?itok=d3RF6nf9",
    extras: [
      {
        id: "14",
        name: "Royal Deluxe",
        price: 6,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/McChicken.png?itok=d3RF6nf9",
      },
      {
        id: "15",
        name: "Royal Deluxe + Cola",
        price: 5,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/McChicken.png?itok=d3RF6nf9",
      },
    ],
  },
  {
    id: "16",
    price: 20,
    name: "Royal Deluxe",
    imageUrl:
      "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/Meniu_Big_Mac.png?itok=pnrRX8HJ",
    extras: [
      {
        id: "17",
        name: "Royal Deluxe",
        price: 6,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/Meniu_Big_Mac.png?itok=pnrRX8HJ",
      },
      {
        id: "18",
        name: "Royal Deluxe + Cola",
        price: 5,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/Meniu_Big_Mac.png?itok=pnrRX8HJ",
      },
      {
        id: "19",
        name: "Royal Deluxe + Potato + Cola",
        price: 11,
        imageUrl:
          "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/Meniu_Big_Mac.png?itok=pnrRX8HJ",
      },
    ],
  },
];

const Product = () => {
  const { isLoading, sendRequest } = useHttpClient();
  const [loadedCategories, setLoadedCategories] = useState();
  const categoryName = useParams().categoryName;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/categories/${categoryName}`
        );

        setLoadedCategories(responseData.result);
      } catch (err) {}
    };
    fetchCategories();
  }, [sendRequest]);
  return (
    <React.Fragment>
      <ProductChildren>
        {!isLoading &&
          loadedCategories &&
          loadedCategories.map((product) => (
            <ProductItem
              key={product.id}
              imageUrl={product.imageUrl}
              id={product.id}
              name={product.name}
              price={product.price}
              extra={product.extras}
              extraItem={product.extras}
            />
          ))}
      </ProductChildren>
    </React.Fragment>
  );
};

export default Product;
