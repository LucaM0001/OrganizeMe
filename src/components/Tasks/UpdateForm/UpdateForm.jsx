import { CheckCircle, CheckCircleFill } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";

const UpdateForm = ({ id, name, updateTask }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      newTaskName: name,
    },
  });

  const onSub = async (data) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    updateTask(data.newTaskName, id);
  };
  return (
    <form
      autoComplete="off"
      className="updateForm"
      onSubmit={handleSubmit(onSub)}
    >
      <input
        {...register("newTaskName", { required: true })}
        type="text"
        className="form-control me-3"
      />
      <button disabled={isSubmitting} type="submit" className="btn btn-success">
        {isSubmitting ? (
          <CheckCircle size={22} />
        ) : (
          <CheckCircleFill size={22} />
        )}
      </button>
    </form>
  );
};

export default UpdateForm;
