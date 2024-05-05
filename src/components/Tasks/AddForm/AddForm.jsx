import { Plus, PlusCircleDotted } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";

const AddForm = ({ addTask }) => {
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
  };

  return (
    <>
      <form id="addForm" className="mb-3" onSubmit={handleSubmit(onSub)}>
        <input
          {...register("taskName", {
            required: true,
          })}
          type="text"
          className="form-control me-3"
          placeholder="new task..."
        />
        <button
          disabled={isSubmitting}
          type="submit"
          className="btn btn-primary"
        >
          {isSubmitting ? <PlusCircleDotted size={26} /> : <Plus size={26} />}
        </button>
      </form>
    </>
  );
};

export default AddForm;
