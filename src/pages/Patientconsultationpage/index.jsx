import React, { useState } from "react";

import { Link } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, List, ReactTable, Text } from "components";

const PatientconsultationpagePage = () => {
 
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
            <Text
              className="sm:text-[21px] md:text-[23px] text-[25px] mt-4 text-teal-900 sm:mt-3 md:mt-3"
              size="txtIstokWebBold25"
            >
              VIDEO MEDICO
            </Text>
            <div className="flex flex-row md:flex-col sm:flex-col space-x-5 overflow-y-auto md:space-y-2 sm:space-y-2 justify-between w-[96%]">
              <div className=" w-[94%] sm:w-[100%] md:w-[100%] p-[17px] font-josefinsans gap-[25px] flex-col h-[1730px] overflow-y-auto md:h-auto sm:h-auto md:gap-5 rounded-[10px] shadow-bs1 top-[0] bg-gray-50_01">
                <div className="flex sm:flex-col md:flex-col flex-row gap-3 items-center justify-between w-full">
               <div className=" flex flex-row space-x-3 md:flex-col sm:flex-col sm:space-y-2 md:space-y-2">
               <div className="h-auto sm:justify-center md:justify-center  w-auto sm:w-full">
                    <Img
                      className="h-[111px] m-auto rounded-[50%] w-[111px] shadow-bs2  sm:items-center md:items-center"
                      src="images/img_image9_3.png"
                      alt="imageNine"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start mx-auto w-auto sm:w-full">
                  <Text
                      className="sm:text-[16px] md:text-[20px] text-[27px] w-max text-black-900"
                      size="txtJosefinSansRomanRegular27"
                    >
                      Dr. Isabella Giovanna
                    </Text>
                    <Text
                        className=" text-black-900_b2 text-xl w-max sm:text-base"
                        size="txtJosefinSansRomanRegular20"
                      >
                        Allergy and immunology
                      </Text>

           <div className="md:h-6 h-auto flex flex-row w-auto space-x-3">
           <Img
                        className=" h-auto left-[0]"
                        src="images/img_group14.svg"
                        alt="groupFourteen"
                      />
                    
                      <Text
                        className=" text-black-900_b2 text-xl mt-[6px] sm:mt-[2px] md:mt-[2px] sm:text-base"
                        size="txtJosefinSansRomanRegular20"
                      >
                        25 Reviews
                      </Text>
           </div>

           <div className=" w-auto flex flex-row sm:flex-col md:flex-col sm:space-y-2 md:space-y-2 mt-1 space-x-3">
           <Button
                className=" border border-black-900_7f border-solid bottom-[0] cursor-pointer leading-[normal] left-[22%] w-auto rounded-[5px] text-center text-lg"
                color="teal_900"
                size="xs"
                variant="fill"
              >
                $50/session
              </Button>
              
              <Button
                className=" border border-black-900_7f border-solid bottom-[0] cursor-pointer leading-[normal] left-[17%] w-auto rounded-[5px] text-center text-lg"
                color="teal_900"
                size="xs"
                variant="fill"
              >
               $40/session 2nd Visit
              </Button>

           </div>

                  </div>
               </div>

               <div className=" flex flex-row space-x-2">
               <Img
              className="h-[24px] md:ml-[0]  md:mt-0 mt-[0px] w-[24px]"
              src="images/img_favorite_black_900.svg"
              alt="favorite"
            />
            <Text
              className="md:ml-[0] ml-[7px] md:mt-0 mt-[0px] text-teal-900 text-xl "
              size="txtJosefinSansRomanBold20"
            >
              SAVES
            </Text>

               </div>


                </div>

         <div className="flex md:flex-col flex-row gap-[26px] justify-between w-full ">
   <div className="flex flex-col items-start justify-start md:mt-0 mt-4  w-2/5 md:w-full">
 <div className="bg-white-A700 border border-black-900 border-solid flex flex-row items-start justify-start px-[7px] rounded-[5px] w-[60%] md:w-full">
 <Text
                        className="mt-2 text-black-900_b2 text-lg"
                        size="txtJosefinSansRomanRegular18Black900b2"
                      >
                        Locations
                      </Text>
                      <Line className="bg-black-900 h-full mx-1 w-0.5" />
                <Text
                  className="ml-[5px] mt-2 text-black-900_b2 text-lg"
                  size="txtJosefinSansRomanRegular18Black900b2"
                >
                  Experiences
                </Text>
                <Line className="bg-black-900 h-[37px] ml-[11px] w-0.5" />
                <Text
                  className="ml-[7px] mt-2 text-black-900_b2 text-lg"
                  size="txtJosefinSansRomanRegular18Black900b2"
                >
                  Reviews
                </Text>
 </div>
 <Text
                className="mt-[33px] text-black-900_b2 text-xl"
                size="txtJosefinSansRomanBold20Black900b2"
              >
                Location
              </Text>
              <Input
                name="groupSixtyOne"
                placeholder="Via Lombardi 128, lanciano"
                className="!placeholder:text-black-900_b2 !text-black-900_b2 leading-[normal] p-0 text-left text-lg w-full"
                wrapClassName="mt-[5px] rounded-[5px] w-full"
                size="sm"
              ></Input>
            <Text
                className="md:ml-[0] ml-[7px] mt-[15px] text-black-900 text-xl"
                size="txtJosefinSansRomanBold20Black900"
              >
                Experience:
              </Text>   
              <div className="bg-white-A700 flex flex-col h-auto sm:h-auto items-start justify-start mt-[3px] p-[7px] rounded-[5px] w-full sm:w-full">
                <div className="flex flex-col items-start justify-start mb-8 mt-0.5 w-[95%] md:w-full">
                  <div className="flex flex-row gap-[7px] items-start justify-start w-[22%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_television_black_900.svg"
                      alt="television"
                    />
                    <Text
                      className="text-black-900 text-lg"
                      size="txtJosefinSansRomanRegular18Black900"
                    >
                      About me:
                    </Text>
                  </div>
                  <Text
                    className="ml-2.5 md:ml-[0] mt-1 text-black-900_b2 text-lg w-[96%] sm:w-full"
                    size="txtJosefinSansRomanRegular18Black900b2"
                  >
                    Experience It is a long established fact that a reader
                    will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem
                    Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using......
                  </Text>
                  <Line className="bg-black-900_99 h-px md:ml-[0] ml-[9px] mt-2  w-[99%]" />
                  <div className="flex flex-row gap-[7px] items-center justify-start mt-[7px] w-[19%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_settings_black_900.svg"
                      alt="settings"
                    />
                    <Text
                      className="text-black-900 text-lg"
                      size="txtJosefinSansRomanRegular18Black900"
                    >
                      Training:
                    </Text>
                  </div>
                  <Text
                    className="mt-[3px] text-black-900_b2 text-lg"
                    size="txtJosefinSansRomanRegular18Black900b2"
                  >
                    <>
                      Experience
                      <br />
                      distracted
                      <br />
                      Lorem Ipsum
                    </>
                  </Text>
                  <Line className="bg-black-900_99 h-px md:ml-[0] ml-[9px] mt-[9px] rotate-[180deg] w-[99%]" />
                  <div className="flex flex-row gap-[7px] items-center justify-start mt-[5px] w-[28%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_user_black_900_24x24.svg"
                      alt="user"
                    />
                    <Text
                      className="text-black-900 text-lg"
                      size="txtJosefinSansRomanRegular18Black900"
                    >
                      Specialization:
                    </Text>
                  </div>
                  <Text
                    className="mt-[5px] text-black-900_b2 text-lg"
                    size="txtJosefinSansRomanRegular18Black900b2"
                  >
                    <>
                      Experience
                      <br />
                      distracted
                      <br />
                      Lorem Ipsum
                      <br />
                      manin kwpfs
                    </>
                  </Text>
                  <Line className="bg-black-900_99 h-px md:ml-[0] ml-[9px] mt-1.5 rotate-[180deg] w-[99%]" />
                  <div className="flex flex-row gap-[7px] items-center justify-start mt-1.5 w-[62%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_lock_black_900.svg"
                      alt="lock"
                    />
                    <Text
                      className="text-black-900 text-lg"
                      size="txtJosefinSansRomanRegular18Black900"
                    >
                      School/institution/internship/program
                    </Text>
                  </div>
                  <Text
                    className="ml-2.5 md:ml-[0] mt-2 text-black-900_b2 text-lg"
                    size="txtJosefinSansRomanRegular18Black900b2"
                  >
                    <>
                      University of ltaly
                      <br />
                      medical school of lanciano
                    </>
                  </Text>
                  <Line className="bg-black-900_99 h-px ml-0 md:ml-[0] mt-[9px] rotate-[180deg] w-[99%]" />
                  <div className="flex flex-row gap-[7px] items-start justify-start mt-[3px] w-[23%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_user_24x24.svg"
                      alt="user_One"
                    />
                    <Text
                      className="text-black-900 text-lg"
                      size="txtJosefinSansRomanRegular18Black900"
                    >
                      Certificate:
                    </Text>
                  </div>
                  <Text
                    className="bg-light_blue-800 h-auto justify-center mt-2 py-2 px-1 rounded-[5px] text-[15px] text-black-900 w-[153px]"
                    size="txtJosefinSansRomanRegular15"
                  >
                    See doctor certificate
                  </Text>
                  <Line className="bg-black-900_99 h-px md:ml-[0] ml-[9px] mt-3  w-[99%]" />
                  <Text
                    className="md:ml-[0] ml-[31px] text-black-900 text-lg"
                    size="txtJosefinSansRomanRegular18Black900"
                  >
                    Socials
                  </Text>
                  <div className="flex flex-row items-center justify-start md:ml-[0] ml-[18px] mt-[7px] w-[16%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_airplane.svg"
                      alt="airplane"
                    />
                    <Img
                      className="h-6 ml-[5px] w-6"
                      src="images/img_info.svg"
                      alt="info"
                    />
                    <Img
                      className="h-6 ml-1.5 w-6"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                  </div>
                </div>
              </div> 
             
   </div>

   <div className=" flex flex-col w-2/3">
   <Text
                className="md:ml-[0] ml-[23px] text-teal-900 text-xl"
                size="txtJosefinSansRomanBold20"
              >
                See Doctor Appointment Date
              </Text>
             <div className=" flex flex-row justify-start mx-auto top-[2%] w-full bg-white-A700 rounded-[10px]">
          <div className="flex flex-col h-full px-0 py-[11px]">
          <Img className=" w-5 h-5 m-[12.5px] items-center" src="images/img_calendar.svg"  alt="calendar"/>
              <Line className="bg-black-900 h-px w-auto" />
          {
            availableTime.map((e)=>(
              <div className=" flex flex-col px-0">
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
  <div className="flex flex-row  space-x-5  w-full mt-4">

  <div className="flex flex-col items-start justify-start w-[50%] md:w-full">
  <Text
                              className="text-black-900_b2 text-lg"
                              size="txtJosefinSansRomanRegular18Black900b2"
                            >
                              Choose Date:
                            </Text>
                            <Input
                              name="groupFiftySeven"
                              placeholder="Tues: Jan 17, 2024"
                              className="!placeholder:text-black-900_b2 !text-black-900_b2 leading-[normal] p-0 text-left text-lg w-full"
                              wrapClassName="border-2 border-black-900_19 border-solid shadow-bs5 w-full sm:w-full"
                              shape="round"
                              size="3xl"
                            ></Input>
  </div>

  <div className="flex flex-col items-start justify-start w-[50%] ">
  <Text
                              className="text-black-900_b2 text-lg"
                              size="txtJosefinSansRomanRegular18Black900b2"
                            >
                              Choose Date:
                            </Text>
                            <Input
                              name="groupFiftySeven"
                              placeholder="Tues: Jan 17, 2024"
                              className="!placeholder:text-black-900_b2 !text-black-900_b2 leading-[normal] p-0 text-left text-lg w-full"
                              wrapClassName="border-2 border-black-900_19 border-solid shadow-bs5 w-full sm:w-full"
                              shape="round"
                              size="3xl"
                            ></Input>
  </div>

  </div>

  <Text
                            className="mt-[19px] text-black-900_b2 text-lg"
                            size="txtJosefinSansRomanRegular18Black900b2"
                          >
                            Choose Sessions
                          </Text>
                          <Input
                            name="price_Two"
                            placeholder="Allergy  Consultation $50/sessions"
                            className="!placeholder:text-black-900_b2 !text-black-900_b2 leading-[normal] p-0 text-left text-lg w-full"
                            wrapClassName="border-2 border-black-900_19 border-solid flex mt-1 shadow-bs5 w-[88%]"
                            suffix={
                              <Img
                                className="h-6 ml-[35px] my-auto"
                                src="images/img_close.svg"
                                alt="close"
                              />
                            }
                            shape="round"
                            size="2xl"
                          ></Input>

<div className="flex flex-row gap-3 items-start justify-start mt-[17px] w-[22%] md:w-full">
                            <div className="bg-white-A700 border border-black-900 border-solid h-6 w-6"></div>
                            <Text
                              className="text-black-900_b2 text-lg"
                              size="txtJosefinSansRomanRegular18Black900b2"
                            >
                              First time
                            </Text>
                          </div>

                           <div className="flex flex-row gap-3 items-center justify-start mt-[17px] w-[36%] md:w-full">
                            <div className="bg-white-A700 border border-black-900 border-solid h-6 w-6"></div>
                            <Text
                              className="text-black-900_b2 text-lg"
                              size="txtJosefinSansRomanRegular18Black900b2"
                            >
                              Returning Sessions
                            </Text>
                          </div>

  <div className=" flex justify-end">
  <Button
                            className="border border-black-900_7f border-solid cursor-pointer leading-[normal] w-auto px-10 md:ml-[0] ml-[373px] mt-[11px] rounded-[5px] text-center text-lg"
                            color="teal_900"
                            size="sm"
                            variant="fill"
                          >
                            Book Now!!!
                          </Button>  
  </div>
                                       
</div>
         </div>
         <Text
                className="mt-[33px] text-black-900_b2 text-xl"
                size="txtJosefinSansRomanBold20Black900b2"
              >
                25 Reviews
              </Text>
              <div className=" bg-white-A700 flex flex-col h-max inset-[0] items-start justify-start m-auto p-[7px] rounded-[5px] w-full">
    <div className="flex md:flex-col flex-row gap-2 items-center justify-start mb-7 w-full md:w-full">
    <Img
                            className=" h-[70px] inset-[0] justify-center m-auto rounded-[50%] w-[70px]"
                            src="images/img_image15_70x70.png"
                            alt="imageFifteen"
                          />
                          <div className="flex flex-col items-start justify-start w-[100%] md:w-full">
                          <Img
                          className="h-[22px] md:ml-[0] ml-[7px]"
                          src="images/img_group14_yellow_a200.svg"
                          alt="groupFourteen_One"
                        />
                        <Text
                          className="ml-1.5 md:ml-[0] mt-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                          size="txtJosefinSansRomanRegular25"
                        >
                          Alessia Jones
                        </Text>
                        <Text
                          className="ml-1.5 md:ml-[0] mt-1.5 text-black-900 text-lg w-full"
                          size="txtJosefinSansRomanRegular18Black900"
                        >
                          Dr. Isabella ongoing support and commitment to patient
                          well-being extend beyond the initial consultation.
                          Trustworthy and dedicated,
                        </Text>
                          </div>

    </div>
              </div>
              </div>


              <div className=" flex flex-col w-[6%] h-auto space-y-3">

<div className="h-[70px] relative md:hidden sm:hidden rounded-[50%] shadow-bs2 w-[70px]">
                  <Img
                    className="h-[70px] rounded-[50%] w-[70px]"
                    src="images/img_profile.png"
                    alt="Profile"
                  />
                </div>
                <div className="bg-gray-50_01 flex flex-col gap-[47px] h-full items-center justify-start mb-[135px] p-[25px] rounded-[10px] shadow-bs1 w-auto md:hidden sm:hidden">
              <Img
        className="h-[30px] mt-[21px] w-[30px]"
        src="images/img_vector.svg"
        alt="vector"
      />
      <Img
        className="h-[30px] w-[30px]"
        src="images/img_iconparksolidhelp.svg"
        alt="iconparksolidhe"
      />
      <Img
        className="h-[30px] w-[29px]"
        src="images/img_search.svg"
        alt="search_One"
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
        </div>
      </div>
    </>
  );
};

export default PatientconsultationpagePage;