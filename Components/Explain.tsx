import React from "react";

export default function Explain() {
  return (
    // Note: Removed 'overflow-hidden' so the absolute image isn't accidentally cut off
    <div className="w-full  flex flex-col justify-center items-center relative">
      {/* Header */}
      <div className="max-w-5xl w-full flex justify-end">
        <h1>With Maya ai</h1>
      </div>

      {/* Main Content Card */}
      <div className="w-[67%] h-[90vh] bg-white p-2 rounded-[20px] flex relative">
        <div className="absolute top-[10%] right-[1%] bg-amber-800">
          <img className=" w-40 h-40 z-100" src="/bb2.png" alt="bb" />
        </div>
        <div className="bg-white p-2 rounded-lg">
          <h1 className="text-6xl">Screen more candidates</h1>
          <h1 className="text-2xl">
            Engage every candidate with live, two-way conversations, so you
            never miss out on a great hire.
          </h1>
        </div>

        <div className="w-full h-full bg-linear-to-r p-3 rounded-xl from-orange-400 via-red-500 to-blue-500 opacity-100">
          <div className="bg-white p-2 rounded-lg h-full">
            <h1 className="text-6xl">Screen more candidates</h1>
            <h1 className="text-2xl">
              Engage every candidate with live, two-way conversations, so you
              never miss out on a great hire.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
