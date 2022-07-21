import Card from "../UI/Card";

import styles from "./task-list.module.scss";

const TaskList = ({ tasksData = [] }) => {
  return (
    <Card inputCardStyles={styles.card}>
      <h1 className={styles["main-title"]}>A Task List:</h1>
      <ul>
        {tasksData.map((taskData) => (
          <li key={taskData.id}>
            <span>{taskData.name}</span>
            <span>{taskData.priority}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TaskList;
