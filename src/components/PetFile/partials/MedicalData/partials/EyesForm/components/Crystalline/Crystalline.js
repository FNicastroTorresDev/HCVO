import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const Crystalline = ({ idForm, isEditable, toShow, editData }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: toShow
  })

  useEffect(() => {
    reset(toShow || {});
  }, [reset, toShow])

  const onSubmit = data => {
    editData('cristalino', data)
  }

  return (
    <div className='container'>
      <form id={idForm} onSubmit={handleSubmit(onSubmit)} className='row p-2 margin-fondo'>
        <div id='cristalino-od' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo derecho</caption>
            <tr className='other-justi'>
              {['normal','subluxuacion','esclerosis senil'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OD.firsRowRadio')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>luxación</b>
              {['anterior','posterior'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OD.secondRowRadio')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <small>
                <input key='catarata' type='checkbox' value='catarata' {...register('OD.catarataCheckbox')} disabled={!isEditable}/>
                catarata
              </small>
              <input type='text' {...register('OD.catarataComentario')} disabled={!isEditable}/>
            </tr>
          </table>
        </div>

        <div id='cristalino-oi' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo izquierdo</caption>
            <tr className='other-justi'>
              {['normal','subluxuacion','esclerosis senil'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OI.firsRowRadio')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <b>luxación</b>
              {['anterior','posterior'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OI.secondRowRadio')} disabled={!isEditable} />
                  {value}
                </small>
              ))}
            </tr>

            <tr className='other-justi'>
              <small>
                <input key='catarata' type='checkbox' value='catarata' {...register('OI.catarataCheckbox')} disabled={!isEditable}/>
                catarata
              </small>
              <input type='text' {...register('OI.catarataComentario')} disabled={!isEditable}/>
            </tr>
          </table>
        </div>
      </form>
    </div>
  )
}

export default Crystalline