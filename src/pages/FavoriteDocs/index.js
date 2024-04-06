import React,{useEffect,useState} from 'react'
import { motion } from "framer-motion"
import { AiFillHome } from "react-icons/ai";
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdLogout,MdOutlinePayments } from 'react-icons/md'
import { TbUserSearch } from "react-icons/tb";
import { useDispatch,useSelector } from "react-redux";
import { fav } from './favSlice';
import { Img,Text,Input } from 'components';
import { Link } from 'react-router-dom';
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

const FavoriteDocs = () => {
  const dispatch = useDispatch();
const state = useSelector((state) => state);
const [activeNavIndex, setActiveNavIndex] = useState(1);
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

    const [favorite, setFavorite] = useState([])
    useEffect(()=>{
      dispatch(fav({id: "660ee7ab244666fdadf382fe"}))
    },[])

     const [liked, setLiked] = useState(true);

  const toggleLike = () => {
    setLiked(!liked);
  }

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


   <div className=" flex font-josefinsans h-full items-start w-4/5 mt-2 mx-2">
                <div className=" bg-gray-50_01 overflow-y-auto h-[664px] md:h-auto sm:h-auto md:gap-5 inset-x-[0] rounded-[10px] shadow-bs1 top-[0] w-[91%] md:w-full sm:w-full">
                  <div className=" grid grid-cols-3 gap-5 md:grid-cols-1 sm:grid-cols-1 p-2">
                    {state.favorite.data &&
                      state.favorite.data.data.map((e) => (
                        <div className="bg-white-A700 border flex flex-col border-black-900_7f border-solid p-2 rounded-[20px]">
                          <div className="flex">
                            <div className="h-[100px] w-[24%] shadow-bs2 rounded-[50%]">
                              <img
                                className="w-full h-full rounded-[50%]"
                                src="images/img_profile.png"
                                alt="doctor"
                              />
                            </div>

                            <div className=" flex flex-col w-[71%] h-auto mx-1">
                              <div className="flex flex-row justify-start items-start w-full">
                                <Img
                                  className="h-[27px]"
                                  src="images/img_linkedin.svg"
                                  alt="linkedin"
                                />
                                <Text
                                  className="mt-2 text-black-900_b2 text-xl"
                                  size="txtJosefinSansRomanRegular20"
                                >
                                  {e.location}
                                </Text>
                              </div>
                              <Text
                                className="sm:text-[20px] md:text-[20px] text-[27px] text-black-900"
                                size="txtJosefinSansRomanRegular27"
                              >
                                Dr. {e.firstName} {e.lastName}
                              </Text>

                              <Text
                                className=" text-black-900_b2 text-xl w-max sm:text-base md:text-base"
                                size="txtJosefinSansRomanRegular20"
                              >
                                {e.specialties}
                              </Text>
                             <div className=" w-full h-auto flex justify-start items-center">
                             <Img
                              className=" w-auto h-[22px] items-start md:h-[18px] sm:h-[18px]"
                              src="images/img_group14.svg"
                              alt="groupFourteen"
                            />
                             </div>
                            </div>

                            <div onClick={toggleLike} className=" w-[5%] md:w-[6%] sm:w-[6%]">
                              {liked ? 
                              (<AiFillHeart />
        ) : (
          <AiOutlineHeart />
        )}
                            </div>
                          </div>

                          <>
                          <div className="flex sm:flex-col md:flex-col sm:mt-1 md:mt-0 flex-row gap-[10px] items-center justify-between w-full">
                        <Input
                          placeholder="Check Availability"
                          className="!placeholder:text-black-900_b2 !text-black-900_b2 leading-[normal] p-0 text-left text-xl w-full"
                          wrapClassName="border border-black-900_7f border-solid flex sm:flex-1 rounded-[5px] sm:w-full"
                          prefix={
                            <Img
                              className="mt-auto mb-0.5 h-[22px] mr-[13px]"
                              src="images/img_calendar.svg"
                              alt="calendar"
                            />
                          }
                          size="lg"
                        ></Input>
                        <div className="bg-teal-900 border md:w-full sm:w-full border-black-900_7f border-solid flex flex-row gap-1.5 items-center justify-start p-1.5 rounded-[5px] my-1 sm:mb-2">
                          <Img
                            className="h-[20px]"
                            src="images/img_upload.svg"
                            alt="upload"
                          />
                          <Text
                            className="text-gray-50 text-base text-[14px] py-0.5"
                            size="txtJosefinSansRomanRegular18"
                          >
                            Consult Now!
                          </Text>
                        </div>
                      </div>
                          </>
                        </div>
                      ))}
                  </div>
                </div>

              <div className="bg-gray-50_01 flex flex-col gap-[47px] items-center justify-start mb-[135px] p-[25px] rounded-[10px] shadow-bs1 w-[6%] md:hidden sm:hidden mx-2">
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

    </main>
  )
}

export default FavoriteDocs
