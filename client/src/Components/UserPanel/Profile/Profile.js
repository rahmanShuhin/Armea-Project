import React, { useState } from "react";
import Dashboard from "./Dashboard";
import EditProfile from "./EditProfile";
import History from "./History";
import SideBar from "./SideBar";

const Profile = () => {
  const [show, setShow] = useState(1);
  return (
    <div className="profile">
      <div>
        <SideBar setShow={setShow} show={show}></SideBar>
        {show === 1 && <Dashboard></Dashboard>}
        {show === 2 && <History></History>}
        {show === 3 && <EditProfile></EditProfile>}
      </div>
    </div>
  );
};

export default Profile;
