import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-none",
  round: "rounded-[10px]",
};
const variants = {
  outline: { black_900: "border border-black-900 border-solid text-teal-900" },
  fill: {
    red_A700: "bg-red-A700",
    light_blue_700_99: "bg-light_blue-700_99 text-white-A700",
    light_blue_800: "bg-light_blue-800 text-white-A700",
    red_A700_01: "bg-red-A700_01 text-white-A700",
    lime_A700_33: "bg-lime-A700_33 text-black-900",
    teal_900: "bg-teal-900 text-gray-50",
    white_A700: "bg-white-A700 text-teal-900",
    light_blue_700: "bg-light_blue-700 text-white-A700",
  },
};
const sizes = {
  xs: "p-1.5",
  sm: "p-2.5",
  md: "p-[13px]",
  lg: "pl-3.5 pr-2 py-[15px]",
  xl: "p-4",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "black_900",
    "red_A700",
    "light_blue_700_99",
    "light_blue_800",
    "red_A700_01",
    "lime_A700_33",
    "teal_900",
    "white_A700",
    "light_blue_700",
  ]),
};

export { Button };
