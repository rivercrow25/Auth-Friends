import React, { useState, useEffect } from 'react'
import Friends from './Friends'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import FriendForm from './FriendForm'

const FriendsList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth().get('/api/friends')
            .then(res => {
                setFriends(res.data)

            })
            .catch(err => {
                console.log(err)
            })
    }, [friends])

    const remove = (id) => {
        axiosWithAuth().delete(`/api/friends/${id}`)
    }

    return (
        <>
            <FriendForm />
            <div className='container'>
                {friends.map(friend => {
                    return <Friends remove={remove} key={friend.id} friend={friend} />
                })}
            </div>
        </>
    )
}

export default FriendsList