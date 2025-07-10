
import React, { useState, useContext } from 'react';
import { AppContext } from '../../pages/_app'; 

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const { handleRegister } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
   
      handleRegister({ email, name: email.split('@')[0] || 'User' }); 
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-2 text-center">Sign in to ToDoApp</h2>
      <p className="text-gray-400 mb-6 text-center">Welcome back! Please sign in to continue</p>

      <button className="flex items-center justify-center w-full py-3 px-4 mb-4 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium transition duration-200 cursor-not-allowed opacity-50">
        <img src="https://www.svgrepo.com/show/353528/google-icon.svg" alt="Google" className="w-5 h-5 mr-2" />
        Continue with Google
      </button>
      <div className="text-center text-gray-400 mb-4">or</div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">Email address</label>
          <input
            type="email"
            id="email"
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-300 text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            id="password"
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 bg-violet-600 hover:bg-violet-700 rounded-lg text-white font-semibold transition duration-200 flex items-center justify-center"
        >
          Continue <span className="ml-2">▶</span>
        </button>
      </form>

      <p className="text-center text-gray-400 text-sm mt-6">
        Don't have an account? <a href="#" className="text-violet-400 hover:underline">Sign up</a>
      </p>
      <p className="text-center text-gray-500 text-xs mt-4">Secured by <span className="font-semibold">Clerk</span></p>
      <p className="text-center text-orange-400 text-xs mt-1">Development mode</p>
    </div>
  );
};

export default RegisterForm;
