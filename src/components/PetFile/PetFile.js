import React, { useState } from 'react'
import { MedicalData } from './partials/MedicalData/MedicalData'
import PetCard from './partials/PetCard/PetCard'
import TocList from './partials/TocList/TocList'
import './petFile.css'

const PetFile = () => {
  const [isOpenAnamnesis, setIsOpenAnamnesis] = useState(false)

  return (
    <main className='m-3 d-flex align-items-start justify-content-start'>
      <section className='d-flex flex-column flex-lg-row align-items-center align-items-lg-start'>
        <PetCard />

        <MedicalData isOpenAnamnesis={isOpenAnamnesis} />
      </section>

      <TocList 
        setIsOpenAnamnesis={setIsOpenAnamnesis}
      />
    </main>
  )
}

export default PetFile
