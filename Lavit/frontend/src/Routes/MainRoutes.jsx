import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import Home from '../components/Home'

const MainRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>

        <Route path="/" element={ <Home/>}/>
        <Route path="/login" element={ <Login/>}/>

        </Routes>
    </div>
  )
}

export default MainRoutes
