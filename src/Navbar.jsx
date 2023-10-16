import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const linkStyle = {
    marginRight: "20px",
  };

  return (
    <>
    <nav>
      <a href="/home/yash" style={linkStyle}>
        Home
      </a>
      <a href="/about" style={linkStyle}>
        About
      </a>
      <a href="/contact?Phone=9080163875" style={linkStyle}>
        Contact
      </a>
    </nav>
    </>
  );
}

export default Navbar;
