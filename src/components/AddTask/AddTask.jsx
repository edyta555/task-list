import { useState } from "react";
import Card from "../UI/card/Card";
import Button from "../UI/button/Button";
import ErrorModal from "../UI/error-modal/ErrorModal";

import styles from "./add-task.module.scss";

const AddTask = ({ onAddTask }) => {
  const defaultPriority = "low";
  const [enteredTask, setEnteredTask] = useState("");
  const [selectedPriority, setSelectedPriority] = useState(defaultPriority);
  const [error, setError] = useState();

  const addTaskHandler = (event) => {
    event.preventDefault();
    if (enteredTask.trim().length === 0) {
      setError({
        errorTitle: "Empty field",
        errorMessage: "Please enter a task name.",
      });
    } else {
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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal {...error} onAccept={errorHandler} />}
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
          <Button buttonType="submit">Add task</Button>
        </form>
      </Card>
    </>
  );
};

export default AddTask;
