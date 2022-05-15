import React, { Component, CSSProperties, useRef } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Select from 'react-select'
const options = [
  { value: 'bg-rose-400', label: 'rose' },
  { value: 'bg-pink-400', label: 'pink' },
  { value: 'bg-violet-400', label: 'violet' },
  { value: 'bg-purple-400', label: 'purple' },
  { value: 'bg-fuchsia-400', label: 'fuchsia' },
]

const MakeBus = () => {
  const [bus, setBus] = useState('')
  const [error, setError] = useState('')
  const [selectedOption, setSelectedOption] = useState(null)
  const newBus = useRef(null)
  const totalSeat = useRef(null)
  const journeyTime = useRef(null)
  const busColor = useRef(null)
  const formSubmitHandler = (event) => {
    event.preventDefault()
    const newbus = newBus.current.value
    const totalseat = totalSeat.current.value
    const journeytime = journeyTime.current.value
    const buscolor = busColor.current.value

    if (
      newBus !== '' &&
      totalseat !== '' &&
      journeytime !== '' &&
      buscolor !== ''
    ) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          bus: newbus,
          seat: totalseat,
          time: journeytime,
          color: selectedOption,
        }),
      }
      fetch('http://localhost:5000/addBus', requestOptions)
        .then(async (res) => {
          const isJson = res.headers
            .get('content-type')
            ?.includes('application/json')
          const data = isJson && res.json()
          if (!res.ok) {
            const error = (data && data.message) || res.status
            return Promise.reject(error)
          }
          setBus(data)
          toast('Bus added')
        })
        .catch((error) => {
          setError(error)
          toast('Something wrong')
        })
    } else {
      alert('No bus')
    }
  }

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption.value)
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
              Bus Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              ref={newBus}
              placeholder="Like 107,108"
            />
          </div>
          <div className="w-full ">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Total Seat
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              ref={totalSeat}
              placeholder="Like 30,35"
            />
          </div>
          <div className="w-full ">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Journey start time
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              ref={journeyTime}
              placeholder="Like 7.00 am, 8.00 am"
            />
          </div>
          <div className="w-full ">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Bus Color
            </label>
            <Select
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              defaultValue={selectedOption}
              ref={busColor}
              options={options}
              onChange={handleChange}
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

export default MakeBus
