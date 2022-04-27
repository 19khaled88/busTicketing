import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../Firebase/Firebase'
const RequiredAuth = ({ children }) => {
  let [user] = useAuthState(auth)
  let location = useLocation()

  if (!user) {
    return <Navigate to="/demo" state={{ from: location }} replace></Navigate>
  }
  return children
}

export default RequiredAuth
