import React from 'react'
import { useFormContext } from 'react-hook-form'

const ThirdEyelid = () => {
  const { register } = useFormContext()

  return (
    <div className='container'>
      <div className='row p-2 margin-fondo'>
        <div id='thirdEyelid-od' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo derecho</caption>
            <tr className='other-justi'>
              {['protr. glan.','hipertr. glan.','reversion'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('tercerParpado.OD.rowCheckbox')} />
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
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('tercerParpado.OI.rowCheckbox')} />
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

export default ThirdEyelid