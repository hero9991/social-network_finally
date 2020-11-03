import React, { useState, useEffect } from 'react'

const ProfileStatus = (props) => {
    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(true)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const inputHandler = (e) => {
        setStatus(e.target.value)
    }
    const activateEditMode = () => {
        if (!props.currentUser) setEditMode(false)
    }
    const deactivateEditMode = (e) => {
        setEditMode(true)
        props.setProfileStatusThunk(e.target.value)
    }

    return (
        <div>
            {editMode ?
                <span onClick={activateEditMode}>status: {props.status}</span>
                : <input autoFocus={true} onBlur={deactivateEditMode} onChange={inputHandler} value={status} />}
        </div>
    )
}

export default ProfileStatus