import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './style/formUser.css'

const FormUser = ({createNewUser}) => {
   const {register, handleSubmit, reset} = useForm()

   const submit = data => {
    console.log(data);
    createNewUser(data)
    reset(defaultValue)
   }

   const defaultValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    role: ""
   }

   const navigate = useNavigate()

   const handleLogin = () => {
    navigate('/login')
   }

  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
        <div className='form__title'>
            <h1>Create new User</h1>
            <i  className='bx bxs-x-circle'></i>
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
            <label htmlFor="phone">Phone(10 characters)</label>
            <input {...register('phone')} type="number" id="phone"/>
        </div>
        <div className='form__input'>
            <label htmlFor="role">role</label>
            <input {...register('role')} type="text" id="role"/>
        </div>
        <button className='form__btn'>Sing up</button>
        <div>
            <span>Already have an account?</span>
            <div onClick={handleLogin} className='form__btn__login'>Log in</div>
        </div>
    </form>
  )
}

export default FormUser