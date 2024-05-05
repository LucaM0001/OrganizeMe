import { List, ListCheck, ListTask } from "react-bootstrap-icons";
import AddForm from "./AddForm/AddForm";
import Task from "./Task/Task";
import { useState } from "react";

const Tasks = (props) => {
  const [tasks, setTasks] = useState([
    {
      id: Date.now(),
      name: "Task1",
      isCompleted: false,
    },
    {
      id: Date.now() * 2,
      name: "Task2",
      isCompleted: false,
    },
  ]);

  const [filter, setFilter] = useState("all");

  const handleRemoveTask = (deleteId) => {
    const newTasks = [...tasks].filter((task) => task.id !== deleteId);
    if (confirm("Delete this task ?")) setTasks(newTasks);
  };

  const handleChangeIsCompleted = (taskId) => {
    const newUser = [...tasks].find((task) => task.id === taskId);
    newUser.isCompleted = !newUser.isCompleted;
    const index = [...tasks].findIndex((task) => task.id === taskId);

    const newUsers = [...tasks];
    newUsers[index] = newUser;

    setTasks(newUsers);
  };

  const handleShowTask = () => {
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
      <li key={task.id} className="list-group-item">
        <Task
          {...task}
          removeTask={handleRemoveTask}
          changeIsCompleted={handleChangeIsCompleted}
        />
      </li>
    ));
  };

  const handleAddTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      isCompleted: false,
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
