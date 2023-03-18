import React from 'react'
import EditButton from '../../../../../EditButton/EditButton'

const VisionInfo = () => {
  return (
    <section id="vision" className='card p-2 my-2 margin-fondo'>
      <h4 className='fs-5'>Visión</h4>
      <div className='d-flex flex-wrap'>
        <div className='d-flex'>
          <label className='fw-bold' for="dia">Día:</label>
          <input className='mx-1' id='dia' disabled placeholder='Lorem ipsum.'/>
        </div>
        <div className='d-flex'>
          <label className='fw-bold' for="noche">Noche:</label>
          <input className='mx-1' id='noche' disabled placeholder='Lorem ipsum.'/>
        </div>
        <div className='d-flex'>
          <label className='fw-bold' for="desorientacion">Desorientación:</label>
          <input className='mx-1' id='desorientacion' disabled placeholder='Lorem ipsum.'/>
        </div>
      </div>
      <EditButton />
    </section>
  )
}

export default VisionInfo