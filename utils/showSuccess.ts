import Swal from "sweetalert2";

export const showSuccess = (title: string, message: string) => {
  Swal.fire({
    title,
    text: message,
    icon: "success",
    confirmButtonText: "Ok",
  });
};
