import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { Link } from "react-router-dom";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount, navigate } =
    useContext(ShopContext);
  const total = getCartAmount();
  return (
    // <div className="flex justify-end mt-5 ">
    //   <div className=" sm:w-[45%] w-[100%]">
    //     <div className="text-2xl mt-5 py-4 ">
    //       <Title text1={"CART"} text2={"TOTALS"} />
    //     </div>
    //     <div>
    //       <div className="flex  items-center justify-between">
    //         <p className="text-sm py-2">SubTotal</p>
    //         <p>
    //           {currency}
    //           {total}.00
    //         </p>
    //       </div>
        //   <div className="flex  items-center justify-between border-t border-gray-200 ">
        //     <p className="text-sm py-2">Shipping fee</p>
        //     <p>
        //       {currency}
        //       {delivery_fee}.00
        //     </p>
        //   </div>
        //   <div className="flex  items-center justify-between border-t border-gray-200 text-black font-bold">
        //     <p className="text-sm py-2 text-black">Total</p>
        //     <p className="text-black">
        //       {currency}
        //       {total + delivery_fee}.00
        //     </p>
        //   </div>
    //     </div>
    //     {/* <Link to="/place-order"><button className="px-8 py-2 bg-black text-white mt-3  absolute right-4 sm:right-[5vw] md:right-[7vw] lg:right-[9vw]">
    //       PROCEED TO CHECKOUT
    //     </button></Link> */}

    //   </div>
    // </div>

    <div className="w-full">
      <div className="text-2xl mt-5 py-4 ">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex  items-center justify-between">
          <p className="text-sm py-2">SubTotal</p>
          <p>
            {currency}
            {total}.00
          </p>
        </div>
        <div className="flex  items-center justify-between border-t border-gray-200 ">
            <p className="text-sm py-2">Shipping fee</p>
            <p>
              {currency}
              {delivery_fee}.00
            </p>
          </div>
          <div className="flex  items-center justify-between border-t border-gray-200 text-black font-bold">
            <p className="text-sm py-2 text-black">Total</p>
            <p className="text-black">
              {currency}
              {total + delivery_fee}.00
            </p>
          </div>
        
      </div>
    </div>
  );
};

export default CartTotal;
