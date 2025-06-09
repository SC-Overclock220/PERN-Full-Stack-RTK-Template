import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Profile from './Pages/Profile'

const App = () => {
  return (
    <>



      <Navbar />
      <Routes>


        <Route element={<Home />} path='/' index />
        <Route element={<Login />} path='/login' />
        <Route element={<SignUp />} path='/signup' />
        <Route element={<Profile />} path='/profile' />



      </Routes>


    </>
  )
}

export default App