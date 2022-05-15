import { Result } from 'postcss'
import React, { useEffect, useRef, useState } from 'react'
import { GiSteeringWheel } from 'react-icons/gi'
import { toast } from 'react-toastify'
import './BusSeatBook.css'
const BusSeatBook = () => {
  const currentDate = new Date()
  const fullDate = `${currentDate.getFullYear()}-${(
    '0' +
    (currentDate.getMonth() + 1)
  ).slice(-2)}-${('0' + currentDate.getDate()).slice(-2)}`
  const [busId, setBusId] = useState('')
  const [error, setError] = useState('')
  const [buses, setBuses] = useState([''])
  const [seats, setSeats] = useState([])
  const [color, setColor] = useState('')
  const [date, setDate] = useState(fullDate)
  const [booked, setBooked] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [isSelectedSeat, setIsSelectedSeat] = useState(false)
  const [selectedSeat, setSelectedSeat] = useState({})
  const busSelected = useRef(null)
  const busSelected1 = useRef(null)
  const [isDisable, setIsDisable] = useState(true)
  const [reserved, setReserved] = useState([])
  const [isChangedDate, setIsChangedDate] = useState('')
  const [isDateCleared, setIsDateCleared] = useState('')
  const busHandler = async (id, color) => {
    setBusId(id)
    setColor(color)

    await fetch('http://localhost:5000/seats')
      .then((res) => res.json())
      .then((data) => setSeats(data))

    const pDate = document.getElementById('presentDate')
    if (pDate) {
      pDate.value = ''
    }

    console.log(document.getElementById(id))
  }

  const seatHandler = (seat) => {
    // setSelectedSeat(seat)

    let accumulatedSeat

    const storedSeat = localStorage.getItem('bus')

    if (storedSeat) {
      accumulatedSeat = JSON.parse(storedSeat)
    } else {
      accumulatedSeat = {}
    }
    const isSeatHas = accumulatedSeat[seat]
    if (isSeatHas) {
      const accumulatedSeats = accumulatedSeat

      for (var acc in accumulatedSeats) {
        if (accumulatedSeat[seat] === acc) {
          delete accumulatedSeats[seat]
        }
      }
      localStorage.setItem('bus', JSON.stringify(accumulatedSeats))
    } else {
      accumulatedSeat[seat] = seat
      localStorage.setItem('bus', JSON.stringify(accumulatedSeat))
    }

    const btn = document.getElementById(seat)

    if (btn.style.backgroundColor === 'red') {
      btn.setAttribute('style', 'background-color: none;')
    } else {
      btn.setAttribute('style', 'background-color: red;')
    }
  }

  const dateChange = async (e) => {
    let seat = []
    setIsChangedDate(e)
    if (e.target.value !== '') {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: e.target.value,
        }),
      }
      await fetch('http://localhost:5000/reservedSeat', requestOptions)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            const outcome = data

            for (const one in outcome) {
              const result = outcome[one]
              if (result.date === e.target.value && result.busId === busId) {
                for (const two of result.bookedSeat) {
                  const disable = document.getElementById(two)
                  disable.disabled = true
                }
              }
            }
          }
        })
    }
    if (e.target.value === '') {
      const dis = document.getElementsByClassName('busSeats')
      for (var i = 0; i < dis.length; i++) {
        const status = dis[i]
        if (status.disabled) {
          status.disabled = true
        } else {
          status.disabled = true
        }
      }
    }

    for (const s in JSON.parse(localStorage.getItem('bus'))) {
      seat.push(`${JSON.parse(localStorage.getItem('bus'))[s]}`)
    }
    const newDate = new Date(`${e.target.value}T00:00:00`)
    setDate(newDate ? newDate.toLocaleDateString() : '')
    // const date = new Date()
    // console.log(newDate.toDateString())
    setSelectedDate(e.target.value)
    // if (e.target.value !== '') {
    //   setIsDisable(false)
    // } else {
    //   setIsDisable(true)
    //   seat.map((s) =>
    //     document
    //       .getElementById(s)
    //       .setAttribute('style', 'background-color: none;'),
    //   )
    //   localStorage.removeItem('bus')
    // }
  }
  // console.log(date)
  useEffect(() => {
    fetch('http://localhost:5000/buses')
      .then((res) => res.json())
      .then((data) => setBuses(data))
  }, [])
  useEffect(() => {
    const bus = JSON.parse(localStorage.getItem('bus'))
    if (bus) {
      localStorage.removeItem('bus')
    }
    setSelectedSeat(bus)
  }, [isSelectedSeat])
  useEffect(() => {
    const dis = document.getElementsByClassName('busSeats')
    for (var i = 0; i < dis.length; i++) {
      const status = dis[i]
      status.disabled = false
    }
  }, [isChangedDate])
  useEffect(() => {
    const dis = document.getElementsByClassName('busSeats')
    for (var i = 0; i < dis.length; i++) {
      const status = dis[i]
      status.disabled = true
      status.style.background = ''
    }
    localStorage.removeItem('bus')
  }, [seats, isDateCleared])
  let booking = []
  const bookingHandler = () => {
    let seat = []
    for (const s in JSON.parse(localStorage.getItem('bus'))) {
      seat.push(`${JSON.parse(localStorage.getItem('bus'))[s]}`)
    }
    booking.push({ selectedDate, seat, busId })

    if (selectedDate !== '' && seat !== '' && busId !== '') {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: selectedDate,
          bookedSeat: seat,
          busId: busId,
        }),
      }

      fetch('http://localhost:5000/bookingSeat', requestOptions)
        .then(async (res) => {
          const isJson = res.headers
            .get('content-type')
            ?.includes('application/json')
          const data = isJson && res.json()
          if (!res.ok) {
            const error = (data && data.message) || res.status
            return Promise.reject(error)
          }
          setBooked(data)
          toast('Booking Successful')
          seat.map((s) =>
            document
              .getElementById(s)
              .setAttribute('style', 'background-color: none;'),
          )
          localStorage.removeItem('bus')
        })
        .catch((error) => {
          setError(error)
          toast('Something wrong')
        })
    } else {
      alert('Sorry! Date is empty or Seat is not selected')
    }

    // if (booking !== null) {
    //   console.log(booking)
    // }
  }
  // if (reserved) {
  //   for (const one in reserved) {
  //     const result = reserved[one].bookedSeat
  //     for (const two of result) {
  //       console.log(two)
  //     }
  //   }
  // }
  // for (const [index, value] of busCollection.entries()) {
  //   buses.push(
  //     <div className="bg-rose-400 border-l-4 border-rose-500 shadow-xl rounded-r-lg pr-6 shadow-rose-500/50">
  //       <div className="flex flex-row justify-center items-center gap-x-9">
  //         <button id="bus-107" onClick={busHandler}>
  //           <img className="w-16 h-16 " src="/images/busIcon2.png" alt="" />
  //         </button>
  //         <p>Bus No: 107</p>
  //         <p className="flex flex-col">
  //           <input type="date" name="date" className="rounded-md w-36" />
  //           <span> Start time: 07.00 am</span>
  //         </p>
  //         <p>Total Seat: 65</p>
  //       </div>
  //     </div>,
  //   )
  // }
  return (
    <div className="absolute... flex flex-row py-10 justify-between container mx-auto">
      <div className="flex flex-col gap-y-6">
        <h4>Bus List</h4>
        <h2 id="demo"></h2>

        {buses
          ? buses.map((bus, key) => (
              <div
                key={key}
                className={`${bus.color} border-l-4 border-rose-500 shadow-xl rounded-r-lg pr-6 shadow-rose-500/50 busBtnWidth`}
              >
                <div className="flex flex-row justify-center items-center gap-x-9">
                  <button
                    id={bus.bus}
                    onClick={() => busHandler(bus.bus, bus.color)}
                  >
                    <img
                      className="w-16 h-16"
                      src="/images/busIcon2.png"
                      alt=""
                    />
                  </button>
                  <p>Bus No: {bus.bus}</p>
                  <p className="flex flex-col">
                    <span> Start time: {bus.time}</span>
                  </p>
                  <p>Total Seat: {bus.seat}</p>
                </div>
              </div>
            ))
          : 'empty'}
      </div>

      <div className="flex flex-col gap-y-6 w-72">
        <div className="flex flex-row justify-around">
          <h4>Seat Plan</h4>
          <p className="text-md">Bus No : {busId}</p>
        </div>

        <div className={`flex flex-col ${color}  pb-8 pt-10 rounded-t-3xl`}>
          {seats.length !== 0 ? (
            <>
              <div className="flex flex-row gap-x-8 justify-evenly">
                <input
                  onChange={(e) => dateChange(e)}
                  type="date"
                  name="date"
                  id="presentDate"
                  className="rounded-md w-36"
                />
                <button
                  onClick={bookingHandler}
                  className="bg-blue-700 hover:bg-blue-700 text-white font-bold px-5 rounded"
                >
                  Go
                </button>
              </div>
              <div className="flex flex-row gap-x-8 justify-evenly">
                <div className="flex flex-row gap-x-2"></div>
                <div className="flex flex-row gap-x-2 text-5xl">
                  <GiSteeringWheel />
                </div>
              </div>
            </>
          ) : (
            ''
          )}
          <div className="grid grid-cols-4 gap-4 px-8 seatButton">
            {seats
              ? seats.map((seat, key) => (
                  <button
                    id={seat.seat}
                    onClick={() => seatHandler(seat.seat)}
                    className="mx-auto rounded-full w-8 h-8 bg-white busSeats"
                    key={key}
                    // disabled={isDisable}
                  >
                    {seat.seat}
                  </button>
                ))
              : ''}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusSeatBook
