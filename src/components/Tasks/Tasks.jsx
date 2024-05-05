import { Flag, List, ListCheck, ListTask } from "react-bootstrap-icons";
import AddForm from "./AddForm/AddForm";
import Task from "./Task/Task";
import { Fragment, useState } from "react";
import UpdateForm from "./UpdateForm/UpdateForm";

const Tasks = (props) => {
  const [tasks, setTasks] = useState([]);

  const [filter, setFilter] = useState("all");

  const handleRemoveTask = (deleteId) => {
    const newTasks = [...tasks].filter((task) => task.id !== deleteId);
    if (confirm("Delete this task ?")) setTasks(newTasks);
  };

  const handleChangeIsCompleted = (taskId) => {
    const newTask = [...tasks].find((task) => task.id === taskId);
    newTask.isCompleted = !newTask.isCompleted;
    const index = [...tasks].findIndex((task) => task.id === taskId);

    const newTasks = [...tasks];
    newTasks[index] = newTask;

    setTasks(newTasks);
  };

  const handleShowUpdateForm = (taskId) => {
    const newTask = [...tasks].find((task) => task.id === taskId);
    newTask.isUpdated = !newTask.isUpdated;

    const index = [...tasks].findIndex((task) => task.id === taskId);

    const newTasks = [...tasks];
    newTasks[index] = newTask;

    setTasks(newTasks);
  };

  const handleUpdateTask = (newName, taskId) => {
    const newTask = [...tasks].find((task) => task.id === taskId);
    newTask.name = newName;
    newTask.isUpdated = false;

    const index = [...tasks].findIndex((task) => task.id === taskId);

    const newTasks = [...tasks];
    newTasks[index] = newTask;

    setTasks(newTasks);
  };

  const handleShowTask = () => {
    if (tasks.length === 0)
      return <div className="alert alert-info">No tasks yet !!!</div>;

    let tasksArray = [];

    switch (filter) {
      case "all":
        tasksArray = [...tasks];
        break;
      case "done":
        tasksArray = [...tasks].filter((task) => task.isCompleted);
        break;
      case "todo":
        tasksArray = [...tasks].filter((task) => !task.isCompleted);
        break;
      default:
        null;
    }

    return tasksArray.map((task) => (
      <Fragment key={task.id}>
        <li className="list-group-item">
          <Task
            {...task}
            removeTask={handleRemoveTask}
            changeIsCompleted={handleChangeIsCompleted}
            showUpdateForm={handleShowUpdateForm}
          />
        </li>
        {task.isUpdated && (
          <li className="list-group-item">
            <UpdateForm {...task} updateTask={handleUpdateTask} />
          </li>
        )}
      </Fragment>
    ));
  };

  const handleAddTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      isCompleted: false,
      isUpdated: false,
    };

    setTasks((oldTasks) => [...oldTasks, newTask]);
  };

  return (
    <div id="tasks">
      <h1 className="text-center text-primary" id="title">
        To~Do~List App
      </h1>
      <AddForm addTask={handleAddTask} />
      <div className="btn-group mb-3" id="filters">
        <button
          className="btn btn-outline-primary"
          onClick={() => setFilter("all")}
        >
          <List size={22} />
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => setFilter("done")}
        >
          <ListCheck size={22} />
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => setFilter("todo")}
        >
          <ListTask size={22} />
        </button>
      </div>
      <ul className="list-group">{handleShowTask()}</ul>
    </div>
  );
};

export default Tasks;
