import React from "react";
import logo from "../assets/bob_logo_white.png";

function Logo({ width = "100px" }) {
  return (
    <div className="">
      <img
        src={logo}
        alt="Logo"
        className="rounded"
        style={{ width: width, height: "auto" }} // Set width and let height adjust automatically
      />
    </div>
  );
}

export default Logo;
