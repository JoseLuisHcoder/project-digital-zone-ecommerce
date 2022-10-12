import axios from 'axios'
import React, { useEffect, useState } from 'react'

const users = () => {
    const [users, setUsers] = useState()

    useEffect(() => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
        axios.get(URL)
            .then(setUsers(res.data))
            .catch(err => console.log(err))
    }, [])
console.log(users);
  return (
    <div>users</div>
  )
}

export default users