// Home.js
import React from "react";
import { useLocation } from "react-router-dom";

function Contact() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const phoneParam = queryParams.get("Phone");

  return (
    <>
      <div style={{ marginTop: "50px" }}>Contact Page</div>

      <p>Phone: {phoneParam}</p>
    </>
  );
}

export default Contact;
