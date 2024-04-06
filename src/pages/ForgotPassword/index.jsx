import React from "react";


import { Button, Img, Text } from "components";

const ForgotPassword = () => {
  return (
    <>
     <div className=" bg-white-A700 h-[1028x] mx-auto relative w-full">
     <div className=" font-istokweb h-[1028px] m-auto md:px-5 w-full">
     <div className=" absolute h-full inset-y-0 left-0 my-0 w-[44%] md:w-full">
     <div className="!sticky !w-[434px] bg-light_blue-800 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto top-[0]">
              <div
                className=" absolute w-[100%] h-[500px] bg-cover  p-[3px] top-0 right-0"
                style={{ backgroundImage: "url('images/img_top.png')" }}
              ></div>

              <div className="absolute flex h-[298px] flex-row space-x-5 items-start justify-start p-[3px] left-[0] top-[0]">
                <img
                  className=" w-16 h-16 mt-5 ml-5"
                  src="images/img_biglogo.png"
                  alt="logo"
                />
                <Text
                  className="mb-[226px] mt-[34px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                  size="txtIstokWebBold25WhiteA700"
                >
                  VIDEO MEDICO
                </Text>
              </div>

              <div className="absolute flex flex-col font-poppins gap-[18px] justify-center left-[2%] md:px-5 top-[12%] w-[85%]">
                <Text
                  className="ml-5 md:ml-[0] sm:text-[21px] items-center md:text-[23px] text-[25px] text-light_blue-700"
                  size="txtPoppinsSemiBold25Lightblue700"
                >
                  <span className="text-white-A700 font-poppins text-center font-medium">
                    <>
                      Start your journey to better health today!
                      <br />
                    </>
                  </span>
                </Text>

                <Button
                  className="cursor-pointer ml-5 h-[50px] leading-[normal] mr-[179px] rounded-[15px] text-center text-lg w-auto"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  Learn more
                </Button>

                <div className="flex justify-center mt-[20%] items-center">
                  <img
                    className=" w-[250px] h-[250px] mt-0"
                    src="images/img_biglogo_442x442.png"
                    alt="logo"
                  />
                </div>
              </div>

              <div
                className=" absolute w-[100%] h-[500px] bg-cover bg-no-repeat p-[3px] right-0 bottom-0"
                style={{ backgroundImage: "url('images/img_bottom.png')" }}
              >
                <Text
                  className="absolute ml-5 bottom-[14%] left-[3%] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700  w-[85%]"
                  size="txtPoppinsSemiBold25"
                >
                  Your Virtual Healthcare Solution!
                </Text>
              </div>
            </div>
     </div>

     <div className="absolute font-poppins h-full -top-2 my-auto right-[0] bg-transparent w-[75%] md:w-full">
     <img
              className=" h-[1028px] m-auto object-cover rounded-bl-[50px] rounded-tl-[40px] w-full"
              src="images/img_rectangle6.png"
              alt="rectangleSix"
            />
            <img
              className="absolute h-[500px]  object-cover right-[0] top-[0]"
              src="images/img_top_right.png"
              alt="top-right-img"
            />
            <img
              className="absolute h-[500px]  object-cover right-[0] bottom-[0]"
              src="images/img_bottom_right.png"
              alt="top-right-img"
            />
            <div className="absolute flex flex-col gap-3.5 inset-x-[0] items-center justify-center mx-auto top-[12%] w-[66%] md:w-[80%] sm:w-[80%]">
            <Text
          className="md:ml-[0] ml-[0px] items-center text-center sm:text-xl md:text-[38px] text-[40px] text-light_blue-700 md:text-white-A700 sm:text-white-A700"
          size="txtPoppinsSemiBold40">
          Change Your Passowrd
        </Text>

       <div className=" flex flex-col inset-x-[0] items-start mx-auto mt-[50px] w-[84%] xs:w-[100%] sm:w-[100%]">
       <div className=" bg-gray-50_01 flex flex-row h-20 items-center justify-between mt-9 md:mt-0 sm:mt-0 p-4 rounded-[10px] shadow-bs w-full">
                <input className="w-full bg-transparent px-3 h-full"></input>
                <Img
                  src="images/eye.svg"
                  alt="groupNine"
                />
              </div>
              <Text
                  className="mb-0.5 mt-1 text-teal-900 text-xl sm:text-base"
                  size="txtPoppinsRegular20">
                 New Password
                </Text>
       </div>

       <div className=" flex flex-col inset-x-[0] items-start mx-auto mt-[0px] w-[84%] xs:w-[100%] sm:w-[100%]">
       <div className=" bg-gray-50_01 flex flex-row h-20 items-center justify-between mt-0 p-4 rounded-[10px] shadow-bs w-full">
                <input className="w-full bg-transparent px-3 h-full"></input>
                <Img
                  src="images/eye.svg"
                  alt="groupNine"
                />
              </div>
              <Text
                  className="mb-0.5 mt-1 text-teal-900 text-xl sm:text-base"
                  size="txtPoppinsRegular20">
                Re-enter New password
                </Text>
       </div>

       <div className=" flex flex-col inset-x-[0] items-start mx-auto mt-[0px] w-[84%] xs:w-[100%] sm:w-[100%]">
       <div className=" bg-gray-50_01 flex flex-row h-20 items-center justify-between mt-0 p-4 rounded-[10px] shadow-bs w-full">
                <input className="w-full bg-transparent px-3 h-full"></input>
                {/* <Img
                  src="images/eye.svg"
                  alt="groupNine"
                /> */}
              </div>
              <Text
                  className="mb-0.5 mt-1 text-teal-900 text-xl sm:text-base"
                  size="txtPoppinsRegular20">
                Email for verification
                </Text>
       </div>

       <Button
                className="!text-white-A700 cursor-pointer leading-[normal] w-[84%] xs:w-[100%] sm:w-[100%] mt-8 shadow-bs text-center text-xl"
                shape="round"
                color="teal_900"
                size="xl"
                variant="fill"
              >
                Login Now!!
              </Button>

            </div>

           

     </div>

     </div>

     </div>
    </>
  );
};

export default ForgotPassword;


