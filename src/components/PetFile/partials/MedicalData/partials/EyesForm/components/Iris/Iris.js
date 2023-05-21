import React from 'react'
import { useForm } from 'react-hook-form'

const Iris = ({ idForm, isEditable }) => {
  const { register, handleSubmit } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div className='container'>
      <form id={idForm} onSubmit={handleSubmit(onSubmit)} className='row p-2 margin-fondo'>
        <div id='iris-od' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo derecho</caption>
            <tr className='other-justi'>
              <b>color</b>
              {['normal','comentario'].map( value => (
                <small>
                  <input key={value} type='checkbox' value={value} {...register('OD.firstRowCheckboxs')} disabled={!isEditable}/>
                  {value === 'comentario' ? <input type='text' {...register('OD.comentarioColor')} disabled={!isEditable}/> : value}
                </small>
              ))}
            </tr>

            <tr className='other-just'>
              <b>pupila</b>
              {['normal','irregular','midriasis','miosis'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OD.secondoRowradio')} disabled={!isEditable}/>
                  {value}
                </small>
              ))}
            </tr>
            
            <tr className='other-justi'>
              {['atrofia','iridonesis','sinequias','m. pupilar'].map( value => (
                <small>
                  <input key={value} type='checkbox' value={value} {...register('OD.thirdRowCheckboxs')} disabled={!isEditable}/>
                  {value}
                </small>
              ))}
            </tr>
          </table>
        </div>

        <div id='iris-oi' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo izquierdo</caption>
            <tr className='other-justi'>
              <b>color</b>
              {['normal','comentario'].map( value => (
                <small>
                  <input key={value} type='checkbox' value={value} {...register('OI.firstRowCheckboxs')} disabled={!isEditable}/>
                  {value === 'comentario' ? <input type='text' {...register('OI.comentarioColor')} disabled={!isEditable}/> : value}
                </small>
              ))}
            </tr>

            <tr className='other-just'>
              <b>pupila</b>
              {['normal','irregular','midriasis','miosis'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('OI.secondoRowradio')} disabled={!isEditable}/>
                  {value}
                </small>
              ))}
            </tr>
            
            <tr className='other-justi'>
              {['atrofia','iridonesis','sinequias','m. pupilar'].map( value => (
                <small>
                  <input key={value} type='checkbox' value={value} {...register('OI.thirdRowCheckboxs')} disabled={!isEditable}/>
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

export default Iris