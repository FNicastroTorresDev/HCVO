import React from 'react'
import { useForm } from 'react-hook-form'


const Conjunctivae = ({ idForm, isEditable }) => {
  const { register, handleSubmit } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div className='container'>
      <form id={idForm} onSubmit={handleSubmit(onSubmit)} className='row p-2 margin-fondo'>
        <div id='conjuntivae-od' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo derecho</caption>
            <tr className='other-justi'>
              {['normales','vasos sup.','vasos prof.'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('OD.firstRowCheckbox')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              {['quemosis','foliculos'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('OD.secondRowCheckbox')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>secreciones</b>
              {['acuosa','mucoide','purulenta'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('OD.secreciones')} disabled={!isEditable} />
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
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('OI.firstRowCheckbox')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              {['quemosis','foliculos'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('OI.secondRowCheckbox')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>secreciones</b>
              {['acuosa','mucoide','purulenta'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('OI.secreciones')} disabled={!isEditable} />
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

export default Conjunctivae