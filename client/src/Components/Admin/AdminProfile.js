import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
const AdminProfile = () => {
  return (
    <div className="adminProfile">
      <div>
        <SearchIcon></SearchIcon>
        <NotificationsIcon></NotificationsIcon>
      </div>
      <div>
        <p>John Doe</p>
        <Avatar src="https://manofmany.com/wp-content/uploads/2019/06/50-Long-Haircuts-Hairstyle-Tips-for-Men-2.jpg"></Avatar>
      </div>
    </div>
  );
};

export default AdminProfile;
