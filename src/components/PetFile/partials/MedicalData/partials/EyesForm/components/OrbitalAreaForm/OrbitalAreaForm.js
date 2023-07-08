import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const OrbitalAreaForm = ({ idForm, isEditable, toShow, editData }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: toShow
  })

  useEffect(() => {
    reset(toShow || {})
  }, [reset, toShow])

  const onSubmit = data => {
    editData('areaOrbital', data)
  }

  return (
    <div className='container'>
      <form id={idForm} onSubmit={handleSubmit(onSubmit)} className='row p-2 margin-fondo'>
        <div id='orbitalArea-od' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo derecho</caption>
            <tr className='other-justi'>
              <label>ganglio mand.</label>
              <input type='text' {...register('OD.ganglioMand')} disabled={!isEditable} />
            </tr>
          </table>
        </div>

        <div id='orbitalArea-oi' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo izquierdo</caption>
            <tr className='other-justi'>
              <label>ganglio mand.</label>
              <input type='text' {...register('OI.ganglioMand')} disabled={!isEditable} />
            </tr>
          </table>
        </div>
      </form>
    </div>
  )
}

export default OrbitalAreaForm