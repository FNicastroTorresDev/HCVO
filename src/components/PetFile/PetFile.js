import React from 'react'
import './petFile.css'
import PetCard from './partials/PetCard/PetCard'
import { MedicalData } from './partials/MedicalData/MedicalData'
import TocList from './partials/TocList/TocList'

const PetFile = () => {
  return (
    <main className='m-3 d-flex align-items-start justify-content-start'>
      <section className='d-flex flex-column flex-lg-row align-items-center align-items-lg-start'>
        <PetCard />

        <MedicalData />
      </section>

      <TocList />
    </main>
  )
}

export default PetFile
