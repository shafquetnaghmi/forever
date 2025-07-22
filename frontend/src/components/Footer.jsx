import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col items-start gap-10 pt-20 sm:flex-row sm:justify-between  sm:gap-5 text-gray-500 p-5">
        <div className="basis-[40%]">
          <img src={assets.logo} alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="basis-[10%]">
          <h1 className="text-black text-2xl font-medium">COMPANY</h1>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="basis-[15%]">
          <h1 className="text-black text-2xl whitespace-nowrap font-medium">GET IN TOUCH</h1>
          <ul>
            <li>+1-000-000-0000</li>
            <li>H.NO-85 Lajpat Nagar ,New Delhi</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <hr className="border-gray-400"/>
        <p className="py-5">Copyright 2024@Forever - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
