import React from "react";



import { Button, Img, Text } from "components";

const forgotVerification = () => {
  return (
    <>
      <div className="bg-white-A700 h-[1024px] mx-auto relative w-full">
        <div className="font-istokweb h-[1028px] m-auto md:px-5 w-full">
          <div className="h-[1028px] m-auto w-full">
            <div className="absolute h-[1024px] inset-y-[0] left-[0] my-auto w-[44%] md:w-full">
              <div className="!sticky !w-[434px] bg-light_blue-800 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto top-[0]"></div>
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-[298px] items-start justify-start p-[3px] right-[0] top-[0]"
                style={{ backgroundImage: "url('images/img_group67.png')" }}
              >
                <Text
                  className="mb-[226px] mt-[30px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                  size="txtIstokWebBold25WhiteA700"
                >
                  VIDEO MEDICO
                </Text>
              </div>
            </div>
            <Img
              className="absolute bottom-[0] h-[303px] left-[0] object-cover"
              src="images/img_group67.png"
              alt="vector"
            />
            <div className="absolute font-poppins h-[1028px] inset-y-[0] my-auto right-[0] w-[74%] md:w-full">
              <Img
                className="h-[1028px] m-auto object-cover rounded-bl-[50px] rounded-tl-[50px] w-full"
                src="images/img_rectangle6.png"
                alt="rectangleSix"
              />
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[12%] w-[66%]">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-light_blue-700"
                  size="txtPoppinsSemiBold40"
                >
                  Check Your Email for Code
                </Text>
                <div className="gap-[38px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-between mt-[124px] w-full">
                  <div className="bg-gray-50_01 h-[105px] rounded-[10px] shadow-bs w-full"></div>
                  <div className="bg-gray-50_01 h-[105px] rounded-[10px] shadow-bs w-full"></div>
                  <div className="bg-gray-50_01 h-[105px] rounded-[10px] shadow-bs w-full"></div>
                  <div className="bg-gray-50_01 h-[105px] rounded-[10px] shadow-bs w-full"></div>
                  <div className="bg-gray-50_01 h-[105px] rounded-[10px] shadow-bs w-full"></div>
                </div>
                <Button
                  className="!text-white-A700 cursor-pointer leading-[normal] min-w-[665px] md:min-w-full mt-[93px] shadow-bs text-center text-xl"
                  shape="round"
                  color="teal_900"
                  size="xl"
                  variant="fill"
                >
                  Confirm Now!!
                </Button>
              </div>
            </div>
          </div>
          <Img
            className="absolute bottom-[0] h-52 object-cover right-[0]"
            src="images/img_vector_light_blue_700.png"
            alt="vector_One"
          />
          <Img
            className="absolute h-[287px] object-cover right-[0] top-[0]"
            src="images/img_vector_light_blue_800.png"
            alt="vector_Two"
          />
        </div>
        <Text
          className="absolute bottom-[7%] left-[3%] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 w-[22%] sm:w-full"
          size="txtPoppinsSemiBold25"
        >
          Your Virtual Healthcare Solution!
        </Text>
        <div className="absolute flex md:flex-col flex-row font-poppins md:gap-10 items-start justify-between left-[2%] md:px-5 top-[12%] w-full">
          <div className="flex flex-col gap-[18px] justify-start">
            <Text
              className="ml-1.5 md:ml-[0] sm:text-[21px] md:text-[23px] text-[25px] text-light_blue-700"
              size="txtPoppinsSemiBold25Lightblue700"
            >
              <span className="text-white-A700 font-poppins text-left font-medium">
                <>
                  Start your journey to better health today!
                  <br />
                </>
              </span>
              <span className="text-light_blue-700 font-poppins text-left font-medium">
                <>
                  <br />
                  <br />
                  <br />
                </>
              </span>
            </Text>
            <Button
              className="cursor-pointer h-[50px] leading-[normal] mr-[179px] rounded-[15px] text-center text-lg w-[120px]"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              Learn more
            </Button>
          </div>
          <Text
            className="md:mt-0 mt-[73px] text-teal-900 text-xl"
            size="txtPoppinsRegular20"
          >
            a new code have been sent to your email to confirm your new password
          </Text>
        </div>
        <Img
          className="absolute h-[431px] inset-y-[0] left-[0] my-auto object-cover w-[34%]"
          src="images/img_hilzbkeszs4uhi.png"
          alt="hilzbkeszs4uhi"
        />
      </div>
    </>
  );
};

export default forgotVerification;
