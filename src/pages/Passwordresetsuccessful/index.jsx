import React from "react";

import { Button, Img, Text } from "components";

const PasswordresetsuccessfulPage = () => {
  return (
    <>
    <div className=" bg-white-A700 font-istokweb h-[1024px] relative w-full">
    <div className="h-[1024px] w-full">
   
  <div className="bg-teal-900 absolute top-0 left-0 space-x-3 flex flex-row h-full items-start justify-start p-[21px] sm:px-5 md:px-5 w-full">
  <img
      className="h-[65px] md:h-auto ml-1 md:ml-[0] rounded-[50%] w-[65px]"
      src="images/img_biglogo.png"
      alt="biglogo"
    />
     <Text
         className="mb-[226px] mt-[17px] sm:text-[21px] md:text-[23px] text-[25px] text-[#ffffff]"
                  size="txtIstokWebBold25WhiteA700"
                >
                  VIDEO MEDICO
                </Text>
  </div>

  <img className=" md:hidden sm:hidden absolute ml-[10%]" src="images/img_pass_top.png" alt="top"/>
  

  
   <div className="absolute bg-white-A700 flex flex-col font-poppins h-max inset-[0] items-end justify-center m-auto max-w-[1062px] md:mt-[30%] sm:mt-[30%] p-[21px] md:px-5 rounded-[50px] w-full">
   <div className="flex md:flex-col flex-row gap-[42px] items-center justify-end mb-6 mt-[18px] w-[93%] md:w-full">
    <div className="flex flex-col items-center justify-start w-[49%] md:w-full">
      <Text
        className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-teal-900"
        size="txtPoppinsRegular25"
      >
        <>
          Congratulation! you have successful
          <br />
          reset your password
        </>
      </Text>
      <Img
        className="h-[150px] mt-8 w-[150px]"
        src="images/img_group110.svg"
        alt="group110"
      />
      <Button
        className="cursor-pointer h-[50px] leading-[normal] mt-[68px] rounded-[15px] text-center text-lg w-[241px]"
        color="light_blue_800"
        size="sm"
        variant="fill"
      >
        Return to Login
      </Button>
    </div>
    <Img
      className="h-[442px] md:h-auto object-cover rounded-[50px] w-[442px] sm:w-full"
      src="images/img_biglogo_442x442.png"
      alt="biglogo_One"
    />
  </div>
</div>

<img className=" absolute  md:hidden sm:hidden bottom-0 left-0" src="images/img_bottom_left.png" alt="bottom" />
<img className=" absolute top-0 right-0 w-[300px] h-[300px]" src="images/img_top_right.png" alt="top"/>
<img className=" absolute md:hidden sm:hidden bottom-0 right-0 w-[500px] h-[500px]" src="images/img_bottom_right.png" alt="bottom" />
   

    </div>

    </div>
    </>
  );
};

export default PasswordresetsuccessfulPage;

