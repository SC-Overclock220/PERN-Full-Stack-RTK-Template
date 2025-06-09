import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Profile from './Pages/Profile'
import { ToastContainer } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setUser } from './Slices/AuthSlice'

const App = () => {

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => { dispatch(setUser(user)) }, [])
  return (
    <>



      <ToastContainer />
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