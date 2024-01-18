import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

import { useState } from "react";

const intialTasks = {
  id: crypto.randomUUID(),
  title: "Task 1",
  description: "Task 1 description",
  tags: ["web", "design", "frontend", "backend", "fullstack"],
  priority: "High",
  isFavorite: true,
};

const TaskBoard = () => {
  const [tasks, setTasks] = useState([intialTasks]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTask, setEditTask] = useState(null);

  const handleAddEditTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
      setIsModalOpen(false);
    } else {
      const UpdateTask = tasks.map((task) => {
        if (task.id === newTask.id) {
          return newTask;
        }
        return task;
      });

      setTasks(UpdateTask);
      setIsModalOpen(false);
      setEditTask(null);
    }
  };

  const handleEditTask = (task) => {
    setEditTask(task);
    setIsModalOpen(true);
  };

  const handleCloseClick = () => {
    setIsModalOpen(false);
    setEditTask(null);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleDeleteAll = () => {
    tasks.length === 0 && alert("No tasks to delete");
    setTasks([]);
  };

  return (
    <section className="mb-20" id="tasks">
      {isModalOpen && (
        <AddTaskModal
          onSaved={handleAddEditTask}
          taskToUpdate={editTask}
          onCloseClick={handleCloseClick}
        />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions
            onAddClick={() => setIsModalOpen(true)}
            deleteAll={handleDeleteAll}
          />
          <TaskList
            tasks={tasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
          />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
