import React, { useEffect, useState } from 'react'
import FormLogin from './login/FormLogin'

import UserLogged from './login/UserLogged'


const Login = ({}) => {

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
        <FormLogin  />
      }
    </main>
  )
}

export default Login