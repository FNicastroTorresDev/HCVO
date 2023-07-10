import axios from 'axios' 

const basePath = `${process.env.REACT_APP_BASE_PATH}/api/medical-data`

export const getMedicalData = async (id) => {
  const findedData = await axios.get(`${basePath}/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  
  return findedData.data
}

export const patchMedicalData = async ( id, prop, data ) => {
  const body = {}
  body[prop] = data

  const response = await axios.patch(`${basePath}/${id}`, body, {
    headers: {
    'Content-Type': 'application/json'
    }
  })

  return response
}

export const emptyMedicalData = async (id) => {

  const body = {
    anamnesis: {},
    inicio: {},
    course: {},
    vision: {},
    tratEvo: {},
    sistGloboOcular: {},
    areaOrbital: {},
    sistLagrimal: {},
    parpados: {},
    tercerParpado: {},
    conjuntivas: {},
    corneaEscle: {},
    iris: {},
    camAntYPost: {},
    cristalino: {},
    esquema: {},
    estudiosARealizar: {},
    diagnostico: {},
    pronostico: {},
    tratamiento: {}
  }

  const response = await axios.patch(`${basePath}/${id}`, body, {
    headers: {
    'Content-Type': 'application/json'
    }
  })

  return response
}

export const deleteMedicalData = async (id) => {
  const response = await axios.delete(`${basePath}/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return response.data
}