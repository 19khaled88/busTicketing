import { Route, Routes } from 'react-router-dom'
import './App.css'

import RequiredAuth from './components/Auth/RequiredAuth'
import DemoPage from './components/DemoPage/DemoPage'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Register from './components/Register/Register'
import './index.css'

function App() {
  return (
    <div className="relative bg-slate-50">
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/demo" element={<DemoPage />} />
      </Routes>
    </div>
  )
}

export default App
