import React from "react";
import { useDisplayContext } from "../context/Context";
const Nav: React.FC = () => {
    const {display, setDisplay}= useDisplayContext()
  return (
    <>
      <header className="bg-gradient-to-b to-gray-400 via-gray-300 from-gray-400 shadow-2xl">
        <div className="flex flex-wrap justify-between py-2 px-10">
          <div className="text-2xl font-bold md:mx-2 mx-auto">
            <h2 className=" transition-all duration-500 shadow rounded hover:shadow-2xl hover:bg-gray-600 px-2 hover:scale-105 text-center">
              Mini Property Listing Dashboard
            </h2>
          </div>
          <p className="md:mx-2 mx-auto">
            <button 
            onClick={()=>setDisplay(!display)}
            className=
            "bg-gray-800 text-gray-100 font-semibold p-2 rounded-xl shadow-2xs hover:shadow-xl duration-300 transition-all hover:scale-105 md:mt-0  mt-5">Add Property</button>
          </p>
        </div>
      </header>
    </>
  );
};

export default Nav;
