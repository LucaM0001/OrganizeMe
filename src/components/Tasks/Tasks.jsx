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

  const handleShowTask = () => {
    let tasksArray = [...tasks];

    return tasksArray.map((task) => (
      <li key={task.id} className="list-group-item">
        <Task {...task} />
      </li>
    ));
  };

  return (
    <div id="tasks">
      <h1 className="text-center text-primary" id="title">
        To~Do~List App
      </h1>
      <AddForm />
      <div className="btn-group mb-3" id="filters">
        <button className="btn btn-outline-primary">
          <List size={22} />
        </button>
        <button className="btn btn-outline-primary">
          <ListCheck size={22} />
        </button>
        <button className="btn btn-outline-primary">
          <ListTask size={22} />
        </button>
      </div>
      <ul className="list-group">{handleShowTask()}</ul>
    </div>
  );
};

export default Tasks;
