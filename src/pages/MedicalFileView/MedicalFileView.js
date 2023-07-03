import React from 'react'
import PetFile from '../../components/PetFile/PetFile'
import { useParams } from 'react-router-dom'

const MedicalFileView = () => {
  const params = useParams()

  return (
    <main>
      <PetFile petId={params.petId} />
    </main>
  )
}

export default MedicalFileView