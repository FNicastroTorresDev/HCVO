import axios from 'axios'

const basePath = `${process.env.REACT_APP_BASE_PATH}/api/pet`

const getPetData = async (id) => {
  const findedData = await axios.get(`${basePath}/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  
  return findedData.data
}

export default getPetData