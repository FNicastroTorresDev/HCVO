import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const ScleroticCornea = ({ idForm, isEditable, toShow, editData }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: toShow
  })

  useEffect(() => {
    reset(toShow || {});
  }, [reset, toShow])

  const onSubmit = data => {
    editData('corneaEscle', data)
  }

  return (
    <div className='container'>
      <form id={idForm} onSubmit={handleSubmit(onSubmit)} className='row p-2 margin-fondo'>
        <div id='scleroticCornea-od' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo derecho</caption>
            <tr className='other-justi'>
              {['normal','edema','endotelitis'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('OD.firstRowCheckbox')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              {['vasc.','pigm.','ulcera'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('OD.secondRowCheckbox')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              {['fluoresceina','rosa de bengala'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('OD.thirdRowChexbox')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>
          </table>
        </div>

        <div id='scleroticCornea-oi' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo derecho</caption>
            <tr className='other-justi'>
              {['normal','edema','endotelitis'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('OI.firstRowCheckbox')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              {['vasc.','pigm.','ulcera'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('OI.secondRowCheckbox')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              {['fluoresceina','rosa de bengala'].map( value => (
                <small>
                  <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('OI.thirdRowChexbox')} disabled={!isEditable} />
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

export default ScleroticCornea