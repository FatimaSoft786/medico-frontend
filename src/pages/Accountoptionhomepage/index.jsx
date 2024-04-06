import React from "react";

import { Img, Text } from "components";

const AccountoptionhomepagePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-poppins h-[1024px] items-center justify-start mx-auto py-[21px] w-full"
        style={{ backgroundImage: "url('images/img_accountoptionhome.png')" }}
      >
        <div className="flex flex-col gap-[41px] justify-start mb-[76px] w-full">
          <Img
            className="h-[65px] md:h-auto md:ml-[0] ml-[25px] rounded-[50%] w-[65px]"
            src="images/img_biglogo.png"
            alt="biglogo"
          />
          <div className="bg-white-A700_b2 flex flex-col items-center justify-start p-[74px] md:px-10 sm:px-5 rounded-[50px] w-full">
            <div className="flex flex-col gap-[19px] items-center justify-start mb-[95px] w-[66%] md:w-full">
              <Text
                className="sm:text-[31px] md:text-[33px] text-[35px] text-teal-900"
                size="txtPoppinsSemiBold35"
              >
                Choose How you want to use Our Platform
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-7 justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-[42px] items-center justify-between w-full">
                    <Img
                      className="h-[400px] w-[400px]"
                      src="images/img_group163.svg"
                      alt="group163"
                    />
                    <Img
                      className="h-[400px] w-[400px]"
                      src="images/img_group164.svg"
                      alt="group164"
                    />
                  </div>
                  <div className="flex  flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[84px] w-[72%] md:w-full">
                    <input type="checkbox" className="bg-white-A700 border-[5px] border-black-900 border-solid h-10 mb-2.5 md:mt-0 mt-1 rounded-[5px] w-10"></input>
                    <Text
                      className="ml-1 md:ml-[0] sm:text-[31px] md:text-[33px] text-[35px] text-teal-900"
                      size="txtPoppinsSemiBold35"
                    >
                      Patient
                    </Text>
                    <input type="checkbox" className="bg-white-A700 border-[5px] border-black-900 border-solid h-10 mb-2.5 md:ml-[0] ml-[271px] md:mt-0 mt-1 rounded-[5px] w-10"></input>
                    <Text
                      className="md:ml-[0] ml-[3px] sm:text-[31px] md:text-[33px] text-[35px] text-teal-900"
                      size="txtPoppinsSemiBold35"
                    >
                      Doctor
                    </Text>
                  </div>
                  <div className=" flex flex-col justify-center items-center">
                  <span className="md:text-base sm:text-base mt-[0px] text-center text-black-900 font-poppins  text-[20px] font-bold">
                  Experience the Future of Healthcare with Video Medico!
          </span>
          <span className="text-black-900 font-poppins w-[80%] mt-[3px] text-center  sm:text-base md:text-base text-lg font-normal">
          Virtual Visit: Join your video call at the scheduled time. Discuss your symptoms, receive medical advice, and even get prescriptions if needed—all from the comfort of your home.
          </span>

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

export default AccountoptionhomepagePage;
