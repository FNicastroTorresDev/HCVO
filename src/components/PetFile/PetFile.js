import React, { useState, useEffect } from 'react'
import { MedicalData } from './partials/MedicalData/MedicalData'
import PetCard from './partials/PetCard/PetCard'
import TocList from './partials/TocList/TocList'
import './petFile.css'
import QueryHistory from '../QueryHistory/QueryHistory'
import getPetData from '../../utils/getPetData'
import getMedicalData from '../../utils/getMedicalData'

const PetFile = ({ petId = '1' }) => {
  const [ data, setData ] = useState()

  const fetchData = async (id) => {
    const [ cardData, medicalData ] = await Promise.all([
      getPetData(id),
      getMedicalData(id)
    ])
    setData({cardData, medicalData})
  }
  
  useEffect(() => {
    fetchData(petId)
    
  }, [petId])

  if (!data) {
    return <h3 className='text-white text-center mt-3'>
      Cargando datos...
    </h3>
  }

  return (
    <main className='m-3 d-flex align-items-start justify-content-start'>
      <section className='d-flex flex-column flex-lg-row align-items-center align-items-lg-start'>
        <div className='d-flex flex-column custom-lg-position'>
          <PetCard dataToShow={data.cardData} />

          <QueryHistory />
        </div>
      
        <MedicalData dataToShow={data.medicalData.data}/>
      </section>

      <TocList />
    </main>
  )
}

export default PetFile
