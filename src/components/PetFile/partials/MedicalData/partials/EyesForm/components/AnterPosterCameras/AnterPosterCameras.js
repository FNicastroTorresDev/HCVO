import React from 'react'
import { useForm } from 'react-hook-form'

const AnterPosterCameras = ({ idForm, isEditable}) => {
  const { register, handleSubmit } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div className='container'>
      <form id={idForm} onSubmit={handleSubmit(onSubmit)} className='row p-2 margin-fondo'>
        <div id='camAntPost-od' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo derecho</caption>
            <tr className='other-justi'>
              {['normal','desviado','atrofia','exoft'].map( value => (
                <small>
                  <input key={value} type='radio' className='custom-radio' value={value} {...register('OD.firstRowRadio')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>
          </table>
        </div>

        <div id='camAntPost-oi' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo izquierdo</caption>
            <tr className='other-justi'>
              {['normal','desviado','atrofia','exoft'].map( value => (
                <small>
                  <input key={value} type='radio' className='custom-radio' value={value} {...register('OI.firstRowRadio')} disabled={!isEditable} />
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

export default AnterPosterCameras