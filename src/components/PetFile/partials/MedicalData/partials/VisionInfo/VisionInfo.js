import React from 'react'
import { useFormContext } from 'react-hook-form'

const VisionInfo = ({ id }) => {
  const { register } = useFormContext()

  return (
    <section id={id} className='card p-2 my-2 margin-fondo'>
      <h4 className='fs-5'>Visión</h4>
      <div>
        <table className='eyeTable'>
          <tr onSubmitclassName='other-justi'>
            <div className='d-flex'>
              <label for='diaVision'>Día:</label>
              <input id='diaVision' type='text' {...register(`${id}.dia`)} />
            </div>
            <div className='d-flex'>
              <label for='nocheVision'>Noche:</label>
              <input id='nocheVision' type='text' {...register(`${id}.noche`)} />
            </div>
            <div className='d-flex'>
              <label for='desorVision'>Desorientación:</label>
              <input id='desorVision' type='text' {...register(`${id}.desorientacion`)} />
            </div>
          </tr>
        </table>
      </div>
    </section>
  )
}

export default VisionInfo