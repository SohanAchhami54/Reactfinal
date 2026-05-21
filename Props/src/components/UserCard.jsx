import React from 'react';

const UserCard = ({ name, age, image }) => {
  return (
    <div className="group relative bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700">
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        
        {/* Age Badge */}
        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-white text-sm font-semibold px-3 py-1 rounded-full border border-white/20">
          {age} years
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-white mb-1">{name}</h2>
        
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Kathmandu, Nepal</span>
          {/* You can add more details here */}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-3">
          <button className="flex-1 bg-white text-gray-900 font-semibold py-3 rounded-2xl hover:bg-gray-100 transition-colors">
            View Profile
          </button>
          <button className="flex-1 bg-transparent border border-gray-600 hover:border-gray-400 text-white font-medium py-3 rounded-2xl transition-colors">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;