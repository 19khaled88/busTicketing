import './App.css'
import Banner from './components/Banner/Banner'
import BusSeatBook from './components/BusSeatBook/BusSeatBook'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import TicketingSteps from './components/TicketingSteps/TicketingSteps'
import './index.css'

function App() {
  return (
    <div className="relative bg-slate-50">
      {/* <Nav></Nav> */}
      <Navbar></Navbar>
      <Banner></Banner>
      {/* <SearchBus></SearchBus> */}
      {/* <Home></Home> */}
      <TicketingSteps></TicketingSteps>
      {/* <BusList></BusList> */}
      <BusSeatBook></BusSeatBook>
      <Footer></Footer>
      {/* <Position></Position> */}
    </div>
  )
}

export default App
