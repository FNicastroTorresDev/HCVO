import React from 'react'
import { useFormContext } from 'react-hook-form'


const Conjunctivae = () => {
  const { register } = useFormContext()

  return (
    <div className='container'>
      <div className='row p-2 margin-fondo'>
        <div id='conjuntivae-od' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo derecho</caption>
            <tr className='other-justi'>
              {['normales','vasos sup.','vasos prof.'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('conjuntivas.OD.firstRowCheckbox')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              {['quemosis','foliculos'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('conjuntivas.OD.secondRowCheckbox')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>secreciones</b>
              {['acuosa','mucoide','purulenta'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('conjuntivas.OD.secreciones')} />
                  {value}
                </small>
              ))}
            </tr>
          </table>
        </div>

        <div id='conjuntivae-oi' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo izquierdo</caption>
            <tr className='other-justi'>
              {['normales','vasos sup.','vasos prof.'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('conjuntivas.OI.firstRowCheckbox')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              {['quemosis','foliculos'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('conjuntivas.OI.secondRowCheckbox')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>secreciones</b>
              {['acuosa','mucoide','purulenta'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('conjuntivas.OI.secreciones')} />
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

export default Conjunctivae