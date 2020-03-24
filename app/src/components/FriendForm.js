import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'


const FriendForm = () => {
    const [friend, setFriend] = useState({
        name: '',
        age: null,
        email: ''
    })

    const handleChange = event => {
        setFriend({ ...friend, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        axiosWithAuth().post('/api/friends', friend)
    }
    return (
        <form className='friendForm' onSubmit={handleSubmit}>
            <div className='input'>
                <label htmlFor='name'>Name</label>
                <input id='name' type='text' name='name' onChange={handleChange} />
            </div>
            <div className='input'>
                <label htmlFor='age'>age</label>
                <input id='age' type='number' name='age' onChange={handleChange} />
            </div>
            <div className='input'>
                <label htmlFor='email'>email</label>
                <input name='email' type='text' id='email' onChange={handleChange} />
                <button id='button' type='submit'>Add Friend</button>
            </div>
        </form>
    )
}

export default FriendForm