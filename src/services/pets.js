import axios from 'axios'

const basePath = `${process.env.REACT_APP_BASE_PATH}/api/pet`

export const getAllPets = async () => {
  const allPets = await axios.get(`${basePath}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return allPets.data
}

export const getPetData = async (id) => {
  const findedData = await axios.get(`${basePath}/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  
  return findedData.data
}

export const createPet = async (data) => {
  const response = await axios.post(basePath, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return response.data
}

export const editPet = async (id, data) => {
  const response = await axios.patch(`${basePath}/${id}`, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return response.data
}

export const deleteOnePet = async (id) => {
  const response = await axios.delete(`${basePath}/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return response.data
}