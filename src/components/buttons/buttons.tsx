import React, { ButtonHTMLAttributes } from "react";
import "./buttins.scss";

export const MyBtn: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <button {...props} className={`btn myBtn ${props.className}`}>
      {props.children}
    </button>
  );
};
