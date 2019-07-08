import React from "react";
import LogInBox from "./LogInBox";

const Header = props => {
  return (
    <div>
      <h1>Quiz Engine</h1>
      <LogInBox
        loginUser={props.loginUser}
        logoutUser={props.logoutUser}
        loggedInUser={props.loggedInUser}
      />
    </div>
  );
};

export default Header;
