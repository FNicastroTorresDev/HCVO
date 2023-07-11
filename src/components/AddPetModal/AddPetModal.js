import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { getAllOwners } from '../../services/owner'
import { createPet } from '../../services/pets'
import Swal from 'sweetalert2'

const AddPetModal = () => {
  const [ isLoading, setIsLoading ] = useState(false) 
  const [ ownerList, setOwnerList ] = useState([])
  const { register, handleSubmit, formState: { errors }, watch } = useForm()
  const otraEspecie = watch('specie')

  useEffect(() => {
    const fetchOwners = async () => {
      setIsLoading(true)
      try {
        const owners = await getAllOwners()
        setOwnerList(owners.data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchOwners()
  }, [])

  const onSubmit = async data => {
    if (data.specie === 'otro') {
      data.specie = data.otherSpecie;
      delete data.otherSpecie;
    }

    data.ownerLastname = ownerList.find( owner => owner.ownerDNI === data.ownerDNI).lastname

    try {
      const created = await createPet(data)
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
        text: `${err.response.data?.fields?.name} - ${err.response.data?.fields?.specie} - ${err.response.data?.fields?.ownerDNI}`
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="modal fade" id="addPetModal" tabindex="-1" aria-labelledby="addPetModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="addPetModalLabel">Nueva Mascota</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body d-flex justify-content-center">
            <form id='addPetForm' className='w-75' onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-3'>
                <label for='petName' className='form-label'>Nombre:</label>
                <input id='petName' type='text' className='form-control' maxLength='35' {...register('name', {
                  required: {
                    value: true,
                    message: 'Complete este campo.'
                  },
                  minLength: {
                    value: 2,
                    message: 'El nombre debe tener al menos 2 caracteres.'
                  }
                })}/>
                {errors.name && <small className='text-danger'>{errors.name.message}</small>}
              </div>

              <div className='mb-3'>
                <label for='dni' className='form-label'>Dueño/a:</label>
                {isLoading
                  ? <div className="spinner-border spinner-border-sm"></div>
                  : <select id='dni' className='form-control' {...register('ownerDNI', {required: {
                      value: true,
                      message: 'Complete este campo.'
                    }})}>
                      <option value=''>Seleccionar</option>
                      {ownerList.map( owner => (
                        <option value={owner.ownerDNI}>
                          {`${owner.firstname} ${owner.lastname}`}
                        </option>))}          
                    </select>}
                {errors.ownerDNI && <small className='text-danger'>{errors.ownerDNI.message}</small>}
              </div>
              
              <div className='mb-3'>
                <label for='especie' className='form-label'>Especie:</label>
                <div className='d-flex'>
                  {['canino','felino','otro'].map( value => (
                    <small className='mx-2'>
                      <input className='mx-1' key={value} type='radio' value={value} {...register('specie', {required: {
                        value: true,
                        message: 'Complete este campo.'
                      }})} />
                      {value}
                    </small>
                  ))}
                </div>
                {otraEspecie === 'otro' && (
                  <small>
                    Especificar especie: 
                    <input className='m-1' id='otro' type='text' maxLength='25' {...register('otherSpecie')}/>
                  </small>
                )}
                {errors.specie && <small className='text-danger'>{errors.specie.message}</small>}
              </div>

              <div className='mb-3 d-flex flex-column'> 
                <label for='sexo' className='form-label'>Sexo:</label>
                <div className='d-flex'>
                  {['macho','hembra'].map( value => (
                    <small className='mx-2'>
                      <input key={value} type='radio' value={value} {...register('sex')} className='mx-1'/>
                      {value}
                    </small>
                  ))}
                </div>
              </div>

              <div className='mb-3'>
                <label for='derivadoPor' className='form-label'>Derivado por:</label>
                <input id='derivadoPor' type='text' className='form-control' maxLength='40' {...register('derivedBy')}/>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" disabled={isLoading}>Cancelar</button>
            <button type="submit" form='addPetForm' className="addButtons" disabled={isLoading}>
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

export default AddPetModal