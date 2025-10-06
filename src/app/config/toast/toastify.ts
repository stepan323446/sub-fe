import type { ToastOptions } from "react-toastify";

const toastifyConfig: ToastOptions = {
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
  style: {
    zIndex: 99999,
  },
};

export default toastifyConfig;
