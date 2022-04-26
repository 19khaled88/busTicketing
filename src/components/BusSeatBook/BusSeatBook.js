import React from 'react'

const BusSeatBook = () => {
  const busHandler = (e) => {
    // console.log(e.currentTarget.id)
    alert(e.currentTarget.id)
  }
  return (
    <div className="absolute... flex flex-row justify-between container mx-auto">
      <div className="flex flex-col gap-y-9">
        <h4>Bus List</h4>
        <div>
          <div className="flex flex-row justify-center items-center gap-x-9">
            <button id="bus-1" onClick={busHandler}>
              <img className="w-16 h-16" src="/images/busIcon2.png" alt="" />
            </button>
            <p>Bus No: 107</p>
            <p>Start time: 7.00 am</p>
            <p>Total Seat: 65</p>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-center items-center gap-x-9">
            <button id="bus-2" onClick={busHandler}>
              {' '}
              <img className="w-16 h-16" src="/images/busIcon2.png" alt="" />
            </button>
            <p>Bus No: 108</p>
            <p>Start time: 8.00 am</p>
            <p>Total Seat: 65</p>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-center items-center gap-x-9">
            <button id="bus-3" onClick={busHandler}>
              {' '}
              <img className="w-16 h-16" src="/images/busIcon2.png" alt="" />
            </button>
            <p>Bus No: 109</p>
            <p>Start time: 9.00 am</p>
            <p>Total Seat: 65</p>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-center items-center gap-x-9">
            <button id="bus-4" onClick={busHandler}>
              <img className="w-16 h-16" src="/images/busIcon2.png" alt="" />
            </button>
            <p>Bus No: 110</p>
            <p>Start time: 10.00 am</p>
            <p>Total Seat: 65</p>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-center items-center gap-x-9">
            <button id="bus-5" onClick={busHandler}>
              {' '}
              <img className="w-16 h-16" src="/images/busIcon2.png" alt="" />
            </button>
            <p>Bus No: 111</p>
            <p>Start time: 11.00 am</p>
            <p>Total Seat: 65</p>
          </div>
        </div>
      </div>
      <div>Seat Plan</div>
    </div>
  )
}

export default BusSeatBook
