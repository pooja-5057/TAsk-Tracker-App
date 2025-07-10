import React, { useState } from 'react';
import NavItem from './NavItem';
import UserProfilePopup from './UserProfilePopup';

const DashboardLayout = ({ currentUser, onSignOut, activeTab, setActiveTab, onManageAccountClick, children }) => { 
  const [showUserProfilePopup, setShowUserProfilePopup] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-7xl h-[calc(100vh-2rem)] bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <aside className="w-full lg:w-64 bg-gray-800 p-6 flex flex-col justify-between border-r border-gray-700">
        <div>
          <div
            className="flex items-center space-x-3 mb-8 cursor-pointer relative"
            onClick={() => setShowUserProfilePopup(!showUserProfilePopup)}
          >
            <img
              src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740"
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover border-2 border-violet-500"
            />
            <div>
              <p className="font-semibold text-white">{currentUser?.name || 'User'}</p>

            </div>
            {showUserProfilePopup && (
              <UserProfilePopup
                currentUser={currentUser}
                onSignOut={onSignOut}
                onManageAccountClick={onManageAccountClick} 
              />
            )}
          </div>

          <nav>
            <ul>
              <NavItem icon="🏠" label="All Tasks" isActive={activeTab === 'all'} onClick={() => setActiveTab('all')} />
              <NavItem icon="❗" label="Important!" isActive={activeTab === 'important'} onClick={() => setActiveTab('important')} />
              <NavItem icon="✅" label="Completed!" isActive={activeTab === 'completed'} onClick={() => setActiveTab('completed')} />
              <NavItem icon="➡️" label="Do It Now" isActive={activeTab === 'doItNow'} onClick={() => setActiveTab('doItNow')} />
            </ul>
          </nav>
        </div>

        <button
          onClick={onSignOut}
          className="flex items-center space-x-3 py-3 px-4 rounded-lg text-gray-300 hover:bg-gray-700 transition duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h5a3 3 0 013 3v1"></path></svg>
          <span>Sign Out</span>
        </button>
      </aside>

      <main className="flex-1 p-6 bg-gray-900 overflow-y-auto relative">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
