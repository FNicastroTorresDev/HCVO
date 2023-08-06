import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { editOwner } from '../../services/owner'

const EditOwnerModal = ({ handleClose, dataToEdit }) => {
  const [ isLoading, setIsLoading ] = useState(false) 
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: dataToEdit
  })

  useEffect(() => {
    reset(dataToEdit || {})
  }, [reset, dataToEdit])

  const handleCloseModal = () => {
    handleClose()
  }

  const onSubmit = async data => {
    const id = dataToEdit._id

    Swal.fire({
      icon: 'question',
      title: `¿Estás segura?`,
      text: 'Los cambios no se podrán deshacer.',
      confirmButtonText: `Sí`,
      showCancelButton: true,
      cancelButtonText: `Cancelar`,
    }).then( async result => {
      if (result.isConfirmed) {
        try {
          setIsLoading(true)
          await editOwner(id, data)
          Swal.fire({
            icon:'success',
            title: `Cambio realizado.`,
            showConfirmButton: false,
            timer: 1500
          }).then( () => window.location.reload())
        } catch (err) {
          Swal.fire({
            icon: 'error',
            title: `${err.response.data.error}`,
          })
        } finally {
          setIsLoading(false)
        }
      }
    }) 
  }

  return (
    <div className="modal fade" id="editOwnerModal" tabindex="-1" aria-labelledby="editOwnerModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="editOwnerModalLabel">Editar dueño/a</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body d-flex justify-content-center">
            <form id='editOwnerForm' className='w-75' onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-3'>
                <label for='firstname' className='form-label'>Nombre:</label>
                <input id='firstname' type='text' className='form-control' maxLength='35' {...register('firstname', {
                  required: {
                    value: true,
                    message: 'Complete este campo.'
                  },
                  minLength: {
                    value: 2,
                    message: 'El nombre debe tener al menos 2 caracteres.'
                  }
                })}/>
                {errors.firstname && <small className='text-danger'>{errors.firstname.message}</small>}
              </div>

              <div className='mb-3'>
                <label for='lastname' className='form-label'>Apellido:</label>
                <input id='lastname' type='text' className='form-control' maxLength='35' {...register('lastname', {
                  required: {
                    value: true,
                    message: 'Complete este campo.'
                  },
                  minLength: {
                    value: 2,
                    message: 'El apellido debe tener al menos 2 caracteres.'
                  }
                })}/>
                {errors.lastname && <small className='text-danger'>{errors.lastname.message}</small>}
              </div>

              <div className='mb-3'>
                <label for='phoneContact' className='form-label'>teléfono de contacto:</label>
                <input id='phoneContact' type='text' className='form-control' maxLength='12' {...register('phoneNumber', {
                  required: {
                    value: true,
                    message: 'Complete este campo.'
                  },
                  minLength: {
                    value: 10,
                    message: 'El teléfono debe tener al menos 10 digítos.'
                  },
                  pattern: {
                    value: /^[0-9]*$/g,
                    message: 'Ingrese números sin guiones ni espacios.'
                  }
                })}/>
                {errors.phoneNumber && <small className='text-danger'>{errors.phoneNumber.message}</small>}
              </div>

              <div className='mb-3'>
                <label for='altPhoneContact' className='form-label'>teléfono alternativo:</label>
                <input id='altPhoneContact' type='text' className='form-control' maxLength='12' {...register('altPhoneNumber', {
                  minLength: {
                    value: 10,
                    message: 'El teléfono debe tener al menos 10 digítos.'
                  },
                  pattern: {
                    value: /^[0-9]*$/g,
                    message: 'Ingrese números sin guiones ni espacios.'
                  }
                })}/>
                {errors.altPhoneNumber && <small className='text-danger'>{errors.altPhoneNumber.message}</small>}
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseModal} disabled={isLoading}>Cancelar</button>
            <button type="submit" form='editOwnerForm' className="addButtons" disabled={isLoading}>
              {isLoading
                ? <div className="spinner-border spinner-border-sm"></div>
                : 'Aceptar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditOwnerModal