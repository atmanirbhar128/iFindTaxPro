import React from "react";

import { Img, List, Text } from "components";
import Columnvector from "components/Columnvector";

const Dashboard = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <Columnvector className="flex flex-col md:gap-10 gap-[86px] justify-start w-full" />
      </div>
    </>
  );
};

export default Dashboard;
