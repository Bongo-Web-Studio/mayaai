import React from 'react'

export default function HeadLine() {
  return (
   <div>
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
   </div>
  )
}
