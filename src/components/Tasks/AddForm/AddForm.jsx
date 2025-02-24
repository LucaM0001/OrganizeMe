import { useRef } from "react";
import { Plus, PlusCircleDotted } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import { notification } from "../../../lib/notifcation";

const AddForm = ({ addTask }) => {
  const addForm = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSub = async (data) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    addTask(data.taskName);
    addForm.current.reset();
  };

  return (
    <>
      <form
        autoComplete="off"
        ref={addForm}
        id="addForm"
        onSubmit={handleSubmit(onSub)}
      >
        <input
          {...register("taskName", {
            required: "Task is required",
          })}
          type="text"
          className="form-control me-3"
          placeholder="new task..."
        />

        <div>
          {isSubmitting ? (
            <div className="spinner-border text-primary fs-2" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <button
              disabled={isSubmitting}
              type="submit"
              className="btn btn-primary"
            >
              <Plus size={22} />
            </button>
          )}
        </div>
      </form>
      {errors.taskName && (
        <div className="text-warning fw-bold">{errors.taskName.message}</div>
      )}
    </>
  );
};

export default AddForm;
