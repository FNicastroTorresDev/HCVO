import React from 'react'
import EditButton from '../../../../EditButton/EditButton'

const VisionInfo = () => {
  return (
    <details id="vision" className='card p-2 my-2 margin-fondo'>
      <summary className='fs-5'>Visión</summary>
      <div className='d-flex flex-wrap'>
        <div className='d-flex'>
          <label className='fw-bold' for="dia">Día:</label>
          <p className='mx-2' id='dia'>Lorem ipsum.</p>
        </div>
        <div className='d-flex'>
          <label className='fw-bold' for="noche">Noche:</label>
          <p className='mx-2' id='noche'>Lorem ipsum.</p>
        </div>
        <div className='d-flex'>
          <label className='fw-bold' for="desorientacion">Desorientación:</label>
          <p className='mx-2' id='desorientacion'>Lorem ipsum.</p>
        </div>
      </div>
      <EditButton />
    </details>
  )
}

export default VisionInfo