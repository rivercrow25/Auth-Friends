import React, { useState } from 'react'
import axios from 'axios'

const Login = (props) => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        axios.post('http://localhost:5000/api/login', user)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                props.history.push('/friends')
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>User Name</label>
            <input id='username' type='text' name='username' onChange={handleChange} />
            <label htmlFor='password'>Password</label>
            <input name='password' type='password' id='password' onChange={handleChange} />
            <button type='submit'>Login</button>
        </form>
    )
}

export default Login