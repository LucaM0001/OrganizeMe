import "react-toastify/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

const Notification = () => {
  return (
    <div className="notification">
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Notification;
