import React from "react";
import airbnbLogo from "../assets/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav>
      <img className="logo" src={airbnbLogo} />
    </nav>
  );
}
