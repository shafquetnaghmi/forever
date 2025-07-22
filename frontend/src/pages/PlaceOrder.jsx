import React,{useContext, useState} from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {

  const [method,setMethod]=useState("code")
  const {navigate}=useContext(ShopContext)
  return (
    
      <div className="flex sm:flex-row flex-col justify-between ">
        {/* {left side } */}
        <div className="flex flex-col w-full sm:max-w-[480px] gap-3">
          <div className="text-2xl mt-5 py-5">
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          </div>
            <div className="flex gap-3">
              <input className="w-full border border-gray-200 px-3.5 py-1.5" type="text" placeholder="First name " />
              <input className="w-full border border-gray-200 px-3.5 py-1.5" type="text" placeholder="Last name " />
            </div>
            <input className="w-full border border-gray-200 px-3.5 py-1.5" type="email" placeholder="email" />
            <input className="w-full border border-gray-200 px-3.5 py-1.5" type="text" placeholder="street" />
            <div className="flex gap-3">
              <input className="w-full border border-gray-200 px-3.5 py-1.5" type="text" placeholder="city" />
              <input className="w-full border border-gray-200 px-3.5 py-1.5" type="text" placeholder="state" />
            </div>

            <div className="flex gap-3">
              <input className="w-full border border-gray-200 px-3.5 py-1.5"  type="text" placeholder="Zipcode " />
              <input className="w-full border border-gray-200 px-3.5 py-1.5" type="text" placeholder="country " />
            </div>

            <input className="w-full border border-gray-200 px-3.5 py-1.5" type="tel" placeholder="phone number" />
          
        </div>
        {/* {right side } */}
        <div className="mt-8">
          <div className="mt-8 min-w-80">
            <CartTotal/>
            <div className="mt-8">
              <div className="mt-12">
                <Title text1={"PAYMENT"} text2={"METHOD"}/>
                {/* {payment method} */}
                <div className="flex gap-3 flex-col lg:flex-row">
                  <div onClick={()=>setMethod("stripe")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer ">
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='stripe'?'bg-green-500':""}`}></p>
                    <img className="h-5 mx-4 " src={assets.stripe_logo} alt="" />
                  </div>
                  <div onClick={()=>setMethod("razorpay")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer ">
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='razorpay'?'bg-green-500':""} `}></p>
                    <img className="h-5 mx-4 " src={assets.razorpay_logo} alt="" />
                  </div>
                  <div onClick={()=>setMethod("cod")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer ">
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='cod'?'bg-green-500':""}`}></p>
                    <p className="text-gray-500 text-sm font-medium ">CASH ON DELIVERY</p>
                  </div>
                </div>

              </div>
            </div>
            <div className="text-end mt-5 ">
              <button onClick={()=>navigate('/orders')}  className="px-5 py-2 border bg-black text-white">PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default PlaceOrder;
