import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Home from './components/routes/Home'
import Login from './components/routes/Login'
import Purchases from './components/routes/Purchases'
import ProductDetail from './components/routes/ProductDetail'
import Header from './components/routes/shared/styles/Header'
import { useEffect } from 'react'

import axios from 'axios'
import Cart from './components/routes/shared/styles/Cart'
import ProtectedRoutes from './components/routes/routes1/ProtectedRoutes'
import FormUser from './components/routes/users/FormUser'



function App() {
  
  // COMENTAMOS PORQUE SOLO SE NECESITA PARA CREAR UN USARIO NUEVO
  // useEffect(() => {
  //   const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
  //   const obj = {
  //       firstName: 'Ronaldinho',
  //       lastName: 'De Souza',
  //       email: 'datatest@gmail.com', 
  //       password: 'data123',
  //       phone:'1284367891',
  //       
  //     }
    
  //   axios.post(URL, obj)
  //     .then(res => console.log(res.data)) 
  //     .catch(err => console.log(err))

  // }, [])


  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route  path='/' element={<Home  />}/>
        <Route  path='/login' element={<Login />}/>
        <Route  path='/product/:id' element={<ProductDetail />}/>
        <Route element={<ProtectedRoutes />}>
            <Route  path='/purchases' element={<Purchases />}/>
            <Route  path='/cart' element={<Cart />}/>
        </Route>
        <Route  path='/formuser'element={<FormUser />} />
      </Routes>
    </div>
  )
}

export default App

// https://documenter.getpostman.com/view/5028918/UVypxw3W#8d80d26a-7c0a-4283-a272-253ae4144624.   
// https://dashing-puppy-89779d.netlify.app/
