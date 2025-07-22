import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter";

const Contact = () => {
  return (
    <div className="mt-10">
      <div className="text-xl text-center">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="flex flex-col md:flex-row gap-8 text-gray-500 md:justify-center mt-8 mb-10">
        <div>
          <img className="w-full md:max-w-[450px]" src={assets.contact_img} alt="" />
        </div>
        <div className="flex flex-col gap-10">
          <b className="text-gray-800">OUR STORE</b>
          <div>
            <p>54709 Willms Station</p>
            <p>Suite 350, Washington, USA</p>
          </div>
          <div>
            <p>Tel: (415) 555-0132</p>
            <p>Email: admin@forever.com</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-gray-800 font-medium">Careers at Forever</h1>
            <p>Learn more about our teams and job openings.</p>
            <button className="border px-4 py-2 w-fit hover:bg-black hover:text-white">Explore jobs</button>
          </div>
        </div>
      </div>
      <NewsLetter/>
    </div>
  );
};

export default Contact;
