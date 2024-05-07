import { toast } from "react-toastify";

export const notification = async (type, message) => {
  return new Promise((resolve) => {
    switch (type) {
      case "warning":
        toast.warning(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "success":
        toast.success(message);
        break;
      case "info":
        toast.info(message);
        break;
      default:
        null;
    }
  });
};
