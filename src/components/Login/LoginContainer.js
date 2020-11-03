import React from 'react'
import Login from './Login'
import { connect } from 'react-redux'
import { logoutThunk, loginThunk } from '../../redux/auth-reducer'

const LoginContainer = (props) => {
    return (
        <Login {...props}/>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { logoutThunk, loginThunk})(LoginContainer)