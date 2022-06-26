const AddTask = () => {
  return (
    <form>
      <label htmlFor="task">Task</label>
      <input id="task" type="text" />
      <label htmlFor="task">Priority</label>
      <select name="priority" id="priority">
        <option value="hight">Hight</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button type="submit">Add task</button>
    </form>
  );
};

export default AddTask;
