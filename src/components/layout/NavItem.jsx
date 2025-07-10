import React from 'react';

const NavItem = ({ icon, label, isActive, onClick }) => (
  <li className="mb-2">
    <button
      onClick={onClick}
      className={`flex items-center space-x-3 w-full py-3 px-4 rounded-lg transition duration-200
        ${isActive ? 'bg-violet-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
    >
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </button>
  </li>
);

export default NavItem;
