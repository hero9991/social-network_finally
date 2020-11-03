import React, { useEffect } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { setProfileThunk, getProfileStatusThunk, setProfileStatusThunk, setPost } from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom'
import preloader from '../../assets/img/preloader.gif'
import s from './Profile.module.css'
import { compose } from 'redux'
import withRedirect from '../hoc/withRedirect'

const ProfileContainer = (props) => {
    useEffect(() => {

        let currentUser = props.match.params.id
        if (!currentUser) currentUser = props.myId
        if (currentUser) {
            props.setProfileThunk(currentUser)
            props.getProfileStatusThunk(currentUser)
        }
    }, [props.myId, props.status])

    if (!props.isLoaded) return <img className={s.img} src={preloader} alt='' />
    return (
        <Profile {...props} currentUser={props.match.params.id} />
    )
}

const mapStateToProps = (state) => ({
    profileInfo: state.profilePage.profileInfo,
    isLoaded: state.profilePage.isLoaded,
    myId: state.auth.id,
    status: state.profilePage.status,
    posts: state.profilePage.posts
})



export default compose(
    connect(mapStateToProps, { setProfileThunk, getProfileStatusThunk, setProfileStatusThunk, setPost }),
    withRedirect,
    withRouter
)(ProfileContainer)