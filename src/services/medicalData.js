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
