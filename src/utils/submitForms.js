import Swal from "sweetalert2"

export const submitMedicalData = data => {
  Swal.fire({
    title: '¿Realmente quiere guardar los cambios?',
    showDenyButton: true,
    confirmButtonText: 'Sí',
    denyButtonText: 'No'
  }).then((result) => {
    if (result.isConfirmed) {
      console.log(data)
      Swal.fire('¡Guardado! Falta programar lo otro', '', 'success')
        .then(result => result ? window.location.reload(false) : '-')
    } 
  })
}