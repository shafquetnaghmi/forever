import React from "react";

const NewsLetter = () => {
  const onsubmitHandler=(e)=>{
    e.preventDefault();
  }
  return (
    <div className="text-center">
      <p className="text-2xl font-medium">Subscribe now & get 20% off</p>
      <p className="text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <form onSubmit={onsubmitHandler} className="w-full sm:w-[80%] lg:w-1/2 flex items-center mx-auto my-6 border border-gray-400 gap-3 pl-3" action="">
        <input className="w-full outline-none " type="email" placeholder="Enter your email" />
        <button className="bg-black text-white py-4 px-10 " type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsLetter;
