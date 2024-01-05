import React from "react";

const sizeClasses = {
  txtMontserratMedium21: "font-medium font-montserrat",
  txtMontserratMedium10: "font-medium font-montserrat",
  txtMontserratRegular16Indigo80001: "font-montserrat font-normal",
  txtMontserratMedium11: "font-medium font-montserrat",
  txtMontserratMedium24: "font-medium font-montserrat",
  txtMontserratRegular11WhiteA700: "font-montserrat font-normal",
  txtMontserratBold32: "font-bold font-montserrat",
  txtMontserratSemiBold14WhiteA700: "font-montserrat font-semibold",
  txtMontserratRegular21: "font-montserrat font-normal",
  txtMontserratRegular11: "font-montserrat font-normal",
  txtMontserratMedium10Gray40001: "font-medium font-montserrat",
  txtMontserratSemiBold16: "font-montserrat font-semibold",
  txtMontserratSemiBold14: "font-montserrat font-semibold",
  txtMontserratSemiBold12: "font-montserrat font-semibold",
  txtMontserratRegular16: "font-montserrat font-normal",
  txtMontserratExtraBold14: "font-extrabold font-montserrat",
  txtMontserratMedium135: "font-medium font-montserrat",
  txtMontserratExtraBold32: "font-extrabold font-montserrat",
  txtMontserratSemiBold12WhiteA700: "font-montserrat font-semibold",
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
