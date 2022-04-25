import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const TicketingSteps = () => {
  return (
    <div className="absolute... inset-x-0 mb-10 flex flex-col gap-x-3 container justify-evenly mx-auto">
      <h4 className="text-center mb-9 text-3xl">
        How you follow steps to book your seat
      </h4>
      <div className="flex flex-row gap-x-3 container justify-evenly mx-auto">
        <div className="drop-shadow-2xl bg-white py-10 w-fit border border-sm text-center rounded-md">
          <img
            className="mx-auto w-16 h-16"
            src="/images/searchbus.png"
            alt=""
          />
          <h4 className="text-2xl py-3">Search</h4>
          <p>
            Decide your journey starting point and destination first before
            booking yours
          </p>
        </div>
        <div className="grid grid-cols-1 content-center">
          <FontAwesomeIcon className="text-2xl" icon={faArrowRight} />
        </div>
        <div className="drop-shadow-2xl bg-white py-10 w-fit border border-sm text-center rounded-md">
          <img
            className="mx-auto w-16 h-16"
            src="/images/busSelect.png"
            alt=""
          />
          <h4 className="text-2xl py-3">Select Bus</h4>
          <p>
            Decide your journey starting point and destination first before
            booking yours
          </p>
        </div>
        <div className="grid grid-cols-1 content-center">
          <FontAwesomeIcon className="text-2xl" icon={faArrowRight} />
        </div>
        <div className="drop-shadow-2xl bg-white  py-10 w-fit border border-sm text-center rounded-md">
          <img
            className="mx-auto w-16 h-16"
            src="/images/seatbooked.png"
            alt=""
          />
          <h4 className="text-2xl py-3">Book Seat</h4>
          <p>
            Decide your journey starting point and destination first before
            booking yours
          </p>
        </div>
        <div className="grid grid-cols-1 content-center">
          <FontAwesomeIcon className="text-2xl" icon={faArrowRight} />
        </div>
        <div className="drop-shadow-2xl bg-white py-10 w-fit border border-sm text-center rounded-md">
          <img className="mx-auto w-16 h-16" src="/images/payment.jpg" alt="" />
          <h4 className="text-2xl py-3">Make Payment</h4>
          <p>
            Decide your journey starting point and destination first before
            booking yours
          </p>
        </div>
      </div>
    </div>
  )
}

export default TicketingSteps
