import React from 'react'
import './lacrimalSystem.css'
import { useForm } from 'react-hook-form'
import { submitMedicalData } from '../../../../../../../../utils/submitForms'

const LacrimalSystem = ({ idForm, isEditable }) => {
  const { handleSubmit, register } = useForm()

  const onSubmit = (data) => {
    submitMedicalData(data)
  }

  return (
    <div className='container'>
      <form id={idForm} onSubmit={handleSubmit(onSubmit)} className='row p-2 margin-fondo'>
        <div id='sistLagr-od' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo derecho</caption>
            <tr className='other-justi'>
              {['normal', 'epifora'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OD.firsRowRadio')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>
            <tr className='other-justi'>
              <b>Schimer</b>
              <input className='number-custom' id='schimer' type='number' {...register('OD.schimer')} disabled={!isEditable} />
              <small>mm/min</small>
            </tr>
            <tr className='other-justi'>
              <b>disp. fluoresc.</b>
              <input className='number-custom' id='disp-fluor' type='number' {...register('OD.dispFluor')} disabled={!isEditable} />
              <small>" v.n. 15"</small>
            </tr>
            <tr className='other-justi'>
              <b>pasaje de fluor</b>
              <input className='number-custom' id='pasaje-fluor' type='number' {...register('OD.pasajeFluor')} disabled={!isEditable} />
              <small>' v.n. 1-5'</small>
            </tr>
            <tr className='other-justi'>
              <b>puntos</b>
              {['normal', 'cantidad'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OD.fiveRowRadio')} disabled={!isEditable} />
                  {value === 'cantidad' ? <input type='number' className='number-custom' {...register('OD.comentarioCantidad')} disabled={!isEditable} /> : value}
                </small>
              ))}
            </tr>
            <tr className='other-justi'>
              <b>cateterismo</b>
              {['+','-'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OD.lastRowRadio')} disabled={!isEditable} />
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
                  <input key={value} type='radio' value={value} {...register('OI.firsRowRadio')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>
            <tr className='other-justi'>
              <b>Schimer</b>
              <input className='number-custom' id='schimer' type='number' {...register('OI.schimer')} disabled={!isEditable} />
              <small>mm/min</small>
            </tr>
            <tr className='other-justi'>
              <b>disp. fluoresc.</b>
              <input className='number-custom' id='disp-fluor' type='number' {...register('OI.dispFluor')} disabled={!isEditable} />
              <small>" v.n. 15"</small>
            </tr>
            <tr className='other-justi'>
              <b>pasaje de fluor</b>
              <input className='number-custom' id='pasaje-fluor' type='number' {...register('OI.pasajeFluor')} disabled={!isEditable} />
              <small>' v.n. 1-5'</small>
            </tr>
            <tr className='other-justi'>
              <b>puntos</b>
              {['normal', 'cantidad'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OI.fiveRowRadio')} disabled={!isEditable} />
                  {value === 'cantidad' ? <input type='number' className='number-custom' {...register('OI.comentarioCantidad')} disabled={!isEditable} /> : value}
                </small>
              ))}
            </tr>
            <tr className='other-justi'>
              <b>cateterismo</b>
              {['+','-'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OI.lastRowRadio')} disabled={!isEditable} />
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

export default LacrimalSystem