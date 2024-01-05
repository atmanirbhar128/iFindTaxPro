import React from "react";

import { Img, List, Text } from "components";

const Columnvector = (props) => {
  return (
    <>
      <div className={props.className}>
   
        <div className="flex flex-col items-center justify-end pt-[37px] w-full">
          <div className="flex flex-col gap-[27px] justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[717px] w-[48%] md:w-full" style={{cursor: 'pointer'}}>
                <input
                type="text"
                placeholder=""
                className="w-full"
                style={{

                  borderRadius: '30px', 
                  padding: '8px', 
                  border: '1px solid #ccc', 
                }}
               />
             
              <Img
                className="h-[46px] md:ml-[0] ml-[23px] w-[46px]"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
              <Img
                className="h-[46px] md:ml-[0] ml-[21px] w-[46px]"
                src="images/img_volume.svg"
                alt="volume"
              />
              <Img
                className="h-[46px] md:ml-[0] ml-[22px] w-[46px]"
                src="images/img_floatingicon.svg"
                alt="floatingicon"
              />
              <div
                className="bg-cover bg-no-repeat flex flex-col h-14 items-end justify-end md:ml-[0] ml-[71px] p-[13px] w-[39%] md:w-full"
                style={{ backgroundImage: "url('images/img_group4.svg')" }}
              >
                <div className="flex flex-col items-center justify-start mr-[13px]">
                  <Text
                    className="text-light_blue-800 text-sm"
                    size="txtMontserratSemiBold14"
                  >
                    {props?.mcaramllc}
                  </Text>
                  <Text
                    className="text-[11px] text-gray-500"
                    size="txtMontserratRegular11"
                  >
                    {props?.user}
                  </Text>
                  <Img
                          className="h-[5px] ml-[173px] mt-[7px]"
                          src="images/img_arrowdown_white_a700.svg"
                          alt="arrowdown"
                        />
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[1512px] items-center justify-start w-full"
              style={{ backgroundImage: "url('images/img_group3.svg')" }}
            >
              <div className="flex md:flex-col flex-row md:gap-0 items-start justify-between w-[99%] md:w-full">
                <div className="bg-indigo-600 flex flex-col items-center justify-start p-5 w-[18%] md:w-full">
                  <div className="flex flex-col items-start justify-start mb-[590px] mt-[18px] w-[99%] md:w-full">
                    <div className="flex flex-row gap-[13px] items-start justify-start ml-1 md:ml-[0] w-[87%] md:w-full" style={{cursor: 'pointer'}}>
                      <Img
                        className="h-6"
                        src="images/img_home.svg"
                        alt="home"
                      />
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtMontserratMedium24"
                      >
                        {props?.language}
                      </Text>
                    </div>
                    <List
                      className="flex flex-col gap-[41px] items-center md:ml-[0] ml-[7px] mt-[45px] w-[98%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-row items-start justify-start w-full" style={{cursor: 'pointer'}}>
                        <Img
                          className="h-5 w-[21px]"
                          src="images/img_star.svg"
                          alt="star"
                        />
                        <Text
                          className="ml-4 sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                          size="txtMontserratMedium21"
                        >
                          {props?.entity}
                        </Text>
                        <Img
                          className="h-[5px] ml-[173px] mt-[7px]"
                          src="images/img_arrowdown_white_a700.svg"
                          alt="arrowdown"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-start w-full" style={{cursor: 'pointer'}}>
                        <Img
                          className="h-5 mt-0.5 w-5"
                          src="images/img_cut.svg"
                          alt="cut"
                        />
                        <Text
                          className="ml-4 sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                          size="txtMontserratMedium21"
                        >
                          {props?.tools}
                        </Text>
                        <Img
                          className="h-[5px] ml-[182px] mt-[9px]"
                          src="images/img_arrowdown_white_a700.svg"
                          alt="arrowdown"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-start w-full" style={{cursor: 'pointer'}}>
                        <Img
                          className="h-5 w-[21px]"
                          src="images/img_mail.svg"
                          alt="mail"
                        />
                        <Text
                          className="ml-4 sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                          size="txtMontserratMedium21"
                        >
                          {props?.marketplace}
                        </Text>
                        <Img
                          className="h-[5px] ml-[104px] mt-2"
                          src="images/img_arrowdown_white_a700.svg"
                          alt="arrowdown"
                        />
                      </div>
                    </List>
                    <div className="flex flex-row gap-5 items-start justify-start ml-2.5 md:ml-[0] mt-10 w-[73%] md:w-full" style={{cursor: 'pointer'}}>
                      <Img
                        className="h-6"
                        src="images/img_location.svg"
                        alt="location"
                      />
                      <Text
                        className="mt-0.5 sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                        size="txtMontserratMedium21"
                      >
                        {props?.correspondence}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[17px] items-center justify-start ml-2 md:ml-[0] mt-10 w-[70%] md:w-full" style={{cursor: 'pointer'}}>
                      <Img
                        className="h-5 w-5"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                      <Text
                        className="sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                        size="txtMontserratMedium21"
                      >
                        {props?.initialintervieOne}
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start ml-2.5 md:ml-[0] mt-11 w-[97%] md:w-full" style={{cursor: 'pointer'}}>
                      <Img
                        className="h-[22px]"
                        src="images/img_file.svg"
                        alt="file"
                      />
                      <Text
                        className="ml-[18px] sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                        size="txtMontserratMedium21"
                      >
                        {props?.compliance}
                      </Text>
                      <Img
                        className="h-[5px] ml-[109px] mt-2"
                        src="images/img_arrowdown_white_a700.svg"
                        alt="arrowdown_One"
                      />
                    </div>
                    <div className="flex flex-row gap-[19px] items-start justify-start md:ml-[0] ml-[9px] mt-[43px] w-[92%] md:w-full" style={{cursor: 'pointer'}}>
                      <Img
                        className="h-[21px]"
                        src="images/img_user.svg"
                        alt="user"
                      />
                      <Text
                        className="sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                        size="txtMontserratMedium21"
                      >
                        {props?.personalagreemeOne}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[19px] items-start justify-start md:ml-[0] ml-[9px] mt-[42px] w-[36%] md:w-full" style={{cursor: 'pointer'}}>
                      <Img
                        className="h-[21px]"
                        src="images/img_group.svg"
                        alt="group"
                      />
                      <Text
                        className="sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                        size="txtMontserratMedium21"
                      >
                        {props?.billing}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-start mt-10 w-[83%] md:w-full" style={{cursor: 'pointer'}}>
                      <Img
                        className="h-5"
                        src="images/img_user_white_a700.svg"
                        alt="user_One"
                      />
                      <Text
                        className="sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                        size="txtMontserratMedium21"
                      >
                        {props?.professionalcirOne}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-center justify-start ml-1.5 md:ml-[0] mt-[43px] w-[67%] md:w-full" style={{cursor: 'pointer'}}>
                      <Img
                        className="h-[21px]"
                        src="images/img_map.svg"
                        alt="map"
                      />
                      <Text
                        className="sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                        size="txtMontserratMedium21"
                      >
                        {props?.taxlawguide}
                      </Text>
                    </div>
                  
                  </div>
                </div>
                <div className="flex flex-col gap-[50px] items-center justify-start md:mt-0 mt-[70px] w-[79%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="sm:h-[307px] h-[314px] md:h-[534px] relative w-full">
                      <div className="absolute h-[307px] inset-[0] justify-center m-auto rounded-[42px] w-full"></div>
                      <div className="absolute bg-gradient  flex flex-col h-max inset-[0] items-start justify-center m-auto p-[11px] rounded-[20px] w-full">
                        <div className="flex md:flex-col flex-row md:gap-30 items-start justify-between mb-0.5 md:ml-[0] ml-[36px] w-[70%] md:w-full">
                          <div className="flex flex-col items-start justify-start md:mt-0 mt-[41px]">
                            <Text
                              className="md:text-2xl sm:text-[24px] text-[28px] text-white-A700"
                              size="txtMontserratExtraBold32"
                            >
                              {props?.welcometoifindtOne}
                            </Text>
                            <Text
                              className="mt-2 sm:text-[17px] md:text-[19px] text-[21px] text-white-A700 w-[100%] sm:w-full"
                              size="txtMontserratRegular21"
                            >
                              {props?.herewhatshappinOne}
                            </Text>
                            <div className="h-[37px] md:h-[87px] mt-[51px] relative w-[67%]" style={{cursor: 'pointer'}}>
                              <Img
                                className="h-9 m-auto"
                                src="images/img_vector_white_a700.svg"
                                alt="vector_Two"
                              />
                              <Text
                                className="absolute h-max inset-[0] justify-center m-auto text-base text-white-A700 w-max"
                                size="txtMontserratRegular16"
                              >
                                {props?.whatsnew}
                              </Text>
                            </div>
                          </div>
                       
                        </div>
                      </div>
                    </div>
                  </div>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Columnvector.defaultProps = {
  mcaramllc: "Mcaram LLC",
  user: "Guest",
  language: "Client Dashboard ",
  entity: "Entity",
  tools: "Tools",
  marketplace: "Marketplace",
  correspondence: "Correspondence",
  initialintervieOne: "Initial Interview",
  compliance: "Compliance",
  personalagreemeOne: "Personal Agreements",
  billing: "Billing",
  professionalcirOne: "Professional Circle",
  taxlawguide: "Tax Law Guide",
  mcaramllcOne: "Mcaram LLC",
  user: "Guest",
  welcometoifindtOne: "Welcome to iFindTaxPro",
  herewhatshappinOne: (
    <>
      Here whats happing in your
      <br />
      account today
    </>
  ),
  whatsnew: "Whats New!",
};

export default Columnvector;
