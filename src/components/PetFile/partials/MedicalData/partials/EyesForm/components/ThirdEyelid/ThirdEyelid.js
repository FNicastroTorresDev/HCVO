import React from 'react'
import { useForm } from 'react-hook-form'

const ThirdEyelid = ({ idForm, isEditable }) => {
  const { register, handleSubmit } = useForm()
  
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div className='container'>
      <form id={idForm} onSubmit={handleSubmit(onSubmit)} className='row p-2 margin-fondo'>
        <div id='thirdEyelid-od' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo derecho</caption>
            <tr className='other-justi'>
              {['protr. glan.','hipertr. glan.','reversion'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('OD.rowCheckbox')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>
          </table>
        </div>

        <div id='thirdEyelid-oi' className='col-6'>
          <table className='eyeTable'>
          <caption>ojo izquierdo</caption>
            <tr className='other-justi'>
              {['protr. glan.','hipertr. glan.','reversion'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('OI.rowCheckbox')} disabled={!isEditable} />
                  {value} 
                </small>
              ))}
            </tr>
          </table>
        </div>
      </form>
    </div>
  )
}

export default ThirdEyelid