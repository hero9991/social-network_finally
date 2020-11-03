import React, { useEffect } from 'react'
import Users from './Users'
import { changePage, setUsersThunk, followThunk, unfollowThunk } from '../../redux/users-reducer'
import { connect } from 'react-redux'
import preloader from '../../assets/img/preloader.gif'
import s from'./Users.module.css'
import { compose } from 'redux'
import withRedirect from '../hoc/withRedirect'

const UsersContainer = (props) => {
    useEffect(() => {
        props.setUsersThunk(props.trueUsersCount, props.activePage)
    }, [props.activePage])

    if (props.isLoaded === false) return <img className={s.img} src={preloader} alt=''/>
    return (
        <Users {...props}/>
    )
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    trueUsersCount: state.usersPage.trueUsersCount,
    activePage: state.usersPage.activePage,
    usersCount: state.usersPage.usersCount,
    isLoaded: state.usersPage.isLoaded,
    isDisabled: state.usersPage.isDisabled
})


export default compose(
    connect(mapStateToProps, { changePage, followThunk, unfollowThunk, setUsersThunk}),
    withRedirect
)(UsersContainer)