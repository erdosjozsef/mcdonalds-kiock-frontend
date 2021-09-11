import React, { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
// import ErrorModal from "../../shared/components/UIElements/ErrorModal";
// import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";

const Categories = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/categories"
        );

        setLoadedUsers(responseData.result);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);

  return (
    <React.Fragment>
      {!isLoading && loadedUsers && <Sidebar items={loadedUsers} />}
    </React.Fragment>
  );
};

export default Categories;
