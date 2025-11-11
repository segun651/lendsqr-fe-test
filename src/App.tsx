import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login/Login'
import TopNav from './Components/TopNav/TopNav'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/users' element={<TopNav />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
