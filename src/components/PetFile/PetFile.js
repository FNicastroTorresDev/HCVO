import React, { useState, useEffect } from 'react'
import { MedicalData } from './partials/MedicalData/MedicalData'
import PetCard from './partials/PetCard/PetCard'
import TocList from './partials/TocList/TocList'
import './petFile.css'
import QueryHistory from '../QueryHistory/QueryHistory'
import { getPetData } from '../../services/pets'
import { getMedicalData } from '../../services/medicalData'

const PetFile = ({ petId = '1' }) => {
  const [ petData, setPetData ] = useState({})

  const fetchData = async (id) => {
    const [ cardData, medicalData ] = await Promise.all([
      getPetData(id),
      getMedicalData(id)
    ])
    setPetData({cardData, medicalData})
  }
  
  useEffect(() => {
    fetchData(petId)
  }, [petId])

  return (
    <main className='m-3 d-flex align-items-start justify-content-start'>
      <section className='d-flex flex-column flex-lg-row align-items-center align-items-lg-start'>
        <div className='d-flex flex-column alig-items-center custom-lg-position'>
          {!petData.cardData
            ? <div className='spinner-border'></div>
            : <PetCard dataToShow={petData.cardData} />}

          <QueryHistory />
        </div>
      
        <MedicalData dataToShow={petData.medicalData}/>
        
      </section>

      <TocList />
    </main>
  )
}

export default PetFile
