import Swal from "sweetalert2";

export const confirmDelete = (doSomething = () => {}) => {
  Swal.fire({
    title: "Yakin ingin menghapus data?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Hapus",
    cancelButtonText: "Batal",
    customClass: {
      cancelButton: "btn btn-secondary",
      confirmButton: "btn btn-secondary-main",
    },
  }).then(async (result) => {
    if (result.isConfirmed) {
      doSomething();
      Swal.fire({
        title: "Data berhasil dihapus",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  });
};
