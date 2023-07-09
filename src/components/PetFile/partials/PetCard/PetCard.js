import React from 'react'
import './petCard.css'
import EditPetModal from '../../../EditPetModal/EditPetModal'

const PetCard = ({ dataToShow }) => {
  return (
    <section className='card card-width custom-shadow'>
      <h2 id='pet-name' className='card-title text-center my-2'>{dataToShow.pet?.name}</h2>
      <div className='card-body'>
        <p>{`${dataToShow.pet.specie} - ${dataToShow.pet.sex}`}</p>
        <small for="pet-owner">Dueño/a:</small>
        <h5 id="pet-owner">{dataToShow.owner?.fullname}</h5>
        <small for="owner-phones">Teléfono/s:</small>
        <p id="owner-phones">{dataToShow.owner?.phones}</p>
        <small for="derivation">Derivado por:</small>
        <p id="derivation">{dataToShow.pet?.derivedBy || 'Sin datos'}</p>
      </div>
      
      <button title="Editar datos" className="edit-btn cst-position" data-bs-toggle="modal" data-bs-target="#editPetModal">
        <i class="bi bi-pencil-square"></i>
      </button>
    </section>
  )
}

export default PetCard
