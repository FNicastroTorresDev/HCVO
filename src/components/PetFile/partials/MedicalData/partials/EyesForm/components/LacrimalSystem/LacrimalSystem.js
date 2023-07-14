import React from 'react'
import './lacrimalSystem.css'
import { useFormContext } from 'react-hook-form'

const LacrimalSystem = () => {
  const { register } = useFormContext()

  return (
    <div className='container'>
      <div className='row p-2 margin-fondo'>
        <div id='sistLagr-od' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo derecho</caption>
            <tr className='other-justi'>
              {['normal', 'epifora'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('sistLagrimal.OD.firsRowRadio')} />
                  {value}
                </small>
              ))}
            </tr>
            <tr className='other-justi'>
              <b>Schimer</b>
              <input className='number-custom' id='schimer' type='number' {...register('sistLagrimal.OD.schimer')} />
              <small>mm/min</small>
            </tr>
            <tr className='other-justi'>
              <b>disp. fluoresc.</b>
              <input className='number-custom' id='disp-fluor' type='number' {...register('sistLagrimal.OD.dispFluor')} />
              <small>" v.n. 15"</small>
            </tr>
            <tr className='other-justi'>
              <b>pasaje de fluor</b>
              <input className='number-custom' id='pasaje-fluor' type='number' {...register('sistLagrimal.OD.pasajeFluor')} />
              <small>' v.n. 1-5'</small>
            </tr>
            <tr className='other-justi'>
              <b>puntos</b>
              {['normal', 'cantidad'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('sistLagrimal.OD.fiveRowRadio')}  />
                  {value === 'cantidad' ? <input type='text' {...register('sistLagrimal.OD.comentarioCantidad')}  /> : value}
                </small>
              ))}
            </tr>
            <tr className='other-justi'>
              <b>cateterismo</b>
              {['+','-'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('sistLagrimal.OD.lastRowRadio')} />
                  {value}
                </small>
              ))}
            </tr>
          </table>
        </div>

        <div id='sistLagr-oi' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo izquierdo</caption>
            <tr className='other-justi'>
              {['normal', 'epifora'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('sistLagrimal.OI.firsRowRadio')} />
                  {value}
                </small>
              ))}
            </tr>
            <tr className='other-justi'>
              <b>Schimer</b>
              <input className='number-custom' id='schimer' type='number' {...register('sistLagrimal.OI.schimer')} />
              <small>mm/min</small>
            </tr>
            <tr className='other-justi'>
              <b>disp. fluoresc.</b>
              <input className='number-custom' id='disp-fluor' type='number' {...register('sistLagrimal.OI.dispFluor')} />
              <small>" v.n. 15"</small>
            </tr>
            <tr className='other-justi'>
              <b>pasaje de fluor</b>
              <input className='number-custom' id='pasaje-fluor' type='number' {...register('sistLagrimal.OI.pasajeFluor')} />
              <small>' v.n. 1-5'</small>
            </tr>
            <tr className='other-justi'>
              <b>puntos</b>
              {['normal', 'cantidad'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('sistLagrimal.OI.fiveRowRadio')} />
                  {value === 'cantidad' ? <input type='text' {...register('sistLagrimal.OI.comentarioCantidad')}  /> : value}
                </small>
              ))}
            </tr>
            <tr className='other-justi'>
              <b>cateterismo</b>
              {['+','-'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('sistLagrimal.OI.lastRowRadio')} />
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

export default LacrimalSystem