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


export const MedicalData = ({ dataToShow }) => {
  return (
    <section id='medical-data' className='custom-box mx-2 card'>     

      <InfoForm id='anamnesis' idForm='anamnesisForm' title='Anamnesis' toShow={dataToShow?.anamnesis}/>
      <InfoForm id='inicio' idForm='inicioForm'  title='Inicio' toShow={dataToShow?.inicio}/>
      <CourseChecks idForm='cursoForm' toShow={dataToShow?.course}/>
      <VisionInfo idForm='visionForm' toShow={dataToShow?.vision}/>
      <InfoForm id='trat-evo' idForm='tratEvoForm' title='Tratamientos evolución' toShow={dataToShow?.tratEvo}/>

      <EyesForm id='sist-glo-ocu' title='Sistema globo ocular' idForm='eyeBallSystemForm'>
        <EyeballSystemForm idForm='eyeBallSystemForm' />
      </EyesForm>

      <EyesForm id='area-orb' title='Área orbital'idForm='areaOrbitalForm' >
        <OrbitalAreaForm idForm='areaOrbitalForm' title='Ojo Derecho' />
      </EyesForm>


      <EyesForm id='sist-lagr' title='Sistema lagrimal' idForm='lacrimalSystemForm'>
        <LacrimalSystem idForm='lacrimalSystemForm' />
      </EyesForm>

      <EyesForm id='parpados' idForm='eyelidsForm' title='Párpados'>
        <EyelidsForm idForm='eyelidsForm' />
      </EyesForm>

      <EyesForm id='tercer-parp' idForm='thirdEyelidForm' title='3er Párpado'>
        <ThirdEyelid idForm='thirdEyelidForm' />
      </EyesForm>

      <EyesForm id='conjuntivas' idForm='conjuntivasForm' title='Conjuntivas'>
        <Conjunctivae idForm='conjuntivasForm' />
      </EyesForm>

      <EyesForm id='cornea-escle' idForm='scleroticCorneaForm' title='Córnea esclerótica'>
        <ScleroticCornea idForm='scleroticCorneaForm' />
      </EyesForm>

      <EyesForm id='iris' idForm='irisForm' title='Iris'>
        <Iris idForm='irisForm' />
      </EyesForm>

      <EyesForm id='cam-ant-post' idForm='camAntPostForm' title='Cámaras anterior y posterior'>
        <AnterPosterCameras idForm='camAntPostForm' />
      </EyesForm>

      <EyesForm id='cristalino' idForm='cristalinoForm' title='Cristalino'>
        <Crystalline idForm='cristalinoForm' />
      </EyesForm>

      {/* <EyesForm id='esquema' title='Esquema' /> */}

      <EyesForm id='estudios' idForm='checksToDoForm' title='Estudios a realizar'>
        <ChecksToDo idForm='checksToDoForm' />
      </EyesForm>

      <InfoForm id='diagnostico' idForm='diagForm' title='Diagnóstico' toShow={dataToShow?.diagnostico}/>
      <InfoForm id='pronostico' idForm='pronoForm' title='Pronóstico' toShow={dataToShow?.pronostico}/>
      <InfoForm id='tratamiento' idForm='tratForm' title='Tratamiento' toShow={dataToShow?.tratamiento}/> 
    </section>
  )
}

