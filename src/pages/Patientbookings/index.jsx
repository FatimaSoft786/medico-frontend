import React from "react";
import { Button, Img, List, Text } from "components";
import { useEffect,useState } from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import { AiFillHome } from "react-icons/ai";
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdLogout,MdOutlinePayments } from 'react-icons/md'
import { TbUserSearch } from "react-icons/tb";
const variants = {
    expanded: { width: "20%" },
    nonExpanded: { width: "5%" }
}
const navItems = [
     {
        name: "Dashboard",
        icon: AiFillHome,
        link: "/dashboard"
    },
    {
        name: "Fav.Doctors",
        icon: AiOutlineHeart,
        link: "/favDocs"
    },
    {
        name: "Profile",
        icon: CgProfile,
        link: "/patientProfile"
    },
    {
        name: "My Bookings",
        icon: MdOutlinePayments,
        link: "/patientBooking"
        
    },
    {
        name: "Read T&C",
        icon: TbUserSearch,
        link: "#"
    }
]

const PatientBookings = () => {
const [activeNavIndex, setActiveNavIndex] = useState(3);
const [isExpanded, setIsExpanded] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 768) {
                setIsExpanded(false);
            }
            else {
                setIsExpanded(true);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
 

  const apiData = [
    {
      location: "Lanciano",
      name: "Dr. Isabella Giovanna",
      Purpose:"Acute Allergy, Eczema, rhinitis",
      Date: "20, January 2024",
      Time: "Time: 11:00am-12:00" 
    }
  ];


  return (
   <main className="w-full bg-white-A700 h-screen flex justify-between items-start">
    <motion.section
            animate={isExpanded ? "expanded" : "nonExpanded"}
            variants={variants}
            className={'w-1/5 bg-light_blue-800 h-screen font-istokweb  font-bold flex flex-col justify-between items-center gap-10 relative ' + (isExpanded ? 'py-8 px-6 ' : 'px-8 py-6')}>

            <div className='flex flex-col justify-center items-center gap-8'>
              

                <div id='navlinks-box' className='flex flex-col justify-center items-start gap-5 w-full mt-5'>
                    {navItems.map((item, index) => (
                        <Link to={item.link}
                         key={item.name} id='link-box' className={'flex justify-start items-center gap-4 w-full cursor-pointer rounded-xl ' + (activeNavIndex === index ? ' bg-white-A700 text-[#000000] ' : 'text-[#ffffff] ') + (isExpanded ? 'px-6 py-2 ' : 'p-2 ')} onClick={() => setActiveNavIndex(index)}>
                            <div className=' text-white p-2 rounded-full'>
                                <item.icon className='md:w-6 w-8 h-8 md:h-6' />
                            </div>

                            <span className={'text-lg ' + (isExpanded ? 'flex' : 'hidden')}>{item?.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

        

            <div id='logout-box' className='w-full flex flex-col justify-start items-center gap-4 cursor-pointer'>
                <div className='bg-slate-700 w-full h-[0.5px]'></div>
                <div className='flex justify-center items-center gap-2'>
                    <MdLogout className=' text-white-A700 h-6 w-6' />
                    <span className={' text-white-A700 text-lg ' + (isExpanded ? 'flex' : 'hidden')}>Logout</span>
                </div>
            </div>

        </motion.section>

        <div className="flex flex-col gap-[30px] items-start justify-start md:mt-0 sm:mt-0 mt-[3px] md:px-2 w-full">
  <Text
        className="sm:text-[21px] md:text-[23px] text-[25px] mt-4 text-teal-900 sm:mt-3 md:mt-3"
        size="txtIstokWebBold25">
        VIDEO MEDICO
      </Text>
<div className=" flex flex-row md:flex-col sm:flex-col md:space-y-2 sm:space-y-2 justify-between w-[97%]">
<div className=" w-[90%] sm:w-[100%] md:w-[100%] p-[17px] font-josefinsans gap-[25px] flex-col h-[664px] overflow-y-auto md:h-auto sm:h-auto md:gap-5 rounded-[10px] shadow-bs1 top-[0] bg-gray-50_01">
<Text
            className="ml-2.5 md:ml-[0] mt-[5px] gap-2.5 text-black-900_b2 text-xl sm:text-sm md:text-sm"
            size="txtJosefinSansRomanRegular20"
          >
            You have 4 accepted Bookings Available
          </Text>
<div className=" grid grid-cols-2 mx-2">
{
  apiData.length > 0 && (apiData.map((e)=>(
 <div className="flex flex-col gap-5 justify-start w-[100%] md:w-full bg-white-A700 m-2 ">
<div className="flex flex-row gap-2  items-end justify-start w-[100%]  md:w-full">

<div className="h-20 relative rounded-[50%] shadow-bs2 w-20 mt-5 ml-5 mr-1">
<Img
                      className=" h-20 inset-[0] justify-center m-auto rounded-[50%] w-20"
                      src="images/img_image10_80x80.png"
                      alt="imageTen"
                    />
</div>

<div className="flex flex-col items-start justify-start mt-[16px]">
<Text
                      className="sm:text-[16px] md:text-[16px] text-[27px] text-black-900"
                      size="txtJosefinSansRomanRegular27"
                    >
                     {e.name}
                    </Text>
                    <Text
                      className="mt-0.5 text-black-900_b2 text-xl sm:text-[16px] md:text-[16px]"
                      size="txtJosefinSansRomanRegular20"
                    >
                      Allergy and immunology
                    </Text>
                  
</div>
 
</div>

 <div className="flex flex-col items-start justify-start ml-5">
                    <Text
                      className="text-black-900_b2 text-xl sm:text-sm md:text-sm"
                      size="txtJosefinSansRomanRegular20"
                    >
                      Purpose:Acute Allergy, Eczema, rhinitis
                    </Text>
                    <Text
                      className="mt-1 text-black-900_b2 text-xl sm:text-sm md:text-sm"
                      size="txtJosefinSansRomanRegular20"
                    >
                      Date: 20, January 2024,{" "}
                    </Text>
                    <Text
                      className="mt-0.5 text-black-900_b2 text-xl sm:text-sm md:text-sm"
                      size="txtJosefinSansRomanRegular20"
                    >
                      Time: 11:00am-12:00
                    </Text>
                    </div>
<div className="h-[50px] md:h-[66px] ml-1.5 md:ml-[0] relative w-[99%] sm:w-full bottom-5 right-3">
<Button
                    className="absolute bottom-[0] cursor-pointer leading-[normal] min-w-[95px] right-[0] text-center text-lg"
                    shape="square"
                    color="teal_900"
                    size="sm"
                    variant="fill"
                  >
                    Cancel
                  </Button>
</div>

 </div>
  )))
}

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
                <div className="bg-gray-50_01 flex flex-col gap-[47px] items-center justify-start mb-[135px] p-[25px] rounded-[10px] shadow-bs1 w-auto md:hidden sm:hidden">
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
<div className=" flex flex-col   -mt-16 sm:mt-1 md:mt-1">
<Text
        className="md:ml-[0] ml-[25px] mt-[1px] text-black-900_b2 text-xl sm:text-sm md:text-sm"
        size="txtJosefinSansRomanRegular20"
      >
        <>
         1- You can cancel booking 24 hrs before meeting/ any cancellation
          after that, you won’t be refund
          <br />
         2- If doctor cancel your booking request, you will be refund
          <br />
         3- You must be on the platform 10min-5min before the meeting
        </>
      </Text>
</div>



  </div>
 
   </main>
  );
};

export default PatientBookings;


   