import React from 'react'
import PetFile from '../../components/PetFile/PetFile'
import { useParams } from 'react-router-dom'
import TopButton from '../../components/TopButton/TopButton'

const MedicalFileView = () => {
  const params = useParams()

  return (
    <main>
      <PetFile petId={params.petId} />

      <TopButton />
    </main>
  )
}

export default MedicalFileView