import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className="mx-auto flex flex-row gap-x-52 justify-center py-10 background">
      <div className="text-white">
        <h4 className="mb-5 text-2xl">Available Link</h4>
        <p>
          <img
            className="w-5 h-5 inline mr-3"
            src="/images/facebook.png"
            alt=""
          />
          Facebook
        </p>
        <p>
          {' '}
          <img
            className="w-5 h-5 inline mr-3"
            src="/images/twitter.png"
            alt=""
          />
          Twitter
        </p>
        <p>
          <img
            className="w-5 h-5 inline mr-3"
            src="/images/instagram.png"
            alt=""
          />
          Instagram
        </p>
      </div>
      <div className="text-white">
        <h4 className="mb-5 text-2xl">Contact Us </h4>
        <p>Rangati Transport Line</p>
        <p>ABC Station</p>
        <p>
          <span className="mr-2">Phone :</span> 01700000000
        </p>
        <p>
          <span className="mr-2">Email : </span> abc@gmail.com
        </p>
      </div>
      <div className="text-white">
        <h4 className="mb-5 text-2xl">Payment</h4>
        <p className="mb-1">
          <img
            className="rounded-md w-7 h-7 inline mr-3"
            src="/images/cash.png"
            alt=""
          />{' '}
          Cash
        </p>
        <p className="mb-1">
          <img
            className="rounded-md w-7 h-7 inline mr-3"
            src="/images/BKash-svg.png"
            alt=""
          />
          Bkash
        </p>
        <p>
          <img
            className="rounded-md w-7 h-7 inline mr-3"
            src="/images/Nagad.png"
            alt=""
          />
          Nagad
        </p>
      </div>
    </div>
  )
}

export default Footer
