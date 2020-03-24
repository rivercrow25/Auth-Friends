import React, { useState } from 'react'
import EditingForm from './EditingForm'

const Friends = ({ friend, remove }) => {
    const [editing, setEditing] = useState(false)

    const toggleEditing = () => {
        setEditing(!editing)
    }

    return (
        <div className='friend'>
            <h2>Name: {friend.name}</h2>
            <h2>Age: {friend.age}</h2>
            <h2>Email: {friend.email}</h2>
            {editing ? (
                <EditingForm toggleEditing={toggleEditing} friends={friend} />
            ) : (
                    <button type='button' onClick={() => toggleEditing()}>edit</button>
                )}
            <button type='button' onClick={() => remove(friend.id)}>Remove Friend</button>
        </div>
    )
}

export default Friends