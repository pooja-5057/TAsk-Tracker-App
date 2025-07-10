import '../styles/globals.css';
import React, { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

export const AppContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('taskTrackerUser');
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
      }

      const storedTasks = localStorage.getItem('taskTrackerTasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error("Failed to load data from local storage:", error);
    }
  }, []);

  
  useEffect(() => {
    try {
      localStorage.setItem('taskTrackerTasks', JSON.stringify(tasks));
    } catch (error) {
      console.error("Failed to save tasks to local storage:", error);
    }
  }, [tasks]);

  const handleRegister = (userData) => {
    try {
      localStorage.setItem('taskTrackerUser', JSON.stringify(userData));
      setCurrentUser(userData);
      router.push('/dashboard'); 
    } catch (error) {
      console.error("Failed to save user to local storage:", error);
      alert("Registration failed. Please try again or check your browser settings.");
    }
  };


  const handleSignOut = () => {
    try {
      localStorage.removeItem('taskTrackerUser');
    
      setCurrentUser(null);
      router.push('/'); 
    } catch (error) {
      console.error("Failed to clear local storage on sign out:", error);
    }
  };


  const addTask = (newTask) => {
    const taskId = Date.now().toString(); 
    setTasks(prevTasks => [...prevTasks, { id: taskId, ...newTask }]);
  };

  
  const updateTask = (updatedTask) => {
    setTasks(prevTasks =>
      prevTasks.map(task => (task.id === updatedTask.id ? updatedTask : task))
    );
  };


  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const contextValue = {
    currentUser,
    tasks,
    handleRegister,
    handleSignOut,
    addTask,
    updateTask,
    deleteTask,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="min-h-screen bg-gray-900 text-white font-inter">
        
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          body { font-family: 'Inter', sans-serif; }
        `}</style>
        <Component {...pageProps} /> 
      </div>
    </AppContext.Provider>
  );
}

export default MyApp;
