import React from "react";
import CategoryItem from "../components/CategoryItem";

const DUMMY_CATEGORIES = [
  {
    id: "1",
    title: "Hamburgers",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
  },
  {
    id: "1432",
    title: "Drinks",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
  },
  {
    id: "1543",
    title: "Coffee",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
  },
  {
    id: "1654",
    title: "Potato",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
  },
];

const Sidebar = () => {
  return <CategoryItem items={DUMMY_CATEGORIES} />;
};

export default Sidebar;
