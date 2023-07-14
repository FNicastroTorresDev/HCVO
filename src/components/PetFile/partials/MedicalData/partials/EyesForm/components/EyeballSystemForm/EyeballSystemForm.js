import React from 'react'
import './eyeballSystemForm.css'
import { useFormContext } from 'react-hook-form'

const EyeballSystemForm = () => {
  const { register } = useFormContext()

  return (
    <div className='container'>
      <div className='row p-2 margin-fondo'>
        <div id='eyeballSys-od' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo derecho</caption>
            <tr className='other-justi'>
              {['normal','desviado','atrofia'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('sistGloboOcular.OD.firstRowRadio')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              {['exoft.','enoft.','microft.','buft.'].map( value => (
                <small>
                  <input key={value} type='checkbox' value={value} {...register('sistGloboOcular.OD.secondRowRadio')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>r.p. directo</b>
              {['2 seg','lento','nulo'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('sistGloboOcular.OD.rpDirecto')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>r.p. const. OD→OI</b>
              {['2 seg','lento','nulo'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('sistGloboOcular.OD.rpConst')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>deslumbramiento</b>
              {['+','-'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('sistGloboOcular.OD.deslum')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>amenaza</b>
              {['+','-'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('sistGloboOcular.OD.amenaza')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>deambulación</b>
              {['+','-'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('sistGloboOcular.OD.deambula')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>pio</b>
              <input type='text' {...register('sistGloboOcular.OD.pioComment')} />
              {['↓','↑'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('sistGloboOcular.OD.pio')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>pres. retrobul.</b>
              {['↓','↑'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('sistGloboOcular.OD.presRetro')} />
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
                  <input key={value} type='radio' value={value} {...register('sistGloboOcular.OI.firstRowRadio')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              {['exoft.','enoft.','microft.','buft.'].map( value => (
                <small>
                  <input key={value} type='checkbox' value={value} {...register('sistGloboOcular.OI.secondRowRadio')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>r.p. directo</b>
              {['2 seg','lento','nulo'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('sistGloboOcular.OI.rpDirecto')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>r.p. const. OD→OI</b>
              {['2 seg','lento','nulo'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('sistGloboOcular.OI.rpConst')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>deslumbramiento</b>
              {['+','-'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('sistGloboOcular.OI.deslum')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>amenaza</b>
              {['+','-'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('sistGloboOcular.OI.amenaza')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>deambulación</b>
              {['+','-'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('sistGloboOcular.OI.deambula')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>pio</b>
              <input type='text' {...register('sistGloboOcular.OI.pioComment')} />
              {['↓','↑'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('sistGloboOcular.OI.pio')} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>pres. retrobul.</b>
              {['↓','↑'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('sistGloboOcular.OI.presRetro')} />
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

export default EyeballSystemForm