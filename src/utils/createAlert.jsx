import Swal from 'sweetalert2'
// Sweetalert2 for design alert dialog
const createAlert = (icon, text) => {
  return Swal.fire({
      title: text || "Something Wrong!",
      icon: icon || "info",
      timer: 2000
    })
  }
export default createAlert