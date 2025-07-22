import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const {
    cartItems,
    products,
    currency,
    updateCartQuantity,
    getCartAmount,
    navigate,
  } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const item in cartItems) {
      const pr = products.find((product) => product._id === item);
      //console.log(pr)
      for (const size in cartItems[item]) {
        if (cartItems[item][size] > 0) {
          tempData.push({
            _id: item,
            size: size,
            quantity: cartItems[item][size],
            image: pr.image[0],
            price: pr.price,
            name: pr.name,
          });
        }
      }
    }
    setCartData(tempData);
    // console.log(tempData)
    //console.log(cartData);
  }, [cartItems]);

  return (
    <div>
      <div className="text-2xl mt-5 py-4">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div className="border-t border-gray-200">
        {cartData.map((item) => (
          <div className="py-4 border-t border-b text-gray-500 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
            <div className="flex items-start gap-6">
              <img src={item.image} className="w-16 sm:w-20 " alt="" />

              <div className="">
                <p className="text-xs sm:text-lg font-medium ">{item.name}</p>
                <div className="flex  gap-5 mt-2 items-center">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50 border-gray-200">
                    {item.size}
                  </p>
                </div>
              </div>
            </div>
            {/* <p>{item.quantity}</p> */}
            <input
              onChange={(e) =>
                e.target.value === "" || e.target.value === "0"
                  ? null
                  : updateCartQuantity(item._id, item.size, e.target.value)
              }
              className="border max-w-10 sm:max-w-20 sm:px-2 py-1 border-gray-200"
              type="number"
              min={1}
              defaultValue={item.quantity}
            />
            <img
              className="w-4 sm:w-5 cursor-pointer"
              onClick={() => updateCartQuantity(item._id, item.size, 0)}
              src={assets.bin_icon}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className=" text-end">
            <button onClick={() => navigate("/place-order")}className="px-8 py-2 bg-black text-white mt-3  cursor-pointer">
            PROCEED TO CHECKOUT
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
