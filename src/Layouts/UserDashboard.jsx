import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import { Flex } from "antd";
const UserDashboard = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default UserDashboard;
