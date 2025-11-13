import { useState, createContext } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login/Login'
import Users from './pages/Users/Users'
import UserSharedLayout from './Components/UserSharedLayout/UserSharedLayout'

interface OpenSidebarContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

 export  const openSidebarContext = createContext<OpenSidebarContextType | undefined>(undefined)
 
function App() {
    const[isOpen,setIsOpen]= useState<boolean>(false)
  return (
    <>
    <openSidebarContext.Provider value={{isOpen,setIsOpen}}>

   
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
  <Route element={<UserSharedLayout />}>
        <Route path='/users' element={<Users />} />
        </Route>
      </Routes>
    </Router>
     </openSidebarContext.Provider>
    </>
  )
}

export default App
