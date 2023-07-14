import React from 'react'
import { useFormContext } from 'react-hook-form'

const Iris = () => {
  const { register } = useFormContext()

  return (
    <div className='container'>
      <div className='row p-2 margin-fondo'>
        <div id='iris-od' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo derecho</caption>
            <tr className='other-justi'>
              <b>color</b>
              {['normal','comentario'].map( value => (
                <small>
                  <input key={value} type='checkbox' value={value} {...register('iris.OD.firstRowCheckboxs')} />
                  {value === 'comentario' ? <input type='text' {...register('iris.OD.comentarioColor')} /> : value}
                </small>
              ))}
            </tr>

            <tr className='other-just'>
              <b>pupila</b>
              {['normal','irregular','midriasis','miosis'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('iris.OD.secondoRowradio')} />
                  {value}
                </small>
              ))}
            </tr>
            
            <tr className='other-justi'>
              {['atrofia','iridonesis','sinequias','m. pupilar'].map( value => (
                <small>
                  <input key={value} type='checkbox' value={value} {...register('iris.OD.thirdRowCheckboxs')} />
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
                  <input key={value} type='checkbox' value={value} {...register('iris.OI.firstRowCheckboxs')} />
                  {value === 'comentario' ? <input type='text' {...register('iris.OI.comentarioColor')} /> : value}
                </small>
              ))}
            </tr>

            <tr className='other-just'>
              <b>pupila</b>
              {['normal','irregular','midriasis','miosis'].map( value => (
                <small>
                  <input key={value} type='radio' value={value} {...register('iris.OI.secondoRowradio')} />
                  {value}
                </small>
              ))}
            </tr>
            
            <tr className='other-justi'>
              {['atrofia','iridonesis','sinequias','m. pupilar'].map( value => (
                <small>
                  <input key={value} type='checkbox' value={value} {...register('iris.OI.thirdRowCheckboxs')} />
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

export default Iris