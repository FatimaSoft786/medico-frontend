import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Button, Img, Input, Line, List, Text } from "components";

const SessionsandcalendarPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleButtonClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const sideBarMenu = [
    {
      id: 1,
      icon: "images/img_home.svg",
      selectIcon: "images/img_select_home.svg",
      label: "Dashboard",
      link: '/patientDashboard'
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

  const daysAndDate = [
    {
      day: "Mon",
      date: "Jan 16",
      booking: "Booked"
    },
    {
      day: "Tue",
      date: "Jan 17",
      "booking": ""
    },
    {
      day: "Wed",
      date: "Jan 18",
      "booking": ""
    },
    {
      day: "Thurs",
      date: "Jan 19",
      "booking": ""
    },
    {
      day: "Fri",
      date: "Jan 20",
      "booking": ""
    },
    {
      day: "Sat",
      date: "Jan 21",
      "booking": ""
    }
  
    ]
    const availableTime = [
  {
    "start": "07:00",
    end: "08:00"
  },
  {
    "start": "09:00",
    end: "10:00"
  },
  {
    "start": "10:00",
    end: "11:00"
  },
  {
    "start": "12:00",
    end: "13:00"
  },
  {
    "start": "13:00",
    end: "14:00"
  },
  {
    "start": "14:00",
    end: "15:00"
  }
  
    ]


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
                    <Link to={item.link}
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
          <div className="flex flex-row md:flex-col sm:flex-col overflow-y-auto md:space-y-2 sm:space-y-2 justify-between w-[97%]">
         <div className=" flex flex-col w-full">
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


          <div className="bg-gray-50_01 flex flex-col font-josefinsans items-center justify-start md:ml-[0] ml-[5px] mt-6 p-0.5 rounded-[10px] shadow-bs1 w-full">
              <div className="flex flex-col gap-3 justify-start mb-[63px] mt-[13px] w-[99%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[13px] w-[78%] md:w-full">
                  <Text
                    className="text-teal-900 text-xl"
                    size="txtJosefinSansRomanBold20"
                  >
                    Set Your Availability
                  </Text>
                  <Text
                    className="text-teal-900 text-xl"
                    size="txtJosefinSansRomanBold20"
                  >
                    See your Appointment calendar
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-[17px] items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col items-start justify-start w-[50%] md:w-full">
                    <div className="bg-white-A700 border-2 border-black-900_19 border-solid flex flex-col justify-center p-3.5 rounded-[10px] shadow-bs5 w-[93%] md:w-full">
                      <Text
                        className="md:ml-[0] ml-[289px] mr-[61px] mt-[9px] text-lg text-light_blue-700"
                        size="txtJosefinSansRomanRegular18Lightblue700"
                      >
                        Choose Time:
                      </Text>
                      <div className="flex flex-col gap-3.5 items-center justify-start mb-[11px] md:ml-[0] ml-[26px] mt-0.5 w-[95%] md:w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-lg text-teal-900"
                            size="txtJosefinSansRomanBold18"
                          >
                            Monday
                          </Text>
                          <Text
                            className="bg-white-A700 border-2 border-black-900_19 border-solid h-[50px] justify-center sm:px-5 px-[35px] py-[15px] rounded-[10px] text-lg text-light_blue-700 text-shadow-ts1 w-[222px]"
                            size="txtJosefinSansRomanRegular18Lightblue700"
                          >
                            07:00 - 19:00
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-lg text-teal-900"
                            size="txtJosefinSansRomanBold18"
                          >
                            Tuesday
                          </Text>
                          <Text
                            className="bg-white-A700 border-2 border-black-900_19 border-solid h-[50px] justify-center sm:px-5 px-[35px] py-[15px] rounded-[10px] text-lg text-light_blue-700 text-shadow-ts1 w-[222px]"
                            size="txtJosefinSansRomanRegular18Lightblue700"
                          >
                            07:00 - 19:00
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-lg text-teal-900"
                            size="txtJosefinSansRomanBold18"
                          >
                            Wednesday
                          </Text>
                          <Text
                            className="bg-white-A700 border-2 border-black-900_19 border-solid h-[50px] justify-center sm:px-5 px-[35px] py-[15px] rounded-[10px] text-lg text-light_blue-700 text-shadow-ts1 w-[222px]"
                            size="txtJosefinSansRomanRegular18Lightblue700"
                          >
                            07:00 - 19:00
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-lg text-teal-900"
                            size="txtJosefinSansRomanBold18"
                          >
                            Thursday
                          </Text>
                          <Text
                            className="bg-white-A700 border-2 border-black-900_19 border-solid h-[50px] justify-center sm:px-5 px-[35px] py-[15px] rounded-[10px] text-lg text-light_blue-700 text-shadow-ts1 w-[222px]"
                            size="txtJosefinSansRomanRegular18Lightblue700"
                          >
                            07:00 - 19:00
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-lg text-teal-900"
                            size="txtJosefinSansRomanBold18"
                          >
                            Friday
                          </Text>
                          <Text
                            className="bg-white-A700 border-2 border-black-900_19 border-solid h-[50px] justify-center sm:px-5 px-[35px] py-[15px] rounded-[10px] text-lg text-light_blue-700 text-shadow-ts1 w-[222px]"
                            size="txtJosefinSansRomanRegular18Lightblue700"
                          >
                            07:00 - 19:00
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-lg text-teal-900"
                            size="txtJosefinSansRomanBold18"
                          >
                            Saturday
                          </Text>
                          <Text
                            className="bg-white-A700 border-2 border-black-900_19 border-solid h-[50px] justify-center sm:px-5 px-[35px] py-[15px] rounded-[10px] text-lg text-light_blue-700 text-shadow-ts1 w-[222px]"
                            size="txtJosefinSansRomanRegular18Lightblue700"
                          >
                            07:00 - 19:00
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[13px] mt-[41px] text-teal-900 text-xl"
                      size="txtJosefinSansRomanBold20"
                    >
                      Set Session and payment:
                    </Text>
                    <div className="bg-white-A700 border-2 border-black-900_19 border-solid flex flex-col items-center justify-start p-2 rounded-[10px] shadow-bs5 w-full">
                      <div className="flex flex-col gap-1.5 justify-start mb-9 mt-[11px] w-[98%] md:w-full">
                        <Text
                          className="md:ml-[0] ml-[238px] text-lg text-light_blue-700"
                          size="txtJosefinSansRomanRegular18Lightblue700"
                        >
                          Enter your Desired Payment
                        </Text>
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex sm:flex-col flex-row sm:gap-[50px] items-center justify-between w-full">
                            <Input
                              name="groupNineteen"
                              placeholder="Allergy consultation"
                              className="!placeholder:text-teal-900 !text-teal-900 font-bold leading-[normal] p-0 text-left text-lg w-full"
                              wrapClassName="border-2 border-black-900_19 border-solid sm:flex-1 shadow-bs5 sm:w-full"
                              shape="round"
                              size="3xl"
                            ></Input>
                            <Button
                              className="!text-light_blue-700 border-2 border-black-900_19 border-solid cursor-pointer leading-[normal] min-w-[222px] shadow-bs5 text-center text-lg"
                              shape="round"
                              color="white_A700"
                              size="xl"
                              variant="fill"
                            >
                              $50/sessions
                            </Button>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-[50px] items-center justify-between mt-3.5 w-full">
                            <Input
                              name="groupTwenty"
                              placeholder="Ezcema Inquries"
                              className="!placeholder:text-teal-900 !text-teal-900 font-bold leading-[normal] p-0 text-left text-lg w-full"
                              wrapClassName="border-2 border-black-900_19 border-solid sm:flex-1 shadow-bs5 sm:w-full"
                              shape="round"
                              size="3xl"
                            ></Input>
                            <Button
                              className="!text-light_blue-700 border-2 border-black-900_19 border-solid cursor-pointer leading-[normal] min-w-[222px] shadow-bs5 text-center text-lg"
                              shape="round"
                              color="white_A700"
                              size="xl"
                              variant="fill"
                            >
                              $30/sessions
                            </Button>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-[50px] items-center justify-between mt-3.5 w-full">
                            <Input
                              name="groupTwentyOne"
                              placeholder="Immunology"
                              className="!placeholder:text-teal-900 !text-teal-900 font-bold leading-[normal] p-0 text-left text-lg w-full"
                              wrapClassName="border-2 border-black-900_19 border-solid sm:flex-1 shadow-bs5 sm:w-full"
                              shape="round"
                              size="3xl"
                            ></Input>
                            <Button
                              className="!text-light_blue-700 border-2 border-black-900_19 border-solid cursor-pointer leading-[normal] min-w-[222px] shadow-bs5 text-center text-lg"
                              shape="round"
                              color="white_A700"
                              size="xl"
                              variant="fill"
                            >
                              $75/sessions
                            </Button>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-[50px] items-center justify-between mt-3.5 w-full">
                            <Input
                              name="groupFourteen"
                              placeholder="Skin therapy"
                              className="!placeholder:text-teal-900 !text-teal-900 font-bold leading-[normal] p-0 text-left text-lg w-full"
                              wrapClassName="border-2 border-black-900_19 border-solid sm:flex-1 shadow-bs5 sm:w-full"
                              shape="round"
                              size="3xl"
                            ></Input>
                            <Button
                              className="!text-light_blue-700 border-2 border-black-900_19 border-solid cursor-pointer leading-[normal] min-w-[222px] shadow-bs5 text-center text-lg"
                              shape="round"
                              color="white_A700"
                              size="xl"
                              variant="fill"
                            >
                              $45/sessions
                            </Button>
                          </div>
                         <div className=" flex justify-end rounded mt-2 items-end w-full">
                         <Text
                              className="mb-[3px] text-white-A700 p-2 text-xl bg-light_blue-700 rounded"
                              size="txtJosefinSansRomanBold20WhiteA700"
                            >
                              Click Saved
                            </Text>

                         </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=" flex flex-row justify-start mx-auto top-[2%] w-full bg-white-A700 rounded-[10px]">
          <div className="flex flex-col h-full px-0 py-[11px]">
          <Img className=" w-5 h-5 m-[12.5px] items-center" src="images/img_calendar.svg"  alt="calendar"/>
              <Line className="bg-black-900 h-px w-auto" />
          {
            availableTime.map((e)=>(
              <div key={e.index} className=" flex flex-col px-0">
              <Text
                                          className="text-teal-900 text-xl"
                                          size="txtJosefinSansRomanBold20"
                                        >
                                          {e.start}
                                        </Text>
                                        <Text
                                          className="text-teal-900 text-xl"
                                          size="txtJosefinSansRomanBold20"
                                        >
                                          {e.end}
                                        </Text>
                                        <Line className="bg-black-900 h-px" />                     
              </div>
            ))
          }
          </div>
          <Line className="bg-black-900 h-auto w-[1px]" />
          <div className="flex flex-col h-full">
          <Text
                                        className="text-teal-900 text-xl px-5"
                                        size="txtJosefinSansRomanBold20"
                                      >
                                        Mon.
                                        <br/>
                                        JAn 17
                                      </Text>
                                     

              <Line className="bg-black-900 h-px w-full" />
          {
            daysAndDate.map((e)=>(
              <div className=" flex flex-col mx-0">
             
              <Text style={{backgroundColor: e.booking === ''? 'white': '#008000' }}
                                className=" px-3 h-[37px] justify-center py-1 text-lg text-white-A700 my-[9px] mx-2"
                                size="txtJosefinSansRomanBold18WhiteA700"
                              >
                                {e.booking}
                              </Text>
                                       
                                        <Line className="bg-black-900 h-px w-full" />                     
              </div>
            ))
          }

         

          </div>
          <Line className="bg-black-900 h-auto w-[1px]" />
          <div className="flex flex-col h-full py-0">
          <Text
                                        className="text-teal-900 text-xl px-5"
                                        size="txtJosefinSansRomanBold20"
                                      >
                                        Tue.
                                        <br/>
                                        JAn 18
                                      </Text>
                                     

              <Line className="bg-black-900 h-px w-full" />
          {
            daysAndDate.map((e)=>(
              <div className=" flex flex-col mx-0">
             
              <Text style={{backgroundColor: e.booking === ''? 'white': '#008000' }}
                                className=" px-3 h-[37px] justify-center py-1 text-lg text-white-A700 my-[9px] mx-2"
                                size="txtJosefinSansRomanBold18WhiteA700"
                              >
                                {e.booking}
                              </Text>
                                       
                                        <Line className="bg-black-900 h-px w-full" />                     
              </div>
            ))
          }

         

          </div>
          <Line className="bg-black-900 h-auto w-[1px]" />
          <div className="flex flex-col h-full py-0">
          <Text
                                        className="text-teal-900 text-xl px-5"
                                        size="txtJosefinSansRomanBold20"
                                      >
                                        Wed.
                                        <br/>
                                        JAn 19
                                      </Text>
                                     

              <Line className="bg-black-900 h-px w-full" />
          {
            daysAndDate.map((e)=>(
              <div className=" flex flex-col mx-0">
             
              <Text style={{backgroundColor: e.booking === ''? 'white': '#008000' }}
                                className=" px-3 h-[37px] justify-center py-1 text-lg text-white-A700 my-[9px] mx-2"
                                size="txtJosefinSansRomanBold18WhiteA700"
                              >
                                {e.booking}
                              </Text>                         
                                        <Line className="bg-black-900 h-px w-full" />                     
              </div>
            ))
          }
          </div>
          <Line className="bg-black-900 h-auto w-[1px]" />
          <div className="flex flex-col h-full py-0">
          <Text
                                        className="text-teal-900 text-xl px-5"
                                        size="txtJosefinSansRomanBold20"
                                      >
                                        Thurs
                                        <br/>
                                        Jan 20
                                      </Text>
                                     
              <Line className="bg-black-900 h-px w-full" />
          {
            daysAndDate.map((e)=>(
              <div className=" flex flex-col mx-0">
             
              <Text style={{backgroundColor: e.booking === ''? 'white': '#008000' }}
                                className=" px-3 h-[37px] justify-center py-1 text-lg text-white-A700 my-[9px] mx-2"
                                size="txtJosefinSansRomanBold18WhiteA700"
                              >
                                {e.booking}
                              </Text>                         
                                        <Line className="bg-black-900 h-px w-full" />                     
              </div>
            ))
          }
          </div>
          <Line className="bg-black-900 h-auto w-[1px]" />
          <div className="flex flex-col h-full py-0">
          <Text
                                        className="text-teal-900 text-xl px-5"
                                        size="txtJosefinSansRomanBold20"
                                      >
                                        Fri
                                        <br/>
                                        Jan 21
                                      </Text>
                                     
              <Line className="bg-black-900 h-px w-full" />
          {
            daysAndDate.map((e)=>(
              <div className=" flex flex-col mx-0">
             
              <Text style={{backgroundColor: e.booking === ''? 'white': '#008000' }}
                                className=" px-3 h-[37px] justify-center py-1 text-lg text-white-A700 my-[9px] mx-2"
                                size="txtJosefinSansRomanBold18WhiteA700"
                              >
                                {e.booking}
                              </Text>                         
                                        <Line className="bg-black-900 h-px w-full" />                     
              </div>
            ))
          }
          </div>
          <Line className="bg-black-900 h-auto w-[1px]" />
          <div className="flex flex-col h-full py-0">
          <Text
                                        className="text-teal-900 text-xl px-5"
                                        size="txtJosefinSansRomanBold20"
                                      >
                                        Sat
                                        <br/>
                                        Jan 22
                                      </Text>
                                     
              <Line className="bg-black-900 h-px w-full" />
          {
            daysAndDate.map((e)=>(
              <div className=" flex flex-col mx-0">
             
              <Text style={{backgroundColor: e.booking === ''? 'white': '#008000' }}
                                className=" px-3 h-[37px] justify-center py-1 text-lg text-white-A700 my-[9px] mx-2"
                                size="txtJosefinSansRomanBold18WhiteA700"
                              >
                                {e.booking}
                              </Text>                         
                                        <Line className="bg-black-900 h-px w-full" />                     
              </div>
            ))
          }
          </div>
          <Line className="bg-black-900 h-auto w-[1px]" />
          <div className="flex flex-col h-full py-0">
          <Text
                                        className="text-teal-900 text-xl px-5"
                                        size="txtJosefinSansRomanBold20"
                                      >
                                        Sun
                                        <br/>
                                        Jan 22
                                      </Text>
                                     
              <Line className="bg-black-900 h-px w-full" />
          {
            daysAndDate.map((e)=>(
              <div className=" flex flex-col mx-0">
             
              <Text style={{backgroundColor: e.booking === ''? 'white': '#008000' }}
                                className=" px-3 h-[37px] justify-center py-1 text-lg text-white-A700 my-[9px] mx-2"
                                size="txtJosefinSansRomanBold18WhiteA700"
                              >
                                {e.booking}
                              </Text>                         
                                        <Line className="bg-black-900 h-px w-full" />                     
              </div>
            ))
          }
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

export default SessionsandcalendarPage;
