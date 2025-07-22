import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [totalCartItem,setTotalCartItem]=useState(0);
  const navigate=useNavigate()

  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
        
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setTotalCartItem((prev)=>prev+1)

    setCartItems(cartData);
  };

  const totalCartQuantity=()=>{
    let totalCount=0;
      for(const item in cartItems){
        for(const size in cartItems[item]){
            if(cartItems[item][size]>0){
                totalCount +=Number(cartItems[item][size]);
            }
        }
      }
      return totalCount
  }

  const getCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems){
        let product=products.find((product)=>product._id===item);
        for(const size in cartItems[item]){
            totalAmount +=Number(cartItems[item][size])*Number(product.price)
        }
    }return totalAmount
  }

  const updateCartQuantity= async (itemId,size,quantity)=>{
    
    let cartData=structuredClone(cartItems)
    cartData[itemId][size]=quantity
    
    setCartItems(cartData)

  }

  useEffect(() => {
  console.log(cartItems);
  //console.log(totalCartItem)
}, [cartItems]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    totalCartItem,
    updateCartQuantity,
    totalCartQuantity,
    getCartAmount,
    navigate,

  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
