import React from 'react'
import './courseChecks.css'
import { useFormContext } from 'react-hook-form'

const CourseChecks = ({ id }) => {
  const { register } = useFormContext()

  return (
    <section id={id} className='card p-2 my-2 margin-fondo'>
      <h4 className='fs-5'>Curso</h4>
      <div>
        <table className='eyeTable'>
          <tr className='other-justi'>
            {['agudo','cronico','incrementado'].map( value => (
              <small>
                <input 
                  key={value} 
                  type='checkbox'
                  className='custom-checkbox' 
                  value={value} 
                  {...register('course.firstRowCheckboxs')} />
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
                  {...register('course.secondRowCheckboxs')} />
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
                {...register('course.thirdRowCheckboxs')} />
                Enfermedad General
            </small>
            <input key='comentEnferGeneral'
              type='text'
              className='text-custom'
              {...register('course.comentEnferGeneral')} />
          </tr>
        </table>
      </div>
    </section>
  )
}

export default CourseChecks