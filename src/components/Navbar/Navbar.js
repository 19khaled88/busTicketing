import { faL, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useAuthState } from 'react-firebase-hooks/auth'
import './Navbar.css'
import auth from '../Firebase/Firebase'
import { signOut } from 'firebase/auth'
import CustomLink from '../CustomLink/CustomLink'

const Navbar = () => {
  const [loggedinState, setLoggedInState] = useState(false)
  const [user] = useAuthState(auth)
  const location = useLocation()
  const navigate = useNavigate()
  let from = location.state?.from?.pathname || '/'
  const logoutHandler = () => {
    signOut(auth)
    navigate(from, { replace: true })
  }
  return (
    <div className="fixed inset-x-0 z-20  py-2 bg-amber-300 w-full">
      <div className=" w-10/12 mx-auto flex  flex-row justify-between">
        <div className="siteIcon">
          <h4 className="py-2">Bus Guru</h4>
          <ToastContainer />
        </div>
        <div>
          <ul className="flex flex-row text-rose-600 ">
            {user !== null ? (
              <>
                <button className="py-2 px-2 hover:bg-pink-600 hover:text-stone-800 font-bold">
                  <CustomLink to="/">Home</CustomLink>
                </button>
                <button className="py-2 px-2 hover:bg-pink-600 hover:text-stone-800 font-bold">
                  <CustomLink to="/makeSeat">CreatSeat</CustomLink>
                </button>
                <button className="py-2 px-2 hover:bg-pink-600 hover:text-stone-800 font-bold">
                  <CustomLink to="/createBus">CreatBus</CustomLink>
                </button>
                <button
                  className="text-purple-600 py-2 px-2 hover:bg-pink-600 hover:text-stone-800 font-bold"
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <li className="py-2 px-2 hover:bg-pink-600 hover:text-stone-800">
                  <button className="font-bold">
                    <Link to="/demo">Demo</Link>
                  </button>
                </li>
                <li className="py-2 px-2 hover:bg-pink-600 hover:text-stone-800">
                  <button className="font-bold">
                    <Link to="/register">My Account</Link>
                  </button>
                </li>
              </>
            )}

            {/* <button>
              <li className="py-2 px-2 hover:bg-pink-600 hover:text-stone-800">
                {user !== null ? (
                  <button
                    className="text-purple-600 font-bold"
                    onClick={logoutHandler}
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <Link to="/register">My Account</Link>
                  </>
                )}
              </li>
            </button> */}
            <button>
              <li className="py-2 px-2 hover:bg-pink-600 hover:text-stone-800">
                |
              </li>
            </button>
            <button>
              <li className="py-2 px-2 hover:bg-pink-600 hover:text-stone-800">
                Search
                <FontAwesomeIcon className="pl-1" icon={faSearch} />
              </li>
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
