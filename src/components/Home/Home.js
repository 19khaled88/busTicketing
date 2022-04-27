import React from 'react'
import Banner from '../Banner/Banner'
import BusSeatBook from '../BusSeatBook/BusSeatBook'
import Footer from '../Footer/Footer'
import TicketingSteps from '../TicketingSteps/TicketingSteps'
const Home = () => {
  return (
    <>
      <Banner></Banner>
      <TicketingSteps></TicketingSteps>
      <BusSeatBook></BusSeatBook>
      <Footer></Footer>
    </>
  )
}

export default Home