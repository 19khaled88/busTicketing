import React, { useEffect, useRef, useState } from 'react'
import { GiSteeringWheel } from 'react-icons/gi'
const BusSeatBook = () => {
  const [busId, setBusId] = useState('')
  const busSelected = useRef(null)
  const busSelected1 = useRef(null)
  const test1 = useRef(null)
  const test2 = useRef(null)
  const test3 = useRef(null)
  const busHandler = (e) => {
    // console.log(e.currentTarget.id)
    const id = e.currentTarget.id
    setBusId(id)
    if (parseInt(id.split('-')[1]) === 107) {
      const span = busSelected.current
      span.className =
        'bg-rose-300 flex flex-col gap-y-2 py-5 flex rounded-t-3xl'
      const span1 = busSelected1.current
      span1.className = 'flex flex-col gap-y-2 hidden'
    } else if (parseInt(id.split('-')[1]) === 108) {
      const span = busSelected1.current
      span.className =
        'bg-pink-300 flex flex-col gap-y-2 py-5 flex rounded-t-3xl'
      const span1 = busSelected.current
      span1.className = 'flex flex-col gap-y-2 hidden'
    }
  }
  useEffect(
    (e) => {
      let test1 = ''
      let test2 = ''
      let test3 = ''
      //  const id = document.getElementById(busId.split('-')[1])
      //  console.log(busId)
    },
    [busId],
  )
  return (
    <div className="absolute... flex flex-row py-10 justify-between container mx-auto">
      <div className="flex flex-col gap-y-6">
        <h4>Bus List</h4>
        <div className="bg-rose-400 border-l-4 border-rose-500 shadow-xl rounded-r-lg pr-6 shadow-rose-500/50">
          <div className="flex flex-row justify-center items-center gap-x-9">
            <button id="bus-107" onClick={busHandler}>
              <img className="w-16 h-16 " src="/images/busIcon2.png" alt="" />
            </button>
            <p>Bus No: 107</p>
            <p>Start time: 07.00 am</p>
            <p>Total Seat: 65</p>
          </div>
        </div>
        <div className="bg-pink-400 border-l-4 border-pink-500 shadow-xl rounded-r-lg pr-6 shadow-pink-500/50">
          <div className="flex flex-row justify-center items-center gap-x-9">
            <button id="bus-108" onClick={busHandler}>
              {' '}
              <img className="w-16 h-16" src="/images/busIcon2.png" alt="" />
            </button>
            <p>Bus No: 108</p>
            <p>Start time: 08.00 am</p>
            <p>Total Seat: 65</p>
          </div>
        </div>
        <div className="bg-fuchsia-400 border-l-4 border-fuchsia-500 shadow-xl rounded-r-lg pr-6 shadow-fuchsia-500/50">
          <div className="flex flex-row justify-center items-center gap-x-9">
            <button id="bus-109" onClick={busHandler}>
              {' '}
              <img className="w-16 h-16" src="/images/busIcon2.png" alt="" />
            </button>
            <p>Bus No: 109</p>
            <p>Start time: 09.00 am</p>
            <p>Total Seat: 65</p>
          </div>
        </div>
        <div className="bg-purple-400 border-l-4 border-purple-500 shadow-xl rounded-r-lg pr-6 shadow-purple-500/50">
          <div className="flex flex-row justify-center items-center gap-x-9">
            <button id="bus-110" onClick={busHandler}>
              {' '}
              <img className="w-16 h-16" src="/images/busIcon2.png" alt="" />
            </button>
            <p>Bus No: 110</p>
            <p>Start time: 10.00 am</p>
            <p>Total Seat: 65</p>
          </div>
        </div>
        <div className="bg-violet-400 border-l-4 border-violet-500 shadow-xl rounded-r-lg pr-6 shadow-violet-500/50">
          <div className="flex flex-row justify-center items-center gap-x-9">
            <button id="bus-111" onClick={busHandler}>
              {' '}
              <img className="w-16 h-16" src="/images/busIcon2.png" alt="" />
            </button>
            <p>Bus No: 111</p>
            <p>Start time: 11.00 am</p>
            <p>Total Seat: 65</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-6 w-72">
        <h4>Seat Plan</h4>
        <p>Bus No : {busId.split('-')[1]}</p>
        <div
          id="107"
          ref={busSelected}
          className="flex flex-col gap-y-2 hidden"
        >
          <div className="flex flex-row gap-x-8 justify-evenly">
            <div className="flex flex-row gap-x-2"></div>
            <div className="flex flex-row gap-x-2 text-5xl">
              <GiSteeringWheel />
            </div>
          </div>
          <div className="flex flex-row gap-x-8 justify-evenly">
            <div className="flex flex-row gap-x-2">
              <button>
                {' '}
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  A-1
                </p>
              </button>
              <button>
                {' '}
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  A-1
                </p>
              </button>
            </div>
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  A-1
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  A-1
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-x-8 justify-evenly">
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  B-1
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  B-2
                </p>
              </button>
            </div>
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  B-3
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  B-4
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-x-8 justify-evenly">
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  C-1
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  C-2
                </p>
              </button>
            </div>
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  C-3
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  C-4
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-x-8 justify-evenly">
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  D-1
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  D-2
                </p>
              </button>
            </div>
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  D-3
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  D-4
                </p>
              </button>
            </div>
          </div>
        </div>
        <div
          id="108"
          ref={busSelected1}
          className="flex flex-col gap-y-2 hidden"
        >
          <div className="flex flex-row gap-x-8 justify-evenly">
            <div className="flex flex-row gap-x-2"></div>
            <div className="flex flex-row gap-x-2 text-5xl">
              <GiSteeringWheel />
            </div>
          </div>
          <div className="flex flex-row gap-x-8 justify-evenly">
            <div className="flex flex-row gap-x-2">
              <button>
                {' '}
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  A-2
                </p>
              </button>
              <button>
                {' '}
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  A-2
                </p>
              </button>
            </div>
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  A-2
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  A-2
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-x-8 justify-evenly">
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  B-1
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  B-2
                </p>
              </button>
            </div>
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  B-3
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  B-4
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-x-8 justify-evenly">
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  C-1
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  C-2
                </p>
              </button>
            </div>
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  C-3
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  C-4
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-x-8 justify-evenly">
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  D-1
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  D-2
                </p>
              </button>
            </div>
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  D-3
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  D-4
                </p>
              </button>
            </div>
          </div>
        </div>
        <div id="109" className="flex flex-col gap-y-2 hidden">
          <div className="flex flex-row gap-x-8 justify-evenly">
            <div className="flex flex-row gap-x-2">
              <button>
                {' '}
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  A-1
                </p>
              </button>
              <button>
                {' '}
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  A-2
                </p>
              </button>
            </div>
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  A-3
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  A-4
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-x-8 justify-evenly">
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  B-1
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  B-2
                </p>
              </button>
            </div>
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  B-3
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  B-4
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-x-8 justify-evenly">
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  C-1
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  C-2
                </p>
              </button>
            </div>
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  C-3
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  C-4
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-x-8 justify-evenly">
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  D-1
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  D-2
                </p>
              </button>
            </div>
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  D-3
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  D-4
                </p>
              </button>
            </div>
          </div>
        </div>
        <div id="110" className="flex flex-col gap-y-2 hidden">
          <div className="flex flex-row gap-x-8 justify-evenly">
            <div className="flex flex-row gap-x-2">
              <button>
                {' '}
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  A-1
                </p>
              </button>
              <button>
                {' '}
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  A-2
                </p>
              </button>
            </div>
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  A-3
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  A-4
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-x-8 justify-evenly">
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  B-1
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  B-2
                </p>
              </button>
            </div>
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  B-3
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  B-4
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-x-8 justify-evenly">
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  C-1
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  C-2
                </p>
              </button>
            </div>
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  C-3
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  C-4
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-x-8 justify-evenly">
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  D-1
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  D-2
                </p>
              </button>
            </div>
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  D-3
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  D-4
                </p>
              </button>
            </div>
          </div>
        </div>
        <div id="111" className="flex flex-col gap-y-2 hidden">
          <div className="flex flex-row gap-x-8 justify-evenly">
            <div className="flex flex-row gap-x-2 ">
              <button>
                {' '}
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  A-1
                </p>
              </button>
              <button>
                {' '}
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  A-2
                </p>
              </button>
            </div>
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  A-3
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  A-4
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-x-8 justify-evenly">
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  B-1
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  B-2
                </p>
              </button>
            </div>
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  B-3
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  B-4
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-x-8 justify-evenly">
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  C-1
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  C-2
                </p>
              </button>
            </div>
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  C-3
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  C-4
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-x-8 justify-evenly">
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  D-1
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  D-2
                </p>
              </button>
            </div>
            <div className="flex flex-row gap-x-2">
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  D-3
                </p>
              </button>
              <button>
                <p className="border border-md border-rose-800 w-10 h-10 rounded-md flex justify-center items-center">
                  D-4
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusSeatBook
