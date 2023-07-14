import React, { useEffect, useRef } from 'react'
import './medicalData.css'
import '../../../EditButton/editButton.css'
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
import SchemaForm from './partials/EyesForm/components/SchemaForm/SchemaForm'
import { useForm, FormProvider } from "react-hook-form";


export const MedicalData = ({ dataToShow }) => {
  const methods = useForm()
  const { handleSubmit, reset } = methods
  const canvasSchema = useRef(null)

  useEffect(() => {
    const data = dataToShow?.data
    const loadData = data?.esquema?.dataDraw || ''
    reset(data)
    if (loadData !== '') {
      canvasSchema.current.loadSaveData(loadData, true)
    }
  }, [reset, dataToShow]);

  const onSubmit = async (data) => {
    const id = dataToShow.data._id
    data.esquema['dataDraw'] = await canvasSchema.current.getSaveData()
    
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
          await patchMedicalData(id, data)
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

      <FormProvider {...methods}>     

        <form id='medicalDataForm' onSubmit={handleSubmit(onSubmit)}>

          <InfoForm id='anamnesis' idForm='anamnesisForm' title='Anamnesis' />

          <InfoForm id='inicio' idForm='inicioForm'  title='Inicio' />

          <CourseChecks id='course' />

          <VisionInfo id='vision' idForm='visionForm' />

          <InfoForm id='tratEvo' idForm='tratEvoForm' title='Tratamientos evolución' />

          <EyesForm id='sistGloboOcular' title='Sistema globo ocular'>
            <EyeballSystemForm />
          </EyesForm>

          <EyesForm id='areaOrbital' title='Área orbital'>
            <OrbitalAreaForm />
          </EyesForm>

          <EyesForm id='sistLagrimal' title='Sistema lagrimal'>
            <LacrimalSystem />
          </EyesForm>

          <EyesForm id='parpados' title='Párpados'>
            <EyelidsForm />
          </EyesForm>

          <EyesForm id='tercerParpado' title='3er Párpado'>
            <ThirdEyelid />
          </EyesForm>

          <EyesForm id='conjuntivas' title='Conjuntivas'>
            <Conjunctivae />
          </EyesForm>

          <EyesForm id='corneaEscle' title='Córnea esclerótica'>
            <ScleroticCornea />
          </EyesForm>

          <EyesForm id='iris' title='Iris'>
            <Iris />
          </EyesForm>

          <EyesForm id='camAntYPost' title='Cámaras anterior y posterior'>
            <AnterPosterCameras />
          </EyesForm>

          <EyesForm id='cristalino' title='Cristalino'>
            <Crystalline />
          </EyesForm>

           <EyesForm id='esquema' title='Esquema'>
              <SchemaForm canvasSchema={canvasSchema} />
          </EyesForm>

          <EyesForm id='estudiosARealizar' title='Estudios a realizar'>
            <ChecksToDo />
          </EyesForm>

          <InfoForm id='diagnostico' idForm='diagForm' title='Diagnóstico' />
          <InfoForm id='pronostico' idForm='pronoForm' title='Pronóstico' />
          <InfoForm id='tratamiento' idForm='tratForm' title='Tratamiento' />
        </form>
      </FormProvider>

     
    </section>
  )
}

