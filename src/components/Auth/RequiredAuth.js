import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../Firebase/Firebase'
const RequiredAuth = ({ children }) => {
  let [user, loading] = useAuthState(auth)
  let location = useLocation()
  if (loading) {
    return <p>Loading....</p>
  }
  if (!user) {
    return <Navigate to="/demo" state={{ from: location }} replace></Navigate>
  }
  return children
}

export default RequiredAuth
