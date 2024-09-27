import React from "react";

const TeamCard = ({ image, name, role, area, phone, email }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* Image Section */}
      <img className="w-full h-48 object-cover" src={image} alt={name} />

      {/* Card Content */}
      <div className="p-6">
        {/* Name & Role */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-gray-900">{name}</h2>
          <p className="text-gray-700 text-lg">{role}</p>
        </div>

        {/* Area */}
        <div className="mb-4">
          <span className="text-gray-500 text-sm">Area: </span>
          <span className="text-gray-900 font-medium">{area}</span>
        </div>

        {/* Contact Details */}
        <div className="mb-4">
          <p className="text-gray-500 text-sm">
            Phone: <span className="text-gray-900">{phone}</span>
          </p>
          <p className="text-gray-500 text-sm">
            Email: <span className="text-blue-500 underline">{email}</span>
          </p>
        </div>

        {/* Call to Action or Additional Buttons (Optional) */}
        <div className="mt-4 flex space-x-4">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition">
            Contact
          </button>
          <button className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded hover:bg-gray-300 transition">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
