import { PenFill, TrashFill, XCircleFill } from "react-bootstrap-icons";

const Task = ({
  id,
  name,
  isCompleted,
  isUpdated,
  removeTask,
  changeIsCompleted,
  showUpdateForm,
}) => {
  return (
    <>
      <div>
        <input
          checked={isCompleted}
          type="checkbox"
          className="form-check-input"
          onChange={() => changeIsCompleted(id)}
        />
        <span className="mx-3">{name}</span>
      </div>
      <div>
        <button className="btn btn-danger me-2" onClick={() => removeTask(id)}>
          <TrashFill size={22} />
        </button>
        <button className="btn btn-warning" onClick={() => showUpdateForm(id)}>
          {isUpdated ? (
            <XCircleFill size={22} color="white" />
          ) : (
            <PenFill size={22} color="white" />
          )}
        </button>
      </div>
    </>
  );
};

export default Task;
