import React, { useEffect } from 'react'
import './eyeballSystemForm.css'
import { useForm } from 'react-hook-form'

const EyeballSystemForm = ({ idForm, isEditable, toShow, editData }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: toShow
  })

  useEffect(() => {
    reset(toShow || {});
  }, [reset, toShow])

  const onSubmit = data => {
    editData('sistGloboOcular', data)
  }

  return (
    <div className='container'>
      <form id={idForm} onSubmit={handleSubmit(onSubmit)} className='row p-2 margin-fondo'>
        <div id='eyeballSys-od' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo derecho</caption>
            <tr className='other-justi'>
              {['normal','desviado','atrofia'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OD.firstRowRadio')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              {['exoft.','enoft.','microft.','buft.'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OD.secondRowRadio')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>r.p. directo</b>
              {['2 seg','lento','nulo'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OD.rpDirecto')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>r.p. const. OD→OI</b>
              {['2 seg','lento','nulo'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OD.rpConst')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>deslumbramiento</b>
              {['+','-'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OD.deslum')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>amenaza</b>
              {['+','-'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OD.amenaza')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>deambulación</b>
              {['+','-'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OD.deambula')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>pio</b>
              <input type='text' {...register('OD.pioComment')} disabled={!isEditable} />
              {['↓','↑'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OD.pio')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>pres. retrobul.</b>
              {['↓','↑'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OD.presRetro')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>
          </table>
        </div>

        <div id='eyeballSys-oi' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo izquierdo</caption>
            <tr className='other-justi'>
              {['normal','desviado','atrofia'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OI.firstRowRadio')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              {['exoft.','enoft.','microft.','buft.'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OI.secondRowRadio')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>r.p. directo</b>
              {['2 seg','lento','nulo'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OI.rpDirecto')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>r.p. const. OD→OI</b>
              {['2 seg','lento','nulo'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OI.rpConst')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>deslumbramiento</b>
              {['+','-'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OI.deslum')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>amenaza</b>
              {['+','-'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OI.amenaza')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>deambulación</b>
              {['+','-'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OI.deambula')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>pio</b>
              <input type='text' {...register('OI.pioComment')} disabled={!isEditable} />
              {['↓','↑'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OI.pio')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>pres. retrobul.</b>
              {['↓','↑'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OI.presRetro')} disabled={!isEditable} />
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

export default EyeballSystemForm