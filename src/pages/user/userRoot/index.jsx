import React from "react";
import UserNavbar from "../../../layout/userNavbar";
import { Outlet } from "react-router-dom";

function UserRoot() {
  return (
    <div>
      <UserNavbar />
      <Outlet />
    </div>
  );
}

export default UserRoot;
