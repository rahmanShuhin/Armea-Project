import React from "react";
import Dashboard from "./Dashboard";
import SideBar from "./SideBar";

const Profile = () => {
  return (
    <div className="profile">
      <div>
        <SideBar></SideBar>
        <Dashboard></Dashboard>
      </div>
    </div>
  );
};

export default Profile;
