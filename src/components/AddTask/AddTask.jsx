import { useState, useRef } from "react";
import Card from "../UI/card/Card";
import Button from "../UI/button/Button";
import ErrorModal from "../UI/error-modal/ErrorModal";

import styles from "./add-task.module.scss";

const AddTask = ({ onAddTask }) => {
  const [error, setError] = useState();
  const taskInputRef = useRef();
  const priorityInputRef = useRef();

  const addTaskHandler = (event) => {
    event.preventDefault();
    const enteredTask = taskInputRef.current.value;
    const enteredPriority = priorityInputRef.current.value;
    if (enteredTask.trim().length === 0) {
      setError({
        errorTitle: "Empty field",
        errorMessage: "Please enter a task name.",
      });
    } else {
      onAddTask(enteredTask, enteredPriority);
      taskInputRef.current.value = "";
      priorityInputRef.current.value = "low";
    }
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
            <input id="task" type="text" ref={taskInputRef} />
          </div>
          <div>
            <label htmlFor="task">Priority:</label>
            <select
              name="priority"
              id="priority"
              defaultValue="low"
              ref={priorityInputRef}
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
