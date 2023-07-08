import React, { useEffect, useState } from 'react'
import EditButton from '../../../../../EditButton/EditButton'
import { useForm } from 'react-hook-form'

const VisionInfo = ({ id, idForm, toShow, editData }) => {
  const [ editable, setEditable ] = useState(false)
  const { register, handleSubmit, reset } = useForm({
    defaultValues: toShow
  })

  useEffect(() => {
    reset(toShow || {})
  }, [reset, toShow])
  
  const onSubmit = data => {
    editData(id, data)
  }

  return (
    <section id={id} className='card p-2 my-2 margin-fondo'>
      <h4 className='fs-5'>Visión</h4>
      <form id={idForm} onSubmit={handleSubmit(onSubmit)}>
        <table className='eyeTable'>
          <tr onSubmitclassName='other-justi'>
            <div className='d-flex'>
              <label for='diaVision'>Día:</label>
              <input id='diaVision' type='text' {...register('dia')} disabled={!editable} />
            </div>
            <div className='d-flex'>
              <label for='nocheVision'>Noche:</label>
              <input id='nocheVision' type='text' {...register('noche')} disabled={!editable} />
            </div>
            <div className='d-flex'>
              <label for='desorVision'>Desorientación:</label>
              <input id='desorVision' type='text' {...register('desorientacion')} disabled={!editable} />
            </div>
          </tr>
        </table>
      </form>
      <EditButton idForm={idForm} isEditable={setEditable} />
    </section>
  )
}

export default VisionInfo