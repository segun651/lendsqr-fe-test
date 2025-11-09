import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login/Login'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/users' element={<div>About Page</div>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
