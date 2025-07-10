
import React from 'react';

const ManageAccountModal = ({ onClose, currentUser }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-2xl relative flex" style={{ minHeight: '600px' }}>
       
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
        >
          &times;
        </button>
        <div className="w-1/4 border-r border-gray-700 pr-4">
          <ul className="space-y-2">
            <li className="flex items-center space-x-2 py-2 px-3 rounded-lg bg-gray-700 text-white font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              <span>Account</span>
            </li>
            <li className="flex items-center space-x-2 py-2 px-3 rounded-lg text-gray-400 hover:bg-gray-700 cursor-pointer">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 4.016M12 21v-6m0 0V9m0 6h6m-6 0H6"></path></svg>
              <span>Security</span>
            </li>
          </ul>
        </div>

    
        <div className="flex-1 pl-8 overflow-y-auto">
          <h2 className="text-3xl font-bold mb-2 text-white">Account</h2>
          <p className="text-gray-400 mb-6">Manage your account information</p>

        
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-white">Profile</h3>
            <div className="flex items-center space-x-4 bg-gray-700 p-4 rounded-lg">
               <img
              src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740"
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover border-2 border-violet-500"
            />
              <div>
                <p className="font-semibold text-white text-lg">{currentUser?.name || 'User'}</p>
                
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-white">Email addresses</h3>
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center justify-between py-2 border-b border-gray-600 last:border-b-0">
                <p className="text-white">{currentUser?.email || 'user@example.com'}</p>
                <span className="bg-violet-600 text-white text-xs px-2 py-1 rounded-full">Primary</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
              <button className="flex items-center space-x-2 text-violet-400 hover:text-violet-300 mt-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                <span>Add an email address</span>
              </button>
            </div>
          </div>

       
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Connected accounts</h3>
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center justify-between py-2 border-b border-gray-600 last:border-b-0">
                <div className="flex items-center space-x-3">
                  <img src="https://www.svgrepo.com/show/353528/google-icon.svg" alt="Google" className="w-6 h-6" />
                  <p className="text-white">Google ({currentUser?.email || 'user@example.com'})</p>
                </div>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
              <button className="flex items-center space-x-2 text-violet-400 hover:text-violet-300 mt-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                <span>Connect account</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAccountModal;
