import React, { useRef } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
const MakeSeat = () => {
  const [seat, setSeat] = useState('')
  const [error, setError] = useState('')
  const newSeat = useRef(null)
  const formSubmitHandler = (event) => {
    event.preventDefault()
    const newseat = newSeat.current.value
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ seat: newseat }),
    }
    fetch('http://localhost:5000/addSeat', requestOptions)
      //   .then((res) => res.json())
      //   .then((data) => console.log(data))
      .then(async (res) => {
        const isJson = res.headers
          .get('content-type')
          ?.includes('application/json')
        const data = isJson && res.json()

        //check for error message
        if (!res.ok) {
          const error = (data && data.message) || res.status
          return Promise.reject(error)
        }
        setSeat(data)
        toast('Seat added')
        console.log(data)
      })
      .catch((error) => {
        setError(error)
        toast('Something wrong')
        console.log('error:', error)
      })
  }
  return (
    <div className="container mx-auto form absolute top-16 inset-x-0  py-2 w-2/6">
      <form className="w-full max-w-sm" onSubmit={formSubmitHandler}>
        <div className="flex flex-col ">
          <div className="w-full ">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Create New Seat
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              ref={newSeat}
              placeholder="Like A1, A2, B1, B2"
            />
          </div>
          <div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-1/3 md:w-1/3 lg:w-1/3 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default MakeSeat
