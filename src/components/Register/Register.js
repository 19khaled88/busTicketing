import React, { useRef, useState } from 'react'
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import auth from '../Firebase/Firebase'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Register.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
const Register = () => {
  const [haveAccount, setHaveAccount] = useState(false)
  const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState('')
  const [formLoading, setFormLoading] = useState('')
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth)
  const [
    // signInWithEmailAndPassword,
    user1,
    loading1,
    error1,
  ] = useSignInWithEmailAndPassword(auth)
  const [
    userAuthenticated,
    loadingAuthenticated,
    errorAuthenticated,
  ] = useAuthState(auth)
  const emailRef = useRef(null)
  const passRef = useRef(null)
  const cPassRef = useRef(null)
  let errorState1
  let errorState2
  let navigate = useNavigate()
  let location = useLocation()

  let from = location.state?.from?.pathname || '/'
  if (error) {
    errorState1 = error?.message
  }

  if (error1) {
    errorState2 = error1?.message
  }

  if (user || userAuthenticated) {
    navigate(from, { replace: true })
  }

  const accountHandler = () => {
    setHaveAccount(!haveAccount)
  }

  const loginSubmit = (event) => {
    event.preventDefault()
    const email = emailRef.current.value
    const pass = passRef.current.value

    if (pass.length < 6) {
      setErrors('Password must be at least 6 characters')
      const timer = setTimeout(() => {
        setErrors('')
      }, 3000)
      return timer
    }
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user
        console.log(user)
        toast('Welcome! you Logged In')
      })
      .catch((error) => {
        const errorMessage = error.message
        toast('Email or password is wrong')
      })
  }
  const signUpSubmit = (event) => {
    event.preventDefault()
    const email = emailRef.current.value
    const pass = passRef.current.value
    const cPass = cPassRef.current.value

    if (pass.length < 6) {
      setErrors('Password must be at least 6 characters')
      const timer = setTimeout(() => {
        setErrors('')
      }, 3000)
      return timer
    }

    if (pass !== cPass) {
      setErrors('Password not match')
      const timer = setTimeout(() => {
        setErrors('')
      }, 3000)
      return timer
    }
    if (error) {
      setErrors(error.message)
    }
    createUserWithEmailAndPassword(email, pass)
    toast('Registered successfully')
  }

  return (
    <div className="container mx-auto form absolute top-16 inset-x-0  py-2 w-2/6">
      <div className="login-form">
        <div className="flex justify-center text-2xl">
          {haveAccount ? 'Sign In' : 'Sign Up'}
        </div>
        <div className="form">
          {haveAccount ? (
            <form onSubmit={loginSubmit}>
              <div className="input-container">
                <label>Email ID </label>
                <input
                  ref={emailRef}
                  className=""
                  type="email"
                  name="Email"
                  required
                />
              </div>
              <div className="input-container">
                <label>Password </label>
                <input ref={passRef} type="password" name="password" required />
              </div>

              <span>{errorState1 ? errorState1 : ''}</span>
              <span>{errorState2 ? errorState2 : ''}</span>
              <span>{errors ? errors : ''}</span>
              <div className="button-container">
                <input className="" type="submit" />
              </div>
            </form>
          ) : (
            <form onSubmit={signUpSubmit}>
              <div className="input-container">
                <label>Email ID </label>
                <input
                  ref={emailRef}
                  className=""
                  type="email"
                  name="Email"
                  required
                />
              </div>
              <div className="input-container">
                <label>Password </label>
                <input ref={passRef} type="password" name="password" required />
              </div>
              <div className="input-container">
                <label>Confirm Password </label>
                <input
                  ref={cPassRef}
                  type="password"
                  name="cPassword"
                  required
                />
              </div>

              <span>{errorState1 ? errorState1 : ''}</span>
              <span>{errorState2 ? errorState2 : ''}</span>
              <span>{errors ? errors : ''}</span>
              <div className="button-container">
                <input className="" type="submit" />
              </div>
            </form>
          )}

          {haveAccount ? (
            <button onClick={accountHandler} className="pl-2 mt-5">
              <span className="text-orange">Don't have Id? </span>Register
            </button>
          ) : (
            <button onClick={accountHandler} className="pl-2 mt-5">
              <span className="text-orange">Have Id? </span>Login
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Register
