import React from 'react'
import { useFormContext } from 'react-hook-form'

const ScleroticCornea = () => {
  const { register } = useFormContext()

  return (
    <div className='container'>
      <div className='row p-2 margin-fondo'>
        <div id='scleroticCornea-od' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo derecho</caption>
            <tr className='other-justi'>
              {['normal','edema','endotelitis'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('corneaEscle.OD.firstRowCheckbox')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              {['vasc.','pigm.','ulcera'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('corneaEscle.OD.secondRowCheckbox')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              {['fluoresceina','rosa de bengala'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('corneaEscle.OD.thirdRowChexbox')} />
                  {value}
                </small>
              ))}
            </tr>
          </table>
        </div>

        <div id='scleroticCornea-oi' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo izquierdo</caption>
            <tr className='other-justi'>
              {['normal','edema','endotelitis'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('corneaEscle.OI.firstRowCheckbox')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              {['vasc.','pigm.','ulcera'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('corneaEscle.OI.secondRowCheckbox')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              {['fluoresceina','rosa de bengala'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('corneaEscle.OI.thirdRowChexbox')} />
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

export default ScleroticCornea