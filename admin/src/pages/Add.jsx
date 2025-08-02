import React from "react";
import { assets } from "../assets/assets";

const Add = () => {
  return (
    <form className="flex flex-col w-full items-start gap-3 text-gray-700">
      <div className="">
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-3 ">
          <label htmlFor="image1">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" id="image4" hidden />
          </label>
        </div>
      </div>
      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input
          className=" w-full max-w-[500px]  border border-gray-300 rounded outline-[#c586A5] py-2 px-3  bg-white"
          type="text"
          placeholder="Type here"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product description</p>
        <textarea
          className="w-full max-w-[500px] border border-gray-300 rounded outline-[#c586A5] py-2 px-3  bg-white"
          placeholder="Write content here"
          required
        />
      </div>

      <div className="flex flex-col md:flex-row gap-10 ">
        <div className="flex-1" >
          <p>Product category</p>
          <select name="" id="" className="border border-gray-300 w-full py-1.5 px-1 mt-2">
            <option value="">Men</option>
            <option value="">Women</option>
            <option value="">Kids</option>
          </select>
        </div>
        <div className="flex-1">
          <p>Sub category</p>
          <select name="" id="" className="border border-gray-300 w-full py-1.5 px-1 mt-2">
            <option value="">Topwear</option>
            <option value="">Bottomwear</option>
            <option value="">Winterwear</option>
          </select>
        </div>
        <div className="flex-1">
          <p>Product price</p>
          <input
            type="number"
            placeholder="50"
            className="border w-full border-gray-300  py-1.5 px-2 mt-2"
          />
        </div>
      </div>
      <div>
        <p className="mb-2">product Sizes</p>
        <div className="flex gap-3"> 
          <div>
          <p className=" px-3 py-1 bg-gray-200">S</p>
        </div>
        <div>
          <p className=" px-3 py-1 bg-gray-200">M</p>
        </div>
        <div>
          <p className=" px-3 py-1 bg-gray-200">L</p>
        </div>
        <div>
          <p className=" px-3 py-1 bg-gray-200">XL</p>
        </div>
        <div>
          <p className=" px-3 py-1 bg-gray-200">XXL</p>
        </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <input type="checkbox" />
        <label htmlFor="">Add to bestseller</label>
      </div>
      <button type="submit" className="bg-black text-white px-10 py-3 mt-4 ">ADD</button>
    </form>
  );
};

export default Add;
