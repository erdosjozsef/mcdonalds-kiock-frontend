import React from "react";
import SidebarItem from "./SidebarItem";
import SidebarChildren from "./SidebarChildren";
import "./Sidebar.css";

const DUMMY_DATA = [
  {
    id: 1,
    name: "Happy Meals",
    imageUrl:
      "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/McChicken.png?itok=d3RF6nf9",
  },
  {
    id: 2,
    name: "Sandwiches & Meals",
    imageUrl:
      "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/Chicken_grill.png?itok=IFnUlU-Z",
  },
  {
    id: 3,
    name: "Main Menus",
    imageUrl:
      "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/Meniu_Big_Mac.png?itok=pnrRX8HJ",
  },
  {
    id: 4,
    name: "Coffee",
    imageUrl:
      "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2020-09/Cafea%20200ml.png?itok=1oAYm6XS",
  },
  {
    id: 5,
    name: "Chickens",
    imageUrl:
      "https://www.mcdonalds.ro/sites/default/files/styles/500x500/public/field_product_image/2021-03/Aripioare_pui_5.png?itok=n4MCtfjX",
  },
];

const Sidebar = (props) => {
  return (
    <React.Fragment>
      <SidebarChildren>
        {DUMMY_DATA.map((category) => (
          <SidebarItem
            key={category.id}
            name={category.name}
            imageUrl={category.imageUrl}
          />
        ))}
      </SidebarChildren>
    </React.Fragment>
  );
};

export default Sidebar;
