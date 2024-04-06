import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    teal_900: "bg-teal-900 text-gray-50",
    white_A700: "bg-white-A700 text-black-900",
  },
};
const shapes = { square: "rounded-none", round: "rounded-[10px]" };
const sizes = {
  lg: "pb-1.5 pt-[9px] px-1.5",
  sm: "pb-[35px] pl-[7px] pr-[15px] pt-[15px]",
  "2xl": "pl-[9px] pr-[13px] py-[13px]",
  xl: "pb-[17px] pl-[11px] pr-3 pt-3",
  "3xl": "pb-[15px] pt-3.5 px-3.5",
  md: "pb-[15px] pl-2 pr-[9px] pt-5",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
     
      shape = "",
      size = "",
      variant = "fill",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
  

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
           
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["lg", "sm", "2xl", "xl", "3xl", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["teal_900", "white_A700"]),
};

export { Input };
