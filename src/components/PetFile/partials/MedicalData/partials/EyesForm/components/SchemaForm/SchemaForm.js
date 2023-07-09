import React, { useRef, useEffect } from 'react'
import CanvasDraw from 'react-canvas-draw'
import './schemaForm.css'
import backImg from './esquema-dibujo.jpg'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

const SchemaForm = ({ idForm, isEditable, toShow, editData }) => {
  const canvasSchema = useRef(null)

  const { register, handleSubmit, reset } = useForm({
    defaultValues: toShow
  })

  useEffect(() => {
    const loadData = toShow?.dataDraw || ''
    reset(toShow || {})
    if (loadData !== '') {
      canvasSchema.current.loadSaveData(loadData, true)
    }
  }, [reset, toShow])

  const onSubmit = (data) => {
    data['dataDraw'] = canvasSchema.current.getSaveData()
    editData('esquema', data)
  }

  const undoDrawA = () => {
    canvasSchema.current.undo()
  }

  const clearDrawA = () => {
    Swal.fire({
      icon: 'question',
      title: `¿Borrar todo el dibujo?`,
      confirmButtonText: `Sí`,
      showCancelButton: true,
      cancelButtonText: `Cancelar`,
    }).then( async result => {
      if (result.isConfirmed) {
        canvasSchema.current.clear()
      }
    })
  }  

  return (
    <>
      <div>
        <CanvasDraw
          className='border'
          ref={canvasSchema} 
          brushRadius={1} 
          brushColor='red' 
          catenaryColor='red'
          imgSrc={backImg}
          hideGrid={true} 
          canvasWidth={800}
          canvasHeight={380}
          disabled={!isEditable}
        />
        <button className='canvas-btn' disabled={!isEditable} onClick={undoDrawA}>Deshacer</button>
        <button className='canvas-btn' disabled={!isEditable} onClick={clearDrawA}>Limpiar</button>
        <small>(presionar botón morado para dibujar.)</small>
      </div>

      <form id={idForm} className='d-flex flex-column justify-content-center' onSubmit={handleSubmit(onSubmit)}>
        <div className='row'>
          <div id='schema-od' className='col-6'>
            <table className='eyeTable'>
              <caption>ojo derecho</caption>
              <tr className='d-flex flex-column align-items-center'>
                {['retina','coroides','humor vítreo'].map( value => (
                  <small>
                    {value}
                    <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('OD.rowCheckbox')} disabled={!isEditable} />
                    <b>normal</b>
                  </small>
                ))}
              </tr>
            </table>
          </div>

          <div id='schema-oi' className='col-6'>
            <table className='eyeTable'>
              <caption>ojo izquierdo</caption>
              <tr className='d-flex flex-column align-items-center'>
                {['retina','coroides','humor vítreo'].map( value => (
                  <small>
                    {value}
                    <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('OI.rowCheckbox')} disabled={!isEditable} />
                    <b>normal</b>
                  </small>
                ))}
              </tr>
            </table>
          </div>
        </div>
      </form>
    </>
  )
}

export default SchemaForm