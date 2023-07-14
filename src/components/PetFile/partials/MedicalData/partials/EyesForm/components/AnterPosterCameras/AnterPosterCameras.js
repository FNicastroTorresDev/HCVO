import React from 'react'
import { useFormContext } from 'react-hook-form'

const AnterPosterCameras = () => {
  const { register } = useFormContext()

  return (
    <div className='container'>
      <div className='row p-2 margin-fondo'>
        <div id='camAntPost-od' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo derecho</caption>
            <tr className='other-justi'>
              {['normal','desviado','atrofia','exoft'].map( value => (
                <small>
                  <input key={value} type='radio' className='custom-radio' value={value} {...register('camAntYPost.OD.firstRowRadio')} />
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
                  <input key={value} type='radio' className='custom-radio' value={value} {...register('camAntYPost.OI.firstRowRadio')} />
                  {value}
                </small>
              ))}
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AnterPosterCameras