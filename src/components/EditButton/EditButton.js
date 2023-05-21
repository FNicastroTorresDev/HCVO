import React, { useState } from 'react'
import './editButton.css'

const EditButton = ({ idForm, isEditable }) => {

  const [ isActive, setIsActive ] = useState(false)

  function editIsActive() {
    const newState = !isActive
    setIsActive(newState)
    isEditable(newState)
  }

  return (
    !isActive
    ? <button title="Editar datos" className="edit-btn cst-position" onClick={editIsActive}><i class="bi bi-pencil-square"></i></button>
    : <div className='d-flex cst-position'>
        <button type="submit" form={idForm} title="Confirmar" className="confirm-btn"><i class="bi bi-check-lg"></i></button>
        <button title="Cancelar" className='cancel-btn' onClick={editIsActive}><i class="bi bi-x-lg"></i></button>
      </div>
  )
}

export default EditButton
