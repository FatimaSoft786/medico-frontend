import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";

const DoctorpatientvideocallPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-istokweb items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[26px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[89px] bg-light_blue-800 flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <Img
              className="h-16 mt-[15px] mx-auto"
              src="images/img_frame.svg"
              alt="frame"
            />
            <Img
              className="h-6 mb-[854px] md:ml-[0] ml-[34px] mr-[31px] mt-[912px] w-6"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[53px] justify-start md:mt-0 mt-[23px] w-full">
            <Text
              className="ml-44 md:ml-[0] sm:text-[21px] md:text-[23px] text-[25px] text-teal-900"
              size="txtIstokWebBold25"
            >
              VIDEO MEDICO
            </Text>
            <div className="bg-gray-50_01 flex flex-col font-josefinsans items-center justify-start p-[11px] rounded-[10px] shadow-bs1 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between my-[17px] w-full">
                <div className="flex md:flex-1 flex-col gap-[29px] items-center justify-start w-1/5 md:w-full">
                  <div className="bg-white-A700 flex flex-col gap-2 items-center justify-start p-4 rounded-[10px] w-full">
                    <Img
                      className="h-[70px] md:h-auto object-cover rounded-[10px] w-[70px]"
                      src="images/img_rectangle71.png"
                      alt="rectangleSeventyOne"
                    />
                    <Text
                      className="mb-[43px] text-light_blue-800 text-xl"
                      size="txtJosefinSansRomanBold20Lightblue800"
                    >
                      Luara Jacob
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-col font-istokweb items-start justify-start p-3.5 rounded-[10px] w-full">
                    <Text
                      className="mt-1.5 text-light_blue-700 text-xl"
                      size="txtIstokWebBold20Lightblue700"
                    >
                      D.O.B
                    </Text>
                    <Text
                      className="text-teal-900 text-xl"
                      size="txtIstokWebBold20Teal900"
                    >
                      30 September 1998
                    </Text>
                    <Text
                      className="mt-2 text-light_blue-700 text-xl"
                      size="txtIstokWebBold20Lightblue700"
                    >
                      Height
                    </Text>
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-teal-900"
                      size="txtIstokWebBold25"
                    >
                      1.7 m
                    </Text>
                    <Text
                      className="mt-1 sm:text-[21px] md:text-[23px] text-[25px] text-light_blue-700"
                      size="txtIstokWebBold25Lightblue700"
                    >
                      Weight
                    </Text>
                    <Text
                      className="text-teal-900 text-xl"
                      size="txtIstokWebBold20Teal900"
                    >
                      56 kg
                    </Text>
                    <Text
                      className="mt-[7px] text-light_blue-700 text-xl"
                      size="txtIstokWebBold20Lightblue700"
                    >
                      Gender
                    </Text>
                    <Text
                      className="mb-28 ml-1 md:ml-[0] sm:text-[21px] md:text-[23px] text-[25px] text-teal-900"
                      size="txtIstokWebBold25"
                    >
                      Female
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-[19px] items-center justify-start w-[57%] md:w-full">
                  <div className="h-[523px] relative w-full">
                    <div className="h-[523px] m-auto w-full">
                      <Img
                        className="h-[523px] m-auto object-cover rounded-[10px] w-full"
                        src="images/img_rectangle57.png"
                        alt="rectangleFiftySeven"
                      />
                      <Img
                        className="absolute h-[180px] object-cover right-[2%] rounded-[10px] top-[2%] w-1/5"
                        src="images/img_rectangle71.png"
                        alt="rectangleSixtyEight"
                      />
                    </div>
                    <div className="absolute bottom-[3%] flex flex-col md:gap-10 gap-[223px] inset-x-[0] justify-start mx-auto w-[96%]">
                      <Button
                        className="flex h-11 items-center justify-center md:ml-[0] ml-[546px] mr-[110px] rounded-[50%] w-11"
                        shape="circle"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      >
                        <Img
                          className="h-[31px]"
                          src="images/img_group156.svg"
                          alt="group156"
                        />
                      </Button>
                      <div className="backdrop-opacity-[0.5] bg-white-A700_cc blur-[4.00px] flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-2 rounded-[10px] w-full">
                        <Button
                          className="!text-light_blue-800 cursor-pointer font-bold leading-[normal] min-w-[139px] sm:mt-0 my-[15px] rounded-[21px] text-center text-xl"
                          color="white_A700"
                          size="md"
                          variant="fill"
                        >
                          00:15:59
                        </Button>
                        <Img
                          className="h-[60px] sm:ml-[0] ml-[102px] sm:mt-0 my-1.5"
                          src="images/img_group162.svg"
                          alt="group162"
                        />
                        <Img
                          className="h-[42px] sm:ml-[0] ml-[55px]"
                          src="images/img_group158.svg"
                          alt="group158"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col font-nunito items-center justify-start p-1.5 rounded-[10px] w-full">
                    <div className="flex flex-col items-start justify-start mb-4 w-[98%] md:w-full">
                      <div className="flex flex-row gap-2 items-end justify-start w-[31%] md:w-full">
                        <Img
                          className="h-[70px] md:h-auto object-cover rounded-[10px] w-[70px]"
                          src="images/img_rectangle57.png"
                          alt="rectangleSeventyFive"
                        />
                        <div className="flex flex-col mb-[3px] mt-[19px] relative w-[64%]">
                          <Text
                            className="mx-auto text-teal-900 text-xl"
                            size="txtNunitoExtraBold20"
                          >
                            Dr. Zola Guilia
                          </Text>
                          <Text
                            className="mt-[-0.01px] text-lg text-light_blue-800 z-[1]"
                            size="txtNunitoBold18"
                          >
                            <span className="text-light_blue-800 font-nunito text-left font-bold">
                              ....{" "}
                            </span>
                            <span className="text-light_blue-800 font-nunito text-left font-normal italic">
                              typing
                            </span>
                            <span className="text-light_blue-800 font-nunito text-left font-bold">
                              .
                            </span>
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-gray-50_01 h-[5px] mt-2 rotate-[90deg] w-full" />
                      <div className="h-[60px] md:h-[78px] md:ml-[0] ml-[5px] mt-[19px] relative w-[56%] sm:w-full">
                        <div className="absolute bg-light_blue-700_33 flex flex-col h-full inset-[0] items-start justify-center m-auto p-4 rounded-[10px] w-full">
                          <Text
                            className="ml-0.5 md:ml-[0] mt-0.5 text-lg text-teal-900"
                            size="txtNunitoBold18Teal900"
                          >
                            Hello can you tell me some symptoms
                          </Text>
                        </div>
                        <Text
                          className="absolute bottom-[0] right-[2%] text-[13px] text-light_blue-800"
                          size="txtNunitoBold13"
                        >
                          17:52
                        </Text>
                      </div>
                      <div className="bg-light_blue-800 md:h-[91px] h-[92px] md:ml-[0] ml-[309px] mt-[23px] p-[3px] relative rounded-[10px] w-[56%] sm:w-full">
                        <Text
                          className="absolute bottom-[3%] right-[10%] text-[13px] text-white-A700"
                          size="txtNunitoBold13WhiteA700"
                        >
                          17:58
                        </Text>
                        <div className="absolute md:h-[68px] h-[75px] inset-[0] justify-center m-auto w-[93%]">
                          <Text
                            className="absolute inset-x-[0] mx-auto text-lg text-white-A700 top-[0] w-[98%] sm:w-full"
                            size="txtNunitoBold18WhiteA700"
                          >
                            <>
                              &quot;There is no one who loves pain itself, who
                              seeks after it and wants to have it, simply
                              because it is pain
                            </>
                          </Text>
                          <Img
                            className="absolute bottom-[0] h-2.5 right-[0]"
                            src="images/img_checkmark_white_a700.svg"
                            alt="checkmark"
                          />
                        </div>
                      </div>
                      <div className="bg-light_blue-700_33 flex flex-row gap-[66px] items-start justify-end mt-[22px] pt-1 px-1 rounded-[10px] w-[56%] md:w-full">
                        <Text
                          className="my-[15px] text-lg text-teal-900"
                          size="txtNunitoBold18Teal900"
                        >
                          <>&quot;There is no one who loves pain</>
                        </Text>
                        <Text
                          className="mt-[37px] text-[13px] text-light_blue-800"
                          size="txtNunitoBold13"
                        >
                          17:58
                        </Text>
                      </div>
                      <div className="sm:h-[117px] md:h-[195px] h-[60px] mt-[57px] relative w-[99%] md:w-full">
                        <div className="bg-teal-900 h-10 ml-auto mr-[11px] my-auto rounded-[10px] w-10"></div>
                        <div className="absolute border border-black-900_59 border-solid flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto p-2 rounded-[10px] w-full">
                          <Text
                            className="md:mt-0 my-[9px] text-lg text-light_blue-800_66"
                            size="txtNunitoBold18Lightblue80066"
                          >
                            Write your messages
                          </Text>
                          <Img
                            className="h-6 md:ml-[0] ml-[434px] md:mt-0 mt-3"
                            src="images/img_attach.svg"
                            alt="attach"
                          />
                          <Img
                            className="h-6 md:ml-[0] ml-[15px] md:mt-0 mt-[11px] w-6"
                            src="images/img_save.svg"
                            alt="save"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col font-nunito justify-start w-[21%] md:w-full">
                  <div className="md:h-[573px] h-[603px] md:ml-[0] ml-[7px] relative w-[98%]">
                    <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-0.5 rounded-[10px] w-[99%]">
                      <div className="flex flex-col items-center justify-start mb-[78px] mt-[15px] w-full">
                        <div className="flex flex-row gap-[21px] items-center justify-center w-[70%] md:w-full">
                          <Button
                            className="flex h-[45px] items-center justify-center w-[45px]"
                            shape="round"
                            color="light_blue_700_99"
                            size="xl"
                            variant="fill"
                          >
                            <Img
                              className="h-2.5"
                              src="images/img_close_white_a700.svg"
                              alt="close"
                            />
                          </Button>
                          <Text
                            className="text-light_blue-800 text-xl"
                            size="txtNunitoBold20"
                          >
                            Doctor Info
                          </Text>
                        </div>
                        <div className="h-[105px] md:h-[147px] mt-[47px] relative w-[42%]">
                          <Img
                            className="absolute h-[100px] inset-x-[0] mx-auto object-cover rounded-[10px] top-[0] w-[100px]"
                            src="images/img_rectangle57.png"
                            alt="rectangleSeventyThree"
                          />
                          <div className="absolute bg-green-800 bottom-[0] h-5 right-[0] rounded-[50%] w-5"></div>
                        </div>
                        <div className="flex flex-col items-start justify-start mt-2.5 w-full">
                          <div className="h-[46px] relative w-[94%]">
                            <Text
                              className="mb-[-1.48px] mx-auto text-teal-900 text-xl z-[1]"
                              size="txtNunitoExtraBold20"
                            >
                              Dr. Zola Guilia
                            </Text>
                            <Text
                              className="mt-auto mx-auto text-light_blue-800 text-xl"
                              size="txtJosefinSansRomanSemiBold20"
                            >
                              Clinical Nuerophysiology
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[72px] items-start justify-start mt-[79px] w-[92%] md:w-full">
                            <Text
                              className="text-lg text-teal-900"
                              size="txtIstokWebBold18Teal900"
                            >
                              Shared Files
                            </Text>
                            <a
                              href="javascript:"
                              className="text-[15px] text-light_blue-700"
                            >
                              <Text size="txtNunitoBold15">See all</Text>
                            </a>
                          </div>
                          <Button
                            className="border-2 border-black-900_19 border-solid cursor-pointer flex items-center justify-center min-w-[240px] md:ml-[0] ml-[3px] mt-0.5 shadow-bs4"
                            leftIcon={
                              <div className="mb-1 mr-[7px] bg-black-900_b2">
                                <Img
                                  src="images/img_file_black_900.svg"
                                  alt="file"
                                />
                              </div>
                            }
                            shape="round"
                            color="white_A700"
                            size="xs"
                            variant="fill"
                          >
                            <div className="!text-black-900_b2 leading-[normal] text-left text-lg">
                              Blood test.pdf 27 kb
                            </div>
                          </Button>
                          <Button
                            className="border-2 border-black-900_19 border-solid cursor-pointer flex items-center justify-center min-w-[240px] md:ml-[0] ml-[3px] mt-[9px] shadow-bs4"
                            leftIcon={
                              <div className="mb-1 mr-[7px] bg-black-900_b2">
                                <Img
                                  src="images/img_file_black_900.svg"
                                  alt="file"
                                />
                              </div>
                            }
                            shape="round"
                            color="white_A700"
                            size="xs"
                            variant="fill"
                          >
                            <div className="!text-black-900_b2 leading-[normal] text-left text-lg">
                              Skin Prick.pdf 32 kb
                            </div>
                          </Button>
                          <Input
                            name="group125"
                            placeholder="Intradermal test"
                            className="!placeholder:text-black-900_b2 !text-black-900_b2 leading-[normal] p-0 text-left text-lg w-full"
                            wrapClassName="border-2 border-black-900_19 border-solid flex mt-[9px] shadow-bs4 w-full"
                            prefix={
                              <div className="mt-px mb-[3px] mr-[7px] sm:w-full sm:mx-0 w-[7%] bg-black-900_b2">
                                <Img
                                  className="my-auto"
                                  src="images/img_file_black_900.svg"
                                  alt="file"
                                />
                              </div>
                            }
                            shape="round"
                            size="lg"
                          ></Input>
                        </div>
                      </div>
                    </div>
                    <Line className="absolute bg-gray-50_01 h-[5px] inset-x-[0] mx-auto rotate-[90deg] top-[14%] w-[99%]" />
                    <Line className="absolute bg-gray-50_01 bottom-[46%] h-[5px] inset-x-[0] mx-auto rotate-[90deg] w-[99%]" />
                  </div>
                  <div className="flex flex-row items-start justify-between md:ml-[0] ml-[13px] mt-[38px] w-[87%] md:w-full">
                    <Text
                      className="text-lg text-teal-900"
                      size="txtIstokWebBold18Teal900"
                    >
                      Shared photo
                    </Text>
                    <a
                      href="javascript:"
                      className="text-[15px] text-light_blue-700"
                    >
                      <Text size="txtNunitoBold15">See all</Text>
                    </a>
                  </div>
                  <div className="flex flex-col gap-[31px] items-center justify-start mt-[19px] w-[96%] md:w-full">
                    <Img
                      className="h-[139px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                      src="images/img_rectangle80.png"
                      alt="rectangleEighty"
                    />
                    <Img
                      className="h-[139px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                      src="images/img_rectangle81.png"
                      alt="rectangleEightyOne"
                    />
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

export default DoctorpatientvideocallPage;
