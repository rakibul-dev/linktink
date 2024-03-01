import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import { Flex } from "antd";
import Cookies from "js-cookie";
const UserDashboard = () => {
  const user = Cookies.get("user");

  return (
    <div>
      {user ? (
        <>
          <Header />
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default UserDashboard;
