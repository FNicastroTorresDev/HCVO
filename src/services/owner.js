import axios from 'axios'

const basePath = `${process.env.REACT_APP_BASE_PATH}/api/owner`

export const createOwner = async (data) => {
  const response = await axios.post(basePath, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return response.data
}

export const getAllOwners = async () => {
  const response = await axios.get(basePath, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return response.data
}

export const editOwner = async (id, data) => {
  const response = await axios.patch(`${basePath}/${id}`, data,{
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return response.data
}

export const deleteOneOwner = async (id) => {
  const response = await axios.delete(`${basePath}/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return response.data
}