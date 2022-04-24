import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus, faCoffee, faTractor } from '@fortawesome/free-solid-svg-icons'
export const Home = () => {
  return (
    <div className="mt-5 absolute inset-x-0 top-80">
      <div className="w-10/12 h-36 rounded-2xl bg-indigo-400 mx-auto flex flex-col justify-center items-center">
        <ul className="w-11/12 flex flex-row justify-between">
          <div>
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <label>From</label>
            </div>
            <li className="flex text-2xl border-solid border-1 border-sky-400 h-11 w-48 bg-white rounded-md">
              <input
                className="w-full rounded-md"
                type="text"
                placeholder="From"
                value=""
              />
            </li>
          </div>
          <div>
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <label>To</label>
            </div>
            <li className="flex text-2xl border-solid border-1 border-sky-400 h-11 w-48 bg-white rounded-md">
              <input
                className="w-full rounded-md"
                type="text"
                placeholder="To"
                value=""
              />
            </li>
          </div>
          <div>
            <FontAwesomeIcon icon={faBus} />
            <label>Journey Start</label>
            <li className="flex text-1xl border-solid border-1 justify-center border-sky-400 h-11 w-48 bg-white rounded-md">
              <input
                className="w-full rounded-md"
                type="date"
                placeholder="Choose journey Date"
                value=""
              />
            </li>
          </div>
          <div>
            <FontAwesomeIcon icon={faBus} />
            <label>Journey End</label>
            <li className="flex text-1xl border-solid border-1 justify-center border-sky-400 h-11 w-48 bg-white rounded-md">
              <input
                className="w-full rounded-md"
                type="date"
                placeholder="Choose journey Date"
                value=""
              />
            </li>
          </div>
          <div className="flex flex-row justify-center items-end">
            <li className="bg-pink-600 flex text-2xl justify-center items-center border-solid border-1 border-sky-400 h-11 w-48 bg-white rounded-full">
              <button>Search</button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  )
}
