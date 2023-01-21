import React from 'react'
import './petFile.css'
import PetCard from '../PetCard/PetCard'
import { MedicalData } from '../MedicalData/MedicalData'
import TocList from '../TocList/TocList'

const PetFile = () => {
  return (
    <main className='m-3 d-flex align-items-start justify-content-start'>
      <section className='d-flex flex-column flex-lg-row align-items-center'>
        <PetCard />

        <MedicalData />
      </section>

      <TocList />
    </main>
  )
}

export default PetFile
