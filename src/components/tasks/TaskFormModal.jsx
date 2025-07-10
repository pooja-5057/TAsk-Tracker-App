import React, { useState, useEffect } from 'react';

const TaskFormModal = ({ onClose, onAddTask, onUpdateTask, taskToEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [completed, setCompleted] = useState(false);
  const [important, setImportant] = useState(false);

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title || '');
      setDescription(taskToEdit.description || '');
      setDate(taskToEdit.date || '');
      setCompleted(taskToEdit.completed || false);
      setImportant(taskToEdit.important || false);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const taskData = {
        title,
        description,
        date,
        completed,
        important,
      };

      if (taskToEdit) {
        onUpdateTask({ id: taskToEdit.id, ...taskData }); 
      } else {
        onAddTask(taskData);
      }
      onClose();
    } else {
      alert('Task title cannot be empty.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-6 text-white">
          {taskToEdit ? 'Edit Task' : 'Create a Task'}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-300 text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              id="title"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white"
              placeholder="e.g. Watch a video from Fireship."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-300 text-sm font-medium mb-2">Description</label>
            <textarea
              id="description"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white h-24 resize-none"
              placeholder="e.g. Watch a video about Next.js Auth"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-300 text-sm font-medium mb-2">Date</label>
            <div className="relative">
              <input
                type="date"
                id="date"
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white appearance-none pr-10"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <label htmlFor="toggleCompleted" className="text-gray-300 text-sm font-medium">Toggle Completed</label>
            <input
              type="checkbox"
              id="toggleCompleted"
              className="form-checkbox h-5 w-5 text-violet-600 bg-gray-700 border-gray-600 rounded focus:ring-violet-500"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <label htmlFor="toggleImportant" className="text-gray-300 text-sm font-medium">Toggle Important</label>
            <input
              type="checkbox"
              id="toggleImportant"
              className="form-checkbox h-5 w-5 text-violet-600 bg-gray-700 border-gray-600 rounded focus:ring-violet-500"
              checked={important}
              onChange={(e) => setImportant(e.target.checked)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-violet-600 hover:bg-violet-700 rounded-lg text-white font-semibold transition duration-200 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
            {taskToEdit ? 'Update Task' : 'Create Task'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskFormModal;
