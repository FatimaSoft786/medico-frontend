import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Button, Img, Input, Text, TextArea } from "components";

const DoctorprofilesettingsPage = () => {
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

          <div className=" w-[91%] sm:w-[100%] md:w-[100%] p-[17px] font-josefinsans gap-[25px] flex-col h-[800px] overflow-y-auto md:h-auto sm:h-auto md:gap-5 rounded-[10px] shadow-bs1 top-[0] bg-gray-50_01">
                <div className="flex flex-row md:flex-col sm:flex-col gap-3.5 items-center justify-start w-[32%] md:w-full">
                  <div className="h-[130px] relative w-[47%]">
                    <div className=" h-[130px] inset-[0] justify-center m-auto rounded-[50%] shadow-bs3 w-[130px]">
                      <Img
                        className="h-[130px] m-auto rounded-[50%] w-[130px]"
                        src="images/img_image12_140x140.png"
                        alt="imageTwelve"
                      />
                    </div>
                    <Button
                      className="absolute bottom-[8%] right-3  flex h-[36px] items-center justify-center  w-[36px]"
                      shape="circle"
                      color="red_A700"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-[15px]"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                    </Button>
                  </div>
                  <div className="md:h-10 h-auto flex flex-col  w-1/2">
                    <Text
                      className="mx-0 sm:text-[16px] md:text-[20px]  text-[25px] text-black-900 top-[0] w-max"
                      size="txtJosefinSansRomanRegular25"
                    >
                      Alessia Jones
                    </Text>
                    <Text
                      className=" text-black-900_b2 text-xl sm:text-base md:text-[18px]"
                      size="txtJosefinSansRomanRegular20"
                    >
                      <>
                        Patient
                        <br />
                        Payment verified
                      </>
                    </Text>
                  </div>
                </div>

                <div className="flex flex-col items-start justify-start mt-2 ml-3.5 md:ml-[0] w-[99%] md:w-full sm:w-full">
                <div className="flex flex-row md:flex-col sm:flex-col mt-1 sm:mt-3 md:mt-3 items-start gap-3.5 justify-between w-[69%] md:w-full sm:w-full">
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Full Name
              </Text>
              <Input
                name="first"
                placeholder="Jones"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
               
                shape="round"
                size="3xl"
              ></Input>

                </div>
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Last Name
              </Text>
              <Input
                name="first"
                placeholder="Jones"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                wrapClassName=" md:w-full"
                shape="round"
                size="3xl"
              ></Input>

                </div>
                <div className=" border-b-gray-300  mt-10 sm:mt-0 md:mt-0">
                <Text
                className="md:ml-[0] ml-[42px] md:mt-0  text-teal-900 text-xl sm:text-base"
                size="txtJosefinSansRomanBold20"
              >
                Edit
              </Text>
                </div>
                </div>

                <div className="flex flex-row md:flex-col sm:flex-col mt-5 sm:mt-3 md:mt-3 items-start gap-3.5 justify-between w-[69%] md:w-full sm:w-full">
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Email Address
              </Text>
              <Input
                name="email"
                placeholder="Test@gmail.com"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
               
                shape="round"
                size="3xl"
              ></Input>

                </div>
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Phone No.
              </Text>
              <Input
                name="phone"
                placeholder="(+39)456783536"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                wrapClassName=" md:w-full"
                shape="round"
                size="3xl"
              ></Input>

                </div>
                <div className=" border-b-gray-300  mt-10 sm:mt-0 md:mt-0">
                <Text
                className="md:ml-[0] ml-[42px] md:mt-0  text-[#022C4933] text-xl sm:text-base"
                size="txtJosefinSansRomanBold20"
              >
                Edit
              </Text>
                </div>
                </div>
 
                <div className="flex flex-row md:flex-col sm:flex-col mt-5 sm:mt-3 md:mt-3 items-start gap-3.5 justify-between w-[69%] md:w-full sm:w-full">
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Location
              </Text>
              <Input
                name="location"
                placeholder="Via Tasso 121, Perugia"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
               
                shape="round"
                size="3xl"
              ></Input>

                </div>
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Postal Code
              </Text>
              <Input
                name="phone"
                placeholder="5678"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                wrapClassName=" md:w-full"
                shape="round"
                size="3xl"
              ></Input>

                </div>
                <div className=" border-b-gray-300  mt-10 sm:mt-0 md:mt-0">
                <Text
                className="md:ml-[0] ml-[42px] md:mt-0  text-[#022C4933] text-xl sm:text-base"
                size="txtJosefinSansRomanBold20"
              >
                Edit
              </Text>
                </div>
                </div>

                <div className="flex flex-row md:flex-col sm:flex-col mt-5 sm:mt-3 md:mt-3 items-start gap-3.5 justify-between w-[69%] md:w-full sm:w-full">
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Gender
              </Text>
              <Input
                name="height"
                placeholder="Male"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
               
                shape="round"
                size="3xl"
              ></Input>

                </div>
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Date of Birth
              </Text>
              <Input
                name="weight"
                placeholder="31 Dec 1989"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                wrapClassName=" md:w-full"
                shape="round"
                size="3xl"
              ></Input>

                </div>
                <div className=" border-b-gray-300  mt-10 sm:mt-0 md:mt-0">
                <Text
                className="md:ml-[0] ml-[42px] md:mt-0  text-[#022C4933] text-xl sm:text-base"
                size="txtJosefinSansRomanBold20"
              >
                Edit
              </Text>
                </div>
                </div>

                <div className="flex flex-row md:flex-col sm:flex-col mt-5 sm:mt-3 md:mt-3 items-start gap-3.5 justify-between w-[69%] md:w-full sm:w-full">
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Education
              </Text>
              <Input
                name="age"
                placeholder="Via Rocca de Baldi 141 Vestenanova"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
               
                shape="round"
                size="3xl"
              ></Input>

                </div>
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Specialties
              </Text>
              <Input
                name="sex"
                placeholder="Allergies"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                wrapClassName=" md:w-full"
                shape="round"
                size="3xl"
              ></Input>

                </div>
                <div className=" border-b-gray-300  mt-10 sm:mt-0 md:mt-0">
                <Text
                className="md:ml-[0] ml-[42px] md:mt-0  text-[#022C4933] text-xl sm:text-base"
                size="txtJosefinSansRomanBold20"
              >
                Edit
              </Text>
                </div>
                </div>

                <div className="flex flex-row md:flex-col sm:flex-col mt-5 sm:mt-3 md:mt-3 items-start gap-3.5 justify-between w-[69%] md:w-full sm:w-full">
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Years of Studies/Training/program
              </Text>
              <Input
                name="age"
                placeholder="10, march 1998"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
               
                shape="round"
                size="3xl"
              ></Input>

                </div>
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
               Office/Hospital Address
              </Text>
              <Input
                name="sex"
                placeholder="Via Rocca de Baldi 141 Vestenanova"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                wrapClassName=" md:w-full"
                shape="round"
                size="3xl"
              ></Input>

                </div>
                <div className=" border-b-gray-300  mt-10 sm:mt-0 md:mt-0">
                <Text
                className="md:ml-[0] ml-[42px] md:mt-0  text-[#022C4933] text-xl sm:text-base"
                size="txtJosefinSansRomanBold20"
              >
                Edit
              </Text>
                </div>
                </div>

                <div className="flex flex-row md:flex-col sm:flex-col mt-5 sm:mt-3 md:mt-3 items-start gap-3.5 justify-between w-[69%] md:w-full sm:w-full">
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Certificate
              </Text>
              <Input
                name="record"
                placeholder="Certificates"
                className="leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                wrapClassName="flex sm:flex-1 mb-7 sm:w-full"
                suffix={
                  <div className="h-6 mt-px ml-[35px] w-6 ">
                    <Img
                      className="h-6 my-auto"
                      src="images/img_twitter.svg"
                      alt="twitter"
                    />
                  </div>
                }
                shape="round"
                size="3xl"
              ></Input>

                </div>
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Signature
              </Text>
              <Input
                name="form"
                placeholder="shahzai"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                wrapClassName=" md:w-full"
                shape="round"
                size="3xl"
              ></Input>

                </div>
                <div className=" border-b-gray-300  mt-10 sm:mt-0 md:mt-0">
                <Text
                className="md:ml-[0] ml-[42px] md:mt-0  text-[#022C4933] text-xl sm:text-base"
                size="txtJosefinSansRomanBold20"
              >
                Edit
              </Text>
                </div>
                </div>

                <div className=" flex flex-col w-[80%] md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Share your experience/About Us
              </Text>
              <Input
                name="form"
                placeholder="shahzai"
                className="font-bold leading-[normal] p-0 h-28 placeholder:text-black-900 text-left text-xl w-full"
                wrapClassName=" md:w-full"
                shape="round"
                size="3xl"
              ></Input>

                </div>


               <div className=" flex flex-row justify-end items-end w-full">
               <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[178px] sm:ml-[0] ml-[123px] sm:mt-0 mt-7 text-center text-xl"
                shape="round"
                color="red_A700_01"
                size="sm"
                variant="fill"
              >
                Save Changes
              </Button>
               </div>

           
                </div>
              </div>

   </div>
  </div>
    </div>
   </>
  );
};

