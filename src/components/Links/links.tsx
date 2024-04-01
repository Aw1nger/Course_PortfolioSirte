import React, { AnchorHTMLAttributes } from "react";
import "./links.scss";
import { Link, LinkProps } from "react-router-dom";

export const NavLink: React.FC<LinkProps> = (props) => {
  return (
    <Link {...props} className={`navLink ${props.className}`}>
      {props.children}
    </Link>
  );
};

export const SocLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = (
  props
) => {
  return (
    <a {...props} className={`socLink ${props.className}`}>
      {props.children}
    </a>
  );
};
