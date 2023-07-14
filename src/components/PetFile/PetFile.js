import React, { useState, useEffect } from 'react'
import { MedicalData } from './partials/MedicalData/MedicalData'
import PetCard from './partials/PetCard/PetCard'
import TocList from './partials/TocList/TocList'
import EditPetModal from '../EditPetModal/EditPetModal'
import './petFile.css'
import QueryHistory from '../QueryHistory/QueryHistory'
import { getPetData } from '../../services/pets'
import { getMedicalData } from '../../services/medicalData'
import EditDataButton from './partials/EditDataButton/EditDataButton'

const PetFile = ({ petId = '1' }) => {
  const [ petData, setPetData ] = useState({})
  const [ petToEdit, setPetToEdit ] = useState({})
  const [ idData, setIdData ] = useState('')

  const fetchData = async (id) => {
    const [ cardData, medicalData ] = await Promise.all([
      getPetData(id),
      getMedicalData(id)
    ])
    setPetData({cardData, medicalData})
    setPetToEdit(cardData.pet)
    setIdData(medicalData.data._id)
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

          <EditDataButton />
          
        </div>
      
        <MedicalData dataToShow={petData.medicalData}/>
        
      </section>

      <TocList />

      <EditPetModal dataToEdit={petToEdit} idData={idData} />
    </main>
  )
}

export default PetFile
