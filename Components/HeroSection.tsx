import React from "react";
import { FaStar } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
// This component uses Tailwind CSS for styling.

const HeroSection = () => {
  // Define colors based on the image's aesthetic
  const primaryColor = "text-stone-800"; // Dark text color
  const backgroundColor = "bg-[#F4EEE4]"; // Light, off-white background
  const accentColor = "bg-stone-800"; // Black/Dark button background
  const accentTextColor = "text-white"; // White button text
  const linkColor = "text-stone-600"; // Subdued link color

  return (
    <div
      style={{ fontFamily: "SFPRODISPLAYREGULAR" }}
      className={`p-6 ${backgroundColor} font-serif`}
    >
      {/* Main Hero Content */}
      <main className="text-center ">
        {/* Star Rating */}
        <div className="flex justify-center mb-2">
          {/* Using a simple star representation */}
          <span className="text-yellow-300 text-2xl flex">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
        </div>
        <p
          style={{ fontFamily: "SFPRODISPLAYREGULAR" }}
          className={`text-lg  font-normal text-[#25170D] mb-8`}
        >
          Helped over 100 companies
        </p>

        {/* Headline */}
        <h1
          style={{ fontFamily: "Fontspring" }}
          className={` text-6xl md:text-7xl text-[#25170D] `}
        >
          <h1 className="flex justify-center items-center ">
            Meet Maya{" "}
            <img
              className="w-[2.6cm] h-[3cm] absolute top-[20%] left-[62%]"
              src="/bb.png"
              alt=""
            />
          </h1>{" "}
          A better way to hire.
        </h1>

        {/* Subtext */}
        <p
          style={{ fontFamily: "SFPRODISPLAYREGULAR" }}
          className={`text-xl ${linkColor} mb-5 mt-6 max-w-xl mx-auto`}
        >
          Maya, a super AI that pitches your profile on WhatsApp to thousands of
          founders, HRs, and clients.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center  items-center mt-5 ">
          <button
            className={`py-2 px-2 pr-5 gap-2  flex  justify-center items-center bg-[#25170D] text-white text-xl  rounded-2xl shadow-inner shadow-[#896a57] border border-[#25170D] hover:bg-[#4c2b13] cursor-pointer transition duration-300`}
          >
            <span className="text-[#EDE3D8] p-[1px] text-green-600 rounded-md">
              <FaWhatsapp size={30} />
            </span>
            Say hi to Maya
          </button>
        </div>
      </main>

      <div className="w-full h-full flex justify-center items-center  mt-10">
        {/* Abstract Graphic Section (Approximate Simulation) */}

        {/* The original is a specific image/gradient. We'll simulate the look and feel 
            using a large background gradient and a simple dotted overlay for effect. */}
        <div className="w-[70%]  h-[70vh] rounded-[20px]   p-3 bg-white/60 border border-gray-100">
          <div className=" w-full h-full bg-linear-to-r p-3  rounded-[12px]  from-orange-400 via-red-500 to-blue-500 opacity-100">
            <video
              className="w-full h-full object-cover  rounded-[8px] "
              autoPlay
              loop
              muted
              src="/v.mp4"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
