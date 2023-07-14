import React from 'react'
import { useFormContext } from 'react-hook-form'

const OrbitalAreaForm = () => {
  const { register } = useFormContext()

  return (
    <div className='container'>
      <div className='row p-2 margin-fondo'>
        <div id='orbitalArea-od' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo derecho</caption>
            <tr className='other-justi'>
              <label>ganglio mand.</label>
              <input type='text' {...register('areaOrbital.OD.ganglioMand')} />
            </tr>
          </table>
        </div>

        <div id='orbitalArea-oi' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo izquierdo</caption>
            <tr className='other-justi'>
              <label>ganglio mand.</label>
              <input type='text' {...register('areaOrbital.OI.ganglioMand')} />
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default OrbitalAreaForm