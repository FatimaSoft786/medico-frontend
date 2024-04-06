import React from "react";

const sizeClasses = {
  txtPoppinsRegular20Black900: "font-normal font-poppins",
  txtIstokWebBold25Lightblue800: "font-bold font-istokweb",
  txtJosefinSansRomanBold20Teal90033: "font-bold font-josefinsans",
  txtJosefinSansRomanRegular18Black900b2: "font-josefinsans font-normal",
  txtPoppinsBold30: "font-bold font-poppins",
  txtJosefinSansRomanRegular18Lightblue700: "font-josefinsans font-normal",
  txtPoppinsRegular25: "font-normal font-poppins",
  txtJosefinSansRomanSemiBold20: "font-josefinsans font-semibold",
  txtJosefinSansRomanRegular25: "font-josefinsans font-normal",
  txtJosefinSansRomanBold20Black900b2: "font-bold font-josefinsans",
  txtJosefinSansRomanRegular27: "font-josefinsans font-normal",
  txtJosefinSansRomanRegular20: "font-josefinsans font-normal",
  txtPoppinsRegular20WhiteA700: "font-normal font-poppins",
  txtJosefinSansRomanRegular20Black90099: "font-josefinsans font-normal",
  txtIstokWebBold20: "font-bold font-istokweb",
  txtIstokWebBold25: "font-bold font-istokweb",
  txtIstokWebBold25WhiteA700: "font-bold font-istokweb",
  txtNunitoBold18Teal900: "font-bold font-nunito",
  txtJosefinSansRomanRegular18Black900: "font-josefinsans font-normal",
  txtIstokWebBold25Teal90099: "font-bold font-istokweb",
  txtJosefinSansRomanBold20Black900: "font-bold font-josefinsans",
  txtPoppinsRegular15: "font-normal font-poppins",
  txtJosefinSansRomanRegular18: "font-josefinsans font-normal",
  txtPoppinsSemiBold25: "font-poppins font-semibold",
  txtIstokWebBold18Teal900: "font-bold font-istokweb",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtJosefinSansRomanRegular15: "font-josefinsans font-normal",
  txtNunitoBold18Lightblue80066: "font-bold font-nunito",
  txtIstokWebBold55: "font-bold font-istokweb",
  txtIstokWebBold25Lightblue700: "font-bold font-istokweb",
  txtJosefinSansRomanBold20: "font-bold font-josefinsans",
  txtNunitoBold15: "font-bold font-nunito",
  txtIstokWebRegular18: "font-istokweb font-normal",
  txtNunitoExtraBold20: "font-extrabold font-nunito",
  txtNunitoBold13: "font-bold font-nunito",
  txtIstokWebBold20Teal900: "font-bold font-istokweb",
  txtIstokWebBold18: "font-bold font-istokweb",
  txtNunitoRegular25: "font-normal font-nunito",
  txtNunitoBold18: "font-bold font-nunito",
  txtNunitoBold18WhiteA700: "font-bold font-nunito",
  txtPoppinsSemiBold35: "font-poppins font-semibold",
  txtPoppinsSemiBold25Lightblue700: "font-poppins font-semibold",
  txtJosefinSansRomanBold20Lightblue800: "font-bold font-josefinsans",
  txtNunitoRegular20: "font-normal font-nunito",
  txtJosefinSansRomanBold20WhiteA700: "font-bold font-josefinsans",
  txtJosefinSansRomanRegular20Teal900: "font-josefinsans font-normal",
  txtNunitoBold20: "font-bold font-nunito",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtPoppinsBold20: "font-bold font-poppins",
  txtJosefinSansRomanBold18Black900: "font-bold font-josefinsans",
  txtNunitoBold13WhiteA700: "font-bold font-nunito",
  txtIstokWebBold20Lightblue700: "font-bold font-istokweb",
  txtNunitoRegular20Teal900: "font-normal font-nunito",
  txtPoppinsSemiBold45: "font-poppins font-semibold",
  txtPoppinsRegular80: "font-normal font-poppins",
  txtJosefinSansRomanBold18: "font-bold font-josefinsans",
  txtJosefinSansRomanBold18WhiteA700: "font-bold font-josefinsans",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
