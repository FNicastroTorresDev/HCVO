import React from 'react'
import './addPetOwnerButtons.css'

const AddPetOwnerButtons = () => {
  return (
    <div className='mt-3 d-flex'>
      <button className='mx-2 addButtons' data-bs-toggle="modal" data-bs-target="#addOwnerModal" >
        + Nuevo/a Dueño/a
      </button>
      
      <button className='mx-2 addButtons' data-bs-toggle="modal" data-bs-target="#addPetModal">
        + Nueva Mascota
      </button>
    </div>
  )
}

export default AddPetOwnerButtons