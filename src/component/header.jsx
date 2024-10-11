import React from "react";

export default function Header({ company_name, title, index, setting }) {
    let titleColor = setting?.designation_slide_title_color;
    if(index < 3) {
        titleColor = setting?.floor_slide_title_color;
    }
    return (
    <div className="flex">
      <div className="w-[8vw]">
        <img className="w-full" src={setting?.logo} alt="" />
      </div>
      <div className="text-center flex justify-center items-center flex-1">
        <div className="">
          <h2 className="text-[#202020] text-[1.75vw] font-bold tracking-wider mb-2 font-poppins">
            {company_name || "Titas Gas Transmission & Distribution PLC."}
          </h2>
          <p style={{color: titleColor}} className="text-[1.35vw] font-poppins">{title}</p>
        </div>
      </div>
    </div>
  );
}
