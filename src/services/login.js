import axios from 'axios'

const basePath = `${process.env.REACT_APP_BASE_PATH}/api/login`

export const loginUser = async (data) => {
  const { email, password } = data

  const response = await axios.post(`${basePath}`, {
    username: email,
    password
  }, {
    headers: { 
      'Content-Type': 'application/json' 
    }
  })

  return response.data
}

export const validateToken = async (token) => {

  const response = await axios.post(`${basePath}/auth`, {
    accessToken: token
  }, {
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }
  })

  return response
}