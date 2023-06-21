import React from 'react'
import {Routes ,Route} from "react-router-dom"

import Home from '../pages/Home'

import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Admin from '../Admin/Admin'
import AdminLogin from '../Admin/AdminLogin'

import UserDashboard from '../Component/UserDashboard'

import SingleDoctor from '../Component/SingleDoctor'

import { Userprofile } from '../pages/Userprofile'

import SmallSearchbar from '../pages/SmallSearchbar'

import AppoinmnetList from '../Admin/AppoinmnetList'
import Adminprivate from '../AdminprivateRoute/Adminprivate'
import PrivateRoute from '../UserPrivateroute/PrivateRoute'



const MainRoutes = () => {


  return (
    <Routes>

     <Route  path='/' element={<Home/>} />
     <Route  path='/login' element={<Login/>} />
     <Route  path='/sign' element={<Signup/>} />
     
     <Route  path='/doctordash' element={
        // <PrivateRoute>
     <UserDashboard/>
      // </PrivateRoute>
     } />
     
     <Route  path='/doctordash/:id' element={

     <PrivateRoute>
     <SingleDoctor/>
     </PrivateRoute>
  
     } />

     <Route  path='/userprofile' element={

      <PrivateRoute>

     <Userprofile/>
      </PrivateRoute>
     
     
     } />
     
     <Route  path='/mobilesearchbar' element={<SmallSearchbar/>} />


     <Route  path='/admin' element={
      <Adminprivate>
     <Admin/>
      </Adminprivate>
     } />
     
     <Route  path='/adminlogin' element={<AdminLogin/>} />

     <Route  path='/admin/appoinmentlist' element={
      <Adminprivate>
     <AppoinmnetList/>
      </Adminprivate>
     } />

    </Routes>
  )
}

export default MainRoutes