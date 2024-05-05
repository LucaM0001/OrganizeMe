import { useState } from "react";
import { PenFill, TrashFill } from "react-bootstrap-icons";

const Task = ({ id, name, isCompleted, removeTask, changeIsCompleted }) => {
  const [isChecked, setIsChecked] = useState(isCompleted);
  return (
    <>
      <div>
        <input
          checked={isCompleted}
          type="checkbox"
          className="form-check-input"
          onChange={() => changeIsCompleted(id)}
        />
        <span className="ms-3">{name}</span>
      </div>
      <div>
        <button className="btn btn-danger me-2" onClick={() => removeTask(id)}>
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
