import React from 'react'
import './medicalData.css'
import { CourseChecks, EyesForm, InfoForm, VisionInfo } from './partials'
import {
  AnterPosterCameras,
  ChecksToDo,
  Conjunctivae,
  Crystalline,
  EyeballSystemForm,
  EyelidsForm,
  Iris,
  LacrimalSystem,
  OrbitalAreaForm,
  ScleroticCornea,
  ThirdEyelid
} from './partials/EyesForm/components'

export const MedicalData = (props) => {
  return (
    <section id='medical-data' className='custom-box mx-2 card'>
      <InfoForm id='anamnesis' title='Anamnesis' isOpen={props.isOpenAnamnesis} />

      <InfoForm id='inicio' title='Inicio' isOpen={props.isOpenInicio} />

      <CourseChecks isOpen={props.isOpenCourse} />

      <VisionInfo isOpen={props.isOpenVision}/>

      <InfoForm id='trat-evo' title='Tratamientos evolución' isOpen={props.isOpenTratEvo}/>

      <EyesForm id='sist-glo-ocu' title='Sistema globo ocular' isOpen={props.isOpenSistOcular}>
        <EyeballSystemForm id='od' title='Ojo Derecho' />

        <EyeballSystemForm id='oi' title='Ojo Izquierdo' />
      </EyesForm>

      <EyesForm id='area-orb' title='Área orbital' isOpen={props.isOpenAreaOrb}>
        <OrbitalAreaForm id='od' title='Ojo Derecho' />

        <OrbitalAreaForm id='oi' title='Ojo Izquierdo' />
      </EyesForm>

      <EyesForm id='sist-lagr' title='Sistema lagrimal' isOpen={props.isOpenSistLag}>
        <LacrimalSystem id='od' title='Ojo Derecho' />

        <LacrimalSystem id='oi' title='Ojo Izquierdo' />
      </EyesForm>

      <EyesForm id='parpados' title='Párpados' isOpen={props.isOpenParpados}>
        <EyelidsForm id='od' title='Ojo Derecho' />
        
        <EyelidsForm id='oi' title='Ojo Izquierdo' />
      </EyesForm>

      <EyesForm id='tercer-parp' title='3er Párpado' isOpen={props.isOpenTercerParp}>
        <ThirdEyelid id='od' title='Ojo Derecho' />
        
        <ThirdEyelid id='oi' title='Ojo Izquierdo' />
      </EyesForm>

      <EyesForm id='conjuntivas' title='Conjuntivas' isOpen={props.isOpenConjuntivas}>
        <Conjunctivae id='od' title='Ojo Derecho' />
        
        <Conjunctivae id='oi' title='Ojo Izquierdo' />
      </EyesForm>

      <EyesForm id='cornea-escle' title='Córnea esclerótica' isOpen={props.isOpenCorneaEscle}>
        <ScleroticCornea id='od' title='Ojo Derecho' />
        
        <ScleroticCornea id='oi' title='Ojo Izquierdo' />
      </EyesForm>

      <EyesForm id='iris' title='Iris' isOpen={props.isOpenIris}>
        <Iris id='od' title='Ojo Derecho' />
        
        <Iris id='oi' title='Ojo Izquierdo' />
      </EyesForm>

      <EyesForm id='cam-ant-post' title='Cámaras anterior y posterior' isOpen={props.isOpenCamAntPost}>
        <AnterPosterCameras id='od' title='Ojo Derecho' />
        
        <AnterPosterCameras id='oi' title='Ojo Izquierdo' />
      </EyesForm>

      <EyesForm id='cristalino' title='Cristalino' isOpen={props.isOpenCristalino}>
        <Crystalline id='od' title='Ojo Derecho' />
        
        <Crystalline id='oi' title='Ojo Izquierdo' />
      </EyesForm>

      <EyesForm id='esquema' title='Esquema' isOpen={props.isOpenEsquema} />

      <EyesForm id='estudios' title='Estudios a realizar' isOpen={props.isOpenEstudios}>
        <ChecksToDo />
      </EyesForm>

      <InfoForm id='diagnostico' title='Diagnóstico' isOpen={props.isOpenDiagnostico} />

      <InfoForm id='pronostico' title='Pronóstico' isOpen={props.isOpenPronostico} />

      <InfoForm id='tratamiento' title='Tratamiento' isOpen={props.isOpenTratamiento} />
    </section>
  )
}

