import React,{useState,useEffect} from "react";
import { Button, Img, Text } from "components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import {login} from "./loginSlice";


const LoginPage = () => {


  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
   
     if(state.login.data){
      if(state.login.data.error === false){
        navigate("/dashboard")
      }
     }
  const onSubmit = async (data) => {
    dispatch(login({email: data.email,password: data.password}))
    // navigate("/verification")
  };


  return (
    <div className=" bg-white-A700 h-[1028x] mx-auto relative w-full">
    <div className=" font-istokweb h-[1028px] m-auto md:px-5 w-full">
    <div className=" absolute h-full inset-y-0 left-0 my-0 w-[44%] md:w-full">
     <div className="!sticky !w-[434px] bg-light_blue-800 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto top-[0]">


              <div className="absolute flex h-[298px] flex-row space-x-5 items-start justify-start p-[3px] left-[0] top-[0]">
                <img
                  className=" w-16 h-16 mt-5 ml-5"
                  src="images/img_biglogo.png"
                  alt="logo"
                />
                <Text
                  className="mb-[226px] mt-[34px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                  size="txtIstokWebBold25WhiteA700"
                >
                  VIDEO MEDICO
                </Text>
              </div>

              <div className="absolute flex flex-col font-poppins gap-[18px] justify-center left-[2%] md:px-5 top-[12%] w-[85%]">
                <Text
                  className="ml-5 md:ml-[0] sm:text-[21px] items-center md:text-[23px] text-[25px] text-light_blue-700"
                  size="txtPoppinsSemiBold25Lightblue700"
                >
                  <span className="text-white-A700 font-poppins text-center font-medium">
                    <>
                      Start your journey to better health today!
                      <br />
                    </>
                  </span>
                </Text>

                <Button
                  className="cursor-pointer ml-5 h-[50px] leading-[normal] mr-[179px] rounded-[15px] text-center text-lg w-auto"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  Learn more
                </Button>

                <div className="flex justify-center mt-[20%] items-center">
                  <img
                    className=" w-[250px] h-[250px] mt-0"
                    src="images/img_biglogo_442x442.png"
                    alt="logo"
                  />
                </div>
              </div>

              <div
                className=" absolute w-[100%] h-[500px] bg-cover bg-no-repeat p-[3px] right-0 bottom-0"
                style={{ backgroundImage: "url('images/img_bottom.png')" }}
              >
                <Text
                  className="absolute ml-5 bottom-[14%] left-[3%] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700  w-[85%]"
                  size="txtPoppinsSemiBold25"
                >
                  Your Virtual Healthcare Solution!
                </Text>
              </div>
            </div>
     </div>

     <div  className="absolute font-poppins h-full -top-2 my-auto right-[0] bg-transparent w-[75%] md:w-full">
     <img
              className=" h-[1028px] m-auto object-cover rounded-bl-[50px] rounded-tl-[40px] w-full"
              src="images/img_rectangle6.png"
              alt="rectangleSix"
            />
            <img
              className="absolute h-[500px]  object-cover right-[0] top-[0]"
              src="images/img_top_right.png"
              alt="top-right-img"
            />
            <img
              className="absolute h-[500px]  object-cover right-[0] bottom-[0]"
              src="images/img_bottom_right.png"
              alt="top-right-img"
            />
            <form onSubmit={handleSubmit(onSubmit)} className="absolute flex flex-col gap-3.5 inset-x-[0] items-center justify-center mx-auto top-[12%] w-[66%] md:w-[80%] sm:w-[80%]">
            <Text
          className="md:ml-[0] ml-[0px] items-center text-center sm:text-xl md:text-[38px] text-[40px] text-teal_900 md:text-white-A700 sm:text-white-A700"
          size="txtPoppinsSemiBold40">
          Already Have an account
        </Text>
        <div className=" flex flex-col inset-x-[0] items-start mx-auto mt-[50px] w-[84%] md:w-[100%] sm:w-[100%]">
        {errors.email && (
                      <p className=" text-start text-red-500">
                        {errors.email.message}
                      </p>
                    )}
       <div className=" bg-gray-50_01 flex flex-row h-20 sm:h-[70px] md:h-[70px] items-center justify-between mt-0 md:mt-0 sm:mt-0 p-4 rounded-[10px] shadow-bs w-full">
                <input 
                {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                          message: "Email format is not valid",
                        },
                      })}
                
                className="w-full bg-transparent px-3 h-full"></input>
                
              </div>
              <Text
                  className="mb-0.5 mt-1 text-teal-900 text-xl sm:text-base"
                  size="txtPoppinsRegular20">
                Email
                </Text>
       </div>

       <div className="w-[84%] flex justify-start ml-0">
       {errors.password && (
                    <p className=" text-start text-red-500">
                      {errors.password.message}
                    </p>
                  )}
       </div>
       <div className=" bg-gray-50_01 flex flex-row h-20 sm:h-[70px] md:h-[70px]  items-center justify-between mt-0 p-4 rounded-[10px] shadow-bs w-[84%] md:w-[100%] sm:w-[100%]">
      <Img
          
          src="images/img_group9.svg"
          alt="groupNine"
        />
        <input
         {...register("password", {
                        required: "Password is required",
                        minLength: 8,
                        pattern: {
                          value:
                            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                          message:
                            "must contain at least 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character",
                        },
                      })}
         className="w-full bg-transparent px-3 h-full"></input>
        <Img
          src="images/eye.svg"
          alt="groupNine"
        />
      </div>

      <div className="flex flex-row sm:gap-10 items-start justify-between ml-0.5 md:ml-[0] mt-1 w-[84%] sm:w-[100%] md:w-[100%] ">
        <Text
          className="mb-0.5 text-teal-900 text-xl sm:text-base"
          size="txtPoppinsRegular20"
        >
          Password
        </Text>
        <Text
          className="mt-0.5 text-teal-900 text-xl sm:text-base cursor-pointer"
          size="txtPoppinsBold20"
        >
          Forgotten Password
        </Text>
      </div>

      <Button
        className="!text-white-A700 cursor-pointer leading-[normal] w-[84%] sm:w-[100%] md:w-[100%] mt-8 shadow-bs text-center text-xl"
        shape="round"
        color="teal_900"
        size="xl"
        variant="fill"
      >
         {state.login.isLoading ? (
                        <ClipLoader color="#FFFFFF" size={30} />
                      ) : (
                        "Login Now!!"
                      )}
      </Button>
      {state.login.data && (
                      <p className=" text-start text-red-500">
                        {state.login.data.message}
                      </p>
                    )}

     <Link to="/register" className=" flex justify-start w-[84%] sm:w-[100%] md:w-[100%]">
     <Text
        className="mt-[18px] text-teal-900 text-xl"
        size="txtPoppinsRegular20"
      >
        <span className="text-teal-900 font-poppins text-left font-normal">
          Don’t have an account
        </span>
        <span className="text-teal-900 font-poppins text-left font-bold cursor-pointer">
          Sign up now!!
        </span>
      </Text>
     </Link>

    
   
            </form>
     </div>

    </div>

    </div>
  );
};

export default LoginPage;

