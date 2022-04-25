import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="fixed inset-x-0 z-20  py-2 bg-amber-300 w-full">
      <div className=" w-10/12 mx-auto flex  flex-row justify-between">
        <div className="siteIcon">
          <h4 className="py-2">Bus Guru</h4>
        </div>
        <div>
          <ul className="text-rose-600">
            <button>
              <li className="py-2 px-2 hover:bg-pink-600 hover:text-stone-800">
                Home
              </li>
            </button>
            <button>
              <li className="py-2 px-2 hover:bg-pink-600 hover:text-stone-800">
                About Us
              </li>
            </button>
            <button>
              <li className="py-2 px-2 hover:bg-pink-600 hover:text-stone-800">
                Contact Us
              </li>
            </button>
            <button>
              <li className="py-2 px-2 hover:bg-pink-600 hover:text-stone-800">
                My Account
              </li>
            </button>
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
