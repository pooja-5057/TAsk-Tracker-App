import React, { useState, useEffect, useContext,useSelector } from 'react';
import { useRouter } from 'next/router';
import { AppContext } from './_app';
import DashboardLayout from '../components/layout/DashboardLayout';
import TaskFormModal from '../components/tasks/TaskFormModal.jsx'; 
import TaskList from '../components/tasks/TaskList.jsx';
import ManageAccountModal from '../components/auth/ManageAccountModal';

const DashboardPage = () => {
  const router = useRouter();
  const { currentUser, tasks, addTask, updateTask, deleteTask, handleSignOut } = useContext(AppContext);

  const [activeTab, setActiveTab] = useState('all');
  const [showTaskFormModal, setShowTaskFormModal] = useState(false); 
  const [editingTask, setEditingTask] = useState(null); 
  const [showManageAccountModal, setShowManageAccountModal] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      router.push('/');
    }
  }, [currentUser, router]);

  const filteredTasks = tasks.filter(task => {
    if (activeTab === 'all') return true;
    if (activeTab === 'important') return task.important;
    if (activeTab === 'completed') return task.completed;
    if (activeTab === 'doItNow') return !task.completed;
    return true;
  });


  const handleCreateNewTask = () => {
    setEditingTask(null);
    setShowTaskFormModal(true);
  };

  
  const handleEditTask = (task) => {
    setEditingTask(task); 
    setShowTaskFormModal(true);
  };

  
  const handleCloseTaskFormModal = () => {
    setShowTaskFormModal(false);
    setEditingTask(null); 
  };

  if (!currentUser) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-white">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <DashboardLayout
      currentUser={currentUser}
      onSignOut={handleSignOut}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      onManageAccountClick={() => setShowManageAccountModal(true)}
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">All Tasks</h1>
      
        <button
          onClick={handleCreateNewTask}
          className=" w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full
                     flex items-center justify-center text-white text-2xl
                     transition-transform duration-200
                     hover:scale-110 hover:rotate-90"
        >
          +
        </button>
      </div>
      <div
        className="border-2 border-dashed border-gray-600 rounded-xl p-8 flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:border-violet-500 hover:text-violet-400 transition duration-200 mb-6"
        onClick={handleCreateNewTask}
      >
        <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
        <span>Add New Task</span>
      </div>

      <TaskList
        tasks={filteredTasks}
        updateTask={updateTask}
        onDeleteTask={deleteTask}
        onEditTask={handleEditTask}
      />

      {showTaskFormModal && (
        <TaskFormModal
          onClose={handleCloseTaskFormModal} 
          onAddTask={addTask} 
          onUpdateTask={updateTask} 
          taskToEdit={editingTask} 
        />
      )}

      {showManageAccountModal && (
        <ManageAccountModal
          onClose={() => setShowManageAccountModal(false)}
          currentUser={currentUser}
        />
      )}
    </DashboardLayout>
  );
};

export default DashboardPage;

