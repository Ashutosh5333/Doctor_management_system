import React from 'react'
import {Routes ,Route} from "react-router-dom"
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Admin from '../Admin/Admin'
import AdminLogin from '../Admin/AdminLogin'
import UserDashboard from '../Component/UserDashboard'
import SingleDoctor from '../Component/SingleDoctor'


const MainRoutes = () => {


  return (
    <Routes>

     <Route  path='/' element={<Home/>} />
     <Route  path='/login' element={<Login/>} />
     <Route  path='/sign' element={<Signup/>} />
     <Route  path='/doctordash' element={<UserDashboard/>} />
     <Route  path='/doctordash/:id' element={<SingleDoctor/>} />
     <Route  path='/admin' element={<Admin/>} />
     <Route  path='/adminlogin' element={<AdminLogin/>} />

    </Routes>
  )
}

export default MainRoutes