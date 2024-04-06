import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, FloatingInput, Img, Input, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const PatientPaymentPage = () => {
  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_home_white_a700.svg"
          alt="home"
        />
      ),
      label: "Dashboard",
      href: "/patientdashboard",
      active: window.location.pathname === "/patientdashboard",
    },
    {
      icon: (
        <Img className="h-6 w-6" src="images/img_thumbsup.svg" alt="thumbsup" />
      ),
      label: "My Booking",
      href: "/patientmybookings",
      active: window.location.pathname === "/patientmybookings",
    },
    {
      icon: (
        <Img
          className="h-5"
          src="images/img_television_teal_900.svg"
          alt="television"
        />
      ),
      label: "Payments",
    },
    {
      icon: <Img className="h-6 w-6" src="images/img_user.svg" alt="user" />,
      label: "Read T&C",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-istokweb items-center justify-end mx-auto sm:pr-5 pr-[25px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar1 className="!sticky !w-[267px] bg-light_blue-800 flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
            <Text
              className="md:ml-[0] ml-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-teal-900"
              size="txtIstokWebBold25"
            >
              VIDEO MEDICO
            </Text>
            <div className="bg-gray-50_01 flex flex-col items-start justify-start p-[5px] rounded-[10px] shadow-bs1 w-full">
              <div className="flex flex-col justify-start mb-[204px] mt-[13px] w-[71%] md:w-full">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-teal-900"
                  size="txtIstokWebBold25"
                >
                  Add Your Payment Method
                </Text>
                <div className="flex flex-col items-start justify-start ml-2 md:ml-[0] w-[99%] md:w-full">
                  <div className="flex md:flex-col flex-row font-istokweb md:gap-5 items-start justify-start w-full">
                    <Text
                      className="md:mt-0 mt-[13px] text-teal-900 text-xl"
                      size="txtIstokWebBold20Teal900"
                    >
                      Card holder Name:
                    </Text>
                    <Img
                      className="h-[42px] md:ml-[0] ml-[193px]"
                      src="images/img_user_black_900.svg"
                      alt="user_One"
                    />
                    <div className="bg-light_blue-700 border border-black-900 border-solid h-6 mb-[7px] md:ml-[0] ml-[3px] md:mt-0 mt-[11px] rounded-[5px] w-6"></div>
                    <div className="bg-black-900 flex md:flex-1 flex-col items-center justify-end md:ml-[0] ml-[23px] p-[3px] rounded-[5px] w-[10%] md:w-full">
                      <Img
                        className="h-9"
                        src="images/img_television_white_a700_36x48.svg"
                        alt="television_One"
                      />
                    </div>
                    <div className="border border-black-900 border-solid h-6 md:ml-[0] ml-[3px] md:mt-0 mt-[11px] rounded-[5px] w-6"></div>
                    <Img
                      className="h-[42px] md:ml-[0] ml-[23px]"
                      src="images/img_vector_black_900.svg"
                      alt="vector"
                    />
                    <div className="border border-black-900 border-solid h-6 md:ml-[0] ml-[3px] md:mt-0 mt-[11px] rounded-[5px] w-6"></div>
                  </div>
                  <Input
                    name="groupNinetySix"
                    placeholder="Alessia Jones"
                    className="!placeholder:text-teal-900 !text-teal-900 font-nunito leading-[normal] p-0 text-left text-xl w-full"
                    wrapClassName="mt-2 w-full"
                    shape="square"
                    size="3xl"
                  ></Input>
                  <div className="flex md:flex-col flex-row font-istokweb md:gap-5 items-center justify-start mt-[21px] w-[92%] md:w-full">
                    <Text
                      className="text-teal-900 text-xl"
                      size="txtIstokWebBold20Teal900"
                    >
                      Card Number
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[362px] text-teal-900 text-xl"
                      size="txtIstokWebBold20Teal900"
                    >
                      Date
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[70px] text-teal-900 text-xl"
                      size="txtIstokWebBold20Teal900"
                    >
                      CVV
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row font-nunito md:gap-5 items-center justify-start md:ml-[0] ml-[7px] mt-1.5 w-[99%] md:w-full">
                    <Text
                      className="text-teal-900 text-xl"
                      size="txtNunitoRegular20Teal900"
                    >
                      1234 5678 9012 3456
                    </Text>
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[97px] md:ml-[0] ml-[272px] text-center text-xl"
                      shape="square"
                      color="white_A700"
                      size="xl"
                      variant="fill"
                    >
                      02/25
                    </Button>
                    <Button
                      className="cursor-pointer leading-[normal] min-w-[97px] md:ml-[0] ml-[18px] text-center text-xl"
                      shape="square"
                      color="white_A700"
                      size="xl"
                      variant="fill"
                    >
                      123
                    </Button>
                  </div>
                  <FloatingInput
                    wrapClassName="placeholder:bg-white-A700 font-nunito leading-[normal] placeholder:left-[7px] sm:mx-0 p-0 sm:pr-5 text-left placeholder:text-teal-900 text-teal-900 text-xl placeholder:top-[0] w-full"
                    className="font-nunito leading-[normal] p-0 sm:mx-0 sm:pr-5 text-left text-teal-900 text-xl w-full"
                    name="email"
                    labelClasses="bg-white-A700 left-[7px] top-[0] text-teal-900"
                    focusedClasses="translate-y-[17px] scale-[1]"
                    wrapperClasses="mt-[104px] sm:w-full sm:mx-0 w-[67%] top-[0]"
                    labelText="Pay with Paypal"
                    defaultText="Alessiajones@gmail.com"
                  ></FloatingInput>
                  <Button
                    className="cursor-pointer font-bold font-nunito leading-[normal] min-w-[165px] md:ml-[0] ml-[407px] mt-[51px] rounded-[5px] text-center text-xl"
                    color="red_A700_01"
                    size="sm"
                    variant="fill"
                  >
                    Click Save Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[50px] items-end justify-start w-full">
            <div className="h-[70px] relative rounded-[50%] shadow-bs2 w-[70px]">
              <Img
                className="h-[70px] m-auto rounded-[50%] w-[70px]"
                src="images/img_image12.png"
                alt="imageTwelve"
              />
              <Img
                className="absolute h-[70px] inset-[0] justify-center m-auto rounded-[50%] w-[70px]"
                src="images/img_image15.png"
                alt="imageFifteen"
              />
            </div>
            <div className="bg-gray-50_01 flex flex-col gap-[47px] items-center justify-start p-[25px] sm:px-5 rounded-[10px] shadow-bs1 w-full">
              <Img
                className="h-[30px] mt-[21px] w-[30px]"
                src="images/img_vector.svg"
                alt="vector_One"
              />
              <Img
                className="h-[30px] w-[30px]"
                src="images/img_iconparksolidhelp.svg"
                alt="iconparksolidhe"
              />
              <Img
                className="h-[30px] w-[29px]"
                src="images/img_search.svg"
                alt="search"
              />
              <Img
                className="h-[30px] mb-[332px]"
                src="images/img_file.svg"
                alt="file"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientPaymentPage;
