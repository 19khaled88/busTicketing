import React from 'react'

export const BusList = () => {
  return (
    <div className="absolute... mb-10 flex flex-col gap-x-3 justify-evenly mx-auto">
      <div className="flex flex-row justify-evenly py-5">
        <div className="flex items-center">
          <hr className="h-1 w-96 bg-red-400" />
        </div>
        <div>
          <img className="w-16 h-16" src="/images/busIcon4.png" alt="" />
        </div>
        <div className="flex items-center">
          <hr className="h-1 w-96 bg-red-400" />
        </div>
      </div>
      <div className="flex justify-center">
        <h4 className="text-3xl mb-9">Bus Schedule</h4>
      </div>
      <div className="flex flex-row justify-evenly">
        <div className="drop-shadow-2xl bg-white py-10 px-8 w-fit border border-sm text-center rounded-md">
          <img src="/images/bus1.jpg" alt="" />
          <h3>Morning schedule</h3>
          <p>
            <span>Type:</span> Normal coach
          </p>
          <p>
            <span>Bus No:</span> 120
          </p>
          <p>
            <span>From:</span>Chittagong
          </p>
          <p>
            <span>End:</span> Rangamati
          </p>
          <p>
            <span>Fare:</span>tk. 150
          </p>
        </div>
        <div className="drop-shadow-2xl bg-white py-10 px-8 w-fit border border-sm text-center rounded-md">
          <img src="/images/bus1.jpg" alt="" />
          <h3>Morning schedule</h3>
          <p>
            <span>Type:</span> Normal coach
          </p>
          <p>
            <span>Bus No:</span> 120
          </p>
          <p>
            <span>From:</span>Chittagong
          </p>
          <p>
            <span>End:</span> Rangamati
          </p>
          <p>
            <span>Fare:</span>tk. 150
          </p>
        </div>
        <div className="drop-shadow-2xl bg-white py-10 px-8 w-fit border border-sm text-center rounded-md">
          <img src="/images/bus1.jpg" alt="" />
          <h3>Morning schedule</h3>
          <p>
            <span>Type:</span> Normal coach
          </p>
          <p>
            <span>Bus No:</span> 120
          </p>
          <p>
            <span>From:</span>Chittagong
          </p>
          <p>
            <span>End:</span> Rangamati
          </p>
          <p>
            <span>Fare:</span>tk. 150
          </p>
        </div>
      </div>
    </div>
  )
}
