import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './style/formLogin.css'
const FormLogin = () => {

    const {register, handleSubmit, reset} = useForm()
    const [isErrorLogin, setIsErrorLogin] = useState(false)
    const navigate = useNavigate()
    
    const submit = data => {
        console.log(data);
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(URL, data)
        
            .then(res => {
                    console.log(res.data)
                localStorage.setItem('token', res.data.data.token)
                navigate('/')
                })
            .catch(err => {
                localStorage.setItem('token', '')
                setIsErrorLogin(true)
                setTimeout(() => {
                    setIsErrorLogin(false)
                }, 5000)
            })
        // comentamos esto para q no se resete nuestro usuario y contraseña cada ve, lo ponemos cuando se necesite
        reset({
            email:'',
            password:''
        })
    }
    
  return (
    <div className='login'>

        <form className='login__form' onSubmit={handleSubmit(submit)}>
            <ul className='login__test'>
                <li className='login__test__b'><b>Email:  </b>datatest@gmail.com</li>
                <li className='login__test__b'><b>Password:  </b>data123</li>
            </ul>
            <h3 className='login__title'>Enter your email and password</h3>
            <ul className='login__list'>
                <li className='login__item'>
                    <label className='login__label'  htmlFor="email">Email</label>
                    <input className='login__input' {...register('email')} type="email" id="email" />
                </li>
                <li className='login__item'>
                <label  className='login__label' htmlFor="password">Password</label>
                    <input className='login__input' {...register('password')} type="password" id="password" />
                </li>
                <div>
                    {
                        isErrorLogin && 'Invalid credentials, Try again...'
                    }
                </div>
            </ul>
            <button>Login</button>
        </form>

    </div>
  )
}

export default FormLogin