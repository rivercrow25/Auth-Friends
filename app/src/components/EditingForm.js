import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const EditingForm = ({ toggleEditing, friends }) => {
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
        axiosWithAuth().put(`/api/friends/${friends.id}`, friend)
        toggleEditing()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input id='name' type='text' name='name' onChange={handleChange} />

            <label htmlFor='age'>age</label>
            <input id='age' type='number' name='age' onChange={handleChange} />

            <label htmlFor='email'>email</label>
            <input name='email' type='text' id='email' onChange={handleChange} />

            <button id='button' type='submit'>Edit</button>
        </form>
    )
}

export default EditingForm