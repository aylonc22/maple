import React from "react";
import "./Register.css";

const Register = ({}) => {
  return (
    <div className="register">
      <div>Create a FREE SHAHAR Account</div>
      <input type="text" placeholder="Login ID" className="registerInput" />
      <input type="password" placeholder="Password" className="registerInput" />
      <input
        type="password"
        placeholder="Confirm Password"
        className="registerInput"
      />
      <input
        type="text"
        placeholder="Email Address"
        className="registerInput"
      />
      <input
        type="text"
        placeholder="Birthday Security Code(YYYY-MM-DD)"
        className="registerInput"
      />
      <input
        type="text"
        placeholder="Referral Code"
        className="registerInput"
      />
      <div className="registerButton">Register</div>
    </div>
  );
};

export default Register;
