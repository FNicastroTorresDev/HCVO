import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PetFile from '../../components/PetFile/PetFile'
import { useParams } from 'react-router-dom'

const MedicalFileView = () => {
  const params = useParams()

  return (
    <main>
      <Navbar />

      <PetFile petId={params.petId} />

      <Footer />
    </main>
  )
}

export default MedicalFileView