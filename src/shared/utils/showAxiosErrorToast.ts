import { toast } from "react-toastify";
import { AxiosError } from "axios";

function showAxiosErrorToast(error: unknown) {
  console.log(error);

  if (error instanceof AxiosError) {
    let message = error.response?.data?.detail || "Unknown Network Error";

    message = `${error.status || 500} - ${message}`;
    toast.error(message);
  } else {
    toast.error("Unknown Error");
  }
}

export default showAxiosErrorToast;
