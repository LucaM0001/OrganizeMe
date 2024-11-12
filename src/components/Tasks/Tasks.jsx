import { List, ListCheck, ListTask } from "react-bootstrap-icons"
import AddForm from "./AddForm/AddForm"
import Task from "./Task/Task"
import { Fragment, useEffect, useState } from "react"
import UpdateForm from "./UpdateForm/UpdateForm"
import { getLocalStorage, setLocalStorage } from "../../lib/storage"
import { notification } from "../../lib/notifcation"

const Tasks = () => {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    const { tasksInStorage, filterInStorage } = getLocalStorage()
    if (tasksInStorage.length > 0) {
      setTasks(tasksInStorage)
    }
    setFilter(filterInStorage)
  }, [])

  useEffect(() => {
    if (tasks.length > 0 || filter !== "all") {
      setLocalStorage(tasks, filter)
    }
  }, [tasks, filter])

  const handleRemoveTask = (deleteId) => {
    const newTasks = tasks.filter((task) => task.id !== deleteId)
    if (confirm("Delete this task ?")) {
      setTasks(newTasks)
      notification("info", "The task has been deleted")
    }
  }

  const handleChangeIsCompleted = (taskId) => {
    const newTask = tasks.find((task) => task.id === taskId)
    newTask.isCompleted = !newTask.isCompleted
    const index = tasks.findIndex((task) => task.id === taskId)

    const newTasks = [...tasks]
    newTasks[index] = newTask
    setTasks(newTasks)
  }

  const handleShowUpdateForm = (taskId) => {
    const newTask = tasks.find((task) => task.id === taskId)
    newTask.isUpdated = !newTask.isUpdated

    const index = tasks.findIndex((task) => task.id === taskId)

    const newTasks = [...tasks]
    newTasks[index] = newTask
    setTasks(newTasks)
  }

  const handleUpdateTask = (newName, taskId) => {
    const newTask = tasks.find((task) => task.id === taskId)
    newTask.name = newName
    newTask.isUpdated = false

    const index = tasks.findIndex((task) => task.id === taskId)

    const newTasks = [...tasks]
    newTasks[index] = newTask
    setTasks(newTasks)
    notification("info", "The task has been updated")
  }

  const handleShowTask = () => {
    if (tasks.length === 0)
      return (
        <div className="alert alert-info text-center" id="alert">
          <div>No tasks yet !!!</div>
          <div className="spinner-border text-info fs-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )

    let tasksArray = []

    switch (filter) {
      case "all":
        tasksArray = [...tasks]
        break
      case "done":
        tasksArray = tasks.filter((task) => task.isCompleted)
        break
      case "todo":
        tasksArray = tasks.filter((task) => !task.isCompleted)
        break
      default:
        null
    }

    return tasksArray.map((task) => (
      <Fragment key={task.id}>
        <li className="list-group-item p-3">
          <Task
            {...task}
            removeTask={handleRemoveTask}
            changeIsCompleted={handleChangeIsCompleted}
            showUpdateForm={handleShowUpdateForm}
          />
        </li>
        {task.isUpdated && (
          <li className="list-group-item p-3">
            <UpdateForm {...task} updateTask={handleUpdateTask} />
          </li>
        )}
      </Fragment>
    ))
  }

  const handleAddTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      isCompleted: false,
      isUpdated: false,
    }

    setTasks((oldTasks) => [...oldTasks, newTask])
    notification("success", "New task created successfully!")
  }

  return (
    <div id="tasks" className="container mt-5">
      <h1
        className="text-center text-primary"
        id="title"
        style={{ fontSize: "2.5rem" }}
      >
        OrganizeMe
      </h1>
      <AddForm addTask={handleAddTask} />
      <div
        className="btn-group my-4 d-flex justify-content-center"
        id="filters"
      >
        <button
          className="btn btn-outline-primary btn-lg me-2"
          onClick={() => setFilter("all")}
        >
          <List size={30} />
        </button>
        <button
          className="btn btn-outline-success btn-lg me-2"
          onClick={() => setFilter("done")}
        >
          <ListCheck size={30} />
        </button>
        <button
          className="btn btn-outline-warning btn-lg"
          onClick={() => setFilter("todo")}
        >
          <ListTask size={30} />
        </button>
      </div>
      <ul className="list-group" id="tasks-list">
        {handleShowTask()}
      </ul>
    </div>
  )
}

export default Tasks
