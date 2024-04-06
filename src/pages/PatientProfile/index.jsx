import React, { useState,useEffect,useRef } from "react";
import { Button, Img, Input, Text } from "components";
import { motion } from "framer-motion"
import { AiFillHome } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdLogout,MdOutlinePayments } from 'react-icons/md'
import { TbUserSearch } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import axios from "axios";
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
const PatientProfile = () => {
 
    const [activeNavIndex, setActiveNavIndex] = useState(2);
    const [isExpanded, setIsExpanded] = useState(true);
    const [loading ,setLoading] = useState('')
    const [selectedFile, setSelectedFile] = useState(null);
    const [image, setImage] = useState(null);

     const fileInputRef = useRef(null);

      const handleImageClick = () => {
        fileInputRef.current.click();
      };

       const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        setImage(URL.createObjectURL(e.target.files[0]));
      };


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


     const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
   
 const onSubmit = async (data) => {
  console.log("working")
if(selectedFile === null){
        setLoading(false)
        alert("Select the image first")
      } else{
        setLoading(true)
        const form = new FormData();
              form.append("firstName",data.firstName)
              form.append("lastName", data.lastName)
              form.append("email",data.email)
              form.append("location",data.location)
              form.append("height",data.height)
              form.append("weight",data.weight)
              form.append("postal_code",data.postal)
              form.append("image",selectedFile)
              form.append("phoneNumber",data.phoneNumber)
              form.append("sex",data.sex)
              form.append("age",data.age)
              form.append("id","660ee7ab244666fdadf382fe")

              const config = {     
    headers: { 'content-type': 'multipart/form-data' }
       }

       axios.post("https://medico-backend-production.up.railway.app/api/patient/uploadData",form, config)
    .then(response => {
      setLoading(false)
       // setImage(null)
        reset();
        alert("profile updated");
        
    })
    .catch(error => {
        console.log(error);
       // setError(error)
    });
        }
  };



  return (
    <main className="w-full bg-white-A700 h-screen flex justify-between items-start">
    <motion.section
            animate={isExpanded ? "expanded" : "nonExpanded"}
            variants={variants}
            className={'w-1/5 bg-light_blue-800 h-screen font-istokweb  font-bold flex flex-col justify-between items-center gap-10 relative ' + (isExpanded ? 'py-8 px-6 ' : 'px-8 py-6')}>
            <div className='flex flex-col justify-center items-center gap-8'>
                <div className='flex flex-col justify-center items-start gap-5 w-full mt-5'>
                    {navItems.map((item, index) => (
                        <Link
                        to={item.link}
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

          <div className="flex flex-col gap-[30px] items-start justify-start md:mt-0 sm:mt-0 mt-[3px] md:px-2 w-4/5 mx-2">
            <Text
              className="sm:text-[21px] md:text-[23px] text-[25px] mt-4 text-teal-900 sm:mt-3 md:mt-3"
              size="txtIstokWebBold25"
            >
              VIDEO MEDICO
            </Text>
            <div className="flex flex-row md:flex-col sm:flex-col overflow-y-auto md:space-y-2 sm:space-y-2 w-full">
              <div className=" w-full sm:w-[100%] md:w-[100%] p-[17px] font-josefinsans gap-[25px] flex-col h-[800px] overflow-y-auto md:h-auto sm:h-auto md:gap-5 rounded-[10px] shadow-bs1 top-[0] bg-gray-50_01">
                <div className="flex flex-row md:flex-col sm:flex-col gap-3.5 items-center justify-start w-[32%] md:w-full">
                  <div className="h-[130px] relative w-[47%]">
                    <div className=" h-[130px] inset-[0] justify-center m-auto rounded-[50%] shadow-bs3 w-[130px]">
                      <Img
                        className="h-[130px] m-auto rounded-[50%] w-[130px]"
                        src={image}
                        alt=""
                      />
                    </div>
                     <input className=" outline-none"
                  type="file"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={handleFileChange}
                 
                />
                    <Button
                      className="absolute bottom-[8%] right-3  flex h-[36px] items-center justify-center  w-[36px]"
                      shape="circle"
                      color="red_A700"
                      size="xs"
                      variant="fill"
                      onClick={handleImageClick}
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
                      Shahzaib
                    </Text>
                    <Text
                      className=" text-black-900_b2 text-xl sm:text-base md:text-[18px]"
                      size="txtJosefinSansRomanRegular20"
                    >
                      <>
                        Patient
                        <br />
                        Account verified
                      </>
                    </Text>
                  </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start justify-start mt-2 ml-3.5 md:ml-[0] w-[99%] md:w-full sm:w-full">
                <div className="flex flex-row md:flex-col sm:flex-col mt-1 sm:mt-3 md:mt-3 items-start gap-3.5 justify-between w-[69%] md:w-full sm:w-full">
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                First Name
              </Text>
              <Input
                name="firstName"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                shape="round"
                size="3xl"
                 {...register("firstName", {
                        required: "First name is required"
                      })}
              ></Input>
             {errors.firstName && (
                      <p className=" text-start text-red-500 mt-1">
                        {errors.firstName.message}
                      </p>
                    )}
                </div>
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Last Name
              </Text>
              <Input
                name="lastName"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                wrapClassName=" md:w-full"
                shape="round"
                size="3xl"
                {...register("lastName", {
                        required: "last name is required"
                      })}
              ></Input>
                       {errors.lastName && (
                      <p className=" text-start text-red-500 mt-1">
                        {errors.lastName.message}
                      </p>
                    )}
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
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                shape="round"
                size="3xl"
                 {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                          message: "Email format is not valid",
                        },
                      })}
              ></Input>
 {errors.email && (
                    <p className=" text-start text-red-500">
                      {errors.email.message}
                    </p>
                  )}
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
                maxLength={11}
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                wrapClassName=" md:w-full"
                shape="round"
                size="3xl"
                 {...register("phoneNumber",{
                        required: "Please enter mobile number",
                         pattern:{
                          value: /^[0-9]*$/,
                          message: "enter only digit number"
                         }
                      })}
                    
              ></Input>
               {errors.phoneNumber && (
                    <p className=" text-start text-red-500">
                      {errors.phoneNumber.message}
                    </p>
                  )}
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
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"  
                shape="round"
                size="3xl"
                 {...register("location", {
                        required: "Location is required"
                      })}
              ></Input>
               {errors.location && (
                      <p className=" text-start text-red-500">
                        {errors.location.message}
                      </p>
                    )}
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
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                wrapClassName=" md:w-full"
                shape="round"
                size="3xl"
                  {...register("postal", {
                        required: "Postal code is required"
                      })}
              ></Input>
           {errors.postal && (
                      <p className=" text-start text-red-500">
                        {errors.postal.message}
                      </p>
                    )}
                </div>
                </div>

                <div className="flex flex-row md:flex-col sm:flex-col mt-5 sm:mt-3 md:mt-3 items-start gap-3.5 justify-between w-[69%] md:w-full sm:w-full">
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Height
              </Text>
              <Input
                name="height"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                shape="round"
                size="3xl"
                 {...register("height", {
                        required: "HEight is required"
                      })}
              ></Input>
                  {errors.height && (
                      <p className=" text-start text-red-500">
                        {errors.height.message}
                      </p>
                    )}
                </div>
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Weight
              </Text>
              <Input
                name="weight"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                wrapClassName=" md:w-full"
                shape="round"
                size="3xl"
                 {...register("weight", {
                        required: "Weight is required"
                      })}
              ></Input>
             {errors.weight && (
                      <p className=" text-start text-red-500">
                        {errors.weight.message}
                      </p>
                    )}
                </div>
            
                </div>

                <div className="flex flex-row md:flex-col sm:flex-col mt-5 sm:mt-3 md:mt-3 items-start gap-3.5 justify-between w-[69%] md:w-full sm:w-full">
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Age
              </Text>
              <Input
                name="age"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                shape="round"
                size="3xl"
                 {...register("age",{
                        required: "Please enter age",
                         pattern:{
                          value: /^[0-9]*$/,
                          message: "enter only digit number"
                         }
                      })}
              ></Input>
                 {errors.age && (
                      <p className=" text-start text-red-500">
                        {errors.age.message}
                      </p>
                    )}
                </div>
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Sex
              </Text>
              <Input
                name="sex"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                wrapClassName=" md:w-full"
                shape="round"
                size="3xl"
                {...register("sex", {
                        required: "Sex is required"
                      })}
              ></Input>
{errors.sex && (
                      <p className=" text-start text-red-500">
                        {errors.sex.message}
                      </p>
                    )}
                </div>
                
                </div>

                {/* <div className="flex flex-row md:flex-col sm:flex-col mt-5 sm:mt-3 md:mt-3 items-start gap-3.5 justify-between w-[69%] md:w-full sm:w-full">
                <div className=" flex flex-col w-1/2 md:w-full sm:w-full">
                <Text
                className="text-black-900_b2 text-lg"
                size="txtJosefinSansRomanRegular18Black900b2"
              >
                Upload any medical Record
              </Text>
              <Input
                name="record"
                placeholder="Xray file Pdf"
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
                Patient Information form:
              </Text>
              <Input
                name="form"
                placeholder="Click to fill now"
                className="font-bold leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
                wrapClassName=" md:w-full"
                shape="round"
                size="3xl"
              ></Input>

                </div>
                </div> */}

               <div className=" flex flex-row justify-end items-end w-full">
               <button
                 type="submit"
                className="cursor-pointer font-bold leading-[normal] min-w-[178px] sm:ml-[0] ml-[123px] sm:mt-0 mt-7 text-center text-xl rounded bg-red-A700 text-white-A700 py-3">
                 {loading ? <ClipLoader color="#FFFFFF" size={30} /> : "Save Changes"}
              </button>
               </div>

               <Text
        className="md:ml-[0] ml-[13px] sm:mt-[4px] md:mt-[4px] text-black-900_b2 text-lg sm:text-base md:text-base"
        size="txtJosefinSansRomanRegular18Black900b2"
      >
        NOTE: all this information will be visible to your Doctor
      </Text>
                </form>



              </div>

  

            </div>
          </div>
     
    </main>
  );
};

export default PatientProfile;
