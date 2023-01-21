import React from 'react'
import EditButton from '../EditButton/EditButton'
import './petCard.css'

const PetCard = () => {
  return (
    <section className='card card-width custom-shadow'>
      <h2 id='pet-name' className='card-title text-center my-2'>Firulais</h2>
      <div className='card-body'>
        <small for="pet-owner">Dueño/a:</small>
        <h5 id="pet-owner">Juan Pérez</h5>
        <small for="owner-phones">Teléfono/s:</small>
        <p id="owner-phones">388 5xxxxxx - 381 4xxxxxx</p>
        <small for="derivation">Derivado por:</small>
        <p id="derivation">Dr. Ramón Falcón</p>
      </div>
      <EditButton />
    </section>
  )
}

export default PetCard
