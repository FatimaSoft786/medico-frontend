import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Img, List, Text } from "components";

const DoctorDashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);


  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const sideBarMenu = [
    {
      id: 1,
      icon: "images/img_home.svg",
      selectIcon: "images/img_select_home.svg",
      label: "Dashboard",
      link: "/patientDashboard",
    },
    {
      id: 2,
      icon: "images/img_favorite.svg",
      selectIcon: "images/img_select_favorite.svg",
      label: "Fav.Doctor",
      link: "",
    },
    {
      id: 3,
      icon: "images/img_thumbsup.svg",
      selectIcon: "images/img_appointment.svg",
      label: "My Booking",
      link: "",
    },
    {
      id: 4,
      icon: "images/img_payment.svg",
      label: "Payments",
      selectIcon: "images/img_select_payment.svg",
      link: "",
    },
    {
      id: 5,
      icon: "images/img_user.svg",
      label: "Read T&C",
      selectIcon: "images/img_user.svg",
      link: "",
    },
    {
      id: 6,
      icon: "images/img_profile_icon.svg",
      label: "Profile",
      selectIcon: "images/img_select_profile_icon.svg",
      link: "/patientProfile",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-istokweb items-center justify-end mx-auto w-full">
        <div className="flex flex-row gap-[10px] items-start justify-between w-full">
          {isSidebarOpen && (
            <div className="sticky w-[267px] md:w-auto sm:w-auto bg-light_blue-800 flex h-screen  justify-start overflow-auto top-[0]">
              <div>
                <Img
                  className=" hidden h-16 md:ml-[0] ml-[25px] mr-[170px] mt-[15px]"
                  src="images/img_menu.svg"
                  alt="frame"
                />
                <ul className=" mt-[120px] w-[267px] sm:w-auto md:w-auto sm:px-3">
                  {sideBarMenu.map((item) => (
                    <Link
                      to={item.link}
                      className="flex flex-row w-full bg-black-900 pl-[12px] sm:px-0 md:px-0 py-3 gap-[13px] mt-10 font-istokweb text-[25px] font-bold"
                      key={item.id}
                      onClick={() => handleItemClick(item)}
                      style={{
                        backgroundColor:
                          selectedItem && selectedItem.id === item.id
                            ? "#ffffff"
                            : "transparent",
                      }}
                    >
                      <Img
                        src={
                          selectedItem && selectedItem.id === item.id
                            ? item.selectIcon
                            : item.icon
                        }
                      ></Img>
                      <p
                        className="mt-1.5 md:hidden sm:hidden"
                        style={{
                          color:
                            selectedItem && selectedItem.id === item.id
                              ? "#022c49"
                              : "#ffffff",
                        }}
                      >
                        {item.label}
                      </p>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-[30px] items-start justify-start md:mt-0 sm:mt-0 mt-[3px] md:px-2 w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[3px] w-[98%] md:w-full">
              <Text
                className="sm:text-[21px] md:text-[23px] mt-[21px] text-[25px] text-teal-900"
                size="txtIstokWebBold25"
              >
                VIDEO MEDICO
              </Text>
              <div className="font-josefinsans flex flex-row space-x-10 h-[30px] w-[31%] sm:w-full">
                <div className=" flex flex-row space-x-2">
                  <Img
                    className="h-[24px] mt-[21px] w-[24px]"
                    src="images/img_vector.svg"
                    alt="vector"
                  />
                  <Text
                    className="mb-0.5 text-black-900_99 text-xl mt-[21px]"
                    size="txtJosefinSansRomanRegular20Black90099"
                  >
                    Alert
                  </Text>
                </div>
                <div className=" flex flex-row space-x-2">
                  <Img
                    className="h-[24px] mt-[21px] w-[24px]"
                    src="images/img_iconparksolidhelp.svg"
                    alt="vector"
                  />
                  <Text
                    className="mb-0.5 text-black-900_99 text-xl mt-[21px]"
                    size="txtJosefinSansRomanRegular20Black90099"
                  >
                    Help
                  </Text>
                </div>

                <div className=" flex flex-row space-x-2">
                  <Img
                    className="h-[24px] mt-[21px] w-[24px]"
                    src="images/img_search.svg"
                    alt="vector"
                  />
                  <Text
                    className="mb-0.5 text-black-900_99 text-xl mt-[21px]"
                    size="txtJosefinSansRomanRegular20Black90099"
                  >
                    Setting
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-josefinsans gap-5 items-start justify-between mt-[19px] w-full">
              <div className="bg-gray-50_01 flex md:flex-col flex-row gap-7 items-center justify-start p-[9px] rounded-[10px] shadow-bs1 w-[75%] md:w-full">
                <div className=" bg-white-A700 flex flex-row items-start  justify-start mx-4 pt-[4px] rounded-[10px]  w-[18%]">
                  <div className="bg-light_blue-700_99 flex flex-col mx-3 items-center justify-start mb-[0px] mt-0.5 p-[15px] rounded-[10px] w-auto">
                    <Img
                      className="h-[24px] my-[5px] w-[24px]"
                      src="images/img_television_white_a700.svg"
                      alt="television_One"
                    />
                  </div>
                  <div className="flex flex-col gap-[15px] items-start justify-start">
                    <Text
                      className="text-teal-900 text-xl"
                      size="txtJosefinSansRomanRegular20Teal900"
                    >
                      Patient
                    </Text>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-teal-900"
                      size="txtPoppinsBold30"
                    >
                      738
                    </Text>
                  </div>
                </div>

                <div className=" bg-white-A700 flex flex-row items-start  justify-start mx-4 pt-[4px] rounded-[10px]  w-[18%]">
                  <div className="bg-light_blue-700_99 flex flex-col mx-3 items-center justify-start mb-[0px] mt-0.5 p-[15px] rounded-[10px] w-auto">
                    <Img
                      className="h-[24px] my-[5px] w-[24px]"
                      src="images/$.svg"
                      alt="television_One"
                    />
                  </div>
                  <div className="flex flex-col gap-[15px] items-start justify-start">
                    <Text
                      className="text-teal-900 text-xl"
                      size="txtJosefinSansRomanRegular20Teal900"
                    >
                      Income
                    </Text>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-teal-900"
                      size="txtPoppinsBold30"
                    >
                      12,000
                    </Text>
                  </div>
                </div>

                <div className=" bg-white-A700 flex flex-row items-start  justify-start mx-4 pt-[4px] rounded-[10px]  w-[30%]">
                  <div className="bg-light_blue-700_99 flex flex-col mx-3 items-center justify-start mb-[0px] mt-0.5 p-[15px] rounded-[10px] w-auto">
                    <Img
                      className="h-[24px] my-[5px] w-[24px]"
                      src="images/img_calendar_white_a700.svg"
                      alt="television_One"
                    />
                  </div>
                  <div className="flex flex-col gap-[15px] items-start justify-start">
                    <Text
                      className="text-teal-900 text-xl"
                      size="txtJosefinSansRomanRegular20Teal900"
                    >
                      Appointment
                    </Text>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-teal-900"
                      size="txtPoppinsBold30"
                    >
                      380
                    </Text>
                  </div>
                </div>
              </div>

              <div className=" flex flex-row w-[25%] space-x-2">
                <div className="h-[90px] relative rounded-[50%] shadow-bs2 w-[90px]">
                  <Img
                    className="h-[90px] m-auto rounded-[50%] w-[90px]"
                    src="images/img_image9_70x70.png"
                    alt="imageNine"
                  />
                </div>
                <div className="flex flex-col items-start justify-start md:mt-0 mt-[5px]">
                  <Text
                    className="ml-0.5 md:ml-[0] sm:text-[21px] md:text-[23px] my-2 text-[25px] text-black-900"
                    size="txtJosefinSansRomanRegular25"
                  >
                    Dr. Isabella
                  </Text>
                  <Text
                    className="text-black-900_b2 text-xl w-full"
                    size="txtJosefinSansRomanRegular20"
                  >
                    Allergy & immunology
                  </Text>
                </div>
              </div>
            </div>

            <div className="flex sm:flex-col flex-row font-istokweb sm:gap-10 items-start justify-between w-[98%] md:w-full">
              <Text
                className="sm:mt-0 mt-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-teal-900"
                size="txtIstokWebBold25"
              >
                Today Appointment
              </Text>
              <div className="flex items-start justify-start w-1/2">
                <Text
                  className="mb-0.5 sm:text-[21px] text-start md:text-[23px] text-[25px] text-teal-900"
                  size="txtIstokWebBold25"
                >
                  Next Patient info
                </Text>
              </div>
            </div>

            <div className=" flex flex-row justify-between w-[98%] space-x-5 bg-gray-50_01 p-5 h-auto">
              <div className="flex md:flex-col flex-row md:gap-5 rounded p-3 items-start justify-start w-1/2 bg-white-A700">
                <div className="flex flex-col h-20 items-center justify-start rounded-[50%] shadow-bs2 w-20">
                  <Img
                    className="h-20 md:h-auto rounded-[50%] w-20"
                    src="images/img_image16.png"
                    alt="imageSixteen"
                  />
                </div>
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[23px]">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-teal-900"
                    size="txtIstokWebBold25"
                  >
                    Camilo Rebecca
                  </Text>
                  <Text
                    className="text-light_blue-700_99 text-xl"
                    size="txtIstokWebBold20"
                  >
                    Medical check up
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[223px] sm:text-[21px] md:text-[23px] text-[25px] text-teal-900_99"
                  size="txtIstokWebBold25Teal90099"
                >
                  On going...
                </Text>
              </div>

              <div className=" flex flex-row bg-white-A700 rounded w-1/2">
                <div className=" flex flex-col">
                  <div className=" flex h-[100px] items-center justify-start left-[0] rounded-[50%] shadow-bs2 top-[0] w-[100px]">
                    <Img
                      className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                      src="images/img_image18_100x100.png"
                      alt="imageEighteen"
                    />
                  </div>
                  <div className=" flex flex-col mx-4">
                    <Text
                      className=" left-[0] sm:text-[21px] md:text-[23px] text-[25px] text-teal-900 top-[0]"
                      size="txtIstokWebBold25"
                    >
                      James Anthony
                    </Text>
                    <Text
                      className=" mx-auto text-light_blue-700_99 text-xl w-full"
                      size="txtIstokWebBold20"
                    >
                      Via Bonafous Alfonso 131, Colloredo Di Montalbano
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start space-x-5 mx-auto w-full">
                    <div className=" flex flex-col">
                      <Text
                        className="mt-[10px] sm:text-[21px] md:text-[23px] text-[25px] text-teal-900"
                        size="txtIstokWebBold25"
                      >
                        D.O.B
                      </Text>
                      <Text
                        className="mt-[0px] text-light_blue-700_99 text-xl "
                        size="txtIstokWebBold20"
                      >
                        30 September 1998
                      </Text>
                    </div>

                    <div className=" flex flex-col">
                      <Text
                        className="mt-[10px] sm:text-[21px] md:text-[23px] text-[25px] text-teal-900"
                        size="txtIstokWebBold25"
                      >
                        Sex
                      </Text>
                      <Text
                        className="mt-[0px] text-light_blue-700_99 text-xl "
                        size="txtIstokWebBold20"
                      >
                        Male
                      </Text>
                    </div>
                  </div>

                  <div className="flex flex-row items-start justify-start space-x-5 mx-auto w-full">
                    <div className=" flex flex-col">
                      <Text
                        className="mt-[10px] sm:text-[21px] md:text-[23px] text-[25px] text-teal-900"
                        size="txtIstokWebBold25"
                      >
                        Height
                      </Text>
                      <Text
                        className="mt-[0px] text-light_blue-700_99 text-xl "
                        size="txtIstokWebBold20"
                      >
                        5.6m
                      </Text>
                    </div>

                    <div className=" flex flex-col">
                      <Text
                        className="mt-[10px] sm:text-[21px] md:text-[23px] text-[25px] text-teal-900"
                        size="txtIstokWebBold25"
                      >
                        Weight
                      </Text>
                      <Text
                        className="mt-[0px] text-light_blue-700_99 text-xl "
                        size="txtIstokWebBold20"
                      >
                        56 kg
                      </Text>
                    </div>
                  </div>

                  <div className=" flex flex-col">
                    <Text
                      className="mt-[10px] sm:text-[21px] md:text-[23px] text-[25px] text-teal-900"
                      size="txtIstokWebBold25"
                    >
                      Last Appointment
                    </Text>
                    <Text
                      className="mt-[0px] text-light_blue-700_99 text-xl "
                      size="txtIstokWebBold20"
                    >
                      02 December 2023
                    </Text>
                  </div>

                  <div className=" flex flex-col">
                    <Text
                      className="mt-[10px] sm:text-[21px] md:text-[23px] text-[25px] text-teal-900"
                      size="txtIstokWebBold25"
                    >
                      Register Date
                    </Text>
                    <Text
                      className="mt-[0px] text-light_blue-700_99 text-xl "
                      size="txtIstokWebBold20"
                    >
                      03 December 2023
                    </Text>
                  </div>

                  <div className="flex flex-row gap-[34px] items-center justify-start md:ml-[0] ml-[3px] mt-4 w-4/5 md:w-full">
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[103px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                      shape="round"
                      color="lime_A700_33"
                      size="xs"
                      variant="fill"
                    >
                      Asthma
                    </Button>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[151px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                      shape="round"
                      color="lime_A700_33"
                      size="xs"
                      variant="fill"
                    >
                      Pneumonia
                    </Button>
                  </div>

                  <div className="flex flex-row gap-[31px] items-center justify-between mt-[17px] w-full">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[278px]"
                      leftIcon={
                        <div className="mt-px mb-1 mr-[11px] bg-green-900">
                          <Img src="images/img_call.svg" alt="call" />
                        </div>
                      }
                      shape="round"
                      color="lime_A700_33"
                      size="md"
                      variant="fill"
                    >
                      <div className="!text-teal-900 font-bold leading-[normal] md:text-[23px] sm:text-[21px] text-[25px] text-left">
                        +39 360 3501970
                      </div>
                    </Button>
                    <div className="bg-lime-A700_33 flex flex-col items-center justify-start p-3.5 rounded-[10px]">
                      <Img
                        className="h-6 my-[5px] w-6"
                        src="images/img_thumbsup_teal_900.svg"
                        alt="thumbsup"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row gap-7 items-center justify-between md:ml-[0] ml-[3px] mt-[11px] w-full">
                    <div className="bg-lime-A700_33 flex flex-row gap-[11px] items-center justify-start p-3 rounded-[10px] w-[78%]">
                      <Img
                        className="h-[30px] ml-[7px]"
                        src="images/img_megaphone.svg"
                        alt="megaphone"
                      />
                      <Text
                        className="mt-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-teal-900"
                        size="txtIstokWebBold25"
                      >
                        Medical Record
                      </Text>
                    </div>
                    <div className="bg-lime-A700_33 flex flex-col items-center justify-start p-[11px] rounded-[10px] w-[15%]">
                      <Img
                        className="h-[30px] mb-1 mt-[7px] w-[30px]"
                        src="images/img_upload_teal_900.svg"
                        alt="upload"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[81%] md:w-full">
              <Text
                className="md:mt-0 mt-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-teal-900"
                size="txtIstokWebBold25"
              >
                Appointment Request
              </Text>
              <Text
                className="mb-0.5 md:ml-[0] ml-[345px] sm:text-[21px] md:text-[23px] text-[25px] text-light_blue-800"
                size="txtIstokWebBold25Lightblue800"
              >
                See all
              </Text>
              <Text
                className="md:ml-[0] ml-[51px] md:mt-0 mt-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-teal-900"
                size="txtIstokWebBold25"
              >
                Set Availability
              </Text>
            </div>

            <div className=" flex flex-row justify-between w-[50%] mx-2 bg-gray-50_01">
              <div className="flex flex-row items-start justify-start w-[100%] sm:w-full">
                <div className="flex h-28 items-center justify-start rounded-[50%] mx-2 shadow-bs2 w-28">
                  <Img
                    className="h-28 md:h-auto rounded-[50%] w-28"
                    src="images/img_image16.png"
                    alt="imageSixteen"
                  />
                </div>
                <div className=" flex flex-col">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-teal-900"
                    size="txtIstokWebBold25"
                  >
                    Aiye Aye
                  </Text>
                  <Text
                    className="mb-[-8.6px] ml-0.5 text-light_blue-700_99 text-xl z-[1]"
                    size="txtIstokWebBold20"
                  >
                    Nasal congestion
                  </Text>
                  <Text
                    className="mt-auto mx-auto text-teal-900 text-xl"
                    size="txtIstokWebBold20Teal900"
                  >
                    20 January 06:00 am
                  </Text>
                </div>
              </div>

              <div className="flex flex-row font-nunito gap-[11px] items-start mr-5 justify-between sm:mt-0 mt-7 w-[12%] sm:w-full">
                <Img
                  className="h-[29px] mt-[3px] w-[29px]"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />

                <Img
                  className="h-[29px] mt-[3px] w-[29px]"
                  src="images/img_cross.svg"
                  alt="checkmark"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDashboardPage;


