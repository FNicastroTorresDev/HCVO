import React from 'react'
import './medicalData.css'
import CourseChecks from './CourseChecks/CourseChecks'
import VisionInfo from './VisionInfo/VisionInfo'
import InfoForm from './InfoForm/InfoForm'
import EyesForm from './EyesForm/EyesForm'
import EyeballSystemForm from './EyeballSystemForm/EyeballSystemForm'
import OrbitalAreaForm from './OrbitalAreaForm/OrbitalAreaForm'
import LacrimalSystem from './LacrimalSystem/LacrimalSystem'
import EyelidsForm from './EyelidsForm/EyelidsForm'
import ThirdEyelid from './ThirdEyelid/ThirdEyelid'
import Conjunctivae from './Conjunctivae/Conjunctivae'
import ScleroticCornea from './ScleroticCornea/ScleroticCornea'
import Iris from './Iris/Iris'
import AnterPosterCameras from './AnterPosterCameras/AnterPosterCameras'
import Crystalline from './Crystalline/Crystalline'
import ChecksToDo from './ChecksToDo/ChecksToDo'

export const MedicalData = () => {
  return (
    <section id='medical-data' className='custom-box mx-2 card'>
      <InfoForm id='anamnesis' title='Anamnesis' />

      <InfoForm id='inicio' title='Inicio' />

      <CourseChecks />

      <VisionInfo />

      <InfoForm id='trat-evo' title='Tratamientos evolución' />

      <EyesForm id='sist-glo-ocu' title='Sistema globo ocular'>
        <EyeballSystemForm id='od' title='Ojo Derecho' />

        <EyeballSystemForm id='oi' title='Ojo Izquierdo' />
      </EyesForm>

      <EyesForm id='area-orb' title='Área orbital'>
        <OrbitalAreaForm id='od' title='Ojo Derecho' />

        <OrbitalAreaForm id='oi' title='Ojo Izquierdo' />
      </EyesForm>

      <EyesForm id='sist-lagr' title='Sistema lagrimal'>
        <LacrimalSystem id='od' title='Ojo Derecho' />

        <LacrimalSystem id='oi' title='Ojo Izquierdo' />
      </EyesForm>

      <EyesForm id='parpados' title='Párpados'>
        <EyelidsForm id='od' title='Ojo Derecho' />
        
        <EyelidsForm id='oi' title='Ojo Izquierdo' />
      </EyesForm>

      <EyesForm id='tercer-parp' title='3er Párpado'>
        <ThirdEyelid id='od' title='Ojo Derecho' />
        
        <ThirdEyelid id='oi' title='Ojo Izquierdo' />
      </EyesForm>

      <EyesForm id='conjuntivas' title='Conjuntivas'>
        <Conjunctivae id='od' title='Ojo Derecho' />
        
        <Conjunctivae id='oi' title='Ojo Izquierdo' />
      </EyesForm>

      <EyesForm id='cornea-escle' title='Córnea esclerótica'>
        <ScleroticCornea id='od' title='Ojo Derecho' />
        
        <ScleroticCornea id='oi' title='Ojo Izquierdo' />
      </EyesForm>

      <EyesForm id='iris' title='Iris'>
        <Iris id='od' title='Ojo Derecho' />
        
        <Iris id='oi' title='Ojo Izquierdo' />
      </EyesForm>

      <EyesForm id='cam-ant-post' title='Cámaras anterior y posterior'>
        <AnterPosterCameras id='od' title='Ojo Derecho' />
        
        <AnterPosterCameras id='oi' title='Ojo Izquierdo' />
      </EyesForm>

      <EyesForm id='cristalino' title='Cristalino'>
        <Crystalline id='od' title='Ojo Derecho' />
        
        <Crystalline id='oi' title='Ojo Izquierdo' />
      </EyesForm>

      <EyesForm id='esquema' title='Esquema' />

      <EyesForm id='estudios' title='Estudios a realizar'>
        <ChecksToDo />
      </EyesForm>

      <InfoForm id='diagnostico' title='Diagnóstico' />

      <InfoForm id='pronostico' title='Pronóstico' />

      <InfoForm id='tratamiento' title='Tratamiento' />
    </section>
  )
}

