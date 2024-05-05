import { Plus } from "react-bootstrap-icons";

const AddForm = (props) => {
  return (
    <form id="addForm" className="mb-3">
      <input
        type="text"
        className="form-control me-3"
        placeholder="new task..."
      />
      <button type="submit" className="btn btn-primary">
        <Plus size={26} />
      </button>
    </form>
  );
};

export default AddForm;
