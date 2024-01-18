import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

import { useState } from "react";

const intialTasks = {
  "id": crypto.randomUUID(),
  "title": "Task 1",
  "description": "Task 1 description",
  "tags": ["web", "design", "frontend", "backend", "fullstack"],
  "priority": "High",
  "isFavorite": true,

}

const TaskBoard = () => {
  const [tasks, setTasks] = useState([intialTasks]);
  
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
