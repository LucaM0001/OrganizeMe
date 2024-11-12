import { Flag, List, ListCheck, ListTask } from "react-bootstrap-icons";
import AddForm from "./AddForm/AddForm";
import Task from "./Task/Task";
import { Fragment, useEffect, useState } from "react";
import UpdateForm from "./UpdateForm/UpdateForm";
import { getLocalStorage, setLocalStorage } from "../../lib/storage";
import { notification } from "../../lib/notifcation";

const Tasks = (props) => {
  const { tasksInStorage } = getLocalStorage();
  const { filterInStorage } = getLocalStorage();

  const [tasks, setTasks] = useState(tasksInStorage);

  const [filter, setFilter] = useState(filterInStorage);

  useEffect(() => {
    setLocalStorage(tasks, filter);
  }, [tasks, filter]);

  const handleRemoveTask = (deleteId) => {
    const newTasks = [...tasks].filter((task) => task.id !== deleteId);
    if (confirm("Delete this task ?")) {
      setTasks(newTasks);
      notification("info", "The task has been deleted");
    }
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
    notification("info", "The task has been updated");
  };

  const handleShowTask = () => {
    if (tasks.length === 0)
      return (
        <div className="alert alert-info" id="alert">
          <div>No tasks yet !!!</div>
          <div className="spinner-border text-info fs-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );

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
    notification("success", "New task created successfuly !");
  };

  return (
    <div id="tasks">
      <h1 className="text-center text-primary" id="title">
        OrganizeMe
      </h1>
      <AddForm addTask={handleAddTask} />
      <div className="btn-group my-3" id="filters">
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
      <ul className="list-group" id="tasks-list">
        {handleShowTask()}
      </ul>
    </div>
  );
};

export default Tasks;
