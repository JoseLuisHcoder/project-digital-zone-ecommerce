import React from 'react'
import './style/userLogged.css'
import axios from 'axios'
import getConfig from '../../../utils/getConfig'
const userLogOut = () => {
  localStorage.removeItem('token')
}
const UserLogged = () => {
  return (
    <article className='logged'>
        <i className=' logged_i bx bxs-user-circle'></i>
        <h2 className='logged_p'>User Logged</h2>
        <button onClick={userLogOut} >Log out</button>
    </article>
  )
}

export default UserLogged