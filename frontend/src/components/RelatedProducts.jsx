import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let productsCopy = products.filter(
      (item, index) =>
        category === item.category && subCategory === item.subCategory
    );
    //productsCopy.slice(0, 5);
    setFilteredProducts(productsCopy.slice(0, 5));
  }, []);
  return (
    <div className="flex flex-wrap gap-4">
      {filteredProducts.map((item, index) => (
        <div
          key={item._id}
          className="w-[47%] sm:w-[18%] min-w-[150px] flex-grow"
        >
          <ProductItem
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        </div>
      ))}
    </div>
  );
};

export default RelatedProducts;
