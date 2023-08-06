import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { createOwner } from '../../services/owner'
import Swal from 'sweetalert2'

const AddOwnerModal = () => {
  const [ isLoading, setIsLoading ] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async data => {
    setIsLoading(true)

    try {
      const created = await createOwner(data)
      Swal.fire({
        icon: 'success',
        title: `${created.message}`,
        timer: 2000,
        timerProgressBar: true
      }).then(() => {
        window.location.reload()
      })
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: `${err.response.data.error}`,
        text: `${err.response.data?.fields?.firstname} - ${err.response.data?.fields?.laststname} - ${err.response.data?.fields?.phoneNumber}`
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="modal fade" id="addOwnerModal" tabindex="-1" aria-labelledby="addOwnerModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="addOwnerModalLabel">Nuevo/a Dueño/a</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body d-flex justify-content-center">
            <form id='addOwnerForm' className='w-75' onSubmit={handleSubmit(onSubmit)}>
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
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" disabled={isLoading}>Cancelar</button>
            <button type="submit" form='addOwnerForm' className="addButtons" disabled={isLoading}>
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

export default AddOwnerModal