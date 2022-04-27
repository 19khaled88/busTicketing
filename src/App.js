import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About/About'
import RequiredAuth from './components/Auth/RequiredAuth'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Register from './components/Register/Register'
import './index.css'

function App() {
  return (
    <div className="relative bg-slate-50">
    <Navbar></Navbar>
      <Routes>
         <Route path="/" element={
           <RequiredAuth>
            <Home/>
           </RequiredAuth>
          } />
         <Route path="/about" element={<About />}/>
         <Route path="/register" element={<Register />} />
         <Route path="/contact" element={< Contact/>} />
      </Routes>
    </div>
  )
}

export default App
