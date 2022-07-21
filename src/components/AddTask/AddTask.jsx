import { useState } from "react";
import Card from "../UI/Card";

import styles from "./add-task.module.scss";

const AddTask = ({ onAddTask }) => {
  const defaultPriority = "low";
  const [enteredTask, setEnteredTask] = useState("");
  const [selectedPriority, setSelectedPriority] = useState(defaultPriority);

  const addTaskHandler = (event) => {
    event.preventDefault();
    if (enteredTask.trim().length !== 0) {
      onAddTask(enteredTask, selectedPriority);
      setEnteredTask("");
      setSelectedPriority(defaultPriority);
    }
  };

  const changeTaskHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  const changePriorityHandler = (event) => {
    setSelectedPriority(event.target.value);
  };

  return (
    <Card inputCardStyles={styles["input-card"]}>
      <form onSubmit={addTaskHandler} className={styles.form}>
        <div>
          <label htmlFor="task">Task:</label>
          <input
            id="task"
            type="text"
            value={enteredTask}
            onChange={changeTaskHandler}
          />
        </div>
        <div>
          <label htmlFor="task">Priority:</label>
          <select
            name="priority"
            id="priority"
            value={selectedPriority}
            onChange={changePriorityHandler}
          >
            <option value="hight">Hight</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <button type="submit" className={styles["add-task-button"]}>
          Add task
        </button>
      </form>
    </Card>
  );
};

export default AddTask;
