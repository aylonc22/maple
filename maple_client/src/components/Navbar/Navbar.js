import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({}) => {
  return (
    <div className="Navbar">
      <Link className="link" to="/">
        Maple
      </Link>
      <Link className="link" to="/register">
        Register
      </Link>
      <Link className="link" to="/download">
        Download
      </Link>
      <Link className="link" to="/rankings">
        Rankings
      </Link>
      <Link className="link" to="/vote">
        Vote for Cash
      </Link>
      <Link className="link" to="/supportus">
        Support Us
      </Link>
      <Link className="link" to="/library">
        Library
      </Link>
    </div>
  );
};

export default Navbar;
