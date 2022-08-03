import React from "react";
import { Link } from "react-router-dom";
import "./StaticPanel.css";

const StaticPanel = ({}) => {
  return (
    <div className="StaticPanel">
      <div className="panel">
        <div className="signIn">Sign in</div>
        <input className="enter" type="text" placeholder="username" />
        <input className="enter" type="password" placeholder="password" />
        <div className="loginButton">Submit</div>
        <div className="forgotPassord">Forgot Password?</div>
        <Link className="createAccount" to="/register">
          Not a user? Join us!
        </Link>
      </div>
      <div className="panel">
        <div className="title">Server Info</div>
        <div className="serverStatus">
          <div>Server Status:</div>
          <div className="offline">offline</div>
        </div>
        <div>Players Online:</div>
        <div>Version:</div>
        <div>Exp Rate:</div>
      </div>
    </div>
  );
};

export default StaticPanel;
