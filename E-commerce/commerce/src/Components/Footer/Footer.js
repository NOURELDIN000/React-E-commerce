import "./Footer.css";

import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="links   list-unstyled d-flex justify-content-center">
        <li>
          <a href="/">Register</a>
        </li>
        <li>
          {" "}
          <a href="/"> Forum</a>{" "}
        </li>
        <li>
          {" "}
          <a href="/"> Affiliate </a>{" "}
        </li>
        <li>
          {" "}
          <a href="/"> FAQ</a>{" "}
        </li>
      </ul>
      <ul className="icons  list-unstyled d-flex justify-content-center">
        <li>
          <a href="/">
            {" "}
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a href="/">
            {" "}
            <FaTwitter />
          </a>
        </li>
        <li>
          {" "}
          <a href="/">
            {" "}
            <TfiYoutube />
          </a>
        </li>
        <li>
          <a href="/">
            {" "}
            <FaLinkedinIn />
          </a>{" "}
        </li>
        <li>
          <a href="/">
            {" "}
            <LuInstagram />
          </a>{" "}
        </li>
      </ul>
      <p>&copy; 2024. Foodera. All rights reserved.</p>
    </div>
  );
};

export default Footer;
