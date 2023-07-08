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
import Swal from 'sweetalert2'
import { patchMedicalData } from '../../../../services/medicalData'


export const MedicalData = ({ dataToShow }) => {

  const editData = (prop, dataToEdit) => {
    const id = dataToShow.data._id
    
    Swal.fire({
      icon: 'question',
      title: `¿Estás segura?`,
      text: 'Los cambios no se podrán deshacer.',
      confirmButtonText: `Sí`,
      showCancelButton: true,
      cancelButtonText: `Cancelar`,
    }).then( async result => {
      if (result.isConfirmed) {
        try {
          await patchMedicalData(id, prop, dataToEdit)
          Swal.fire({
            icon:'success',
            title: `Cambio realizado.`,
            showConfirmButton: false,
            timer: 1500
          }).then( () => window.location.reload())
        } catch (err) {
          Swal.fire({
            icon: 'error',
            title: `${err.response.data.error}`,
          })
        }
      }
    })  
  }

  return (
    <section id='medical-data' className='custom-box mx-2 card'>     

      <InfoForm id='anamnesis' idForm='anamnesisForm' title='Anamnesis' toShow={dataToShow?.data?.anamnesis} editData={editData} />

      <InfoForm id='inicio' idForm='inicioForm'  title='Inicio' toShow={dataToShow?.data?.inicio} editData={editData} />

      <CourseChecks id='course' idForm='cursoForm' toShow={dataToShow?.data?.course} editData={editData} />

      <VisionInfo id='vision' idForm='visionForm' toShow={dataToShow?.data?.vision} editData={editData} />

      <InfoForm id='tratEvo' idForm='tratEvoForm' title='Tratamientos evolución' toShow={dataToShow?.data?.tratEvo} editData={editData} />

      <EyesForm id='sistGloboOcular' title='Sistema globo ocular' idForm='eyeBallSystemForm'>
        <EyeballSystemForm idForm='eyeBallSystemForm' toShow={dataToShow?.data?.sistGloboOcular} editData={editData} />
      </EyesForm>

      <EyesForm id='areaOrbital' title='Área orbital'idForm='areaOrbitalForm' >
        <OrbitalAreaForm idForm='areaOrbitalForm' title='Ojo Derecho' toShow={dataToShow?.data?.areaOrbital} editData={editData} />
      </EyesForm>

      <EyesForm id='sistLagrimal' title='Sistema lagrimal' idForm='lacrimalSystemForm'>
        <LacrimalSystem idForm='lacrimalSystemForm' toShow={dataToShow?.data?.sistLagrimal} editData={editData} />
      </EyesForm>

      <EyesForm id='parpados' idForm='eyelidsForm' title='Párpados'>
        <EyelidsForm idForm='eyelidsForm' toShow={dataToShow?.data?.parpados} editData={editData} />
      </EyesForm>

      <EyesForm id='tercerParpado' idForm='thirdEyelidForm' title='3er Párpado'>
        <ThirdEyelid idForm='thirdEyelidForm' toShow={dataToShow?.data?.tercerParpado} editData={editData} />
      </EyesForm>

      <EyesForm id='conjuntivas' idForm='conjuntivasForm' title='Conjuntivas'>
        <Conjunctivae idForm='conjuntivasForm' toShow={dataToShow?.data?.conjuntivas} editData={editData} />
      </EyesForm>

      <EyesForm id='corneaEscle' idForm='scleroticCorneaForm' title='Córnea esclerótica'>
        <ScleroticCornea idForm='scleroticCorneaForm' toShow={dataToShow?.data?.corneaEscle} editData={editData} />
      </EyesForm>

      <EyesForm id='iris' idForm='irisForm' title='Iris'>
        <Iris idForm='irisForm' toShow={dataToShow?.data?.iris} editData={editData} />
      </EyesForm>

      <EyesForm id='camAntYPost' idForm='camAntPostForm' title='Cámaras anterior y posterior'>
        <AnterPosterCameras idForm='camAntPostForm' toShow={dataToShow?.data?.camAntYPost} editData={editData} />
      </EyesForm>

      <EyesForm id='cristalino' idForm='cristalinoForm' title='Cristalino'>
        <Crystalline idForm='cristalinoForm' toShow={dataToShow?.data?.cristalino} editData={editData} />
      </EyesForm>

      {/* <EyesForm id='esquema' title='Esquema' /> */}

      <EyesForm id='estudiosARealizar' idForm='checksToDoForm' title='Estudios a realizar'>
        <ChecksToDo idForm='checksToDoForm' toShow={dataToShow?.data?.estudiosARealizar} editData={editData} />
      </EyesForm>

      <InfoForm id='diagnostico' idForm='diagForm' title='Diagnóstico' toShow={dataToShow?.data?.diagnostico} editData={editData} />
      <InfoForm id='pronostico' idForm='pronoForm' title='Pronóstico' toShow={dataToShow?.data?.pronostico} editData={editData} />
      <InfoForm id='tratamiento' idForm='tratForm' title='Tratamiento' toShow={dataToShow?.data?.tratamiento} editData={editData} /> 
    </section>
  )
}

