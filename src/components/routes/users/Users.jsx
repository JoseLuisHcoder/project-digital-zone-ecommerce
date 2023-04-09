import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../../utils/getConfig'

const users = () => {
    const [users, setUsers] = useState()

    useEffect(() => {
        const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
        axios.get(URL, getConfig)
            .then(setUsers(res.data))
            .catch(err => console.log(err))
    }, [])
console.log(users);
  return (
    <div>users</div>
  )
}

export default users