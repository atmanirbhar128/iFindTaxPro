import React from "react";

import { Img, Line, Text } from "components";
import LoginPage from "components/LoginPage";

const Login = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <LoginPage className="bg-blue_gray-100 flex flex-col items-center justify-start w-full" />
      </div>
    </>
  );
};

export default Login;
