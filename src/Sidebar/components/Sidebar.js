import React, { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";
import SidebarChildren from "./SidebarChildren";
import { useHttpClient } from "../../hook/http-hook";

const Sidebar = (props) => {
  const { isLoading, sendRequest } = useHttpClient();
  const [loadedCategories, setLoadedCategories] = useState();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/categories"
        );

        setLoadedCategories(responseData.result);
      } catch (err) {}
    };
    fetchCategories();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <SidebarChildren>
        {!isLoading &&
          loadedCategories &&
          loadedCategories.map((category) => (
            <SidebarItem
              key={category.id}
              name={category.name}
              imageUrl={category.imageUrl}
              id={category.id}
              seoUrl={category.seoUrl}
            />
          ))}
      </SidebarChildren>
    </React.Fragment>
  );
};

export default Sidebar;
