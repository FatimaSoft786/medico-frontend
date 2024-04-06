import React from "react";

import { Button, Img, Text } from "components";

const LearnMorePage = () => {
  return (
    <>
     <div className="bg-white-A700 font-istokweb h-[1024px] relative w-full">
     <div className="h-[1024px] w-full">
   
   <div className=" bg-teal-900 flex flex-row space-x-3 md:space-y-3 sm:space-y-3 w-full md:flex-col sm:flex-col">

   <div className=" w-[10%]  md:w-auto sm:w-auto h-auto ml-10 mt-5">
  <img
      className="h-[65px] md:h-[85px] sm:h-[75px] sm:w-[75px] md:w-[75px] rounded-[50%] w-[65px]"
      src="images/img_biglogo.png"
      alt="biglogo"
    />
  </div>

  <div className=" w-[70%] sm:w-[90%] md:w-[90%] sm:ml-0 md:ml-0 ml-[10%] mt-5 flex flex-col rounded-[50px] bg-white-A700">
    <div  className=" flex justify-start items-start flex-col rounded-[50px] ml-[10%] w-full">
    <Text
  className=" sm:text-[21px] md:text-[23px] text-[25px] text-teal-900 top-[2%] mx-5 my-2"
  size="txtIstokWebBold25">
  VIDEO MEDICO
</Text>
<Text
        className="md:ml-[0] ml-[367px] sm:text-[35px] md:text-[41px] text-[45px] text-light_blue-700"
        size="txtPoppinsSemiBold45"
      >
        How it works
      </Text>

      <div className="flex sm:flex-col flex-row gap-[25px] items-start justify-start mt-[5px] w-full">
        <Img
          className="h-[267px]"
          src="images/img_group5.svg"
          alt="groupFive"
        />
        <div className=" flex flex-col sm:w-[80%] md:w-[80%]">
        <span className="md:text-base sm:text-base mt-[53px] text-black-900 font-poppins text-left text-[25px] font-bold">
              Sign up as a patient or Specialist now!!
          </span>
          <span className="text-black-900 font-poppins w-[80%] mt-[43px] text-left sm:text-base md:text-base text-lg font-normal">
            Create your Video Medico account in minutes. Provide basic
            information and medical history, specialization to enhance
            your virtual healthcare experience.
          </span>
        </div>
      </div>

      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-between md:ml-[0] ml-[43px] mt-0.5 w-[84%] md:w-full">
      <div className=" flex flex-col mt-0 sm:w-[80%] md:w-[80%]">
      <span className="md:text-[21px] sm:text-[21px] text-black-900 font-poppins text-left text-[25px] font-bold">
              Book a Consultation!!    
          </span>
          <span className="text-black-900 font-poppins sm:text-base md:text-base text-left text-lg font-normal">
              Browse through a list of qualified healthcare providers,
              check their availability, and book a convenient time for
              your consultation.   
          </span>
      </div>
        <Img
          className="h-[218px] items-center"
          src="images/img_group4.svg"
          alt="groupFour"
        />
      </div>

      <div className="flex  md:flex-col flex-row gap-[23px] items-start justify-between md:ml-[0] ml-[11px] mt-[75px] w-[96%] md:w-full">
      <Img
          className="h-[282px] mb-10 md:h-[200px] sm:h-[200px]"
          src="images/img_group59.svg"
          alt="groupFiftyNine"
        />
         <div className="flex flex-col gap-[26px] justify-start md:mt-0 mt-[71px]">
         <div className=" flex flex-col sm:w-[80%] md:w-[80%]">
        <span className="md:text-base sm:text-base mt-[0px] text-black-900 font-poppins text-left text-[25px] font-bold">
        Set up a Virtual Visit  !!
          </span>
          <span className="text-black-900 font-poppins w-[80%] mt-[43px] text-left sm:text-base md:text-base text-lg font-normal">
          Virtual Visit: Join your video call at the scheduled time. Discuss your symptoms, receive medical advice, and even get prescriptions if needed—all from the comfort of your home.
          </span>
        </div>
          <Button
            className="!text-white-A700 cursor-pointer font-semibold leading-[normal] md:ml-[0] ml-[309px] rounded-[15px] text-center text-xl w-[292px] md:w-[80%] sm:w-[80%] md:items-center sm:items-center sm:mb-2 md:mb-2"
            color="teal_900"
            size="sm"
            variant="fill"
          >
            Return to login
          </Button>
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

export default LearnMorePage;


{/* <div className="bg-white-A700 h-[1024px] mx-auto relative w-full">
<div className="font-poppins h-[1024px] sm:h-[1178px] md:h-[1433px] m-auto md:px-5 w-full">
  <div className="h-[1024px] m-auto w-full">
    <div className="bg-teal-900 flex flex-col h-full items-start justify-start m-auto p-[21px] sm:px-5 w-full">
      <Img
        className="h-[65px] md:h-auto mb-[917px] ml-1 md:ml-[0] rounded-[50%] w-[65px]"
        src="images/img_biglogo.png"
        alt="biglogo"
      />
    </div>
    <Img
      className="absolute h-[298px] left-[7%] object-cover top-[0]"
      src="images/img_vector_light_blue_800.png"
      alt="vector"
    />
    <Img
      className="absolute bottom-[0] h-[303px] left-[0] object-cover"
      src="images/img_vector_light_blue_700.png"
      alt="vector_One"
    />
    <Img
      className="absolute h-[287px] object-cover right-[0] top-[0]"
      src="images/img_vector_light_blue_800.png"
      alt="vector_Two"
    />
    <Img
      className="absolute bottom-[0] h-52 object-cover right-[0]"
      src="images/img_vector_light_blue_700.png"
      alt="vector_Three"
    />
  </div>
  <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-2.5 rounded-[50px] w-[74%]">
    <div className="flex flex-col justify-start w-[93%] md:w-full">
      <Text
        className="md:ml-[0] ml-[367px] sm:text-[35px] md:text-[41px] text-[45px] text-light_blue-700"
        size="txtPoppinsSemiBold45"
      >
        How it works
      </Text>
      <div className="flex sm:flex-col flex-row gap-[25px] items-start justify-start mt-[5px] w-full">
        <Img
          className="h-[267px]"
          src="images/img_group5.svg"
          alt="groupFive"
        />
        <Text
          className="sm:mt-0 mt-[73px] md:text-5xl text-[80px] text-black-900"
          size="txtPoppinsRegular80"
        >
          <span className="md:text-[23px] sm:text-[21px] text-black-900 font-poppins text-left text-[25px] font-bold">
            <>
              Sign up as a patient or Specialist now!!
              <br />
            </>
          </span>
          <span className="md:text-[28px] sm:text-[26px] text-black-900 font-poppins text-left text-3xl font-bold">
            <>
              <br />
            </>
          </span>
          <span className="text-black-900 font-poppins text-left text-lg font-normal">
            Create your Video Medico account in minutes. Provide basic
            information and medical history, specialization to enhance
            your virtual healthcare experience.
          </span>
        </Text>
      </div>
      <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start md:ml-[0] ml-[43px] mt-0.5 w-[84%] md:w-full">
        <Text
          className="md:mt-0 mt-14 md:text-5xl text-[80px] text-black-900"
          size="txtPoppinsRegular80"
        >
          <span className="md:text-[23px] sm:text-[21px] text-black-900 font-poppins text-left text-[25px] font-bold">
            <>
              Book a Consultation!!
              <br />
            </>
          </span>
          <span className="text-black-900 font-poppins text-left text-lg font-normal">
            <>
              <br />
              Browse through a list of qualified healthcare providers,
              check their availability, and book a convenient time for
              your consultation.
              <br />
            </>
          </span>
          <span className="md:text-[28px] sm:text-[26px] text-black-900 font-poppins text-left text-3xl font-normal">
            <>
              <br />
            </>
          </span>
          <span className="text-black-900 font-poppins text-left font-normal">
            <>
              <br />
            </>
          </span>
        </Text>
        <Img
          className="h-[218px]"
          src="images/img_group4.svg"
          alt="groupFour"
        />
      </div>
      <div className="flex md:flex-col flex-row gap-[23px] items-start justify-between md:ml-[0] ml-[11px] mt-[75px] w-[96%] md:w-full">
        <Img
          className="h-[282px] mb-10"
          src="images/img_group59.svg"
          alt="groupFiftyNine"
        />
        <div className="flex flex-col gap-[26px] justify-start md:mt-0 mt-[71px]">
          <Text
            className="mr-[63px] md:text-5xl text-[80px] text-black-900"
            size="txtPoppinsRegular80"
          >
            <span className="md:text-[23px] sm:text-[21px] text-black-900 font-poppins text-left text-[25px] font-bold">
              <>
                Set up a Virtual Visit !!
                <br />
              </>
            </span>
            <span className="text-black-900 font-poppins text-left text-lg font-normal">
              <>
                <br />
                Virtual Visit: Join your video call at the scheduled
                time. Discuss your symptoms, receive medical advice, and
                even get prescriptions if needed—all from the comfort of
                your home.
                <br />
              </>
            </span>
          </Text>
          <Button
            className="!text-white-A700 cursor-pointer font-semibold leading-[normal] md:ml-[0] ml-[309px] rounded-[15px] text-center text-xl w-[292px]"
            color="teal_900"
            size="sm"
            variant="fill"
          >
            Return to login
          </Button>
        </div>
      </div>
    </div>
  </div>
</div>

</div> */}
