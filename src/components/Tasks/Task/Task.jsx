import { PenFill, TrashFill } from "react-bootstrap-icons";

const Task = ({ id, name, isCompleted }) => {
  return (
    <>
      <div>
        <input type="checkbox" className="form-check-input" />
        <span className="ms-3">{name}</span>
      </div>
      <div>
        <button className="btn btn-danger me-2" onClick={() => console.log(id)}>
          <TrashFill />
        </button>
        <button className="btn btn-warning" onClick={() => console.log(id)}>
          <PenFill color="white" />
        </button>
      </div>
    </>
  );
};

export default Task;
