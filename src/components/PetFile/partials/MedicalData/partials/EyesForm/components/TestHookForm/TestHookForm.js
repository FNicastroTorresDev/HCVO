import React from 'react'
import { useForm } from 'react-hook-form'
import { submitMedicalData } from '../../../../../../../../utils/submitForms'

const TestHookForm = ({ isEditable, idForm }) => {

  const {  handleSubmit, register } = useForm({
    defaultValues: {
      OD: {
        nombre: 'Texto por defecto',
        radioTest: 'Anomalía',
        checkboxTest: ['No'],
        textTest: 'Texto por defecto 2',
      },
      OI: {
        nombre: 'Texto por defecto 2',
        radioTest: 'Normal',
        checkboxTest: ['Yes'],
        textTest: 'Texto por defecto 4'
      }
    }
  })

  const onSubmit = data => {
    submitMedicalData(data)
  }

  return (
    <div className='container'>
      <form id={idForm} onSubmit={handleSubmit(onSubmit)} className="row p-2 margin-fondo">
        <div id='test-od' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo derecho</caption>
            <tr>
              <label for='name'>Nombre: </label>
              <input id='name' type='text' {...register('OD.nombre')} disabled={!isEditable} />
            </tr>
            <tr>
              <label for='options'>Options: </label>
              {['Normal', 'Atrofia', 'Anomalía'].map( value => (
                <div>
                  <input key={value} type="radio" value={value} {...register("OD.radioTest")} disabled={!isEditable} />
                  {value}
                </div>
              ))}
            </tr>
            <tr>
              <label for='checkboxs'>Checkboxs: </label>
              {['Yes', 'No'].map( value => (
                <div>
                  <input key={value} type="checkbox" value={value} {...register("OD.checkboxTest")} disabled={!isEditable} />
                  {value}
                </div>
              ))}
            </tr>
            <tr>
              <label for='text-area'>Text area:</label>
              <textarea id='text-area' {...register('OD.textTest')} disabled={!isEditable}/>
            </tr>
          </table>
        </div>
        
        <div id='test-oi' className='col-6'>
          <table className='eyeTable'>
            <caption>ojo Izquierdo</caption>
            <tr>
              <label for='name'>Nombre: </label>
              <input id='name' type='text' {...register('OI.nombre')} disabled={!isEditable} />
            </tr>
            <tr>
              <label for='options'>Options: </label>
              {['Normal', 'Atrofia', 'Anomalía'].map( value => (
                <div>
                  <input key={value} type="radio" value={value} {...register("OI.radioTest")} disabled={!isEditable} />
                  {value}
                </div>
              ))}
            </tr>
            <tr>
              <label for='checkboxs'>Checkboxs: </label>
              {['Yes', 'No'].map( value => (
                <div>
                  <input key={value} type="checkbox" value={value} {...register("OI.checkboxTest")} disabled={!isEditable} />
                  {value}
                </div>
              ))}
            </tr>
            <tr>
              <label for='text-area'>Text area:</label>
              <textarea id='text-area' {...register('OI.textTest')} disabled={!isEditable}/>
            </tr>
          </table>
        </div>
      </form>
    </div> 
  )
}

export default TestHookForm