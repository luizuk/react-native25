import Swal from "sweetalert2";

export const showError = (title: string, message: string) => {
  Swal.fire({
    title,
    text: message,
    icon: "error",
    confirmButtonText: "Ok",
  });
};
