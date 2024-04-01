import React from "react";
import "./links.scss";
import { Link, LinkProps } from "react-router-dom";

export const NavLink: React.FC<LinkProps> = (props) => {
  return (
    <Link {...props} className={`link ${props.className}`}>
      {props.children}
    </Link>
  );
};
