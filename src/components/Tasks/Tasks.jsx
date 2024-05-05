import { List, ListCheck, ListTask } from "react-bootstrap-icons";
import AddForm from "./AddForm/AddForm";
import Task from "./Task/Task";

const Tasks = (props) => {
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
      <ul className="list-group">
        <Task />
        <Task />
        <Task />
      </ul>
    </div>
  );
};

export default Tasks;
