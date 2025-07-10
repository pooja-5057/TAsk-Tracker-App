import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, updateTask, onDeleteTask, onEditTask }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        No tasks found. Add a new task to get started!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          updateTask={updateTask}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
