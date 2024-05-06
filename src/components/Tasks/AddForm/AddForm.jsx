import { useRef } from "react";
import { Plus, PlusCircleDotted } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";

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
    console.log(addForm.current.reset());
  };

  return (
    <form
      autoComplete="off"
      ref={addForm}
      id="addForm"
      className="mb-3"
      onSubmit={handleSubmit(onSub)}
    >
      <input
        {...register("taskName", {
          required: true,
        })}
        type="text"
        className="form-control me-3"
        placeholder="new task..."
      />
      <button disabled={isSubmitting} type="submit" className="btn btn-primary">
        {isSubmitting ? <PlusCircleDotted size={22} /> : <Plus size={22} />}
      </button>
    </form>
  );
};

export default AddForm;
