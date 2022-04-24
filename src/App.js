import logo from './logo.svg'
import './App.css'
import { Nav } from './components/Nav/Nav'
import { Home } from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import SearchBus from './components/SearchBus/SearchBus'
import TicketingSteps from './components/TicketingSteps/TicketingSteps'
import { BusList } from './components/BusList/BusList'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="relative bg-slate-50">
      {/* <Nav></Nav> */}
      <Navbar></Navbar>
      <Banner></Banner>
      {/* <SearchBus></SearchBus> */}
      <Home></Home>
      <TicketingSteps></TicketingSteps>
      <BusList></BusList>
      <Footer></Footer>
    </div>
  )
}

export default App