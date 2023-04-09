import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './style/formUser.css'
import axios from 'axios'

const FormUser = ({}) => {
   const {register, handleSubmit, reset} = useForm()

   const submit = data => {
    
    const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
    axios.post(URL, data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

    reset(defaultValue)
   }

   const defaultValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone:""  
   }

   const navigate = useNavigate()

   const handleLogin = () => {
    navigate('/login')
   }

  return (
    <form style={{marginTop:'100px'}} className='form' >
        <div className='form__title'>
            <h1>Create new User</h1>
            <span onClick={handleLogin}>
                 <i  className='bx bxs-x-circle'></i>
            </span>
        </div>
        <div className='form__input'>
            <label htmlFor="firstName">FirstName</label>
            <input {...register('firstName')} type="text" id="firstName"/>
        </div>
        <div className='form__input'>
            <label htmlFor="lastName">LastName</label>
            <input {...register('lastName')} type="text" id="lastName"/>
        </div>
        <div className='form__input'>
            <label htmlFor="email">Email</label>
            <input {...register('email')} type="email" id="email"/>
        </div>
        <div className='form__input'>
            <label htmlFor="password">Password</label>
            <input {...register('password')} type="password" id="password"/>
        </div>
        <div className='form__input'>
            <label htmlFor="phone">Phone(10 numbers)</label>
            <input {...register('phone')} type="number" id="phone"/>
        </div>
       
        <button onClick={handleSubmit(submit)} className='form__btn'>Sing up</button>
        <div className='form__navi__login'>
            <span>Already have an account?</span>
            <div onClick={handleLogin} className='form__btn__login'>Log in</div>
        </div>
    </form>
  )
}

export default FormUser