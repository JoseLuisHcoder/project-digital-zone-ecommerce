import React, { useEffect, useState } from 'react'
import FormLogin from './login/FormLogin'

import UserLogged from './login/UserLogged'


const Login = ({setFormIsClose}) => {

  const [token, setToken] = useState('')
  const changedToken = localStorage.getItem('token')
 
  useEffect(() => {
    setToken(changedToken)
  }, [changedToken])

  return (
    <main className='login'>
      {
        token ?
        <UserLogged />
        :
        <FormLogin setFormIsClose={setFormIsClose} />
      }
    </main>
  )
}

export default Login