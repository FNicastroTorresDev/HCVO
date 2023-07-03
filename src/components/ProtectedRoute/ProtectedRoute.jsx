import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { validateToken } from "../../services/login";

export const ProtectedRoute = ({ redirectTo="/login", setIsLogged }) => {
  const token = localStorage.getItem('accesstoken')
  const [ isValid, setIsValid ] = useState(true)

  const validate = async () => {
    if (!token) {
      return
    }
    try {
      await validateToken(token)
      setIsLogged(true)
    } catch (err) {
      setIsValid(false)
    }
  }

  useEffect( () => {
    validate()
  }, [token])

  if (!token) {
    return <Navigate to={redirectTo} />
  }

  if (!isValid) {
    window.localStorage.clear('accesstoken')
    window.localStorage.clear('user')
    return <Navigate to={redirectTo} />
  }

  return <Outlet />
}