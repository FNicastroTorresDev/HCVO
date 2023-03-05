import React, { useState } from 'react'
import { MedicalData } from './partials/MedicalData/MedicalData'
import PetCard from './partials/PetCard/PetCard'
import TocList from './partials/TocList/TocList'
import './petFile.css'
import QueryHistory from '../QueryHistory/QueryHistory'

const PetFile = () => {
  return (
    <main className='m-3 d-flex align-items-start justify-content-start'>
      <section className='d-flex flex-column flex-lg-row align-items-center align-items-lg-start'>
        <div className='d-flex flex-column'>
          <PetCard />

          <QueryHistory />
        </div>
      
        <MedicalData />
      </section>

      <TocList />
    </main>
  )
}

export default PetFile
