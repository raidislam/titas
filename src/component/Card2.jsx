import React from "react";

function Card2() {
  return (
    <div className="bg-[#FFFFFF] w-[500px] m-5  rounded-[8px] shadow-[0_4px_10px_#00000029] ">
      <div className="p-1 flex items-center gap-4">
        <div className="rounded-md w-[140px]">
          <img
            className="rounded-[10px] h-[150px] object-cover"
            src="/images/profile.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <h4 className="text-[#202020] font-bold tracking-[0.84px]">
            Eng. Md. Anisur Rahman
          </h4>
          <p className="text-[#202020] text-sm font-medium">
            General Manager/Deputy Managing Director (DMD)
          </p>
          <p className="text-[#202020] text-sm font-medium">
            Regional Marketing Division - Narayanganj
          </p>
          <p className="text-[#202020] text-sm font-medium">
            01939921165970018, 41010000-04/317
          </p>
          <p className="text-[#202020] text-sm font-medium">
            dmd.nganj@titasgas.org.bd
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card2;
