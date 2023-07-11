import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { getAllOwners } from '../../services/owner'
import { deleteOnePet, editPet } from '../../services/pets'
import Swal from 'sweetalert2'
import './editPetModal.css'
import { deleteMedicalData, emptyMedicalData } from '../../services/medicalData'

const EditPetModal = ({ dataToEdit, idData }) => {
  const [ isLoading, setIsLoading ] = useState(false) 
  const [ ownerList, setOwnerList ] = useState([])
  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: dataToEdit
  })
  
  const otraEspecie = watch('specie') 

  useEffect(() => {
    reset(dataToEdit || {})
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
  }, [reset, dataToEdit])

  const deletePet = async () => {
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
          await Promise.all([deleteOnePet(id), deleteMedicalData(idData)])
          Swal.fire({
            icon:'success',
            title: `Cambio realizado.`,
            showConfirmButton: false,
            timer: 1500
          }).then( () => window.location.replace('/home'))
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

  const toEmpyData = async () => {
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
          await emptyMedicalData(idData)
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

  const onSubmit = async data => {
    const id = dataToEdit._id

    if (data.specie === 'otro') {
      data.specie = data.otherSpecie;
      delete data.otherSpecie;
    }

    data.ownerLastname = ownerList.find( owner => owner.ownerDNI === data.ownerDNI).lastname

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
          await editPet(id, data)
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
    <div className="modal fade" id="editPetModal" tabindex="-1" aria-labelledby="editPetModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="editPetModalLabel">Editar Mascota</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body d-flex flex-column align-items-center">
            <form id='editPetForm' className='w-75' onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-3'>
                <label for='petName' className='form-label'>Nombre:</label>
                <input id='petName' type='text' className='form-control' maxLength='35' {...register('name')}/>
              </div>

              <div className='mb-3'>
                <label for='dni' className='form-label'>Dueño/a:</label>
                {isLoading
                  ? <div className="spinner-border spinner-border-sm"></div>
                  : <select id='dni' className='form-control' {...register('ownerDNI')}>
                      <option value=''>Seleccionar</option>
                      {ownerList.map( owner => (
                        <option value={owner.ownerDNI}>
                          {`${owner.firstname} ${owner.lastname}`}
                        </option>))}          
                    </select>}
                <small className='text-lowercase'>(Para editar dueño o crear uno nuevo ir a <b className='text-lowercase'>Administrar Dueños</b>)</small>
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

            <div className='d-flex'>
              <small className='mx-2 small-custom' onClick={deletePet}>Eliminar Mascota</small>
              <small className='mx-2 small-custom' onClick={toEmpyData}>Vaciar ficha médica</small>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" disabled={isLoading}>Cancelar</button>
            <button type="submit" form='editPetForm' className="addButtons" disabled={isLoading}>
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

export default EditPetModal