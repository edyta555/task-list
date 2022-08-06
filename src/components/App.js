import React from "react";
import { useState } from "react";
import AddTask from "./AddTask/AddTask";
import TaskList from "./TaskList/TaskList";

function App() {
  const [taskListData, setTaskListData] = useState([]);

  const addTaskListHandler = (taskName, taskPriority) => {
    setTaskListData((prevTaskListData) => {
      return [
        ...prevTaskListData,
        { name: taskName, priority: taskPriority, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddTask onAddTask={addTaskListHandler} />
      <TaskList tasksData={taskListData} />
    </div>
  );
}

export default App;
