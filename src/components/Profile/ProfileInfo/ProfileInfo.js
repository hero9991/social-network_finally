import React from 'react'
import ProfileStatus from '../ProfileStatus/ProfileStatus'
import s from '../Profile.module.css'
import avatar from '../../../assets/img/avatar.png'

const ProfileInfo = (props) => {
    if (props.profileInfo) {
    return (
        <div className={s.profile_info}>
            {props.profileInfo.photos.large ? <img className={s.ava} src={props.profileInfo.photos.large} alt=''/> : <img className={s.ava} src={avatar} alt=''/>}
                <div>
                    <div>
                        {props.profileInfo.fullName}
                    </div>
                    <div>
                        {props.profileInfo.aboutMe}
                    </div>
                    <ProfileStatus status={props.status} currentUser={props.currentUser} setProfileStatusThunk={props.setProfileStatusThunk} />
                </div>
        </div>
    )}
    return null
}

export default ProfileInfo