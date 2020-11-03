import React from 'react'
import s from './Profile.module.css'
import ProfilePosts from './ProfilePosts/ProfilePosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (
        <div className={s.main}>
            <ProfileInfo {...props}/>
            <ProfilePosts setPost={props.setPost} posts={props.posts}/>
        </div>
    )

}

export default Profile