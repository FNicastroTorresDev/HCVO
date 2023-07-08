import React, { useState, useEffect } from 'react'
import EditButton from '../../../../../EditButton/EditButton'
import './courseChecks.css'
import { useForm } from 'react-hook-form'

const CourseChecks = ({ id, idForm, toShow, editData }) => {
  const [ isEditable, setIsEditable ] = useState(false) 
  const { register, handleSubmit, reset } = useForm({
    defaultValues: toShow
  })

  useEffect(() => {
    reset(toShow || {});
  }, [reset, toShow]);

  const onSubmit = data => {
    editData(id, data)
  }

  return (
    <section id={id} className='card p-2 my-2 margin-fondo'>
      <h4 className='fs-5'>Curso</h4>
      <form id={idForm} onSubmit={handleSubmit(onSubmit)}>
        <table className='eyeTable'>
          <tr className='other-justi'>
            {['agudo','cronico','incrementado'].map( value => (
              <small>
                <input 
                  key={value} 
                  type='checkbox'
                  className='custom-checkbox' 
                  value={value} 
                  {...register('firstRowCheckboxs')} 
                  disabled={!isEditable}/>
                  {value}
              </small>
            ))}
          </tr>

          <tr className='other-justi'>
          {['reducido','estatico','recurrencia'].map( value => (
              <small>
                <input 
                  key={value} 
                  type='checkbox'
                  className='custom-checkbox' 
                  value={value} 
                  {...register('secondRowCheckboxs')} 
                  disabled={!isEditable}/>
                  {value}
              </small>
            ))}
          </tr>
          
          <tr className='other-justi'>
            <small>
              <input
                key='enferGeneral'
                type='checkbox'
                className='custom-checkbox'
                value={'enferGeneral'}
                {...register('thirdRowCheckboxs')}
                disabled={!isEditable}/>
                Enfermedad General
            </small>
            <input key='comentEnferGeneral'
              type='text'
              className='text-custom'
              {...register('comentEnferGeneral')}
              disabled={!isEditable} />
          </tr>
        </table>
      </form>

      <EditButton idForm={idForm} isEditable={setIsEditable} />
    </section>
  )
}

export default CourseChecks