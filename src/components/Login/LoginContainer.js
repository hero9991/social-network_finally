import React from 'react'
import Login from './Login'
import { connect } from 'react-redux'
import { logoutThunk, loginThunk } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'

const LoginContainer = (props) => {
    if (props.isAuth) return <Redirect to='/Profile'/>
    return (
        <Login {...props}/>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { logoutThunk, loginThunk})(LoginContainer)