export default DoctorprofilesettingsPage;

{/* <>
<div className="bg-white-A700 font-istokweb h-[1869px] mx-auto relative w-full">
  <div className="absolute flex sm:flex-col flex-row sm:gap-10 inset-x-[0] items-start justify-between mx-auto md:px-5 top-[1%] w-full">
    <div className="flex flex-col items-center justify-start">
      <Text
        className="sm:text-[21px] md:text-[23px] text-[25px] text-teal-900"
        size="txtIstokWebBold25"
      >
        VIDEO MEDICO
      </Text>
    
    </div>
    <div className="font-josefinsans h-[30px] relative w-[39%] sm:w-full">
      <Img
        className="absolute h-[30px] inset-y-[0] left-[0] my-auto"
        src="images/img_group41.svg"
        alt="groupFortyOne"
      />
      <div className="absolute flex flex-row items-start justify-between right-[0] top-[7%] w-[89%]">
        <Text
          className="mb-0.5 text-black-900_99 text-xl"
          size="txtJosefinSansRomanRegular20Black90099"
        >
          Alert
        </Text>
        <Text
          className="text-black-900_99 text-xl"
          size="txtJosefinSansRomanRegular20Black90099"
        >
          Helps
        </Text>
        <Text
          className="mt-0.5 text-black-900_99 text-xl"
          size="txtJosefinSansRomanRegular20Black90099"
        >
          Settings
        </Text>
      </div>
    </div>
  </div>
  <div className="absolute font-josefinsans md:h-[70px] h-[73px] md:px-5 right-[1%] top-[1%] w-[15%]">
    <Text
      className="ml-0.5 mt-1.5 sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
      size="txtJosefinSansRomanRegular25"
    >
      Dr. Isabella
    </Text>
    <div className="absolute md:h-[70px] h-[73px] inset-[0] justify-center m-auto w-full">
      <Text
        className="absolute bottom-[0] left-[0] text-black-900_b2 text-xl w-4/5 sm:w-full"
        size="txtJosefinSansRomanRegular20"
      >
        Allergy & immunology
      </Text>
      <div className="absolute h-[70px] right-[0] rounded-[50%] shadow-bs2 top-[0] w-[70px]">
        <Img
          className="h-[70px] m-auto rounded-[50%] w-[70px]"
          src="images/img_image9_2.png"
          alt="imageNine"
        />
        <Img
          className="absolute h-[70px] inset-[0] justify-center m-auto rounded-[50%] w-[70px]"
          src="images/img_image10_1.png"
          alt="imageTen"
        />
      </div>
    </div>
  </div>
 
  <div className="absolute bg-gray-50_01 flex flex-col font-josefinsans items-start justify-start p-[13px] md:px-5 right-[9%] rounded-[10px] shadow-bs1 top-[6%] w-[71%]">
    <div className="flex flex-col gap-10 justify-start my-[3px] w-[95%] md:w-full">
      <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-[41%] md:w-full">
        <div className="h-[150px] relative w-[42%] sm:w-full">
          <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto rounded-[50%] shadow-bs3 w-[150px]">
            <Img
              className="h-[150px] md:h-auto rounded-[50%] w-[150px]"
              src="images/img_image10_150x150.png"
              alt="imageTen_One"
            />
          </div>
          <Button
            className="absolute bottom-[17%] flex h-[30px] items-center justify-center right-[0] w-[30px]"
            shape="circle"
            color="red_A700"
            size="xs"
            variant="fill"
          >
            <Img
              className="h-[15px]"
              src="images/img_edit.svg"
              alt="edit"
            />
          </Button>
        </div>
        <div className="flex flex-col items-start justify-start sm:mt-0 mt-[50px]">
          <Text
            className="ml-0.5 md:ml-[0] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
            size="txtJosefinSansRomanRegular25"
          >
            Dr Isabella
          </Text>
          <Text
            className="mt-0.5 text-black-900_b2 text-xl"
            size="txtJosefinSansRomanRegular20"
          >
            <>
              Allergy & Immunology
              <br />
              Cerfitifed Specialist
            </>
          </Text>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start ml-3.5 md:ml-[0] w-[99%] md:w-full">
        <div className="flex flex-row sm:gap-10 items-start justify-between w-[61%] md:w-full">
          <Text
            className="text-black-900_b2 text-lg"
            size="txtJosefinSansRomanRegular18Black900b2"
          >
            First Name
          </Text>
          <Text
            className="text-black-900_b2 text-lg"
            size="txtJosefinSansRomanRegular18Black900b2"
          >
            Last Name
          </Text>
        </div>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-0.5 w-[88%] md:w-full">
          <Input
            name="groupEightySeven"
            placeholder="Isabella"
            className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
            wrapClassName="w-[39%] md:w-full"
            shape="round"
            size="xl"
          ></Input>
          <Input
            name="groupSeventySeven"
            placeholder="Giovanna|"
            className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
            wrapClassName="md:ml-[0] ml-[158px] w-[33%] md:w-full"
            shape="round"
            size="xl"
          ></Input>
          <Text
            className="md:ml-[0] ml-[42px] md:mt-0 mt-3 text-teal-900 text-xl"
            size="txtJosefinSansRomanBold20"
          >
            Edit
          </Text>
        </div>
        <div className="flex flex-row sm:gap-10 items-start justify-between mt-[23px] w-3/5 md:w-full">
          <Text
            className="text-black-900_b2 text-lg"
            size="txtJosefinSansRomanRegular18Black900b2"
          >
            Email Address
          </Text>
          <Text
            className="text-black-900_b2 text-lg"
            size="txtJosefinSansRomanRegular18Black900b2"
          >
            Phone No.
          </Text>
        </div>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-0.5 w-[88%] md:w-full">
          <Button
            className="!text-black-900 cursor-pointer leading-[normal] min-w-[308px] text-center text-xl"
            shape="round"
            color="white_A700"
            size="xl"
            variant="fill"
          >
            Isabellagiovanna@gmail.com
          </Button>
          <Input
            name="groupSeventySix"
            placeholder="(+39) 393 3325361"
            className="leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
            wrapClassName="md:ml-[0] ml-[158px] w-[33%] md:w-full"
            shape="round"
            size="xl"
          ></Input>
          <Text
            className="md:ml-[0] ml-[42px] text-teal-900_33 text-xl"
            size="txtJosefinSansRomanBold20Teal90033"
          >
            Edit
          </Text>
        </div>
        <div className="flex flex-row sm:gap-10 items-center justify-between mt-[23px] w-[62%] md:w-full">
          <Text
            className="text-black-900_b2 text-lg"
            size="txtJosefinSansRomanRegular18Black900b2"
          >
            Location
          </Text>
          <Text
            className="text-black-900_b2 text-lg"
            size="txtJosefinSansRomanRegular18Black900b2"
          >
            Postal Code
          </Text>
        </div>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-0.5 w-[88%] md:w-full">
          <Input
            name="groupEightyFive"
            placeholder="Via Tasso 121, Perugia"
            className="leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
            wrapClassName="w-[39%] md:w-full"
            shape="round"
            size="3xl"
          ></Input>
          <Input
            name="zipcode"
            placeholder="95030"
            className="leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
            wrapClassName="md:ml-[0] ml-[158px] w-[33%] md:w-full"
            shape="round"
            size="xl"
          ></Input>
          <Text
            className="md:ml-[0] ml-[42px] md:mt-0 mt-[18px] text-teal-900_33 text-xl"
            size="txtJosefinSansRomanBold20Teal90033"
          >
            Edit
          </Text>
        </div>
        <div className="flex flex-row sm:gap-10 items-start justify-between mt-10 w-[63%] md:w-full">
          <Text
            className="text-black-900_b2 text-lg"
            size="txtJosefinSansRomanRegular18Black900b2"
          >
            Gender
          </Text>
          <Text
            className="text-black-900_b2 text-lg"
            size="txtJosefinSansRomanRegular18Black900b2"
          >
            Date of Birth
          </Text>
        </div>
        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-0.5 w-[79%] md:w-full">
          <Input
            name="gender_One"
            placeholder="female"
            className="leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
            wrapClassName="sm:w-full"
            shape="round"
            size="3xl"
          ></Input>
          <Input
            name="groupSeventyFour"
            placeholder="31 december 1989"
            className="leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
            wrapClassName="sm:w-full"
            shape="round"
            size="xl"
          ></Input>
        </div>
        <div className="flex flex-row sm:gap-10 items-center justify-between mt-[75px] w-3/5 md:w-full">
          <Text
            className="text-black-900_b2 text-lg"
            size="txtJosefinSansRomanRegular18Black900b2"
          >
            Education
          </Text>
          <Text
            className="text-black-900_b2 text-lg"
            size="txtJosefinSansRomanRegular18Black900b2"
          >
            Certificate
          </Text>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[97px] items-center justify-start mt-0.5 w-[91%] md:w-full">
          <Input
            name="groupEightyThree"
            placeholder="Via Rocca de Baldi 141 Vestenanova"
            className="leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
            wrapClassName="w-[45%] md:w-full"
            shape="round"
            size="3xl"
          ></Input>
          <Input
            name="groupSeventyThree"
            placeholder="Certifcate of......."
            className="leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
            wrapClassName="flex w-[45%] md:w-full"
            suffix={
              <div className="h-6 mt-px ml-[35px] w-6 bg-black-900">
                <Img
                  className="h-6 my-auto"
                  src="images/img_twitter.svg"
                  alt="twitter"
                />
              </div>
            }
            shape="round"
            size="3xl"
          ></Input>
        </div>
        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[57px] w-[68%] md:w-full">
          <Text
            className="text-black-900_b2 text-lg"
            size="txtJosefinSansRomanRegular18Black900b2"
          >
            Years of Studies/Training/program
          </Text>
          <Text
            className="text-black-900_b2 text-lg"
            size="txtJosefinSansRomanRegular18Black900b2"
          >
            Special Recognition
          </Text>
        </div>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[91%] md:w-full">
          <Input
            name="groupEightyOne"
            placeholder="10, march 1998"
            className="leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
            wrapClassName="w-[24%] md:w-full"
            shape="round"
            size="3xl"
          ></Input>
          <Text
            className="ml-1 md:ml-[0] text-black-900_b2 text-lg"
            size="txtJosefinSansRomanRegular18Black900b2"
          >
            TO
          </Text>
          <Button
            className="!text-black-900 cursor-pointer leading-[normal] min-w-[194px] md:ml-[0] ml-[7px] text-center text-xl"
            shape="round"
            color="white_A700"
            size="lg"
            variant="fill"
          >
            12 september 2004
          </Button>
          <Input
            name="groupSeventyTwo"
            placeholder="Best Doctor the Year"
            className="leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
            wrapClassName="flex md:ml-[0] ml-[41px] w-[45%] md:w-full"
            suffix={
              <div className="h-6 mb-px ml-[35px] w-6 bg-black-900">
                <Img
                  className="h-6 my-auto"
                  src="images/img_twitter.svg"
                  alt="twitter"
                />
              </div>
            }
            shape="round"
            size="sm"
          ></Input>
        </div>
        <div className="flex flex-row sm:gap-10 items-center justify-between mt-[58px] w-3/5 md:w-full">
          <Text
            className="text-black-900_b2 text-lg"
            size="txtJosefinSansRomanRegular18Black900b2"
          >
            Office/Hospital Address
          </Text>
          <Text
            className="text-black-900_b2 text-lg"
            size="txtJosefinSansRomanRegular18Black900b2"
          >
            Specialties
          </Text>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[97px] items-center justify-start w-[91%] md:w-full">
          <Input
            name="groupSeventyNine"
            placeholder="Via Rocca de Baldi 141 Vestenanova"
            className="leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
            wrapClassName="w-[45%] md:w-full"
            shape="round"
            size="3xl"
          ></Input>
          <Input
            name="groupSeventyOne"
            placeholder="Allergy & Immunology"
            className="leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
            wrapClassName="w-[45%] md:w-full"
            shape="round"
            size="xl"
          ></Input>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[42px] w-[92%] md:w-full">
          <div className="flex flex-col items-start justify-start w-[44%] md:w-full">
            <div className="h-[67px] relative w-full">
              <Text
                className="mb-[-0.3px] text-black-900_b2 text-lg z-[1]"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Signature
              </Text>
              <div className="bg-white-A700 flex flex-col items-start justify-start mt-auto mx-auto p-[13px] rounded-[10px] w-full">
                <Img
                  className="h-6 md:ml-[0] ml-[11px] w-6"
                  src="images/img_settings.svg"
                  alt="settings_One"
                />
              </div>
            </div>
            <Text
              className="mt-10 text-black-900_b2 text-lg"
              size="txtJosefinSansRomanRegular18Black900b2"
            >
              Twitter Handle (optional )
            </Text>
            <Input
              name="rectangleSixtyThree"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="flex h-[50px] w-full"
              shape="round"
            ></Input>
            <Text
              className="mt-[21px] text-black-900_b2 text-lg"
              size="txtJosefinSansRomanRegular18Black900b2"
            >
              Share your experience/About Us
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-[45%] md:w-full">
            <Text
              className="text-black-900_b2 text-lg"
              size="txtJosefinSansRomanRegular18Black900b2"
            >
              Instagram Handle (optional )
            </Text>
            <Input
              name="rectangleSixtyOne"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="flex h-[50px] w-full"
              shape="round"
            ></Input>
            <Text
              className="mt-[19px] text-black-900_b2 text-lg"
              size="txtJosefinSansRomanRegular18Black900b2"
            >
              Facebook Handle (optional )
            </Text>
            <Input
              name="rectangleSixtyTwo"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="flex h-[50px] w-full"
              shape="round"
            ></Input>
          </div>
        </div>
        <TextArea
          className="bg-white-A700 border-0 rounded-[10px] w-[91%] sm:w-full"
          name="rectangleFiftySix"
          placeholder=""
        ></TextArea>
        <Button
          className="cursor-pointer font-bold leading-[normal] min-w-[178px] md:ml-[0] ml-[746px] mt-3 text-center text-xl"
          shape="round"
          color="red_A700_01"
          size="sm"
          variant="fill"
        >
          Save Changes
        </Button>
      </div>
    </div>
  </div>
</div>
</> */}
