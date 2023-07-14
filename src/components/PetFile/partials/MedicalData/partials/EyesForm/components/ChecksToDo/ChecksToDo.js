import React from 'react'
import { useFormContext } from 'react-hook-form'

const ChecksToDo = () => {
  const { register } = useFormContext()

  return (
    <div className='container'>
      <div className='row p-2 margin-fondo'>
        <table className='eyeTable'>
          <caption>análisis</caption>
          <tr className='other-justi'>
            {['hemograma','uremia','creatinina','glucemia','GOT','GPT','FAS','PIF-VIF-VILEF'].map( value => (
              <small>
                <input key={value} type='checkbox' value={value} {...register('estudiosARealizar.analisisFirstRow')} />
                {value}
              </small>
            ))}
          </tr>

          <tr className='other-justi'>
            {['toxoplasmosis','leptospirosis','criptococosis','neosporidiosis','brucelosis','lehismaniasis'].map( value => (
              <small>
                <input key={value} type='checkbox' value={value} {...register('estudiosARealizar.analisisSecondRow')} />
                {value}
              </small>
            ))}
          </tr>

          <tr className='other-justi'>
            <small>
              <input key='ecografia' type='checkbox' value='ecografia' {...register('estudiosARealizar.ecografiaCheckbox')} />
              ecografía
            </small>

            <input type='text' {...register('estudiosARealizar.ecoComentario')} />
          </tr>

          <tr className='other-justi'>
            <small>
              <input key='electro' type='checkbox' value='electro' {...register('estudiosARealizar.electroCheck')} />
              electrocardiograma: evaluar riesgos
            </small>

            <input type='text' {...register('estudiosARealizar.electroComentario')} />
          </tr>
        </table>
      </div>
    </div>
  )
}

export default ChecksToDo