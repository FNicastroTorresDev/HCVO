import React, { useEffect, useState } from 'react'
import './ownerTable.css'
import { deleteOneOwner, getAllOwners } from '../../services/owner'
import Swal from 'sweetalert2'
import EditOwnerModal from '../EditOwnerModal/EditOwnerModal'

const OwnerTable = () => {
  const [ ownerData, setOwnerData ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)
  const [ ownerToEdit, setOwnerToEdit ] = useState()


  useEffect( () => {
    const fetchOwners = async () => {
      setIsLoading(true)
      try {
        const owners = await getAllOwners()
        setOwnerData(owners.data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchOwners()
  }, [])

  const sendOwnerToEdit = ({ target }) => {
    const id = target.parentNode.id
    const ownerToEdit = ownerData.find( owner => owner._id === id )
    setOwnerToEdit(ownerToEdit)
  }

  const deleteOwner = async ({ target }) => {
    const id = target.parentNode.id
    Swal.fire({
      icon: 'question',
      title: `¿Está segura?`,
      text: 'Esta acción no se puede deshacer.',
      confirmButtonText: `Sí`,
      showCancelButton: true,
      cancelButtonText: `Cancelar`,
    }).then( async result => {
      if (result.isConfirmed) {
        try {
          const deleted = await deleteOneOwner(id)
          Swal.fire({
            icon:'success',
            title: `${deleted.message}`,
            showConfirmButton: false,
            timer: 1500
          }).then( () => window.location.reload())
        } catch (err) {
          Swal.fire({
            icon: 'error',
            title: `${err.response.data.error}`
          })
        }
      }
    })
  }

  return (
    <>
      <div className='table-responsive'>
        <caption className='top-caption d-flex fs-3 fw-bold'>
          Dueños
          <i title='Crear nuevo/a dueño/a' className="mx-2 bi bi-plus-square" data-bs-toggle="modal" data-bs-target="#addOwnerModal"></i>
        </caption>
        <table className='table table-striped table-hover'>
          <thead>
            <tr>
              <th scope="col">DNI</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Tel. Contacto</th>
              <th scope="col">Tel. Alt.</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody className='table-group-divider'>
            {isLoading ? <div className="m-3 spinner-border"></div> : ''}

            {ownerData.map( owner => (
              <tr>
                <th scope='row'>{owner.ownerDNI}</th>
                <td>{owner.firstname}</td>
                <td>{owner.lastname}</td>
                <td>{owner.phoneNumber}</td>
                <td>{owner.altPhoneNumber}</td>
                <td id={owner._id}>
                  <i title='Modificar' className="cursor-pointer bi bi-pen" data-bs-toggle="modal" data-bs-target="#editOwnerModal" onClick={sendOwnerToEdit}></i>
                  <i title='Eliminar' className="cursor-pointer bi bi-trash ms-3" onClick={deleteOwner}></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <EditOwnerModal dataToEdit={ownerToEdit} />
    </>
  )
}

export default OwnerTable