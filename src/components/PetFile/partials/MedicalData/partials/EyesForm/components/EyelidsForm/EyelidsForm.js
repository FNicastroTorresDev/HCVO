import React from 'react'
import { useFormContext } from 'react-hook-form'

const EyelidsForm = () => {
  const { register } = useFormContext()

  return (
    <div className='container'>
      <div className='row p-2 margin-fondo'>
        <div id='eyelid-od' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo derecho</caption>
            <tr className='other-justi'>
              {['normales','triquiasis','distiquiasis'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('parpados.OD.firstRowCheckbox')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              {['entropion','electropion','blefarospasmo'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('parpados.OD.secondRowCheckbox')} />
                  {value}
                </small>
              ))}
            </tr>
          </table>
        </div>

        <div id='eyelid-oi' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo izquierdo</caption>
            <tr className='other-justi'>
              {['normales','triquiasis','distiquiasis'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('parpados.OI.firstRowCheckbox')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              {['entropion','electropion','blefarospasmo'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('parpados.OI.secondRowCheckbox')} />
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

export default EyelidsForm