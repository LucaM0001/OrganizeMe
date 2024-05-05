import { PenFill, TrashFill } from "react-bootstrap-icons";

const Task = (props) => {
  return (
    <li className="list-group-item">
      <div>
        <input type="checkbox" className="form-check-input" />
        <span className="ms-3">Task Name</span>
      </div>
      <div>
        <button className="btn btn-danger me-2">
          <TrashFill />
        </button>
        <button className="btn btn-warning">
          <PenFill color="white" />
        </button>
      </div>
    </li>
  );
};

export default Task;
