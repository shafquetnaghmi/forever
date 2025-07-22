import React, { useContext } from "react";
import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch,totalCartItem,totalCartQuantity} =useContext(ShopContext)
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/" ><img src={assets.logo} alt="" className="w-36" /></Link>
      <ul className="hidden sm:flex gap-[10px] text-sm text-gray-600">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white px-4 py-2 rounded"
              : "px-4 py-2 hover:bg-blue-100 rounded"
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/collection"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white px-4 py-2 rounded"
              : "px-4 py-2 hover:bg-blue-100 rounded"
          }
        >
          COLLECTION
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white px-4 py-2 rounded"
              : "px-4 py-2 hover:bg-blue-100 rounded"
          }
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white px-4 py-2 rounded"
              : "px-4 py-2 hover:bg-blue-100 rounded"
          }
        >
          CONTACT{" "}
        </NavLink>
      </ul>
      <div className="flex items-center gap-[25px] ">
        <img onClick={()=>(setShowSearch(true))} src={assets.search_icon} alt="" className="w-6" />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt=""
            className="w-5 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500">
              <Link to="/login"><p  className="cursor-pointer hover:text-black">My Profile</p></Link>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img className="w-5" src={assets.cart_icon} alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center bg-black text-white leading-4 rounded-full aspect-square text-[9px] ">
            {/* {totalCartItem} */}  {totalCartQuantity()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          className="sm:hidden w-5 cursor-pointer"
          src={assets.menu_icon}
          alt=""
        />
      </div>
      {/* { side bar menue for small screen } */}
      
      <div className={`absolute top-0 right-0 bottom-0 bg-white overflow-hidden  transition-all  duration-[500ms] ${visible?'w-full':'w-0'}`}>
        <div className="flex flex-col text-gray-600">
            <div className="flex items-center gap-4 px-2 py-2">
                <img onClick={()=>setVisible(false)} src={assets.dropdown_icon} className='h-4 rotate-180'/>
                <p>Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} to="/" className={({isActive})=>(`py-2 pl-6 border ${isActive ?"bg-black text-white":"text-gray-600"}`) }>HOME</NavLink>
            <NavLink onClick={()=>setVisible(false)} to="/collection" className={({isActive})=>(`py-2 pl-6 border ${isActive ?"bg-black text-white":"text-gray-600"}`) }>COLLECTION</NavLink>
            <NavLink onClick={()=>setVisible(false)} to="/about" className={({isActive})=>(`py-2 pl-6 border ${isActive ?"bg-black text-white":"text-gray-600"}`) }>ABOUT</NavLink>
            <NavLink onClick={()=>setVisible(false)} to="/contact" className={({isActive})=>(`py-2 pl-6 border ${isActive ?"bg-black text-white":"text-gray-600"}`) }>CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
