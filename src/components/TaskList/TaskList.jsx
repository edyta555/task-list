import Card from "../UI/Card";
const TaskList = ({ tasksData = [] }) => {
  return (
    <Card>
      <ul>
        {tasksData.map((taskData) => (
          <li key={taskData.id}>
            {taskData.name} {taskData.priority}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TaskList;
