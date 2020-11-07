import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { logoutThunk } from '../../redux/auth-reducer'

const HeaderContainer = (props) => {

    return (
        <Header isAuth={props.isAuth} logoutThunk={props.logoutThunk}/>
    )
}

const mapStateToProps = (state) => ({
    id: state.auth.id,
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, { logoutThunk })(HeaderContainer)