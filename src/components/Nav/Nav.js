import React from 'react'
import { MenuIcon, UserCircleIcon } from '@heroicons/react/solid'

export const Nav = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-4 bg-sky-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              Bus Ticketing Counter
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-gray-600 block lg:hidden rounded-md outline-none hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i>
                {!navbarOpen ? (
                  <MenuIcon className="h-9 w-9" />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-9"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col justify-start lg:items-center xl:items-center lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex text-1xl uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2 justify-start">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-1xl uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Contact</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-1xl uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">About us</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-1xl uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  {' '}
                  <UserCircleIcon className="w-8 h-8" />
                  <i className="text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Hi, Guest</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
