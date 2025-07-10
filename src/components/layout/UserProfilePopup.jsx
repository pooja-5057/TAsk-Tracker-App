import React from 'react';

const UserProfilePopup = ({ currentUser, onSignOut, onManageAccountClick }) => { 
  return (
    <div className="absolute top-full left-0 mt-2 bg-gray-700 rounded-lg shadow-xl py-2 w-48 z-10">
      <div className="px-4 py-2 text-sm text-gray-300 border-b border-gray-600">
        <p className="font-medium text-white">{currentUser?.name || 'User'}</p>
        <p className="text-xs text-gray-400">{currentUser?.email || 'user@example.com'}</p>
      </div>
      <button
        onClick={onManageAccountClick}
        className="w-full text-left block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600"
      >
        Manage account
      </button>
      <button
        onClick={onSignOut}
        className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-600"
      >
        Sign out
      </button>
      <p className="text-center text-gray-500 text-xs mt-2">Secured by <span className="font-semibold">Clerk</span></p>
    </div>
  );
};

export default UserProfilePopup;

