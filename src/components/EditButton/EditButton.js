import React, { useState } from 'react'
import './editButton.css'

const EditButton = () => {

  const [editActive, setEditActive]  = useState(false)

  const editIsActive = () => {
    let newState
    editActive
    ? newState = false
    : newState = true
    setEditActive(newState)
  }

  return (
    !editActive
    ? <button title="Editar datos" className="edit-btn cst-position" onClick={editIsActive}><i class="bi bi-pencil-square"></i></button>
    : <div className='d-flex cst-position'>
        <button title="Confirmar" className="confirm-btn"><i class="bi bi-check-lg"></i></button>
        <button title="Cancelar" className='cancel-btn' onClick={editIsActive}><i class="bi bi-x-lg"></i></button>
      </div>
  )
}

export default EditButton
