import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='*' element={<div>Error 404 Page Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
