import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Feed from "./Feed";

const Home = () => {
  return (
    <div>
      <LeftSide />
      <Feed />
      <RightSide />
    </div>
  );
};

export default Home;
