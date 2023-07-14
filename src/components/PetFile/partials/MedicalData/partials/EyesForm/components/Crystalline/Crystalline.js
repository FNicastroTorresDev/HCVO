import React from 'react'
import { useFormContext } from 'react-hook-form'

const Crystalline = () => {
  const { register } = useFormContext()

  return (
    <div className='container'>
      <div className='row p-2 margin-fondo'>
        <div id='cristalino-od' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo derecho</caption>
            <tr className='other-justi'>
              {['normal','subluxuacion','esclerosis senil'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('cristalino.OD.firsRowRadio')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>luxación</b>
              {['anterior','posterior'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('cristalino.OD.secondRowRadio')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <small>
                <input key='catarata' type='checkbox' value='catarata' {...register('cristalino.OD.catarataCheckbox')} />
                catarata
              </small>
              <input type='text' {...register('cristalino.OD.catarataComentario')} />
            </tr>
          </table>
        </div>

        <div id='cristalino-oi' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo izquierdo</caption>
            <tr className='other-justi'>
              {['normal','subluxuacion','esclerosis senil'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('cristalino.OI.firsRowRadio')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>luxación</b>
              {['anterior','posterior'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('cristalino.OI.secondRowRadio')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <small>
                <input key='catarata' type='checkbox' value='catarata' {...register('cristalino.OI.catarataCheckbox')} />
                catarata
              </small>
              <input type='text' {...register('cristalino.OI.catarataComentario')} />
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Crystalline