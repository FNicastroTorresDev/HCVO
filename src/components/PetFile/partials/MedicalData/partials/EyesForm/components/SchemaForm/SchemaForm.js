import React, { useState } from 'react'
import CanvasDraw from 'react-canvas-draw'
import './schemaForm.css'
import backImg from './esquema-dibujo.jpg'
import { useFormContext } from 'react-hook-form'
import Swal from 'sweetalert2'

const SchemaForm = ({ canvasSchema }) => {
  
  const [ brushColour, setBrushColour ] = useState('red')

  const { register } = useFormContext()

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

  const changeColour = () => {
    if (brushColour === 'red') {
      setBrushColour('blue')
    } else {
      setBrushColour('red')
    }
  }

  return (
    <>
      <div>
        <CanvasDraw
          className='border'
          ref={canvasSchema} 
          brushRadius={1} 
          brushColor={brushColour} 
          catenaryColor={brushColour}
          imgSrc={backImg}
          hideGrid={true} 
          canvasWidth={800}
          canvasHeight={380}
        />
        <button type='button' className='canvas-btn' onClick={undoDrawA}>Deshacer</button>
        <button type='button' className='canvas-btn' onClick={clearDrawA}>Limpiar</button>
        <button type='button' className='canvas-btn' onClick={changeColour}>Cambiar Color</button>
        <small>(azul para control) (presionar botón morado para dibujar.)</small>
      </div>

      <div className='d-flex flex-column justify-content-center'>
        <div className='row'>
          <div id='schema-od' className='col-6'>
            <table className='eyeTable'>
              <caption>ojo derecho</caption>
              <tr className='d-flex flex-column align-items-center'>
                {['retina','coroides','humor vítreo'].map( value => (
                  <small>
                    {value}
                    <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('esquema.OD.rowCheckbox')} />
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
                    <input key={value} type='checkbox' className='custom-checkbox' value={value} {...register('esquema.OI.rowCheckbox')} />
                    <b>normal</b>
                  </small>
                ))}
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default SchemaForm