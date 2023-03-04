import React, { useState } from 'react'
import { MedicalData } from './partials/MedicalData/MedicalData'
import PetCard from './partials/PetCard/PetCard'
import TocList from './partials/TocList/TocList'
import './petFile.css'

const PetFile = () => {
  const [isOpenAnamnesis, setIsOpenAnamnesis] = useState(false)
  const [isOpenInicio, setIsOpenInicio] = useState(false)
  const [isOpenCourse, setIsOpenCourse] = useState(false)
  const [isOpenVision, setIsOpenVision] = useState(false)
  const [isOpenTratEvo, setIsOpenTratEvo] = useState(false)
  const [isOpenSistOcular, setIsOpenSistOcular] = useState(false)
  const [isOpenAreaOrb, setIsOpenAreaOrb] = useState(false)
  const [isOpenSistLag, setIsOpenSistLag] = useState(false)
  const [isOpenParpados, setIsOpenParpados] = useState(false)
  const [isOpenTercerParp, setIsOpenTercerParp] = useState(false)
  const [isOpenConjuntivas, setIsOpenConjuntivas] = useState(false)
  const [isOpenCorneaEscle, setIsOpenCorneaEscle] = useState(false)
  const [isOpenIris, setIsOpenIris] = useState(false)
  const [isOpenCamAntPost, setIsOpenCamAntPost] = useState(false)
  const [isOpenCristalino, setIsOpenCristalino] = useState(false)
  const [isOpenEsquema, setIsOpenEsquema] = useState(false)
  const [isOpenEstudios, setIsOpenEstudios] = useState(false)
  const [isOpenDiagnostico, setIsOpenDiagnostico] = useState(false)
  const [isOpenPronostico, setIsOpenPronostico] = useState(false)
  const [isOpenTratamiento, setIsOpenTratamiento] = useState(false)
  
  return (
    <main className='m-3 d-flex align-items-start justify-content-start'>
      <section className='d-flex flex-column flex-lg-row align-items-center align-items-lg-start'>
        <PetCard />

        <MedicalData 
          isOpenAnamnesis={isOpenAnamnesis} 
          isOpenInicio={isOpenInicio}
          isOpenCourse={isOpenCourse}
          isOpenVision={isOpenVision}
          isOpenTratEvo={isOpenTratEvo}
          isOpenSistOcular={isOpenSistOcular}
          isOpenAreaOrb={isOpenAreaOrb}
          isOpenSistLag={isOpenSistLag}
          isOpenParpados={isOpenParpados}
          isOpenTercerParp={isOpenTercerParp}
          isOpenConjuntivas={isOpenConjuntivas}
          isOpenCorneaEscle={isOpenCorneaEscle}
          isOpenIris={isOpenIris}
          isOpenCamAntPost={isOpenCamAntPost}
          isOpenCristalino={isOpenCristalino}
          isOpenEsquema={isOpenEsquema}
          isOpenEstudios={isOpenEstudios}
          isOpenDiagnostico={isOpenDiagnostico}
          isOpenPronostico={isOpenPronostico}
          isOpenTratamiento={isOpenTratamiento}
        />
      </section>

      <TocList 
        setIsOpenAnamnesis={setIsOpenAnamnesis}
        setIsOpenInicio={setIsOpenInicio}
        setIsOpenCourse={setIsOpenCourse}
        setIsOpenVision={setIsOpenVision}
        setIsOpenTratEvo={setIsOpenTratEvo}
        setIsOpenSistOcular={setIsOpenSistOcular}
        setIsOpenAreaOrb={setIsOpenAreaOrb}
        setIsOpenSistLag={setIsOpenSistLag}
        setIsOpenParpados={setIsOpenParpados}
        setIsOpenTercerParp={setIsOpenTercerParp}
        setIsOpenConjuntivas={setIsOpenConjuntivas}
        setIsOpenCorneaEscle={setIsOpenCorneaEscle}
        setIsOpenIris={setIsOpenIris}
        setIsOpenCamAntPost={setIsOpenCamAntPost}
        setIsOpenCristalino={setIsOpenCristalino}
        setIsOpenEsquema={setIsOpenEsquema}
        setIsOpenEstudios={setIsOpenEstudios}
        setIsOpenDiagnostico={setIsOpenDiagnostico}
        setIsOpenPronostico={setIsOpenPronostico}
        setIsOpenTratamiento={setIsOpenTratamiento}
      />
    </main>
  )
}

export default PetFile
