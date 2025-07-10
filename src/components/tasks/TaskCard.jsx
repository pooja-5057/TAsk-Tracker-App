import React from 'react';

const TaskCard = ({ task, updateTask, onDeleteTask, onEditTask }) => {
  const handleToggleCompleted = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  const handleDeleteClick = () => {

    if (window.confirm(`Are you sure you want to delete "${task.title}"?`)) {
      onDeleteTask(task.id);
    }
  };

  return (
    <div className="
              bg-gray-800 hover:bg-gray-700 p-6 rounded-xl shadow-md border border-gray-700 flex flex-col
             hover:border-violet-500 hover:shadow-lg transform hover:scale-100 transition duration-200 relative
            ">
      <div className="flex items-center justify-between mb-3">
        <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-500' : 'text-white'}`}>
          {task.title}
        </h3>
        <div className="flex items-center space-x-2">
          {task.important && (
            <span className="text-yellow-400 text-xl" title="Important!">❗</span>
          )}
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-violet-600 bg-gray-700 border-gray-600 rounded focus:ring-violet-500 cursor-pointer"
            checked={task.completed}
            onChange={handleToggleCompleted}
            title="Mark as Completed"
          />
        </div>
      </div>

      {task.description && (
        <p className={`text-gray-400 text-sm mb-3 ${task.completed ? 'line-through' : ''}`}>
          {task.description}
        </p>
      )}

      {task.date && (
        <p className={`text-gray-500 text-xs mt-auto ${task.completed ? 'line-through' : ''}`}>
          Due: {task.date}
        </p>
      )}

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={handleToggleCompleted}
          className={`px-3 py-1 rounded-full text-sm font-medium transition duration-200
            ${task.completed ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}
        >
          {task.completed ? 'Completed' : 'Incomplete'}
        </button>

        <div className="flex space-x-3">
          <button
            onClick={() => onEditTask(task)}
            className="text-gray-400 hover:text-violet-400 transition duration-200"
            title="Edit Task"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          </button>
          <button
            onClick={handleDeleteClick}
            className="text-gray-400 hover:text-red-500 transition duration-200"
            title="Delete Task"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
