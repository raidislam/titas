import React from "react";

const TeamCard = ({ image, name, role, area, phone, email }) => {
  return (
    <div  className="w-full rounded overflow-hidden shadow-lg bg-white flex">
    {/* Image Section */}
    <img className="w-[180px] object-cover" src="/images/profile.jpg" alt='' />
    
    {/* Card Content */}
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">Card Title: {card}</h2>
      <p className="text-gray-700 mb-4">
        Deputy Managing Director <br />
        Regional Marketing Division - Mymensingh
      </p>
      
      {/* Contact Details */}
      <p className="text-gray-500">
        Phone: <span className="text-gray-900">9155258, 01939921164</span>
      </p>
      <p className="text-gray-500">
        Email: <span className="text-blue-500">dmd.mymensingh@titasgas.org.bd</span>
      </p>
    </div>
  </div>
  );
};

export default TeamCard;
