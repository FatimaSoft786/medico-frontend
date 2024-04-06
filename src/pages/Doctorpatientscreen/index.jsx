import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Img, Input, Line, Text } from "components";
const DoctorpatientscreenPage = () => {
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
    <div className="bg-white-A700 font-istokweb h-auto mx-auto pr-[18px] relative w-full">
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
          <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[3px] w-[97%] md:w-full">
            <Text
              className="sm:text-[21px] md:text-[23px] mt-[21px] text-[25px] text-teal-900"
              size="txtIstokWebBold25"
            >
              VIDEO MEDICO
            </Text>
            <div className="font-josefinsans flex flex-row space-x-10 h-[30px] w-auto sm:w-full">
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

              <div className=" flex flex-row w-auto space-x-2">
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
                <div className="h-[90px] relative rounded-[50%] shadow-bs2 w-[90px]">
                  <Img
                    className="h-[90px] m-auto rounded-[50%] w-[90px]"
                    src="images/img_image9_70x70.png"
                    alt="imageNine"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" w-[99%] h-auto bg-gray-50_01 flex-row flex justify-between">
            <div className=" flex w-2/6 flex-col justify-center items-center bg-white-A700 rounded m-2">
              <Img
                className="h-[120px] md:h-auto rounded-[50%] shadow-bs2 w-[120px]"
                src="images/img_profile.png"
                alt="imageSeventeen"
              />
              <Text
                className=" mx-auto sm:text-[21px] md:text-[23px] text-[25px] text-teal-900 top-[0] w-max"
                size="txtIstokWebBold25"
              >
                Deborah Gonzales
              </Text>
              <Text
                className=" inset-x-[0] mx-auto text-lg text-teal-900 w-max"
                size="txtIstokWebRegular18"
              >
                Debbygonzales5000@gmail.com
              </Text>

              <Text
                className=" left-[15%] text-teal-900 text-xl top-[0]"
                size="txtIstokWebBold20Teal900"
              >
                Appointments
              </Text>
              <div className=" flex flex-row  space-x-2 justify-center items-center">
                <div className=" flex flex-col">
                  <Text
                    className="mb-[-13.92px] mx-auto sm:text-[41px] md:text-[47px] text-[55px] text-black-900 z-[1]"
                    size="txtIstokWebBold55"
                  >
                    2
                  </Text>
                  <Text
                    className="mt-auto mx-auto text-lg text-teal-900"
                    size="txtIstokWebRegular18"
                  >
                    Upcoming
                  </Text>
                </div>
                <Line className=" h-full w-0.5 bg-black-900" />
                <div className="flex flex-col">
                  <Text
                    className="mb-[-13.92px] mx-auto sm:text-[41px] md:text-[47px] text-[55px] text-black-900 z-[1]"
                    size="txtIstokWebBold55"
                  >
                    0
                  </Text>
                  <Text
                    className="text-lg text-teal-900"
                    size="txtIstokWebRegular18"
                  >
                    Past
                  </Text>
                </div>
              </div>

              <Button
                className=" bottom-[7%] cursor-pointer font-bold leading-[normal] left-[5%] rounded-[5px] text-center text-xl w-[242px]"
                color="light_blue_700"
                size="sm"
                variant="fill"
              >
                Send Message
              </Button>
            </div>

            <div className=" flex flex-col w-[40%] bg-white-A700 m-2">
              <div className=" w-full h-auto mx-0 flex flex-row justify-between">
                <div className=" flex flex-col ml-2">
                  <Text
                    className="ml-auto mr-28 mt-1 text-lg text-light_blue-700_99"
                    size="txtIstokWebBold18"
                  >
                    Birthday
                  </Text>

                  <Text
                    className="text-teal-900 text-xl"
                    size="txtIstokWebBold20Teal900"
                  >
                    24 Sept 2022
                  </Text>
                  <Line className="bg-black-900_4c h-0.5 rotate-[180deg] w-full" />
                </div>

                <div className=" flex flex-col mr-2">
                  <Text
                    className="ml-auto mr-28 mt-1 text-lg text-light_blue-700_99"
                    size="txtIstokWebBold18"
                  >
                    Sex
                  </Text>

                  <Text
                    className="text-teal-900 text-xl"
                    size="txtIstokWebBold20Teal900"
                  >
                    Male
                  </Text>
                  <Line className="bg-black-900_4c h-0.5 rotate-[180deg] w-auto" />
                </div>
              </div>

              <div className=" w-full h-auto mx-0 flex flex-row justify-between">
                <div className=" flex flex-col ml-2">
                  <Text
                    className="ml-auto mr-28 mt-1 text-lg text-light_blue-700_99"
                    size="txtIstokWebBold18"
                  >
                    Phone No
                  </Text>

                  <Text
                    className="text-teal-900 text-xl"
                    size="txtIstokWebBold20Teal900"
                  >
                    +39 360 3501970
                  </Text>
                  <Line className="bg-black-900_4c h-0.5 rotate-[180deg] w-full" />
                </div>

                <div className=" flex flex-col mr-2">
                  <Text
                    className="ml-auto mr-28 mt-1 text-lg text-light_blue-700_99"
                    size="txtIstokWebBold18"
                  >
                    Address
                  </Text>

                  <Text
                    className="text-teal-900 text-xl"
                    size="txtIstokWebBold20Teal900"
                  >
                    Via San Domenico Soriano 138
                  </Text>
                  <Line className="bg-black-900_4c h-0.5 rotate-[180deg] w-auto" />
                </div>
              </div>

              <div className=" w-full h-auto mx-0 flex flex-row justify-between">
                <div className=" flex flex-col ml-2">
                  <Text
                    className="ml-auto mr-28 mt-1 text-lg text-light_blue-700_99"
                    size="txtIstokWebBold18"
                  >
                    City
                  </Text>

                  <Text
                    className="text-teal-900 text-xl"
                    size="txtIstokWebBold20Teal900"
                  >
                    Giammoro
                  </Text>
                  <Line className="bg-black-900_4c h-0.5 rotate-[180deg] w-full" />
                </div>

                <div className=" flex flex-col mr-2">
                  <Text
                    className="ml-auto mr-28 mt-1 text-lg text-light_blue-700_99"
                    size="txtIstokWebBold18"
                  >
                    Zip Code
                  </Text>

                  <Text
                    className="text-teal-900 text-xl"
                    size="txtIstokWebBold20Teal900"
                  >
                    98040
                  </Text>
                  <Line className="bg-black-900_4c h-0.5 rotate-[180deg] w-auto" />
                </div>
              </div>

              <div className=" w-full h-auto mx-0 flex flex-row justify-between">
                <div className=" flex flex-col ml-2">
                  <Text
                    className="ml-auto mr-28 mt-1 text-lg text-light_blue-700_99"
                    size="txtIstokWebBold18"
                  >
                    weight/height
                  </Text>

                  <Text
                    className="text-teal-900 text-xl"
                    size="txtIstokWebBold20Teal900"
                  >
                    56 kg / 1.7 m
                  </Text>
                  <Line className="bg-black-900_4c h-0.5 rotate-[180deg] w-full" />
                </div>

                <div className=" flex flex-col mr-2">
                  <Text
                    className="ml-auto mr-28 mt-1 text-lg text-light_blue-700_99"
                    size="txtIstokWebBold18"
                  >
                    Registration Date
                  </Text>

                  <Text
                    className="text-teal-900 text-xl"
                    size="txtIstokWebBold20Teal900"
                  >
                    10, June, 2023
                  </Text>
                  <Line className="bg-black-900_4c h-0.5 rotate-[180deg] w-auto" />
                </div>
              </div>

              <div className=" w-full h-auto flex flex-row justify-between mt-4">
                <Text
                  className="text-lg text-teal-900"
                  size="txtIstokWebBold18Teal900"
                >
                  Appointment Time: 12:30 pm
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center rounded-[5px] w-[210px]"
                  rightIcon={
                    <div className="h-6 mt-1 mb-px ml-2.5 w-6 ">
                      <Img
                        className="h-6"
                        src="images/img_upload_white_a700.svg"
                        alt="upload"
                      />
                    </div>
                  }
                  color="light_blue_700"
                  size="sm"
                  variant="fill"
                >
                  <div className="font-bold leading-[normal] text-left text-xl">
                    Start VIdeo Call
                  </div>
                </Button>
              </div>
            </div>

            <div className=" flex flex-col w-[27%]">
              <div className=" flex flex-col py-3 m-5 bg-white-A700 rounded">
                <Text
                  className="md:ml-[0] ml-[15px] text-lg text-teal-900"
                  size="txtIstokWebBold18Teal900"
                >
                  Files from Patient
                </Text>
                <Input
                  name="filesize_Two"
                  placeholder="Eczema test        25 kb"
                  className="!placeholder:text-black-900_b2 !text-black-900_b2 font-nunito leading-[normal] p-0 text-left text-xl w-full"
                  wrapClassName="border-2 border-black-900_19 border-solid flex md:ml-[0] ml-[15px] shadow-bs4 w-[90%]"
                  prefix={
                    <div className="mr-[9px] sm:w-full sm:mx-0 w-[6%]  my-px">
                      <Img
                        className="my-auto"
                        src="images/img_file_black_900.svg"
                        alt="file"
                      />
                    </div>
                  }
                  shape="round"
                  size="2xl"
                ></Input>
              </div>

              <div className=" flex flex-col m-2 bg-white-A700 rounded">
                <div className=" flex flex-row justify-between">
                  <Text
                    className="mb-[0px] ml-2 text-lg text-teal-900"
                    size="txtIstokWebBold18Teal900"
                  >
                    Upload Files/Document
                  </Text>
                  <Img
                    className="h-[26px] mb-[0px] ml-[26px]"
                    src="images/img_thumbsup_light_blue_700.svg"
                    alt="thumbsup_Two"
                  />
                  <Text
                    className="ml-[3px] mt-2 text-[15px] text-light_blue-700"
                    size="txtNunitoBold15"
                  >
                    Upload File
                  </Text>
                </div>
                <Input
                  name="filesize_Two"
                  placeholder="Eczema test        25 kb"
                  className="!placeholder:text-black-900_b2 !text-black-900_b2 font-nunito leading-[normal] p-0 text-left text-xl w-full"
                  wrapClassName="border-2 border-black-900_19 border-solid flex md:ml-[0] ml-[15px] shadow-bs4 w-[90%] mb-2"
                  prefix={
                    <div className="mr-[9px] sm:w-full sm:mx-0 w-[6%]  my-px">
                      <Img
                        className="my-auto"
                        src="images/img_file_black_900.svg"
                        alt="file"
                      />
                    </div>
                  }
                  shape="round"
                  size="2xl"
                ></Input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorpatientscreenPage;
