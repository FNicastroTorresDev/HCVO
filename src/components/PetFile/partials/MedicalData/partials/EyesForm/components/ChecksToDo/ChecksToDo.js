import React from 'react'
import { useForm } from 'react-hook-form'

const ChecksToDo = ({ idForm, isEditable }) => {
  const { register, handleSubmit } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div className='container'>
      <form id={idForm} onSubmit={handleSubmit(onSubmit)} className='row p-2 margin-fondo'>
        <table className='eyeTable'>
          <caption>análisis</caption>
          <tr className='other-justi'>
            {['hemograma','uremia','creatinina','glucemia','GOT','GPT','FAS','PIF-VIF-VILEF'].map( value => (
              <small>
                <input key={value} type='checkbox' value={value} {...register('analisisFirstRow')} disabled={!isEditable} />
                {value}
              </small>
            ))}
          </tr>

          <tr className='other-justi'>
            {['toxoplasmosis','leptospirosis','criptococosis','neosporidiosis','brucelosis','lehismaniasis'].map( value => (
              <small>
                <input key={value} type='checkbox' value={value} {...register('analisisSecondRow')} disabled={!isEditable} />
                {value}
              </small>
            ))}
          </tr>

          <tr className='other-justi'>
            <small>
              <input key='ecografia' type='checkbox' value='ecografia' {...register('ecografiaCheckbox')} disabled={!isEditable}/>
              ecografía
            </small>

            <input type='text' {...register('ecoComentario')} disabled={!isEditable}/>
          </tr>

          <tr className='other-justi'>
            <small>
              <input key='electro' type='checkbox' value='electro' {...register('electroCheck')} disabled={!isEditable}/>
              electrocardiograma: evaluar riesgos
            </small>

            <input type='text' {...register('electroComentario')} disabled={!isEditable}/>
          </tr>
        </table>
      </form>
    </div>
  )
}

export default ChecksToDo