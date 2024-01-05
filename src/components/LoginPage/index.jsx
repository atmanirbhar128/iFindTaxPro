import React from "react";

import { Img, Line, Text } from "components";

const Loginpage = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[1080px] items-center justify-end p-[63px] md:px-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_group7.png')" }}
        >
          <div className="md:h-[653px] h-[877px] mt-[77px] p-1.5 relative w-[36%] md:w-full">
            <div className="absolute bg-gradient1  md:h-[576px] h-[846px] inset-[0] justify-center m-auto shadow-bs w-[96%] md:w-full">
              <div className="absolute md:h-[576px] h-[673px] inset-x-[0] mx-auto top-[0] w-full">
                <Img
                  className="absolute bottom-[0] h-[576px] object-cover right-[0]"
                  src="images/img_vector_576x408.png"
                  alt="vector"
                />
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-[437px] items-end justify-start left-[0] p-11 md:px-10 sm:px-5 top-[0] w-[77%]"
                  style={{ backgroundImage: "url('images/img_group8.png')" }}
                >
                  <div className="flex flex-col items-center justify-start mb-[52px] mt-[258px]">
                    <Text
                      className="text-sm text-yellow-A400 tracking-[2.80px]"
                      size="txtMontserratExtraBold14"
                    >
                      {props?.createaccounttext}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[11px] w-full">
                <div className="flex flex-col gap-[30px] items-center justify-start mt-[38px] w-[85%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-4/5 md:w-full">
                    <div className="md:h-7 h-[29px] sm:h-[39px] relative w-full">
                      <Img
                        className="h-7 m-auto"
                        src="images/img_vector_gray_200_01.svg"
                        alt="vector_One"
                      />
                      <div className="absolute flex sm:flex-col flex-row gap-2 h-max inset-[0] items-start justify-center m-auto w-[76%]" style={{cursor: "pointer"}}>
                        <Img
                          className="h-4 w-4"
                          src="images/img_google.svg"
                          alt="google"
                        />
                        <Text
                          className="text-black-900 text-xs"
                          size="txtMontserratSemiBold12"
                        >
                          {props?.loginwithgoogletext}
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[90px] mt-[23px]">
                      <Text
                        className="text-base text-indigo-800_01 tracking-[3.20px]"
                        size="txtMontserratRegular16Indigo80001"
                      >
                        {props?.userlogin}
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-9 items-start justify-start mt-[23px] w-full"
                    
                    >

                        
          <input
        type="text"
        placeholder="Username"
        className="w-full"
      />
                  
                  
                      
                    </div>
                    <div className="h-[37px] md:h-[59px] mt-[23px] relative w-full">
                     
                    <input
        type="text"
        placeholder="password"
        className="w-full"
      />
                     
                                       </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-0.5 md:ml-[0] mt-5 w-full">
                      <Img
                        className="h-2.5 sm:mt-0 mt-0.5 w-2.5"
                        src="images/img_isolationmode.svg"
                        alt="isolationmode"
                      />
                      <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[3px]" style={{cursor: "pointer"}}>
                        <Text
                          className="text-[11px] text-light_blue-400"
                          size="txtMontserratMedium11"
                        >
                          {props?.remembertext}
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[106px]" style={{cursor: "pointer"}}>
                        <Text
                          className="text-[11px] text-light_blue-400"
                          size="txtMontserratMedium11"
                        >
                          {props?.forgotpasswordtext}
                        </Text>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-7 items-center justify-start mt-7 p-1.5 w-full"
                      style={{
                        backgroundImage: "url('images/img_group10.svg')",
                      }}
                    >
                      <div className="flex flex-col items-center justify-start" style={{cursor: "pointer"}}>
                        <Text
                          className="text-white-A700 text-xs"
                          size="txtMontserratSemiBold12WhiteA700"
                        >
                          {props?.logintext}
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[19px] mt-5">
                      <Text
                        className="text-[10px] text-gray-700"
                        size="txtMontserratMedium10"
                      >
                        {props?.signuptext}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start sm:px-5 px-[22px] w-full">
                    <Text
                      className="text-[10px] text-gray-400_01"
                      size="txtMontserratMedium10Gray40001"
                    >
                      {props?.browsertext}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col gap-[17px] items-start justify-start left-[10%] top-[9%] w-4/5">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-full"
                    size="txtMontserratBold32"
                  >
                    {props?.welcomebacktext}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-base text-white-A700 w-full"
                    size="txtMontserratSemiBold16"
                  >
                    {props?.descriptiontext}
                  </Text>
                </div>
              </div>
            </div>
            <Line className="absolute bg-light_blue-400 bottom-[7%] h-px inset-x-[0] mx-auto w-[96%]" />
          </div>
        </div>
      </div>
    </>
  );
};

Loginpage.defaultProps = {
  createaccounttext: "CREATE ACCOUNT",
  loginwithgoogletext: "Log in with Google",
  userlogin: "USER LOGIN",
  usernametext: "Username",
  passwordtext: "Password",
  remembertext: "Remember",
  forgotpasswordtext: "Forgot password ?",
  logintext: "Log in",
  signuptext:
    "To sign up as professional, Please visit professionals page. Thanks",
  browsertext:
    "Please use Google Chrome, Microsoft Edge or Mozilla Firefoxfor better experience. Thanks.",
  welcomebacktext: (
    <>
      Welcome
      <br />
      Back to iFindTaxPro.
    </>
  ),
  descriptiontext:
    "To keep connected with us please log in with your username and password. Data security and privacy are our topmost priorities.",
};

export default Loginpage;
