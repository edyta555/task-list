import Card from "../UI/Card";

import styles from "./add-task.module.scss";

const AddTask = () => {
  const addTaskHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card inputCardStyles={styles["input-card"]}>
      <form onSubmit={addTaskHandler} className={styles.form}>
        <div>
          <label htmlFor="task">Task:</label>
          <input id="task" type="text"/>
        </div>
        <div>
          <label htmlFor="task">Priority:</label>
          <select name="priority" id="priority">
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
