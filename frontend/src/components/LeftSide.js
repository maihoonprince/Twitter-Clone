import React from "react";

import { FaHome } from "react-icons/fa";

const LeftSide = () => {
  return (
    <div>
      <div>
        <img width={"20px"}
          src="https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png.png"
          alt="twitter Logo"/>
      </div>

      <div className="">
        <div className="flex">
        <FaHome />
        <h1>Home</h1>
        </div>
      </div>

      <div className="">
        <div className="flex">
        <FaHome />
        <h1>Home</h1>
        </div>
      </div>

      <div className="">
        <div className="flex">
        <FaHome />
        <h1>Home</h1>
        </div>
      </div>

      <div className="">
        <div className="flex">
        <FaHome />
        <h1>Home</h1>
        </div>
      </div>

    </div>
  );
};

export default LeftSide;
