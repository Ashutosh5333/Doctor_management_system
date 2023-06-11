import React from 'react'
import {Routes ,Route} from "react-router-dom"
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Admin from '../Admin/Admin'
import AdminLogin from '../Admin/AdminLogin'


const MainRoutes = () => {


  return (
    <Routes>

     <Route  path='/' element={<Home/>} />
     <Route  path='/login' element={<Login/>} />
     <Route  path='/sign' element={<Signup/>} />
     <Route  path='/admin' element={<Admin/>} />
     <Route  path='/adminlogin' element={<AdminLogin/>} />

    </Routes>
  )
}

export default MainRoutes