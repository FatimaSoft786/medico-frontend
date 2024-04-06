import React from "react";
import { Button, Img, Text } from "components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { signUP } from "./registerSlice";


const SignupPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  if(state.signup.data){
    if(state.signup.data.error === false){
       navigate("/verification")
    }
  }
  const onSubmit = async (data) => {
    dispatch(signUP({email: data.email,password: data.password,firstName: data.firstName,lastName: data.lastName,phoneNumber: data.phoneNumber}))
   reset();
  };

  return (
    <>
      <div className=" bg-white-A700 h-[1028x] mx-auto relative w-full">
        <div className=" font-istokweb h-[1028px] m-auto md:px-5 w-full">
          <div className=" absolute h-full inset-y-0 left-0 my-0 w-[44%] md:w-full">
            <div className="!sticky !w-[434px] bg-light_blue-800 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto top-[0]">
              <div
                className=" absolute w-[100%] h-[500px] bg-cover  p-[3px] top-0 right-0"
                style={{ backgroundImage: "url('images/img_top.png')" }}
              ></div>

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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="absolute font-poppins h-full -top-2 my-auto right-[0] bg-transparent w-[75%] md:w-full"
          >
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
            <div className="absolute flex flex-col gap-3.5 inset-x-[0] items-center justify-center mx-auto top-[7%] w-[66%] md:w-[80%] sm:w-[80%]">
              <div className=" flex flex-col w-[100%]">
                <Text
                  className="md:ml-[0] ml-[0px] items-center text-center sm:text-xl md:text-[38px] text-[40px] text-teal_900 md:text-white-A700 sm:text-white-A700"
                  size="txtPoppinsSemiBold40"
                >
                  Create Account
                </Text>

                <div className="flex sm:flex-col md:flex-col md:justify-center sm:justify-center flex-row space-x-5 sm:gap-1 items-end sm:mt-3 md:mt-3 justify-between ml-0.5 md:ml-[0] w-full">
                  <div className=" flex flex-col justify-start sm:justify-center md:justify-center mt-20 sm:mt-0 md:mt-0 w-[65%] md:w-[100%] sm:w-[100%]">
                    {errors.firstName && (
                      <p className=" text-start text-red-500">
                        {errors.firstName.message}
                      </p>
                    )}
                    <input
                      {...register("firstName", {
                        required: "First name is required"
                      })}
                      className=" bg-transparent px-3  rounded-[10px] shadow-bs bg-gray-50_01 h-20 sm:h-[70px] md:h-[70px]"
                    ></input>
                    <Text
                      className="md:ml-[0] ml-[2px] mt-1 text-teal-900 text-xl sm:text-base md:text-base"
                      size="txtPoppinsRegular20"
                    >
                      First name
                    </Text>
                  </div>
                  <div className=" flex flex-col justify-start mt-20 sm:mt-0 md:mt-0 w-[65%] sm:w-[100%] md:w-[100%]">
                    {errors.lastName && (
                      <p className=" text-start text-red-500">
                        {errors.lastName.message}
                      </p>
                    )}
                    <input
                      {...register("lastName", {
                        required: "Last name is required"
                      })}
                      className=" bg-transparent px-3  rounded-[10px] shadow-bs bg-gray-50_01 h-20 sm:h-[70px] md:h-[70px]"
                    ></input>
                    <Text
                      className="md:ml-[0] ml-[2px] mt-1 text-teal-900 text-xl sm:text-base md:text-base"
                      size="txtPoppinsRegular20"
                    >
                      Last name
                    </Text>
                  </div>
                </div>

                <div className=" flex flex-col  items-start mx-auto mt-[10px] w-[100%] xs:w-[100%] sm:w-[100%]">
                  {errors.email && (
                    <p className=" text-start text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                  <div className=" bg-gray-50_01 flex flex-row h-20 sm:h-[70px] md:h-[70px] items-center justify-between mt-0 p-4 rounded-[10px] shadow-bs w-full">
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                          message: "Email format is not valid",
                        },
                      })}
                      className="w-full bg-transparent px-3 h-full"
                    ></input>
                  </div>
                  <Text
                    className="mb-0.5 mt-1 text-teal-900 text-xl  sm:text-base md:text-base"
                    size="txtPoppinsRegular20"
                  >
                    Email
                  </Text>
                </div>

                <div className=" flex flex-col  items-start mx-auto mt-[10px] w-[100%] xs:w-[100%] sm:w-[100%]">
                  {errors.password && (
                    <p className=" text-start text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                  <div className=" bg-gray-50_01 flex flex-row h-20 sm:h-[70px] md:h-[70px] items-center justify-between mt-0 p-4 rounded-[10px] shadow-bs w-full">
                    <Img src="images/img_group9.svg" alt="groupNine" />
                    <input
                      {...register("password", {
                        required: "Password is required",
                        minLength: 8,
                        pattern: {
                          value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                          message:
                            "must contain at least 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character",
                        },
                      })}
                      className="w-full bg-transparent px-3 h-full"
                    ></input>
                    <Img src="images/eye.svg" alt="groupNine" />
                  </div>
                  <Text
                    className="mb-0.5 mt-1 text-teal-900 text-xl sm:text-base"
                    size="txtPoppinsRegular20"
                  >
                    Password
                  </Text>
                </div>

                <div className=" flex flex-col  items-start mx-auto mt-[10px] w-[100%] xs:w-[100%] sm:w-[100%]">
                  {errors.phoneNumber && (
                    <p className=" text-start text-red-500">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                  <div className=" bg-gray-50_01 flex flex-row h-20 sm:h-[70px] md:h-[70px] items-center mt-0 p-4 rounded-[10px] shadow-bs w-full">
                    <input
                      {...register("phoneNumber",{
                        required: "Please enter mobile number",
                         pattern:{
                          value: /^[0-9]*$/,
                          message: "enter only digit number"
                         }
                      })}
                      className="w-full bg-transparent px-3 h-full border-none"
                    maxLength={11}
                    ></input>
                  </div>
                  <Text
                    className="mb-0.5 mt-1 text-teal-900  text-xl sm:text-base md:text-base"
                    size="txtPoppinsRegular20"
                  >
                    Phone number
                  </Text>
                </div>

                <div className=" flex flex-col cursor-pointer  items-start mx-auto mt-[30px] w-[100%] xs:w-[100%] sm:w-[100%]">
                  <>
                  {state.signup.data && (
                      <p className=" text-start text-red-500 font-istokweb font-bold">
                        {state.signup.data.message}
                      </p>
                    )}
                    <button
                      type="submit"
                      className="bg-teal-900 h-[67px] text-center sm:px-5 px-[35px] py-[18px] rounded-[10px] text-shadow-ts text-white-A700 text-xl w-full"
                      size="txtPoppinsRegular20WhiteA700"
                    >
                      {state.signup.isLoading ? (
                        <ClipLoader color="#FFFFFF" size={30} />
                      ) : (
                        "Create an account!!"
                      )}
                    </button>

                    <Link to="/" className=" cursor-pointer w-full">
                      <Button
                        className="cursor-pointer font-bold h-[62px] leading-[normal] mt-3 text-center text-white-A700 text-xl w-full"
                        shape="round"
                        color="black_900"
                        size="xl"
                        variant="outline"
                      >
                        Already Have an Account
                      </Button>
                    </Link>
                  </>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
