import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  // Define colors based on the image's aesthetic
  const primaryColor = "text-stone-800"; // Dark text color
  const backgroundColor = "bg-[#F4EEE4]"; // Light, off-white background
  const accentColor = "bg-stone-800"; // Black/Dark button background
  const accentTextColor = "text-white"; // White button text
  const linkColor = "text-[#25170D]"; // Subdued link color
  return (
    <div className="bg-[#F4EEE4]  w-full flex justify-center items-center" style={{ fontFamily: "SFPRODISPLAYREGULAR" }}>
      {/* Header/Navigation Bar */}
      <header className="flex justify-between items-center w-[80%]  ">
        
        <nav className="flex space-x-8">
          <a href="#" className={`text-lg ${linkColor} `}>
            About
          </a>
          <a href="#" className={`text-lg ${linkColor} `}>
            Case Studies
          </a>
          <a href="#" className={`text-lg ${linkColor} `}>
            News
          </a>
        </nav>

        <div className={`text-2xl font-semibold ${primaryColor} mr-[2.8cm]`}>Maya AI </div>
 
          <div className="flex justify-center  items-center mt-5 ">
                  <button
                    className={`py-2 px-2 pr-5 gap-2  flex  justify-center items-center bg-green-500 text-white text-xl  rounded-2xl shadow-inner shadow-green-200 border border-green-600 hover:bg-green-600/90 cursor-pointer transition duration-300`}
                  >
                    <span className="text-[#EDE3D8] p-[1px]  rounded-md">
                      <FaWhatsapp size={30} />
                    </span>
                    Try now
                  </button>
                </div>
      </header>
    </div>
  );
}
